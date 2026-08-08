// Generates static, crawlable pages per topic from the SAME `S` array that drives
// index.html — single source of truth. Multilingual: English at the root, other
// languages under /<lang>/ from overlay files in i18n/. A localized page exists
// only when that topic is translated (no English content served under /it/).
//   node build-pages.mjs
import fs from 'node:fs';
import path from 'node:path';
import itLang from './i18n/it.mjs';
import frLang from './i18n/fr.mjs';

const ORIGIN = 'https://labinatab.com';
const TODAY = new Date().toISOString().slice(0, 10);
const PUBLISHED = '2026-03-23';
const src = fs.readFileSync('index.html', 'utf8');

function extract(startMarker, endMarker) {
  const a = src.indexOf(startMarker);
  const b = src.indexOf(endMarker, a);
  if (a < 0 || b < 0) throw new Error(`cannot locate ${startMarker}`);
  return src.slice(a, b + endMarker.length);
}
const S = new Function(`${extract('const S=[', ']; // end SUBJECTS')}\nreturn S;`)();
const REF = new Function(`${extract('const REF={', '};')}\nreturn REF;`)();
const SLUG = new Function(`${extract('const SLUG={', '};')}\nreturn SLUG;`)();
const SIM_LABELS = new Function(`${extract('const SIM_LABELS={', '\n};')}\nreturn SIM_LABELS;`)();
const SIM_GUIDE  = new Function(`${extract('const SIM_GUIDE={', '}; // end SIM_GUIDE')}\nreturn SIM_GUIDE;`)();
const UI = new Function(`${extract('const UI={', '}; // end UI')}\nreturn UI;`)();

// Fill {placeholders} in a UI template string; used where the SPA uses fmtUI.
const fmt = (s, m) => String(s).replace(/\{(\w+)\}/g, (_, k) => (m && m[k] != null ? m[k] : ''));
// JSON for inlining inside <script>; guard against a </script> break (none today).
const jsonInline = (x) => { const j = JSON.stringify(x); if (/<\/script/i.test(j)) throw new Error('clone: content contains </script>'); return j; };

const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = h => String(h).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const fillLabels = (txt, lab) =>
  String(txt).replace(/\[\[(\w+)\]\]/g, (m, k) => (lab && lab[k]) ? `<b>${esc(lab[k])}</b>` : m);

// ── languages ──────────────────────────────────────────────────────────
// English is the base: empty overlays, so every topic resolves to `S` as-is.
const EN = {
  code: 'en', name: 'English', flag: '<svg class="flag" viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="30" fill="#012169"/><path d="M0,0 60,30 M60,0 0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 60,30 M60,0 0,30" stroke="#c8102e" stroke-width="4"/><rect x="25" width="10" height="30" fill="#fff"/><rect y="10" width="60" height="10" fill="#fff"/><rect x="27" width="6" height="30" fill="#c8102e"/><rect y="12" width="60" height="6" fill="#c8102e"/></svg>', htmlLang: 'en', locale: 'en_US', prefix: '',
  ui: UI,
  slugs: {}, t: {}, guide: {}, labels: {},
};
const LANGS = [EN, itLang, frLang];
const LEVEL_KEYS = ['junior', 'student', 'scholar'];

const slugForLang = (s, lang) => (lang.slugs && lang.slugs[s.id]) || SLUG[s.id];
const hasTopic = (lang, id) => lang.code === 'en' || !!(lang.t && lang.t[id]);
const subjectName = (s, lang) => (lang.ui.subjects && lang.ui.subjects[s.group]) || s.group.replace(/^\S+\s*/, '').trim();

// Merge base topic with a language overlay, English fallback per field.
function resolveTopic(s, lang) {
  if (lang.code === 'en') return s;
  const ov = lang.t[s.id];
  if (!ov) return null;
  const lvls = {};
  for (const k of LEVEL_KEYS) {
    const base = s.lvls[k];
    if (!base) continue;
    const o = (ov.lvls && ov.lvls[k]) || {};
    lvls[k] = {
      icon: base.icon, sim: base.sim,
      title: o.title || base.title,
      body: o.body || base.body,
      facts: o.facts || base.facts,
      formula: o.formula || base.formula,
    };
  }
  return { ...s, title: ov.title || s.title, teaser: ov.teaser || s.teaser, chips: ov.chips || s.chips, lvls };
}

