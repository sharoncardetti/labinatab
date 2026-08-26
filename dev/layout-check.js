// Automated stand-in for looking at every simulation with your own eyes.
//
//   1. serve the site, open /dev/shot.html
//   2. paste this whole file into the console
//   3. layoutCheck()                       — every sim, at 340 and 780 px
//      layoutCheck(['bees','sharks'])      — just these
//
// It wraps fillText, records a box for every string drawn in one frame, and
// reports strings that fall outside the canvas or overlap another string. It
// also times 60 frames, so a sim that has quietly become expensive shows up.
//
// Text boxes are mapped through the current transform, so rotated axis titles are
// measured where they actually land. What it still cannot judge is moving objects
// whose labels legitimately pass near each other (ions, planets, quarks): those
// show up as overlaps in one sampled frame and are usually not defects.

function layoutCheck(only, widths) {
  const ids = [];
  const re = /(\w+)\s*:\s*(sim\w+)/g;
  const src = buildSim.toString();
  let m;
  while ((m = re.exec(src))) ids.push(m[1]);
  const list = only && only.length ? ids.filter(i => only.indexOf(i) >= 0) : ids;
  const W_LIST = widths || [340, 780];

  const host = document.createElement('div');
  host.style.cssText = 'position:absolute;left:-9999px;top:0';
  document.body.appendChild(host);

  const realRaf = window.requestAnimationFrame, realCancel = window.cancelAnimationFrame;
  const proto = CanvasRenderingContext2D.prototype, realFill = proto.fillText;
  let boxes = [], capture = false;
  proto.fillText = function (t, x, y) {
    if (capture && String(t).trim()) {
      const w = this.measureText(t).width, a = this.textAlign || 'start';
      const x0 = a === 'center' ? x - w / 2 : a === 'right' ? x - w : x;
      const fs = parseFloat((this.font.match(/(\d+(?:\.\d+)?)px/) || [0, 10])[1]);
      // map the box through the current transform, or rotated axis titles get
      // reported at their untransformed coordinates and look like defects
      const m = this.getTransform(), xs = [], ys = [];
      for (const p of [[x0, y-fs*0.74], [x0+w, y-fs*0.74], [x0+w, y+fs*0.2], [x0, y+fs*0.2]]) {
        xs.push(m.a*p[0] + m.c*p[1] + m.e); ys.push(m.b*p[0] + m.d*p[1] + m.f);
      }
      boxes.push([Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys), String(t)]);
    }
    return realFill.apply(this, arguments);
  };
  function hit(a, b) {
    if (a[4].trim().length <= 2 && b[4].trim().length <= 2) return false;   // adjacent glyphs
    const ox = Math.min(a[2], b[2]) - Math.max(a[0], b[0]);
    const oy = Math.min(a[3], b[3]) - Math.max(a[1], b[1]);
    if (ox <= 0 || oy <= 0) return false;
    const small = Math.min((a[2]-a[0])*(a[3]-a[1]), (b[2]-b[0])*(b[3]-b[1]));
    return small > 0 && (ox * oy) / small > 0.25;                           // a real collision, not a graze
  }

  const report = [];
  for (const width of W_LIST) for (const id of list) for (const lv of ['junior', 'student', 'scholar']) {
    host.innerHTML = ''; host.style.width = width + 'px';
    const q = [];
    window.requestAnimationFrame = cb => q.push(cb);
    window.cancelAnimationFrame = () => {};
    try { buildSim(id, host, '#0284c7', lv); }
    catch (e) { report.push({ sim: id + '/' + lv, w: width, threw: e.message }); continue; }
    const c = host.querySelector('canvas');
    if (!c) { report.push({ sim: id + '/' + lv, w: width, threw: 'no canvas' }); continue; }
    const CW = c.width;                              // device pixels, matching the transformed boxes
    for (let i = 0; i < 40; i++) { const cb = q.shift(); if (!cb) break; cb(i * 16.7); }

    boxes = []; capture = true;
    const one = q.shift(); if (one) one(41 * 16.7);
    capture = false;

    const t0 = performance.now();
    let ran = 0;
    for (let k = 0; k < 60; k++) { const cb = q.shift(); if (!cb) break; cb((42 + k) * 16.7); ran++; }
    const ms = ran ? (performance.now() - t0) / ran : 0;

    const off = [], ov = [];
    boxes.forEach(b => { if (b[0] < -1 || b[2] > CW + 1) off.push(b[4].slice(0, 34)); });
    for (let a = 0; a < boxes.length; a++) for (let b = a + 1; b < boxes.length; b++)
      if (hit(boxes[a], boxes[b])) ov.push(boxes[a][4].slice(0, 24) + ' | ' + boxes[b][4].slice(0, 24));
    if (off.length || ov.length || ms > 8)
      report.push({ sim: id + '/' + lv, w: width, ms: +ms.toFixed(1), offCanvas: off.slice(0, 5), overlaps: ov.slice(0, 5) });
  }

  proto.fillText = realFill;
  window.requestAnimationFrame = realRaf; window.cancelAnimationFrame = realCancel;
  host.remove();
  console.log(report.length ? report : 'clean: no overflow, no overlap, no sim over 8 ms/frame');
  return report;
}
