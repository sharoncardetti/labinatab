// Generates one static, crawlable page per topic from the SAME `S` array that
// drives index.html — single source of truth, so re-running is free.
//   node build-pages.mjs
// Output: <slug>/index.html for every topic (served as https://labinatab.com/<slug>/)
import fs from 'node:fs';
import path from 'node:path';

const ORIGIN = 'https://labinatab.com';
const TODAY = new Date().toISOString().slice(0, 10);
// Freshness dates for Article schema. PUBLISHED is a stable launch date — set it
// to the site's real first-publish date; dateModified reflects each rebuild.
const PUBLISHED = '2026-03-23';
const src = fs.readFileSync('index.html', 'utf8');

// ── pull `S` and `REF` straight out of index.html ──────────────────────
function extract(startMarker, endMarker) {
  const a = src.indexOf(startMarker);
  const b = src.indexOf(endMarker, a);
  if (a < 0 || b < 0) throw new Error(`cannot locate ${startMarker}`);
  return src.slice(a, b + endMarker.length);
}
// newline matters: the S block ends in a `//` comment, which would swallow the return
const S = new Function(`${extract('const S=[', ']; // end SUBJECTS')}\nreturn S;`)();
const REF = new Function(`${extract('const REF={', '};')}\nreturn REF;`)();

const LEVELS = [
  { key: 'junior',  label: 'Junior',  blurb: 'plain language, no maths' },
  { key: 'student', label: 'Student', blurb: 'the core equations' },
  { key: 'scholar', label: 'Scholar', blurb: 'full mathematical depth' },
];

const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// strip tags -> plain text (for meta description / word counts)
const plain = h => String(h).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

// Slugs live in index.html (the homepage card links need them too) — read them
// from there so a URL is only ever written down in one place.
const SLUG = new Function(`${extract('const SLUG={', '};')}\nreturn SLUG;`)();
const slugFor = s => {
  const v = SLUG[s.id];
  if (!v) throw new Error(`no slug for id "${s.id}" — add it to SLUG in index.html`);
  return v;
};

// ── the interactive simulation, ported from the modal ──────────────────
// Labels + guide text are read from index.html so the wording is authored in
// exactly one place. The sim ENGINE (canvas code) is written out to a shared
// sim-engine.js that every page loads — one download, cached across the site.
const SIM_LABELS = new Function(`${extract('const SIM_LABELS={', '\n};')}\nreturn SIM_LABELS;`)();
const SIM_GUIDE  = new Function(`${extract('const SIM_GUIDE={', '}; // end SIM_GUIDE')}\nreturn SIM_GUIDE;`)();

// [[token]] -> the on-screen control label, bold. Mirrors fillLabels in index.html.
const fillLabels = (txt, lab) =>
  String(txt).replace(/\[\[(\w+)\]\]/g, (m, k) => (lab && lab[k]) ? `<b>${esc(lab[k])}</b>` : m);

// Pull named top-level declarations verbatim out of index.html by brace-matching.
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

// Sim CSS lives in index.html's <style>; grab exactly the rules the engine needs
// (comments stripped first, else a rule preceded by /*…*/ is skipped).
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
    'simOrbit', 'simProjectile', 'simNewton', 'simCircuit', 'simWaves', 'simThermo', 'simParticles', 'simGalton', 'simFractal',
    'simCalculus', 'simGraphs', 'simLife', 'simDNA', 'simEvolution', 'simEcosystem',
    'simPhotosynthesis', 'simCell', 'simMitosis',
    'simSorting', 'simML', 'simCrypto', 'simComplexity', 'simClimate', 'simTectonics',
    'simOcean', 'simVolcano', 'simChem', 'simElectrochem', 'simKinetics', 'simOrganic', 'simAcids', 'simPeriodic',
    'simAstro', 'simBlackholes', 'simCosmology', 'simSolarSystem', 'simEclipse', 'simMeteors', 'simNeuro', 'simNeuron',
    'simMemory', 'simSleep'].map(decl),
].join('\n\n');

const LVL_LABEL = { junior: '🌱 Junior', student: '🔬 Student', scholar: '🎓 Scholar' };