// Precompute, for each topic id, the languages it exists in (for hreflang + switcher).
const altsByTopic = {};
for (const lang of LANGS) for (const s of S) {
  if (!hasTopic(lang, s.id)) continue;
  (altsByTopic[s.id] = altsByTopic[s.id] || []).push({
    code: lang.code, htmlLang: lang.htmlLang, flag: lang.flag, name: lang.name,
    url: `${ORIGIN}/${lang.prefix}${slugForLang(s, lang)}/`,
  });
}

// ── the shared sim engine (English canvas labels; ported once) ───────────
function decl(name) {
  let i = src.indexOf('function ' + name + '(');
  if (i < 0) { const m = src.search(new RegExp('const ' + name + '\\s*=')); i = m; }
  if (i < 0) throw new Error('cannot find declaration ' + name);
  let depth = 0, started = false, j = i;
  for (; j < src.length; j++) {
    const c = src[j];
    if (c === '{') { depth++; started = true; }
    else if (c === '}') { depth--; if (started && depth === 0) { j++; break; } }
  }
  if (src[j] === ';') j++;
  return src.slice(i, j);
}
function simCss() {
  const css = src.match(/<style>([\s\S]*?)<\/style>/)[1].replace(/\/\*[\s\S]*?\*\//g, '');
  const want = ['.sim-canvas-wrap', '.sim-controls', '.cbtn', '.rng-wrap', '.rng-top',
    '.rng-lbl', '.rng-v', 'input[type=range]', '.sim-pills', '.spill', '.sim-hint',
    '.sim-try', '.sg-lbl', '.sim-guide', '.sg-legend', '.sg-notice', '.sg-body'];
  const dark = css.match(/:root\[data-theme=dark\] input\[type=range\]\{[^}]*\}/);
  return css.split('}').map(r => r.trim()).filter(Boolean).map(r => r + '}')
    .filter(r => want.some(w => r.split('{')[0].split(',').some(s => s.trim().startsWith(w))))
    .join('\n') + (dark ? '\n' + dark[0] : '');
}
const ENGINE = [
  decl('SIM_LABELS'), decl('SIMS'),
  ...['simLabels', 'newEl', 'mkCanvas', 'mkCtrl', 'mkPills', 'pill', 'mkBtn', 'mkRange',
    'getSimWidth', 'stopSims', 'buildSim',
    'simOrbit', 'simProjectile', 'simNewton', 'simCircuit', 'simStates', 'simTrig', 'simSeasons', 'simBalance', 'simPunnett',
    'simWaves', 'simThermo', 'simParticles', 'simGalton', 'simFractal',
    'simCalculus', 'simGraphs', 'simLife', 'simDNA', 'simEvolution', 'simEcosystem',
    'simPhotosynthesis', 'simCell', 'simMitosis',
    'simSorting', 'simML', 'simCrypto', 'simComplexity', 'simClimate', 'simTectonics',
    'simOcean', 'simVolcano', 'simChem', 'simElectrochem', 'simKinetics', 'simOrganic', 'simAcids', 'simPeriodic',
    'simAstro', 'simBlackholes', 'simCosmology', 'simSolarSystem', 'simEclipse', 'simMeteors', 'simNeuro', 'simNeuron',
    'simMemory', 'simSleep', 'simOptics', 'simPendulum', 'simGas', 'simMoon', 'simProtein'].map(decl),
].join('\n\n');

