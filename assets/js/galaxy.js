/* ===========================================================================
   Research in 3D (Research page): every paper is a star, every research
   pillar of data/research.js a coloured cloud. Papers on several pillars sit
   between their clouds; bigger stars are A* / Q1 venues.
   three.js is fetched only when the section is about to scroll into view.
   =========================================================================== */
const THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.160.0/+esm";
const ORBIT_URL = "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js/+esm";

const wrap = document.getElementById("explore");
if (wrap && window.CVLAB) {
  const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { io.disconnect(); start(); } }, { rootMargin: "400px" });
  io.observe(wrap);
}

async function start() {
  let THREE, OrbitControls;
  try {
    [THREE, { OrbitControls }] = await Promise.all([import(THREE_URL), import(ORBIT_URL)]);
  } catch (e) { wrap.classList.add("gx--off"); return; }
  const probe = document.createElement("canvas");
  if (!(probe.getContext("webgl2") || probe.getContext("webgl"))) { wrap.classList.add("gx--off"); return; }
  const H = window.CVLAB, RESEARCH = window.RESEARCH;
  const $ = (s) => wrap.querySelector(s);
  const AXES = { what: "What we perceive", how: "How we make it work", past: "Earlier work" };
  const COLS = ["#fdba74", "#fcd34d", "#7dd3fc", "#c4b5fd", "#6ee7b7", "#fda4af", "#bef264", "#5eead4", "#a5b4fc", "#f0abfc", "#fb923c", "#67e8f9", "#d6d3d1"];
  const touch = matchMedia("(pointer: coarse)").matches;

  // seeded random numbers: the galaxy has the same shape on every visit
  let seed = 7;
  const rnd = () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const gauss = () => Math.sqrt(-2 * Math.log(rnd() || 1e-9)) * Math.cos(2 * Math.PI * rnd());

  // ---- data ----------------------------------------------------------------------------------
  const keys = RESEARCH.map((r) => r.short || r.title);
  const papers = window.PUBLICATIONS.concat(H.archiveObjects()).map((p) => ({
    p, topics: H.topicsOf(p).filter((t) => keys.includes(t)), tier: H.tierOf(p), year: +p.year,
    href: p.url || p.links?.project || p.links?.paper || p.links?.pdf || p.links?.doi || null
  })).filter((x) => x.year);
  const themes = RESEARCH.map((r, i) => ({ key: keys[i], axis: r.axis || "what", color: new THREE.Color(COLS[i % COLS.length]), css: COLS[i % COLS.length] }));
  themes.forEach((t) => (t.n = papers.filter((x) => x.topics.includes(t.key)).length));
  const byKey = Object.fromEntries(themes.map((t) => [t.key, t]));

  // ---- layout: clouds on a sphere (earlier work further out), papers between their clouds -------
  const R = 78;
  themes.forEach((t, i) => {
    const n = themes.length, y = 1 - (i + .5) / n * 2, r = Math.sqrt(1 - y * y), phi = i * Math.PI * (3 - Math.sqrt(5));
    t.pos = new THREE.Vector3(Math.cos(phi) * r, y * .8, Math.sin(phi) * r).multiplyScalar(t.axis === "past" ? R * 1.25 : R);
  });
  papers.forEach((x) => {
    const ts = x.topics.map((k) => byKey[k]), c = new THREE.Vector3(), s = ts.length > 1 ? 4 : 6.5;
    if (ts.length) { ts.forEach((t) => c.add(t.pos)); c.multiplyScalar(1 / ts.length); }
    x.pos = c.add(new THREE.Vector3(gauss() * s, gauss() * s, gauss() * s));
    x.color = ts.length ? ts[0].color.clone() : new THREE.Color("#94a3b8");
    if (ts.length > 1) x.color.lerp(ts[1].color, .35);
    x.size = x.tier === "top" ? 4.2 : x.tier === "q1" ? 3.5 : 2.3;
  });
  const years = papers.map((x) => x.year), Y0 = Math.min(...years), Y1 = Math.max(...years);

  // names written next to the stars: the short name before ":" ("EventHub"), otherwise the first words of the title.
  // Priority: selected / awarded papers, then A* & Q1, then recent ones
  const shortName = (t) => {
    const head = t.split(":")[0];
    if (t.includes(":") && head.length <= 22) return head;
    let out = "";
    for (const w of t.split(" ")) { if ((out + " " + w).trim().length > 24) break; out = (out + " " + w).trim(); }
    return out + "…";
  };
  papers.forEach((x) => {
    x.label = shortName(x.p.title);
    x.rank = (x.p.featured || x.p.tag ? 4 : 0) + (["top", "q1"].includes(x.tier) ? 2 : 0) + (x.year >= 2023 ? 1 : 0) + (x.label.endsWith("…") ? 0 : 1);
  });
  const byRank = papers.map((x, i) => i).sort((a, b) => papers[b].rank - papers[a].rank || papers[b].year - papers[a].year);

  // ---- scene ---------------------------------------------------------------------------------
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  wrap.prepend(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, .1, 2000);
  const HOME = new THREE.Vector3(0, 40, 190);
  camera.position.copy(HOME);
  const controls = new OrbitControls(camera, renderer.domElement);
  Object.assign(controls, { enableDamping: true, dampingFactor: .06, autoRotate: true, autoRotateSpeed: .45, minDistance: 25, maxDistance: 340, enablePan: false, enableZoom: false });
  // the page keeps scrolling over the galaxy: vertical swipes scroll, horizontal ones rotate
  renderer.domElement.style.touchAction = "pan-y";

  const VERT = `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
    void main() { vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`;
  const STAR = `varying vec3 vC; varying float vA;
    void main() { float d = length(gl_PointCoord - .5); if (d > .5) discard;
      float core = smoothstep(.22, .0, d), glow = smoothstep(.5, .1, d) * .55; gl_FragColor = vec4(vC * (core + glow) + core * .35, (core + glow) * vA); }`;
  const HALO = `varying vec3 vC; varying float vA;
    void main() { float d = length(gl_PointCoord - .5); if (d > .5) discard; gl_FragColor = vec4(vC, smoothstep(.5, .0, d) * vA); }`;
  const uniforms = { uScale: { value: 300 } };
  const material = (frag) => new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: frag, uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  function cloud(items, pos, col, size, alpha, frag) {
    const g = new THREE.BufferGeometry(), n = items.length;
    const P = new Float32Array(n * 3), C = new Float32Array(n * 3), S = new Float32Array(n), A = new Float32Array(n);
    items.forEach((x, i) => { pos(x).toArray(P, i * 3); col(x).toArray(C, i * 3); S[i] = size(x); A[i] = alpha(x); });
    g.setAttribute("position", new THREE.BufferAttribute(P, 3)); g.setAttribute("color", new THREE.BufferAttribute(C, 3));
    g.setAttribute("size", new THREE.BufferAttribute(S, 1)); g.setAttribute("alpha", new THREE.BufferAttribute(A, 1));
    const pts = new THREE.Points(g, material(frag)); scene.add(pts);
    return { pts, A, g };
  }
  const halos = cloud(themes, (t) => t.pos, (t) => t.color, (t) => 34 + Math.sqrt(t.n) * 5, () => .16, HALO);
  const stars = cloud(papers, (x) => x.pos, (x) => x.color, (x) => x.size, () => 0, STAR);
  papers.forEach((x) => (x.a = 0));

  const dust = new THREE.BufferGeometry(), DP = new Float32Array(1500 * 3);
  for (let i = 0; i < 1500; i++) new THREE.Vector3(gauss(), gauss(), gauss()).normalize().multiplyScalar(260 + rnd() * 400).toArray(DP, i * 3);
  dust.setAttribute("position", new THREE.BufferAttribute(DP, 3));
  scene.add(new THREE.Points(dust, new THREE.PointsMaterial({ color: 0x334155, size: 1.2, sizeAttenuation: false })));

  const linkGeo = new THREE.BufferGeometry();
  linkGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(36), 3));
  const links = new THREE.LineSegments(linkGeo, new THREE.LineBasicMaterial({ color: 0xfed7aa, transparent: true, opacity: .55 }));
  links.visible = false; scene.add(links);

  // ---- labels and legend ---------------------------------------------------------------------
  const labelBox = $(".gx-labels");
  themes.forEach((t) => { t.el = document.createElement("div"); t.el.className = "gx-label"; labelBox.appendChild(t.el); });
  const POOL = 20, starLabels = Array.from({ length: POOL }, () => { const e = document.createElement("span"); e.className = "gx-star"; labelBox.appendChild(e); return e; });
  const legend = $(".gx-legend");
  legend.innerHTML = Object.entries(AXES).map(([ax, name]) => `<h6>${name}</h6>` + themes.filter((t) => t.axis === ax)
    .map((t) => `<button type="button" data-k="${t.key}" style="--c:${t.css}"><i></i><span>${t.key}</span><small>${t.n}</small></button>`).join("")).join("");
  let focus = null;
  const camTo = { pos: null, target: null };
  function setFocus(k) {
    focus = k && focus !== k ? k : null;
    legend.classList.toggle("focus", !!focus);
    legend.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.k === focus));
    controls.autoRotate = !focus;
    if (focus) {
      const t = byKey[focus], dir = t.pos.clone().normalize();
      camTo.target = t.pos.clone().multiplyScalar(.7);
      camTo.pos = t.pos.clone().add(dir.multiplyScalar(70)).add(new THREE.Vector3(0, 12, 0));
    } else { camTo.target = new THREE.Vector3(); camTo.pos = HOME.clone(); }
  }
  legend.addEventListener("click", (e) => { const b = e.target.closest("[data-k]"); if (b) setFocus(b.dataset.k); });
  $(".gx-reset").onclick = () => { focus = null; setFocus(null); setYear(Y1); controls.autoRotate = true; };
  // "Explore in 3D" links on the pillar slides
  addEventListener("gx:focus", (e) => { focus = null; setFocus(e.detail); });

  // ---- timeline ------------------------------------------------------------------------------
  const range = $(".gx-time input"), yr = $(".gx-yr"), cnt = $(".gx-cnt"), total = $(".gx-n"), playBtn = $(".gx-play");
  Object.assign(range, { min: Y0, max: Y1, value: Y1, step: 1 });
  let upTo = Y1, playing = null;
  function setYear(y) {
    upTo = +y; range.value = upTo; yr.textContent = upTo;
    const n = papers.filter((x) => x.year <= upTo).length;
    cnt.textContent = `${n} papers`; total.textContent = n;
  }
  range.oninput = () => { stop(); setYear(range.value); };
  const PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>', PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
  function stop() { clearInterval(playing); playing = null; playBtn.innerHTML = PLAY; playBtn.setAttribute("aria-label", "Play the timeline"); }
  playBtn.onclick = () => {
    if (playing) return stop();
    if (upTo >= Y1) setYear(Y0);
    playBtn.innerHTML = PAUSE; playBtn.setAttribute("aria-label", "Pause");
    playing = setInterval(() => { if (upTo >= Y1) return stop(); setYear(upTo + 1); }, 420);
  };
  setYear(Y1);

  // ---- zoom: Ctrl/⌘ + wheel, or after a click on the galaxy (plain wheel keeps scrolling the page) ----
  const cv = renderer.domElement;
  cv.addEventListener("wheel", (e) => {
    if (!(e.ctrlKey || e.metaKey || controls.enableZoom)) return;
    e.preventDefault();
    const d = camera.position.clone().sub(controls.target), k = Math.exp(e.deltaY * .0015);
    const len = Math.min(controls.maxDistance, Math.max(controls.minDistance, d.length() * k));
    camera.position.copy(controls.target).add(d.setLength(len)); camTo.pos = null;
  }, { passive: false });
  cv.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") controls.enableZoom = false; });

  // ---- hover, tap and click ------------------------------------------------------------------
  const tip = $(".gx-tip");
  let hover = -1, downAt = null;
  // nearest visible star on screen: within 14px with a mouse, 30px with a finger
  const sp = new THREE.Vector3();
  function pick(e) {
    const r = cv.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top;
    const lim = e.pointerType === "mouse" ? 14 : 30;
    let best = -1, bd = lim * lim;
    papers.forEach((x, i) => {
      if (x.a < .3) return;
      sp.copy(x.pos).project(camera);
      if (sp.z > 1) return;
      const dx = (sp.x * .5 + .5) * r.width - mx, dy = (-sp.y * .5 + .5) * r.height - my, d = dx * dx + dy * dy;
      if (d < bd) { bd = d; best = i; }
    });
    return best;
  }
  function showTip(i, e) {
    hover = i;
    cv.style.cursor = i >= 0 ? "pointer" : "";
    if (i < 0) { tip.classList.remove("on"); links.visible = false; return; }
    const x = papers[i], r = cv.getBoundingClientRect();
    tip.innerHTML = `${x.p.image ? H.figImg(x.p.image) : ""}<b>${x.p.title}</b>
      <div class="meta"><span class="v">${H.venueLabel(x.p)}</span><span class="t">${x.topics.join(" · ") || "Other"}</span></div>
      ${x.p.tag ? `<div class="t">★ ${x.p.tag}</div>` : ""}${x.href ? `<div class="go">${touch ? "Tap again to open" : "Click to open"} →</div>` : ""}`;
    tip.style.left = Math.min(e.clientX - r.left + 16, r.width - 300) + "px";
    tip.style.top = Math.min(e.clientY - r.top + 16, r.height - 260) + "px";
    tip.classList.add("on");
    const arr = linkGeo.attributes.position.array; arr.fill(0);
    x.topics.slice(0, 6).forEach((k, j) => { x.pos.toArray(arr, j * 6); byKey[k].pos.toArray(arr, j * 6 + 3); });
    linkGeo.setDrawRange(0, Math.min(x.topics.length, 6) * 2); linkGeo.attributes.position.needsUpdate = true; links.visible = true;
  }
  cv.addEventListener("pointermove", (e) => { if (e.pointerType === "mouse") showTip(pick(e), e); });
  // touch pointers "leave" right after the finger is lifted: only the mouse closes the card this way
  cv.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") showTip(-1); });
  cv.addEventListener("pointerdown", (e) => { downAt = [e.clientX, e.clientY]; controls.autoRotate = false; if (e.pointerType === "mouse") controls.enableZoom = true; });
  cv.addEventListener("pointerup", (e) => {
    if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > (e.pointerType === "mouse" ? 6 : 12)) return;
    const i = pick(e);
    if (e.pointerType !== "mouse" && i !== hover) return showTip(i, e);   // first tap: show the card
    if (i >= 0 && papers[i].href) open(H.url(papers[i].href), "_blank", "noopener");
  });

  // ---- loop ----------------------------------------------------------------------------------
  let themeLabelsOn = true;
  function resize() {
    const w = wrap.clientWidth, h = wrap.clientHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    if (w > 760) camera.setViewOffset(w, h, -Math.min(160, w * .1), h * .04, w, h); else camera.clearViewOffset();   // leave room for the legend
    camera.updateProjectionMatrix();
    uniforms.uScale.value = h * .9 * renderer.getPixelRatio();
    const k = Math.max(1, 1.25 / camera.aspect);                        // narrow screens: step back so it all fits
    HOME.set(0, 40, 190).multiplyScalar(k); controls.maxDistance = 340 * k;
    if (!camTo.pos && !focus) camera.position.copy(HOME);
    themeLabelsOn = getComputedStyle(themes[0].el).display !== "none";   // hidden on phones
  }
  addEventListener("resize", resize); resize();
  let visible = true;
  new IntersectionObserver((es) => (visible = es[0].isIntersecting)).observe(wrap);
  const v = new THREE.Vector3();
  wrap.classList.add("gx--on");
  (function loop() {
    requestAnimationFrame(loop);
    if (!visible) return;                                                // off screen: no work
    if (camTo.pos) {
      camera.position.lerp(camTo.pos, .06); controls.target.lerp(camTo.target, .06);
      if (camera.position.distanceTo(camTo.pos) < .5) camTo.pos = null;
    }
    controls.update();
    papers.forEach((x, i) => {
      let goal = x.year <= upTo ? (playing && x.year >= upTo - 1 ? 1.4 : 1) : 0;
      if (focus && !x.topics.includes(focus)) goal *= .08;
      x.a += (goal - x.a) * .08; stars.A[i] = x.a;
    });
    stars.g.attributes.alpha.needsUpdate = true;
    themes.forEach((t, i) => { const g = !focus || focus === t.key ? .16 : .03; halos.A[i] += (g - halos.A[i]) * .08; });
    halos.g.attributes.alpha.needsUpdate = true;
    const w = wrap.clientWidth, h = wrap.clientHeight;
    themes.forEach((t) => {
      v.copy(t.pos).project(camera);
      const n = papers.filter((x) => x.year <= upTo && x.topics.includes(t.key)).length;
      t.el.style.opacity = v.z < 1 && n > 0 && (!focus || focus === t.key) ? (focus ? 1 : .85) : 0;
      t.el.style.left = (v.x * .5 + .5) * w + "px"; t.el.style.top = (-v.y * .5 + .5) * h + "px";
      if (t._n !== n) { t._n = n; t.el.innerHTML = `${t.key}<small>${n} papers</small>`; }
    });
    placeStarLabels(w, h);
    renderer.render(scene, camera);
  })();

  // write the names of the most relevant visible stars, skipping any that would overlap
  function placeStarLabels(w, h) {
    const max = focus ? 16 : touch ? 7 : 16, taken = [];
    if (themeLabelsOn) themes.forEach((t) => { if (+t.el.style.opacity > 0) taken.push([parseFloat(t.el.style.left) - 70, parseFloat(t.el.style.top) - 16, 140, 32]); });
    let n = 0;
    for (const i of byRank) {
      if (n >= max) break;
      const x = papers[i];
      if (x.year > upTo || i === hover || (focus && !x.topics.includes(focus))) continue;
      v.copy(x.pos).project(camera);
      if (v.z > 1) continue;
      const px = (v.x * .5 + .5) * w + 7, py = (-v.y * .5 + .5) * h, bw = x.label.length * 6 + 6, box = [px, py - 8, bw, 16];
      if (px < 8 || px + bw > w - 8 || py < 90 || py > h - 90) continue;
      if (taken.some((r) => box[0] < r[0] + r[2] && box[0] + box[2] > r[0] && box[1] < r[1] + r[3] && box[1] + box[3] > r[1])) continue;
      taken.push(box);
      const e = starLabels[n++];
      if (e.textContent !== x.label) e.textContent = x.label;
      e.style.left = px + "px"; e.style.top = py + "px"; e.style.opacity = 1;
    }
    for (; n < POOL; n++) starLabels[n].style.opacity = 0;
  }
}