// The embedded sim: level tabs + per-level Try/legend/notice (all baked into HTML
// so it is crawlable), plus an empty host the engine fills on first scroll-in.
function simEmbedHTML(s) {
  const guide = SIM_GUIDE[s.id];
  if (!guide) return `<a class="cta" href="/#${s.id}">▶ Run the interactive simulation</a>`;
  const levels = ['junior', 'student', 'scholar'];
  const active = 'junior';
  const tabs = levels.map(l =>
    `<button type="button" data-l="${l}"${l === active ? ' class="on"' : ''}>${LVL_LABEL[l]}</button>`).join('');
  const tries = levels.map(l => {
    const g = guide[l], lab = (SIM_LABELS[s.id] || {})[l] || {};
    return `<div class="sim-try" data-l="${l}"${l === active ? '' : ' hidden'} style="border-left-color:${s.color}"><span class="sg-lbl">Try this</span><span>${fillLabels(g.try, lab)}</span></div>`;
  }).join('\n');
  const guides = levels.map(l => {
    const g = guide[l], lab = (SIM_LABELS[s.id] || {})[l] || {};
    return `<div class="sim-guide" data-l="${l}"${l === active ? '' : ' hidden'}><div class="sg-legend"><span class="sg-lbl">What you're seeing</span>${fillLabels(g.legend, lab)}</div><details class="sg-notice"><summary>What to notice</summary><div class="sg-body">${fillLabels(g.notice, lab)}</div></details></div>`;
  }).join('\n');
  return `<section class="sim-embed" data-sim="${s.id}" data-color="${s.color}" aria-label="Interactive simulation">
  <div class="sim-tabs" role="group" aria-label="Simulation difficulty level">${tabs}</div>
  ${tries}
  <div class="sim-host"></div>
  ${guides}
</section>`;
}

// Meta descriptions must survive Google's ~160 char cut: trim on a word boundary.
function clamp(text, max = 155) {
  const t = plain(text);
  if (t.length <= max) return t;
  return t.slice(0, t.lastIndexOf(' ', max - 1)).replace(/[,;:—-]$/, '') + '…';
}

// The prose uses <h4> inside a section; under the page's <h2> that skips a
// level, so promote to <h3> to keep the outline valid for screen readers.
const fixHeadings = h => h.replace(/<(\/?)h4\b/g, '<$1h3');

function formulaHTML(f) {
  if (!f || !f.rows || !f.rows.length) return '';
  const rows = f.rows.map(r => {
    if (r.sep) return '<tr class="sep"><td colspan="3"></td></tr>';
    const eq = f.tex ? `\\(${esc(r.e)}\\)` : `<code>${esc(r.e)}</code>`;
    return `<tr><th scope="row">${esc(r.n)}</th><td>${eq}</td><td class="cmt">${r.c ? esc(r.c) : ''}</td></tr>`;
  }).join('\n');
  return `<div class="formulas"><h3>Key formulas</h3><table>${rows}</table></div>`;
}