// The embedded sim, localized. Guide text + tab labels come from the language;
// the canvas control labels remain the engine's (English) for now.
function simEmbedHTML(T, lang) {
  const ui = lang.ui;
  const guide = (lang.guide && lang.guide[T.id]) || SIM_GUIDE[T.id];
  if (!guide) return `<a class="cta" href="/#${T.id}">${ui.runSim}</a>`;
  const labelsFor = (lang.labels && lang.labels[T.id]) || SIM_LABELS[T.id] || {};
  const active = 'junior';
  const tabs = LEVEL_KEYS.map(l =>
    `<button type="button" data-l="${l}"${l === active ? ' class="on"' : ''}>${ui.levelBar[l]}</button>`).join('');
  const tries = LEVEL_KEYS.map(l => {
    const g = guide[l], lab = labelsFor[l] || {};
    return `<div class="sim-try" data-l="${l}"${l === active ? '' : ' hidden'} style="border-left-color:${T.color}"><span class="sg-lbl">${ui.tryThis}</span><span>${fillLabels(g.try, lab)}</span></div>`;
  }).join('\n');
  const guides = LEVEL_KEYS.map(l => {
    const g = guide[l], lab = labelsFor[l] || {};
    return `<div class="sim-guide" data-l="${l}"${l === active ? '' : ' hidden'}><div class="sg-legend"><span class="sg-lbl">${ui.whatSeeing}</span>${fillLabels(g.legend, lab)}</div><details class="sg-notice"><summary>${ui.whatNotice}</summary><div class="sg-body">${fillLabels(g.notice, lab)}</div></details></div>`;
  }).join('\n');
  return `<section class="sim-embed" data-sim="${T.id}" data-color="${T.color}" aria-label="Interactive simulation">
  <div class="sim-tabs" role="group" aria-label="Simulation difficulty level">${tabs}</div>
  ${tries}
  <div class="sim-host"></div>
  ${guides}
</section>`;
}

function clamp(text, max = 155) {
  const t = plain(text);
  if (t.length <= max) return t;
  return t.slice(0, t.lastIndexOf(' ', max - 1)).replace(/[,;:—-]$/, '') + '…';
}
const fixHeadings = h => h.replace(/<(\/?)h4\b/g, '<$1h3');

function formulaHTML(f, ui) {
  if (!f || !f.rows || !f.rows.length) return '';
  const rows = f.rows.map(r => {
    if (r.sep) return '<tr class="sep"><td colspan="3"></td></tr>';
    const eq = f.tex ? `\\(${esc(r.e)}\\)` : `<code>${esc(r.e)}</code>`;
    return `<tr><th scope="row">${esc(r.n)}</th><td>${eq}</td><td class="cmt">${r.c ? esc(r.c) : ''}</td></tr>`;
  }).join('\n');
  return `<div class="formulas"><h3>${ui.keyFormulas}</h3><table>${rows}</table></div>`;
}
function factsHTML(facts, ui) {
  if (!facts || !facts.length) return '';
  return `<div class="facts"><h3>${ui.worthKnowing}</h3><ul>${
    facts.map(f => `<li><span aria-hidden="true">${f.e}</span> ${esc(f.t)}</li>`).join('')
  }</ul></div>`;
}

