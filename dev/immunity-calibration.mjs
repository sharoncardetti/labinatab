// Calibration record for the immunity simulation's contact model.
//
//   node dev/immunity-calibration.mjs
//
// The whole lesson of that sim is that the outbreak collapses at the
// herd-immunity threshold 1 - 1/R0. That only reads true if the realised final
// attack rate follows the mean-field final-size relation
//
//     1 - Z = exp(-Re * Z),    Re = R0 (1 - p)
//
// On a purely local lattice it does not: clustering starves the front and the
// collapse arrives far too early. On a purely random graph it does, but then
// nothing visibly spreads across the picture. The mix below - 60 per cent of
// contacts on the 12 nearest neighbours, 40 per cent anywhere - is the point
// where you get visible fronts AND numbers that match theory.
//
// If MCT, DINF, PLOC, SEEDS or the neighbourhood radius in simImmunity ever
// change, re-run this and check the sim/theory columns still agree.

const COLS = 46, ROWS = 11;          // the crowd at the default canvas width
const MCT = 6, DINF = 6, PLOC = 0.6, SEEDS = 6;

function network() {
  const N = COLS * ROWS, nb = [];
  for (let i = 0; i < N; i++) {
    const cx = i % COLS, cy = (i / COLS) | 0, l = [];
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
      if (!dx && !dy) continue;
      if (dx * dx + dy * dy > 4) continue;
      const x = cx + dx, y = cy + dy;
      if (x < 0 || y < 0 || x >= COLS || y >= ROWS) continue;
      l.push(y * COLS + x);
    }
    nb.push(l);
  }
  return { N, nb };
}

function outbreak(net, R0, V) {
  const { N, nb } = net, st = new Uint8Array(N), tt = new Uint8Array(N);
  for (let i = 0; i < N; i++) if (Math.random() < V) st[i] = 3;
  let inf = [];
  for (let g = 0; g < N * 4 && inf.length < SEEDS; g++) {
    const i = (Math.random() * N) | 0;
    if (st[i] === 0) { st[i] = 1; inf.push(i); }
  }
  const p = R0 / (MCT * DINF);
  let day = 0, ever = inf.length;
  while (inf.length && day++ < 400) {
    const next = [];
    for (const i of inf) {
      const l = nb[i];
      for (let c = 0; c < MCT; c++) {
        const j = Math.random() < PLOC ? l[(Math.random() * l.length) | 0] : (Math.random() * N) | 0;
        if (st[j] === 0 && Math.random() < p) { st[j] = 1; tt[j] = 0; next.push(j); ever++; }
      }
      if (++tt[i] >= DINF) st[i] = 2; else next.push(i);
    }
    inf = next.filter(i => st[i] === 1);
  }
  return ever / N;
}

// 1 - Z = exp(-Re Z), solved by iteration; Z is the share of the SUSCEPTIBLES hit
const theory = (R0, V) => {
  const Re = R0 * (1 - V);
  if (Re <= 1) return 0;
  let z = 0.5;
  for (let k = 0; k < 300; k++) z = 1 - Math.exp(-Re * z);
  return (1 - V) * z;
};

const net = network();
const RUNS = 20, COVER = [0, 0.2, 0.4, 0.6, 0.7, 0.8, 0.9];
let worst = 0;
console.log(`crowd ${net.N} people · ${MCT} contacts/day · ${DINF} infectious days · ${Math.round(PLOC * 100)}% local\n`);
for (const R0 of [3, 6, 15]) {
  let line = `R0 ${String(R0).padStart(2)}  threshold ${String(Math.round((1 - 1 / R0) * 100)).padStart(2)}%  `;
  for (const V of COVER) {
    let a = 0;
    for (let k = 0; k < RUNS; k++) a += outbreak(net, R0, V);
    const sim = (a / RUNS) * 100, thy = theory(R0, V) * 100;
    worst = Math.max(worst, Math.abs(sim - thy));
    line += `${Math.round(V * 100)}%:${String(Math.round(sim)).padStart(3)}/${String(Math.round(thy)).padStart(3)}  `;
  }
  console.log(line);
}
console.log('\ncolumns are coverage: sim/theory, both as % of the whole population');
console.log(`worst gap ${worst.toFixed(1)} points` + (worst < 10 ? '  — model tracks theory' : '  — TOO FAR, retune PLOC'));