function factsHTML(facts) {
  if (!facts || !facts.length) return '';
  return `<div class="facts"><h3>Things worth knowing</h3><ul>${
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
.tbtn{border:1.5px solid var(--border);background:var(--surface);color:var(--ink2);border-radius:50px;width:34px;height:34px;cursor:pointer;font-size:.9rem;line-height:1}
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
/* embedded simulation widget */
[hidden]{display:none!important}  /* a display: rule otherwise beats the hidden attribute */
.sim-embed{margin:1.6rem 0 2rem;padding:1.2rem;border:1px solid var(--border);border-radius:16px;background:var(--surface)}
.sim-tabs{display:flex;gap:.4rem;margin-bottom:1rem;flex-wrap:wrap}
.sim-tabs button{border:1.5px solid var(--border);background:var(--bg);color:var(--ink2);border-radius:50px;padding:6px 14px;font-family:inherit;font-weight:800;font-size:.8rem;cursor:pointer;transition:.15s}
.sim-tabs button:hover{color:var(--ink)}
.sim-tabs button.on{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.sim-host{min-height:20px}
.sim-embed .sim-try{display:flex;gap:.55rem;align-items:baseline;font-size:.9rem;font-weight:600;color:var(--ink2);line-height:1.6;background:var(--bg);border:1.5px solid var(--border);border-left-width:4px;border-radius:10px;padding:.75rem .9rem;margin-bottom:.85rem}
${simCss()}`.trim();

function page(s) {
  const slug = slugFor(s);
  const url = `${ORIGIN}/${slug}/`;
  const subject = s.group.replace(/^\S+\s*/, '').trim();
  const desc = clamp(s.teaser);
  const wiki = REF[s.id] ? `https://en.wikipedia.org/wiki/${REF[s.id]}` : null;

  const levels = LEVELS.map(L => {
    const lc = s.lvls[L.key];
    if (!lc) return '';
    return `
<section class="lvl" id="${L.key}">
  <h2>${esc(lc.title)}</h2>
  <p class="lvl-note">${L.label} level — ${L.blurb}</p>
  ${fixHeadings(lc.body)}
  ${formulaHTML(lc.formula)}
  ${factsHTML(lc.facts)}
</section>`;
  }).join('\n');

  const related = S.filter(x => x.group === s.group && x.id !== s.id)
    .map(x => `<li><a href="/${slugFor(x)}/">${esc(x.title)}</a></li>`).join('');

  // Structured data. Article+LearningResource describes the page; `about.sameAs`
  // ties it to the Wikipedia entity; BreadcrumbList can render in the SERP.
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Article', 'LearningResource'],
        '@id': url + '#article',
        headline: s.title,
        name: s.title,
        description: desc,
        url,
        mainEntityOfPage: url,
        datePublished: PUBLISHED,
        dateModified: TODAY,
        inLanguage: 'en',
        isAccessibleForFree: true,
        isFamilyFriendly: true,
        learningResourceType: 'Interactive explanation with simulation',
        educationalLevel: LEVELS.map(l => l.label),
        teaches: s.chips,
        about: { '@type': 'Thing', name: s.title, ...(wiki ? { sameAs: wiki } : {}) },
        image: `${ORIGIN}/logo_radiant_infinity.png`,
        author: { '@type': 'Organization', name: 'Lab-in-a-Tab', url: ORIGIN + '/' },
        publisher: {
          '@type': 'Organization', name: 'Lab-in-a-Tab', url: ORIGIN + '/',
          logo: { '@type': 'ImageObject', url: `${ORIGIN}/logo_radiant_infinity.png` },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Lab-in-a-Tab', item: ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: s.title, item: url },
        ],
      },
    ],
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(s.title)} | Lab-in-a-Tab</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${url}">
<link rel="icon" type="image/png" href="/logo_radiant_infinity.png">
<meta name="theme-color" content="#ff6b35" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#14120e" media="(prefers-color-scheme: dark)">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Lab-in-a-Tab">
<meta property="og:title" content="${esc(s.title)} — Explained &amp; Simulated">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ORIGIN}/logo_radiant_infinity.png">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(s.title)} — Explained &amp; Simulated">
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
  <button class="tbtn" id="t" aria-label="Toggle dark mode">🌙</button>
</header>
<main>
  <nav class="crumb" aria-label="Breadcrumb"><a href="/">Lab-in-a-Tab</a> › ${esc(subject)}</nav>
  <h1>${esc(s.title)}</h1>
  <p class="lead">${esc(plain(s.teaser))}</p>
  <div class="chips">${s.chips.map(c => `<span>${esc(c)}</span>`).join('')}</div>
  ${simEmbedHTML(s)}
  ${levels}
  <div class="sources">
    <h3>Sources</h3>
    ${wiki ? `<p><a href="${wiki}" target="_blank" rel="noopener">Full article on Wikipedia ↗</a></p>` : ''}
  </div>
  <nav class="related" aria-label="Related topics">
    <h2>More in ${esc(subject)}</h2>
    <ul>${related}</ul>
  </nav>
</main>
<footer>© <span id="y">2026</span> Lab-in-a-Tab · <a href="/">All ${S.length} experiments</a></footer>
<script>
document.getElementById('y').textContent=new Date().getFullYear();
(function(){var r=document.documentElement,b=document.getElementById('t');
var i=function(){b.textContent=r.getAttribute('data-theme')==='dark'?'☀️':'🌙';};i();
b.addEventListener('click',function(){var d=r.getAttribute('data-theme')!=='dark';
r.setAttribute('data-theme',d?'dark':'light');try{localStorage.setItem('theme',d?'dark':'light');}catch(e){}i();});})();
window.addEventListener('load',function(){
  if(window.renderMathInElement) renderMathInElement(document.querySelector('main'),{
    delimiters:[{left:'\\\\(',right:'\\\\)',display:false},{left:'\\\\[',right:'\\\\]',display:true}],
    throwOnError:false});
});
// Embedded simulation: build lazily on first scroll-in; level tabs rebuild it.
// Wired inline (the .sim-embed markup is already above this script) rather than
// on DOMContentLoaded — the deferred 172KB sim-engine.js is not reliably ready by
// then, so render() retries on window 'load' if buildSim hasn't arrived yet.
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