const CSS = `
:root{--bg:#fdf8f0;--surface:#fff;--white:#fff;--code-bg:rgba(0,0,0,.07);--ink:#1a1207;--ink2:#4a3f2f;--ink3:#8a7a60;--border:rgba(0,0,0,.08);--logo-ink:#123c8a;--accent:#d0541a;color-scheme:light}
:root[data-theme=dark]{--bg:#14120e;--surface:#211d17;--white:#211d17;--code-bg:rgba(255,255,255,.10);--ink:#f5efe4;--ink2:#cdc3b2;--ink3:#9a8f7c;--border:rgba(255,255,255,.11);--logo-ink:#e9c46b;--accent:#ff8a5c;color-scheme:dark}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
@media (prefers-reduced-motion:reduce){*{animation-duration:.001ms!important;transition-duration:.001ms!important}}
body{font-family:'Nunito',system-ui,-apple-system,'Segoe UI',sans-serif;background:var(--bg);color:var(--ink);line-height:1.7}
a{color:inherit}
header{position:sticky;top:0;z-index:10;background:var(--bg);border-bottom:1px solid var(--border);padding:.7rem clamp(1rem,4vw,2rem);display:flex;align-items:center;justify-content:space-between;gap:1rem}
.brand{display:flex;align-items:center;gap:.55rem;font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:1.15rem;text-decoration:none;color:var(--ink)}
.brand i{width:32px;height:24px;background:var(--logo-ink);-webkit-mask:url(/logo_mark.png) center/contain no-repeat;mask:url(/logo_mark.png) center/contain no-repeat}
.hdr-actions{display:flex;align-items:center;gap:.5rem}
.tbtn{border:1.5px solid var(--border);background:var(--surface);color:var(--ink2);border-radius:50px;min-width:34px;height:34px;padding:0 .5rem;cursor:pointer;font-size:.95rem;line-height:1}
.langsel{position:relative}
.langbtn{width:auto;min-width:34px;padding:0 9px;font-size:.82rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center}
.flag{height:13px;width:auto;border-radius:2px;display:inline-block;vertical-align:middle;box-shadow:0 0 0 1px rgba(0,0,0,.12)}
.langmenu{position:absolute;right:0;top:calc(100% + 6px);background:var(--surface);border:1.5px solid var(--border);border-radius:12px;padding:.3rem;min-width:150px;box-shadow:0 10px 28px rgba(0,0,0,.20);z-index:30;display:flex;flex-direction:column;gap:2px}
.langmenu a{display:flex;align-items:center;gap:.5rem;padding:.5rem .6rem;border-radius:8px;text-decoration:none;font-weight:700;font-size:.9rem;color:var(--ink2)}
.langmenu a:hover{background:var(--bg);color:var(--ink)}
.langmenu a[aria-current=true]{color:var(--ink);background:var(--bg)}
main{max-width:760px;margin:0 auto;padding:0 clamp(1rem,4vw,2rem) 4rem}
.crumb{font-size:.8rem;color:var(--ink3);font-weight:700;padding:1.2rem 0 .4rem}
.crumb a{color:var(--ink3)}
h1{font-family:Georgia,'Times New Roman',serif;font-size:clamp(1.9rem,4.4vw,2.7rem);line-height:1.15;margin:.2rem 0 .6rem}
.lead{font-size:1.12rem;color:var(--ink2);font-weight:600;margin-bottom:1.3rem}
.cta{display:inline-block;background:var(--accent);color:#fff;text-decoration:none;font-weight:800;border-radius:50px;padding:.7rem 1.3rem;font-size:.92rem}
.chips{display:flex;gap:.4rem;flex-wrap:wrap;margin:1.1rem 0 0}
.chips span{background:var(--surface);border:1px solid var(--border);border-radius:50px;padding:2px 10px;font-size:.72rem;font-weight:800;color:var(--ink3)}
section.lvl{margin-top:2.6rem;border-top:1px solid var(--border);padding-top:1.6rem}
section.lvl>h2{font-family:Georgia,serif;font-size:1.55rem;line-height:1.25;margin-bottom:.15rem}
.lvl-note{font-size:.76rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--ink3);margin-bottom:1rem}
h3{font-family:Georgia,serif;font-size:1.1rem;margin:1.6rem 0 .5rem}
.hn{opacity:.45;margin-right:.4rem;font-size:.8em}
p{margin-bottom:.9rem;color:var(--ink2)}
strong,em{color:var(--ink)}
ul,ol{margin:.4rem 0 1rem 1.3rem;color:var(--ink2)}
li{margin-bottom:.35rem}
.mk{font-family:ui-monospace,'Courier New',monospace;background:rgba(125,125,125,.15);padding:1px 5px;border-radius:4px;font-size:.88em}
.facts,.formulas{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:1.1rem 1.2rem;margin:1.4rem 0}
.facts h3,.formulas h3{margin-top:0}
.facts ul{list-style:none;margin-left:0}
.facts li{margin-bottom:.6rem;font-size:.9rem}
.formulas{overflow-x:auto}
.formulas table{border-collapse:collapse;width:100%;font-size:.9rem}
.formulas th{text-align:left;font-weight:800;color:var(--ink2);padding:.4rem .9rem .4rem 0;white-space:nowrap;vertical-align:top}
.formulas td{padding:.4rem 0;vertical-align:top}
.formulas .cmt{color:var(--ink3);font-size:.78rem;font-style:italic;padding-left:.9rem}
.formulas tr.sep td{border-top:1px solid var(--border);padding:0;height:6px}
.related{margin-top:3rem;border-top:1px solid var(--border);padding-top:1.4rem}
.related h2{font-family:Georgia,serif;font-size:1.2rem;margin-bottom:.8rem}
.related ul{list-style:none;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.5rem}
.related a{display:block;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:.7rem .9rem;text-decoration:none;font-weight:700;font-size:.88rem}
.sources{margin-top:2rem;font-size:.85rem;color:var(--ink3)}
footer{border-top:1px solid var(--border);padding:1.6rem clamp(1rem,4vw,2rem);text-align:center;font-size:.8rem;color:var(--ink3)}
footer .ai-notice{display:block;margin-top:.55rem;font-size:.75rem;line-height:1.6}
[hidden]{display:none!important}
.sim-embed{margin:1.6rem 0 2rem;padding:1.2rem;border:1px solid var(--border);border-radius:16px;background:var(--surface)}
.sim-tabs{display:flex;gap:.4rem;margin-bottom:1rem;flex-wrap:wrap}
.sim-tabs button{border:1.5px solid var(--border);background:var(--bg);color:var(--ink2);border-radius:50px;padding:6px 14px;font-family:inherit;font-weight:800;font-size:.8rem;cursor:pointer;transition:.15s}
.sim-tabs button:hover{color:var(--ink)}
.sim-tabs button.on{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.sim-host{min-height:20px}
.sim-embed .sim-try{display:flex;gap:.55rem;align-items:baseline;font-size:.9rem;font-weight:600;color:var(--ink2);line-height:1.6;background:var(--bg);border:1.5px solid var(--border);border-left-width:4px;border-radius:10px;padding:.75rem .9rem;margin-bottom:.85rem}
${simCss()}`.trim();

function page(T, lang, alts) {
  const ui = lang.ui;
  const slug = slugForLang(T, lang);
  const url = `${ORIGIN}/${lang.prefix}${slug}/`;
  const subject = subjectName(T, lang);
  const desc = clamp(T.teaser);
  const wiki = REF[T.id] ? `https://en.wikipedia.org/wiki/${REF[T.id]}` : null;

  const levels = LEVEL_KEYS.map(k => {
    const lc = T.lvls[k];
    if (!lc) return '';
    const L = ui.levels[k];
    return `
<section class="lvl" id="${k}">
  <h2>${esc(lc.title)}</h2>
  <p class="lvl-note">${esc(fmt(ui.levelNote, { label: L.label, blurb: L.blurb }))}</p>
  ${fixHeadings(lc.body)}
  ${formulaHTML(lc.formula, ui)}
  ${factsHTML(lc.facts, ui)}
</section>`;
  }).join('\n');

  const related = S.filter(x => x.group === T.group && x.id !== T.id && hasTopic(lang, x.id))
    .map(x => {
      const rt = lang.code === 'en' ? x.title : ((lang.t[x.id] && lang.t[x.id].title) || x.title);
      return `<li><a href="/${lang.prefix}${slugForLang(x, lang)}/">${esc(rt)}</a></li>`;
    }).join('');

  const enAlt = alts.find(a => a.code === 'en');
  const hreflang = alts.map(a => `<link rel="alternate" hreflang="${a.htmlLang}" href="${a.url}">`).join('\n')
    + (enAlt ? `\n<link rel="alternate" hreflang="x-default" href="${enAlt.url}">` : '');

  const switcher = alts.length > 1
    ? `<div class="langsel"><button class="tbtn langbtn" id="lb" aria-haspopup="true" aria-expanded="false" aria-label="Language">${lang.flag}</button><div class="langmenu" id="lm" hidden>${
        alts.map(a => `<a href="${a.url}" hreflang="${a.htmlLang}"${a.code === lang.code ? ' aria-current="true"' : ''}>${a.flag} ${esc(a.name)}</a>`).join('')
      }</div></div>`
    : '';

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Article', 'LearningResource'],
        '@id': url + '#article',
        headline: T.title, name: T.title, description: desc, url, mainEntityOfPage: url,
        datePublished: PUBLISHED, dateModified: TODAY, inLanguage: lang.htmlLang,
        isAccessibleForFree: true, isFamilyFriendly: true,
        learningResourceType: 'Interactive explanation with simulation',
        educationalLevel: LEVEL_KEYS.map(k => ui.levels[k].label),
        teaches: T.chips,
        about: { '@type': 'Thing', name: T.title, ...(wiki ? { sameAs: wiki } : {}) },
        image: `${ORIGIN}/logo_radiant_infinity.png`,
        author: { '@type': 'Organization', name: 'Lab-in-a-Tab', url: ORIGIN + '/' },
        publisher: { '@type': 'Organization', name: 'Lab-in-a-Tab', url: ORIGIN + '/', logo: { '@type': 'ImageObject', url: `${ORIGIN}/logo_radiant_infinity.png` } },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Lab-in-a-Tab', item: ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: T.title, item: url },
        ],
      },
    ],
  };

  return `<!DOCTYPE html>
<html lang="${lang.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(T.title)} | Lab-in-a-Tab</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${url}">
${hreflang}
<link rel="icon" type="image/png" href="/logo_radiant_infinity.png">
<meta name="theme-color" content="#ff6b35" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#14120e" media="(prefers-color-scheme: dark)">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Lab-in-a-Tab">
<meta property="og:title" content="${esc(T.title)} — ${esc(ui.explainedSimulated)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ORIGIN}/logo_radiant_infinity.png">
<meta property="og:locale" content="${lang.locale}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(T.title)} — ${esc(ui.explainedSimulated)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${ORIGIN}/logo_radiant_infinity.png">
<script type="application/ld+json">
${JSON.stringify(ld, null, 1)}
</script>
<script>(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.setAttribute('data-theme',d?'dark':'light');}catch(e){}})();</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" crossorigin="anonymous"></script>
<script defer src="/sim-engine.js"></script>
<style>${CSS}</style>
</head>
<body>
<header>
  <a class="brand" href="/"><i aria-hidden="true"></i> Lab-in-a-Tab</a>
  <div class="hdr-actions">${switcher}<button class="tbtn" id="t" aria-label="Toggle dark mode">🌙</button></div>
</header>
<main>
  <nav class="crumb" aria-label="Breadcrumb"><a href="/">Lab-in-a-Tab</a> › ${esc(subject)}</nav>
  <h1>${esc(T.title)}</h1>
  <p class="lead">${esc(plain(T.teaser))}</p>
  <div class="chips">${T.chips.map(c => `<span>${esc(c)}</span>`).join('')}</div>
  ${simEmbedHTML(T, lang)}
  ${levels}
  <div class="sources">
    <h3>${ui.sources}</h3>
    ${wiki ? `<p><a href="${wiki}" target="_blank" rel="noopener">${ui.wikiLink}</a></p>` : ''}
  </div>
  <nav class="related" aria-label="Related topics">
    <h2>${ui.moreIn} ${esc(subject)}</h2>
    <ul>${related}</ul>
  </nav>
</main>
<footer>© <span id="y">2026</span> Lab-in-a-Tab · <a href="/">${ui.footer.allExperiments}</a>
<span class="ai-notice">${ui.footer.ai} <a href="/${lang.prefix}ai/">${ui.footer.aiLink}</a></span></footer>
<script>
document.getElementById('y').textContent=new Date().getFullYear();
(function(){var r=document.documentElement,b=document.getElementById('t');
var i=function(){b.textContent=r.getAttribute('data-theme')==='dark'?'☀️':'🌙';};i();
b.addEventListener('click',function(){var d=r.getAttribute('data-theme')!=='dark';
r.setAttribute('data-theme',d?'dark':'light');try{localStorage.setItem('theme',d?'dark':'light');}catch(e){}i();});})();
(function(){var lb=document.getElementById('lb'),lm=document.getElementById('lm');if(!lb)return;
lb.addEventListener('click',function(e){e.stopPropagation();var h=lm.hasAttribute('hidden');
if(h){lm.removeAttribute('hidden');lb.setAttribute('aria-expanded','true');}else{lm.setAttribute('hidden','');lb.setAttribute('aria-expanded','false');}});
document.addEventListener('click',function(){lm.setAttribute('hidden','');lb.setAttribute('aria-expanded','false');});})();
window.addEventListener('load',function(){
  if(window.renderMathInElement) renderMathInElement(document.querySelector('main'),{
    delimiters:[{left:'\\\\(',right:'\\\\)',display:false},{left:'\\\\[',right:'\\\\]',display:true}],
    throwOnError:false});
});
(function(){
  var sec=document.querySelector('.sim-embed'); if(!sec) return;
  var host=sec.querySelector('.sim-host'), level='junior';
  function render(){
    if(typeof buildSim!=='function'){ window.addEventListener('load',render,{once:true}); return; }
    if(typeof stopSims==='function')stopSims(); host.innerHTML='';
    buildSim(sec.dataset.sim,host,sec.dataset.color,level);
  }
  function setLevel(l){ level=l;
    sec.querySelectorAll('.sim-tabs button').forEach(function(b){b.classList.toggle('on',b.dataset.l===l);});
    sec.querySelectorAll('.sim-try,.sim-guide').forEach(function(el){el.hidden=(el.dataset.l!==l);});
    render(); }
  sec.querySelectorAll('.sim-tabs button').forEach(function(b){b.addEventListener('click',function(){setLevel(b.dataset.l);});});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){render();io.disconnect();}});},{rootMargin:'250px'});
    io.observe(sec);
  } else { render(); }
})();
</script>
</body>
</html>`;
}