// Shared sim engine — one file for the whole site, loaded by every topic page.
fs.writeFileSync('sim-engine.js',
  '// AUTO-GENERATED by build-pages.mjs from index.html — do not edit by hand.\n' +
  '// Ports the simulation engine so each topic page can run its own sim.\n' +
  ENGINE + '\n', 'utf8');

let n = 0;
const built = [];
for (const s of S) {
  const slug = slugFor(s);
  fs.mkdirSync(slug, { recursive: true });
  const html = page(s);
  fs.writeFileSync(path.join(slug, 'index.html'), html, 'utf8');
  built.push({ slug, id: s.id, title: s.title, words: plain(html).split(/\s+/).length });
  n++;
}

// Remove directories from an earlier run whose slug changed, so renaming a page
// never leaves a stale copy live. Only ever touches slugs we ourselves built.
const slugs = new Set(built.map(b => b.slug));
let removed = 0;
if (fs.existsSync('.build-pages.json')) {
  for (const prev of JSON.parse(fs.readFileSync('.build-pages.json', 'utf8'))) {
    if (!slugs.has(prev.slug) && fs.existsSync(prev.slug)) {
      fs.rmSync(prev.slug, { recursive: true, force: true });
      removed++;
    }
  }
}
fs.writeFileSync('.build-pages.json', JSON.stringify(built, null, 1));

// sitemap.xml — only canonical URLs, and only <loc>/<lastmod>: Google states it
// ignores <changefreq> and <priority>, so emitting them is noise.
const today = new Date().toISOString().slice(0, 10);
const urls = ['', ...built.map(b => b.slug + '/')];
fs.writeFileSync('sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url>\n    <loc>${ORIGIN}/${u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n') +
  `\n</urlset>\n`, 'utf8');

fs.writeFileSync('robots.txt',
  `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`, 'utf8');

// Patch index.html in place: static footer links + home ItemList JSON-LD, both
// generated from S so the home links to all 32 topic pages in raw HTML (crawlable
// without JS) and declares itself a CollectionPage hub. Idempotent per run.
{
  let home = fs.readFileSync('index.html', 'utf8');
  const order = S.map(s => built.find(b => b.id === s.id)); // S order = grouped by subject
  const links = order.map(b => `<li><a href="/${b.slug}/">${esc(b.title)}</a></li>`).join('');
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Lab-in-a-Tab — ${order.length} interactive science experiments`,
    url: ORIGIN + '/',
    isPartOf: { '@type': 'WebSite', name: 'Lab-in-a-Tab', url: ORIGIN + '/' },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: order.length,
      itemListElement: order.map((b, i) => ({
        '@type': 'ListItem', position: i + 1,
        url: `${ORIGIN}/${b.slug}/`, name: b.title,
      })),
    },
  };
  const ulRe = /(<ul class="all-topics" id="all-topics">)[\s\S]*?(<\/ul>)/;
  const ldRe = /(<script type="application\/ld\+json" id="itemlist">)[\s\S]*?(<\/script>)/;
  // fail loudly if a marker is gone; but a no-op re-patch (content already correct)
  // must NOT error, so the generator stays re-runnable.
  if (!ulRe.test(home) || !ldRe.test(home)) throw new Error('index.html patch markers not found (all-topics / itemlist)');
  home = home.replace(ulRe, `$1${links}$2`)
             .replace(ldRe, `$1\n${JSON.stringify(itemList, null, 1)}\n$2`);
  // Keep the hand-authored topic counts in sync with S.length so they never drift.
  const N = order.length;
  home = home
    .replace(/\b\d+ interactive science simulations/g, `${N} interactive science simulations`)
    .replace(/Search \d+ experiments/g, `Search ${N} experiments`)
    .replace(/All \d+ experiments<\/h4>/g, `All ${N} experiments</h4>`)
    .replace(/hub of \d+ topics/g, `hub of ${N} topics`);
  fs.writeFileSync('index.html', home, 'utf8');
}

console.log(`built ${n} pages${removed ? `, removed ${removed} stale` : ''}`);
console.log(`median words/page: ${built.map(b => b.words).sort((a, b) => a - b)[Math.floor(n / 2)]}`);
console.log(`sitemap.xml: ${urls.length} urls · robots.txt written`);