// ── full localized SPA clones (/it/, /fr/) ────────────────────────────────
// The English SPA (index.html) verbatim, with only the data blocks swapped:
//   UI (all chrome) · S (all 47 topics, translated where available, English
//   fallback) · SLUG (localized article paths) · SIM_GUIDE + SIM_LABELS.
// Every language is therefore the same app; only the words differ.
const localizedS = lang => S.map(s => (hasTopic(lang, s.id) ? resolveTopic(s, lang) : s));
const localizedSlugMap = lang => {
  const out = {};
  for (const s of S) out[s.id] = hasTopic(lang, s.id) ? `${lang.prefix}${slugForLang(s, lang)}` : SLUG[s.id];
  return out;
};
const mergeById = (base, over) => ({ ...base, ...(over || {}) });

function swapBlock(html, start, end, code) {
  const a = html.indexOf(start);
  const b = html.indexOf(end, a);
  if (a < 0 || b < 0) throw new Error(`clone: block not found: ${start}`);
  return html.slice(0, a) + code + html.slice(b + end.length);
}

function buildSPAClone(lang) {
  const ui = lang.ui;
  const url = `${ORIGIN}/${lang.prefix}`;
  const cleanHtag = String(ui.htag).replace(/^\S+\s*/, '').trim();
  const desc = clamp(ui.heroSub.junior);
  let html = src;
  // data blocks
  html = swapBlock(html, 'const UI={', '}; // end UI', `const UI=${jsonInline(ui)}; // end UI`);
  html = swapBlock(html, 'const S=[', ']; // end SUBJECTS', `const S=${jsonInline(localizedS(lang))}; // end SUBJECTS`);
  html = swapBlock(html, 'const SLUG={', '};', `const SLUG=${jsonInline(localizedSlugMap(lang))};`);
  html = swapBlock(html, 'const SIM_GUIDE={', '}; // end SIM_GUIDE', `const SIM_GUIDE=${jsonInline(mergeById(SIM_GUIDE, lang.guide))}; // end SIM_GUIDE`);
  html = swapBlock(html, 'const SIM_LABELS={', '\n};', `const SIM_LABELS=${jsonInline(mergeById(SIM_LABELS, lang.labels))};`);
  // head + document language
  html = html.replace('<html lang="en">', `<html lang="${lang.htmlLang}">`);
  html = html.replace('<link rel="canonical" href="https://labinatab.com/">', `<link rel="canonical" href="${url}">`);
  html = html.replace('<meta property="og:url" content="https://labinatab.com/">', `<meta property="og:url" content="${url}">`);
  html = html.replace('<meta property="og:locale" content="en_US">', `<meta property="og:locale" content="${lang.locale}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>Lab-in-a-Tab — ${esc(cleanHtag)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(desc)}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="Lab-in-a-Tab — ${esc(cleanHtag)}">`);
  // language switcher: this language's flag on the button, mark its menu item current
  html = html.replace(/(<button class="icon-btn langbtn" id="lb"[^>]*>)[\s\S]*?(<\/button>)/, (m, open, close) => open + lang.flag + close);
  html = html.replace('href="/ai/"', `href="/${lang.prefix}ai/"`);
  html = html.replace(' aria-current="true"', '');
  html = html.replace(`<a href="/${lang.prefix}" hreflang="${lang.htmlLang}">`, `<a href="/${lang.prefix}" hreflang="${lang.htmlLang}" aria-current="true">`);
  // localized footer "all experiments" list (translated titles + localized/EN-fallback slugs)
  const footerLinks = S.map(s => {
    const t = resolveTopic(s, lang) || s;
    const href = hasTopic(lang, s.id) ? `/${lang.prefix}${slugForLang(s, lang)}/` : `/${SLUG[s.id]}/`;
    return `<li><a href="${href}">${esc(t.title)}</a></li>`;
  }).join('');
  html = swapBlock(html, '<ul class="all-topics" id="all-topics">', '</ul>', `<ul class="all-topics" id="all-topics">${footerLinks}</ul>`);
  fs.mkdirSync(lang.prefix, { recursive: true });
  fs.writeFileSync(path.join(lang.prefix, 'index.html'), html, 'utf8');
}

// Shared sim engine.
fs.writeFileSync('sim-engine.js',
  '// AUTO-GENERATED by build-pages.mjs from index.html — do not edit by hand.\n' +
  '// Ports the simulation engine so each topic page can run its own sim.\n' +
  ENGINE + '\n', 'utf8');

let n = 0;
const built = [];
for (const lang of LANGS) {
  for (const s of S) {
    if (!hasTopic(lang, s.id)) continue;
    const T = resolveTopic(s, lang);
    const dir = lang.prefix + slugForLang(s, lang);
    fs.mkdirSync(dir, { recursive: true });
    const html = page(T, lang, altsByTopic[s.id]);
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    built.push({ slug: dir, id: s.id, lang: lang.code, title: T.title, words: plain(html).split(/\s+/).length });
    n++;
  }
}

// Full localized SPA clone for every non-English language that has ≥1 translated topic.
const hubs = LANGS.filter(l => l.code !== 'en' && S.some(s => hasTopic(l, s.id))).map(l => l.prefix);
for (const lang of LANGS) if (lang.code !== 'en' && S.some(s => hasTopic(lang, s.id))) buildSPAClone(lang);

// Remove directories from an earlier run whose slug changed. Only touches slugs we built.
const slugSet = new Set(built.map(b => b.slug));
let removed = 0;
if (fs.existsSync('.build-pages.json')) {
  for (const prev of JSON.parse(fs.readFileSync('.build-pages.json', 'utf8'))) {
    if (!slugSet.has(prev.slug) && fs.existsSync(prev.slug)) {
      fs.rmSync(prev.slug, { recursive: true, force: true });
      removed++;
    }
  }
}
fs.writeFileSync('.build-pages.json', JSON.stringify(built, null, 1));

// sitemap.xml — every localized page plus the English home.
const urls = ['', ...hubs, ...built.map(b => b.slug + '/')];
fs.writeFileSync('sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url>\n    <loc>${ORIGIN}/${u}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </url>`).join('\n') +
  `\n</urlset>\n`, 'utf8');

fs.writeFileSync('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`, 'utf8');

// Patch index.html (English home): static footer links + ItemList JSON-LD.
{
  let home = fs.readFileSync('index.html', 'utf8');
  const enBuilt = built.filter(b => b.lang === 'en');
  const order = S.map(s => enBuilt.find(b => b.id === s.id));
  const links = order.map(b => `<li><a href="/${b.slug}/">${esc(b.title)}</a></li>`).join('');
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Lab-in-a-Tab — interactive science experiments',
    url: ORIGIN + '/',
    isPartOf: { '@type': 'WebSite', name: 'Lab-in-a-Tab', url: ORIGIN + '/' },
    mainEntity: {
      '@type': 'ItemList', numberOfItems: order.length,
      itemListElement: order.map((b, i) => ({ '@type': 'ListItem', position: i + 1, url: `${ORIGIN}/${b.slug}/`, name: b.title })),
    },
  };
  const ulRe = /(<ul class="all-topics" id="all-topics">)[\s\S]*?(<\/ul>)/;
  const ldRe = /(<script type="application\/ld\+json" id="itemlist">)[\s\S]*?(<\/script>)/;
  if (!ulRe.test(home) || !ldRe.test(home)) throw new Error('index.html patch markers not found (all-topics / itemlist)');
  home = home.replace(ulRe, `$1${links}$2`).replace(ldRe, `$1\n${JSON.stringify(itemList, null, 1)}\n$2`);
  fs.writeFileSync('index.html', home, 'utf8');
}

console.log(`built ${n} pages (${LANGS.map(l => l.code + ':' + built.filter(b => b.lang === l.code).length).join(' ')})${removed ? `, removed ${removed} stale` : ''}`);
console.log(`sitemap.xml: ${urls.length} urls · robots.txt written`);
