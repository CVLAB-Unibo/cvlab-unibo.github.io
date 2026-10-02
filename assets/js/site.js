/* ===========================================================================
   Site renderer: builds navbar + footer on every page and renders the
   content from data/*.js. No build step, no dependencies.
   Each page sets <body data-root="../" data-page="publications">.
   =========================================================================== */
(function () {
  const ROOT = document.body.dataset.root || "";
  const PAGE = document.body.dataset.page || "home";
  const S = window.SITE;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel, el = document) => el.querySelector(sel);
  const url = (p) => (/^(https?:|mailto:|#)/.test(p) ? p : ROOT + p);

  /* ---------- navbar & footer ------------------------------------------------ */
  function brandHtml() {
    const parent = S.parentLogo
      ? `<a href="${esc(S.parentUrl)}" target="_blank" rel="noopener"><img src="${url(S.parentLogo)}" alt="${esc(S.affiliation)}"></a><span class="brand-divider"></span>`
      : "";
    return `<div class="brand">${parent}
      <a class="brand" href="${ROOT || "./"}"><img src="${url(S.logo)}" alt="${esc(S.name)}">
        <span class="brand-text"><b>${esc(S.name)}</b><small>${esc(S.fullName)} · ${esc(S.affiliation)}</small></span></a></div>`;
  }

  function renderNav() {
    const links = S.nav.map((n) => {
      const active = n.href.replace(/\/$/, "") === PAGE ? " active" : "";
      return `<li><a class="${active}" href="${url(n.href)}">${esc(n.label)}</a></li>`;
    }).join("");
    $("#site-nav").outerHTML = `<nav class="navbar"><div class="container">
      ${brandHtml()}
      <button class="nav-toggle" aria-label="Toggle navigation"><span></span></button>
      <ul class="nav-links">${links}</ul></div></nav>`;
    $(".nav-toggle").addEventListener("click", () => $(".nav-links").classList.toggle("open"));
  }

  function renderFooter() {
    const c = S.contact;
    $("#site-footer").outerHTML = `<footer class="footer"><div class="container">
      <div class="cols">
        <div><a href="${ROOT || "./"}"><img class="footer-logo" src="${url(S.logoFull || S.logo)}" alt="${esc(S.fullName)}"></a>
          <small><a href="${esc(S.departmentUrl || "#")}" target="_blank" rel="noopener">${esc(S.department)}</a><br>${esc(S.affiliation)}</small></div>
        <div><h6>Links</h6><ul>
          <li><a href="${ROOT || "./"}">Home</a></li>
          ${S.nav.map((n) => `<li><a href="${url(n.href)}">${esc(n.label)}</a></li>`).join("")}
        </ul></div>
        <div><h6>Contact</h6><small>${c.lines.map(esc).join("<br>")}<br>
          <a href="mailto:${esc(c.email)}">${esc(c.email)}</a></small></div>
        <div><h6>Connect</h6><ul>
          ${S.social.map((s) => `<li><a href="${esc(s.href)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")}
        </ul></div>
      </div>
      <div class="copy">© ${new Date().getFullYear()} ${esc(S.fullName)}, ${esc(S.affiliation)}</div>
    </div></footer>`;
  }

  /* ---------- publications --------------------------------------------------- */
  const teamUrls = {};
  (window.TEAM || []).forEach((g) => g.people.forEach((p) => { if (p.url && p.url !== "#") teamUrls[p.name] = p.url; }));

  function authorsHtml(p) {
    const list = p.authors.map((a) => {
      const clean = a.replace(/\*$/, "");
      const star = a.endsWith("*") ? "*" : "";
      const u = p.authorLinks?.[clean] || teamUrls[clean];
      return u ? `<a class="au" href="${esc(u)}" target="_blank" rel="noopener">${esc(clean)}</a>${star}` : `<span class="au">${esc(clean)}</span>${star}`;
    }).join(", ");
    return list + (p.equalContribution ? ' <span class="text-muted">(* equal contribution)</span>' : "");
  }

  function autoBibtex(p) {
    if (p.bibtex) return p.bibtex;
    const clean = (a) => a.replace(/\*$/, "");
    const first = clean(p.authors[0]).split(" ").pop().toLowerCase().replace(/[^a-z]/g, "");
    const word = (p.title.split(/\W+/).find((w) => w.length > 3) || "paper").toLowerCase();
    const kind = p.kind || "Conference";
    const type = kind === "Thesis" ? "phdthesis" : kind === "Journal" || kind === "Preprint" ? "article" : "inproceedings";
    const field = { phdthesis: "school", article: "journal", inproceedings: "booktitle" }[type];
    const venue = type === "phdthesis" ? p.venue.replace(/^PhD thesis, /, "") : p.venue;
    const authors = p.authors.map(clean).map((a) => (/^et al\.?$/.test(a) ? "others" : a)).join(" and ");
    return `@${type}{${first}${p.year}${word},\n  title  = {${p.title}},\n  author = {${authors}},\n  ${field.padEnd(6)}= {${venue}},\n  year   = {${p.year}}\n}`;
  }

  // archive tuples [year, title, authors, venue] -> publication-like objects
  const JOURNAL_RE = /Trans\.?\s|Computer Graphics and Applications|Journal|Microsystems|\bJ\. |Int\. J\.|Lett\. |Sensors|Remote\. Sens|IEEE Access|Neural Networks|Comput\. |Image Vis|Mach\. Vis|Real Time Imaging|Forum|Pattern Recognit|Microprocess|EURASIP|Robotics Autom|Appl\. /;
  const normTitle = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const titleKeys = (t) => { const k = [normTitle(t)]; const pre = t.split(":")[0]; if (t.includes(":") && pre.length <= 16) k.push(normTitle(pre)); return k; };
  function archiveObjects() {
    const have = new Set((window.PUBLICATIONS || []).flatMap((p) => titleKeys(p.title)));
    return (window.ARCHIVE || []).filter((a) => !titleKeys(a[1]).some((k) => have.has(k))).map(([year, title, authors, venue, topics]) => {
      const arxiv = (venue.match(/CoRR abs\/(\d{4}\.\d{4,5})/) || [])[1];
      const kind = /^PhD thesis/.test(venue) ? "Thesis" : arxiv ? "Preprint" : JOURNAL_RE.test(venue) ? "Journal" : "Conference";
      return {
        year, title, venue, kind, archive: true, topics,
        authors: authors.split(", "),
        links: arxiv ? { pdf: "https://arxiv.org/abs/" + arxiv } : {}
      };
    });
  }

  const LINK_LABELS = { project: "Project", pdf: "PDF", preprint: "Preprint", arxiv: "arXiv", supp: "Supp.", code: "Code", demo: "Demo", video: "Video", poster: "Poster", slides: "Slides", weights: "Weights", dataset: "Dataset", extended: "Extended paper", leaderboard: "Leaderboard" };

  const topicHref = (label) => `${url("publications/")}?topic=${encodeURIComponent(label)}`;
  const tagHref = (label) => `${url("publications/")}?tag=${encodeURIComponent(label)}`;

  // one compact card for every publication (thumbnail only when an image is given)
  function pubCard(p, idx) {
    const href = p.url ? url(p.url) : p.links?.project ? url(p.links.project) : null;
    const ext = href && /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
    const thumb = p.image ? `<${href ? "a" : "div"} class="pub-thumb"${href ? ` href="${href}"${ext} tabindex="-1" aria-hidden="true"` : ""}><img src="${url(p.image)}" alt="" loading="lazy"></${href ? "a" : "div"}>` : "";
    const topics = topicsOf(p), kws = keywordsOf(p);
    const venue = p.venueUrl ? `<a href="${esc(p.venueUrl)}">${esc(p.venue)}</a>` : esc(p.venue);
    const keys = Object.keys(LINK_LABELS).filter((k) => p.links?.[k]).concat(Object.keys(p.links || {}).filter((k) => !LINK_LABELS[k]));
    const buttons = keys.map((k) => `<a class="btn btn-xs" href="${url(p.links[k])}" target="_blank" rel="noopener">${esc(LINK_LABELS[k] || k)}</a>`).join("");
    return `<article class="card pub${p.image ? " has-img" : ""}" data-topics="${esc(topics.join("|"))}" data-tags="${esc(kws.join("|"))}" data-search="${esc((p.title + " " + p.authors.join(" ") + " " + p.venue + " " + (p.abstract || "") + " " + topics.join(" ") + " " + kws.join(" ")).toLowerCase())}">
      ${thumb}
      <div class="pub-main">
        <div class="pub-meta">
          <span class="badge badge--venue">${esc(venueLabel(p))}</span>${p.rank ? `<span class="rank" title="Venue ranking">${esc(p.rank)}</span>` : ""}
          ${p.tag ? `<span class="badge badge--tag">${esc(p.tag)}</span>` : ""}
          ${p.kind && !["Conference", "Journal"].includes(p.kind) ? `<span class="badge">${esc(p.kind)}</span>` : ""}
          ${topics.slice(0, 2).map((t) => `<a class="topic-tag ax-${axisOf(t)}" href="${topicHref(t)}" data-topic="${esc(t)}">${esc(t)}</a>`).join("")}${kws.slice(0, 2).map((t) => `<a class="kw-tag" href="${tagHref(t)}" data-tag="${esc(t)}">${esc(t)}</a>`).join("")}
        </div>
        <h3 class="pub-title">${href ? `<a href="${href}"${ext}>${esc(p.title)}</a>` : `<span>${esc(p.title)}</span>`}</h3>
        <p class="pub-authors">${authorsHtml(p)}</p>
        ${p.abstract ? `<p class="pub-abstract">${esc(p.abstract)}</p>` : ""}
        <div class="pub-foot">
          <span class="pub-venue">${venue}</span>
          <span class="pub-links">${buttons}<button type="button" class="btn btn-xs btn--bib" data-bib="${idx}">BibTeX</button></span>
        </div>
      </div>
    </article>`;
  }

  /* ---------- publications summary: venue quality at a glance ------------------ */
  const venueKey = (p) => venueLabel(p).replace(/\s*\d{4}$/, "").trim();
  function tierOf(p) {
    const V = window.VENUES || {};
    if (/^CoRR|arXiv/i.test(p.venue)) return "preprint";
    if (/^PhD thesis/i.test(p.venue)) return "thesis";
    if (/^Zenodo/i.test(p.venue)) return "preprint";                       // demos / software records
    const key = venueKey(p);
    if (/workshop/i.test(p.venue + " " + key) || /^(ICCVW|CVPRW|ECCVW|WACVW|3DVW)$/.test(key)) return "workshop";
    if (p.rank) {
      if (/A\+\+|A\*/.test(p.rank)) return "top";
      if (/Q1/.test(p.rank)) return "q1";
      if (/GGS A/.test(p.rank)) return "a";
    }
    if ((V.top || []).includes(key)) return "top";
    if ((V.q1 || []).includes(key)) return "q1";
    if ((V.a || []).includes(key)) return "a";
    return p.kind === "Journal" ? "journal" : "other";
  }
  const TIERS = {
    top:   { name: "A*/A++ conferences",  color: "#c2410c" },
    q1:    { name: "Q1 journals",         color: "#57534e" },
    a:     { name: "A-rated conferences", color: "var(--hl)" },
    other: { name: "Other venues",        color: "var(--line-2)" }
  };

  // quiet summary: one sentence, one slim bar, one legend line
  function renderPubSummary(all) {
    const el = $("#pub-summary");
    if (!el) return;
    const last = Math.max(...all.map((p) => p.year));
    let from = last - 4;                       // default view: the last 5 years
    const draw = () => {
      const inRange = all.filter((p) => p.year >= from);
      const peer = inRange.filter((p) => !["preprint", "thesis", "workshop"].includes(tierOf(p)));
      const bucket = (p) => { const t = tierOf(p); return TIERS[t] ? t : "other"; };
      const n = { top: 0, q1: 0, a: 0, other: 0 };
      peer.forEach((p) => n[bucket(p)]++);
      const top = n.top + n.q1;
      const pct = peer.length ? Math.round((100 * top) / peer.length) : 0;
      const tiers = ["top", "q1", "a", "other"].filter((t) => n[t]);
      const nWs = inRange.filter((p) => tierOf(p) === "workshop").length;
      el.innerHTML = `<div class="sum-row"><p class="sum-lead"><b>${pct}%</b> of our peer-reviewed papers${from ? ` since ${from}` : ""} (${top} of ${peer.length}) are in A*/A++ conferences or Q1 journals.</p>
          <div class="seg" role="group" aria-label="Time range"><button type="button" data-from="${last - 4}" class="${from ? "on" : ""}">Last 5 years</button><button type="button" data-from="0" class="${from === 0 ? "on" : ""}">All time</button></div></div>
        <div class="sum-bar" role="img" aria-label="Peer-reviewed papers by venue tier">${tiers.map((t) => `<i style="flex:${n[t]};background:${TIERS[t].color}" title="${TIERS[t].name}: ${n[t]}"></i>`).join("")}</div>
        <div class="sum-legend">${tiers.map((t) => `<span><i style="background:${TIERS[t].color}"></i><b>${n[t]}</b>${TIERS[t].name}</span>`).join("")}
          <span class="info" tabindex="0" title="Conference tiers follow the GGS rating (A++ ≈ CORE A*); journals are Q1 in their Scimago/JCR category. Not counted: ${nWs} workshop papers, preprints and theses. Venue lists: data/venues.js">how we count</span></div>`;
    };
    el.addEventListener("click", (e) => { const b = e.target.closest("[data-from]"); if (b) { from = +b.dataset.from; draw(); } });
    draw();
  }

  function renderPublications() {
    const root = $("#publications-list");
    const all = [...window.PUBLICATIONS].concat(archiveObjects());
    renderPubSummary(all);
    const years = {};
    all.forEach((p) => (years[p.year] ||= []).push(p));
    root.innerHTML = Object.keys(years).sort((a, b) => b - a).map((y) =>
      `<section class="year-group"><h2 class="year-heading">${y}<span class="year-count">${years[y].length}</span></h2><div class="year-items">${years[y].map((p) => pubCard(p, all.indexOf(p))).join("")}</div></section>`
    ).join("");
    wirePubs(root, all);

    // filter bars: pillars (always visible) + secondary keyword groups ("More filters")
    const tcount = {}, kcount = {};
    all.forEach((p) => { topicsOf(p).forEach((t) => (tcount[t] = (tcount[t] || 0) + 1)); keywordsOf(p).forEach((t) => (kcount[t] = (kcount[t] || 0) + 1)); });
    const order = (window.RESEARCH || []).map((r) => r.short || r.title);
    const tlabels = order.filter((t) => tcount[t]).concat(Object.keys(tcount).filter((t) => !order.includes(t)).sort());
    const bar = $("#pub-topics"), more = $("#pub-more");
    const AXES = { what: "Topic", how: "Approach" };
    const btn = (t) => `<button type="button" class="tfilter" data-f="${esc(t)}">${esc(t)} <span>${tcount[t]}</span></button>`;
    const allBtn = `<button type="button" class="tfilter on" data-f="">All <span>${all.length}</span></button>`;
    if (bar) bar.innerHTML = Object.entries(AXES).map(([ax, name], k) => {
        const items = (window.RESEARCH || []).filter((r) => (r.axis || "what") === ax).map((r) => r.short || r.title).filter((t) => tcount[t]);
        return items.length ? `<div class="axis" data-ax="${ax}"><span class="fname">${name}</span><div class="tfilters">${k === 0 ? allBtn : ""}${items.map(btn).join("")}</div></div>` : "";
      }).join("") +
      (tlabels.some((t) => !order.includes(t)) ? `<div class="axis"><span class="fname">Other</span><div class="tfilters">${tlabels.filter((t) => !order.includes(t)).map(btn).join("")}</div></div>` : "");
    const dimOf = DIM_OF();
    const extra = Object.keys(kcount).filter((l) => !dimOf[l]);                    // keywords not in the taxonomy
    const groups = Object.entries(TAX()).map(([d, g]) => [d, Object.keys(g).filter((l) => kcount[l])]).concat(extra.length ? [["Other", extra.sort()]] : []).filter(([, l]) => l.length);
    if (more) more.innerHTML = `<details class="more-filters"><summary>More filters</summary>` +
      groups.map(([d, labels]) => `<div class="fgroup"><span class="fname">${esc(d)}</span><div class="tfilters">${labels.map((l) => `<button type="button" class="tfilter kw" data-k="${esc(l)}">${esc(l)} <span>${kcount[l]}</span></button>`).join("")}</div></div>`).join("") + `</details>`;

    const box = $("#pub-search");
    let activeT = "", activeK = "";
    const apply = () => {
      const q = box ? box.value.trim().toLowerCase() : "";
      root.querySelectorAll(".card").forEach((c) => {
        const okT = !activeT || c.dataset.topics.split("|").includes(activeT);
        const okK = !activeK || c.dataset.tags.split("|").includes(activeK);
        c.hidden = !okT || !okK || (!!q && !c.dataset.search.includes(q));
      });
      root.querySelectorAll(".year-group").forEach((g) => (g.hidden = ![...g.querySelectorAll(".card")].some((c) => !c.hidden)));
      bar?.querySelectorAll(".tfilter").forEach((b) => b.classList.toggle("on", b.dataset.f === activeT));
      more?.querySelectorAll(".tfilter").forEach((b) => b.classList.toggle("on", b.dataset.k === activeK));
      if (activeK && more) more.querySelector("details").open = true;
    };
    const sync = () => {
      const prm = new URLSearchParams();
      if (activeT) prm.set("topic", activeT);
      if (activeK) prm.set("tag", activeK);
      history.replaceState(null, "", prm.toString() ? "?" + prm : location.pathname);
      apply();
    };
    bar?.addEventListener("click", (e) => { const b = e.target.closest("[data-f]"); if (b) { activeT = b.dataset.f; sync(); } });
    more?.addEventListener("click", (e) => { const b = e.target.closest("[data-k]"); if (b) { activeK = b.dataset.k === activeK ? "" : b.dataset.k; sync(); } });
    root.addEventListener("click", (e) => {
      const t = e.target.closest("[data-topic]"), k = e.target.closest("[data-tag]");
      if (t) { e.preventDefault(); activeT = t.dataset.topic === activeT ? "" : t.dataset.topic; }
      else if (k) { e.preventDefault(); activeK = k.dataset.tag === activeK ? "" : k.dataset.tag; }
      else return;
      sync(); window.scrollTo({ top: root.offsetTop - 260, behavior: "smooth" });
    });
    box?.addEventListener("input", apply);

    // ?topic=<pillar short label or full title>, ?tag=<keyword>, ?q=<text>
    const prm = new URLSearchParams(location.search);
    const want = prm.get("topic");
    if (want) { const r = (window.RESEARCH || []).find((x) => x.title === want || x.short === want); activeT = r ? (r.short || r.title) : want; }
    if (prm.get("tag")) activeK = prm.get("tag");
    if (prm.get("q") && box) box.value = prm.get("q");
    apply();
  }

  function wirePubs(root, pubs) {
    root.addEventListener("click", (e) => {
      const bib = e.target.closest("[data-bib]");
      if (bib) openBib(pubs[+bib.dataset.bib]);
    });
  }

  function openBib(p) {
    let d = $("#bibtex-dialog");
    if (!d) {
      d = document.createElement("dialog");
      d.id = "bibtex-dialog"; d.className = "bibtex";
      d.innerHTML = `<h2>BibTeX</h2><pre></pre><div class="dialog-actions">
        <button class="btn btn-primary btn-xs" data-copy>Copy</button>
        <button class="btn btn-light btn-xs" data-close>Close</button></div>`;
      d.addEventListener("click", (e) => {
        if (e.target === d || e.target.dataset.close !== undefined) d.close();
        if (e.target.dataset.copy !== undefined) {
          navigator.clipboard?.writeText($("pre", d).textContent);
          e.target.textContent = "Copied!";
          setTimeout(() => (e.target.textContent = "Copy"), 1500);
        }
      });
      document.body.appendChild(d);
    }
    $("pre", d).textContent = autoBibtex(p);
    d.showModal();
  }

  const ICONS = {
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    topics: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5.2a3.2 3.2 0 0 1 0 5.6M18 14.4c1.8.7 3 2.4 3 4.6"/>'
  };

  function factRow(f) {
    const icon = `<span class="fact-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[f.icon] || ICONS.topics}</svg></span>`;
    let body = f.value ? `<div class="fact-text">${f.value}</div>` : "";
    if (f.chips === "research") body = `<div class="chips">${window.RESEARCH.map((r) => `<a class="chip" href="${url("research/")}">${esc(r.title)}</a>`).join("")}</div>`;
    if (f.mail) body = `<div class="fact-text"><a href="mailto:${esc(S.contact.email)}">${esc(S.contact.email)}</a></div>`;
    const ext = /^https?:/.test(f.link?.href || "");
    const link = f.link ? `<a class="fact-link" href="${esc(url(f.link.href))}"${ext ? ' target="_blank" rel="noopener"' : ""}>${esc(f.link.label)} →</a>` : "";
    return `<div class="fact">${icon}<div class="fact-main"><div class="fact-label">${esc(f.label)}</div>${body}${link}</div></div>`;
  }

  /* ---------- home: selected publications (one row per paper, year | thumbnail | text) ---------- */
  function hlRow(p) {
    const href = p.url ? url(p.url) : p.links?.project ? url(p.links.project) : p.links?.pdf ? url(p.links.pdf) : null;
    const ext = href && /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
    const tag = topicsOf(p)[0] || "";
    const img = p.image ? `<img src="${url(p.image)}" alt="" loading="lazy">` : `<div class="hl-ph"><span>${esc(tag || "Publication")}</span><small>image coming soon</small></div>`;
    const keys = Object.keys(LINK_LABELS).filter((k) => p.links?.[k]).concat(Object.keys(p.links || {}).filter((k) => !LINK_LABELS[k]));
    const links = keys.map((k) => `<a href="${url(p.links[k])}" target="_blank" rel="noopener">${esc(LINK_LABELS[k] || k)}</a>`).join("");
    const full = (p.venue || "").replace(/\s*\([^)]*\d{4}\)/, "").replace(/,\s*pp\..*$/, "");
    return `<article class="hl-row">
      <div class="hl-year">${p.year}</div>
      ${href ? `<a class="hl-thumb" href="${href}"${ext} tabindex="-1" aria-hidden="true">${img}</a>` : `<div class="hl-thumb">${img}</div>`}
      <div class="hl-text">
        <h3 class="hl-title">${href ? `<a href="${href}"${ext}>${esc(p.title)}</a>` : esc(p.title)}${p.tag ? ` <span class="badge badge--tag">${esc(p.tag)}</span>` : ""}</h3>
        <p class="hl-authors">${authorsHtml(p)}</p>
        ${p.summary ? `<p class="hl-sum">${esc(p.summary)}</p>` : ""}
        <p class="hl-venue"><span class="hl-v">${esc(venueLabel(p))}</span>${p.rank ? `<span class="hl-rank">${esc(p.rank)}</span>` : ""}<span class="hl-vfull">${esc(full)}</span></p>
        <p class="hl-links">${links}</p>
      </div>
    </article>`;
  }

  /* ---------- gallery: photo-only section with lightbox ---------------------------------------- */
  function renderGallery(el) {
    const photos = window.PHOTOS || [];
    if (!photos.length) { el.closest("section").hidden = true; return; }
    const INITIAL = 12;
    el.innerHTML = `<div class="gallery">${photos.map((src, i) => `<button type="button" class="g-item" data-i="${i}"${i >= INITIAL ? " hidden" : ""} aria-label="Open photo ${i + 1}"><img src="${url(src)}" alt="" loading="lazy"></button>`).join("")}</div>
      ${photos.length > INITIAL ? `<button type="button" class="g-more">Show all ${photos.length} photos</button>` : ""}`;

    const more = $(".g-more", el);
    more?.addEventListener("click", () => { el.querySelectorAll(".g-item[hidden]").forEach((b) => (b.hidden = false)); more.remove(); });

    let box = null, cur = 0;
    const show = (i) => { cur = (i + photos.length) % photos.length; $("img", box).src = url(photos[cur]); $(".lb-count", box).textContent = `${cur + 1} / ${photos.length}`; };
    el.addEventListener("click", (e) => {
      const b = e.target.closest(".g-item");
      if (!b) return;
      if (!box) {
        box = document.createElement("dialog");
        box.className = "lightbox";
        box.innerHTML = `<button type="button" class="lb-btn lb-close" aria-label="Close">×</button>
          <button type="button" class="lb-btn lb-prev" aria-label="Previous photo">‹</button><img alt="">
          <button type="button" class="lb-btn lb-next" aria-label="Next photo">›</button><span class="lb-count"></span>`;
        box.addEventListener("click", (ev) => {
          if (ev.target.closest(".lb-prev")) show(cur - 1);
          else if (ev.target.closest(".lb-next")) show(cur + 1);
          else if (ev.target.tagName !== "IMG") box.close();
        });
        box.addEventListener("keydown", (ev) => { if (ev.key === "ArrowLeft") show(cur - 1); if (ev.key === "ArrowRight") show(cur + 1); });
        document.body.appendChild(box);
      }
      show(+b.dataset.i);
      box.showModal();
    });
  }

  /* ---------- home ----------------------------------------------------------- */
  function renderHome() {
    $("#hero-title").textContent = S.hero.title;
    if (S.hero.subtitle) $("#hero-sub").textContent = S.hero.subtitle; else $("#hero-sub").remove();
    $("#tagline").textContent = S.tagline;


    const a = S.about;
    $("#home-about").innerHTML = `<div><h2>${esc(a.title)}</h2>
        ${a.paragraphs.map((p) => `<p>${p.replaceAll("{root}", ROOT)}</p>`).join("")}</div>
      <aside class="facts-card">${a.facts.map(factRow).join("")}</aside>`;

    const pubs = window.PUBLICATIONS;
    const featured = pubs.filter((p) => p.featured).sort((a, b) => a.featured - b.featured);        // order set by the `featured` number in data/publications.js
    $("#home-pubs").innerHTML = featured.map(hlRow).join("");
    const total = pubs.length + archiveObjects().length;
    const more = $("#home-pubs-more");
    if (more) more.innerHTML = `Browse all <strong>${total}</strong> publications, with search and filters by topic →`;
    wirePubs($("#home-pubs"), pubs);

    const news = [...window.NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
    $("#home-news").innerHTML = news.map(newsItem).join("");

    renderCarousel($("#home-research"));
    renderGallery($("#home-gallery"));
    renderStory($("#home-story"));
    renderPeopleStrip($("#home-people"));
  }

  /* ---------- news ----------------------------------------------------------- */
  const fmtDate = (d) => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  const newsItem = (n) => `<div class="news-item"><div class="news-date">${fmtDate(n.date)}</div>
    <div><h5>${esc(n.title)}</h5><div class="text-muted">${(n.text || "").replaceAll("{root}", ROOT)}</div></div></div>`;

  function renderNews() {
    $("#news-list").innerHTML = [...window.NEWS].sort((a, b) => b.date.localeCompare(a.date)).map(newsItem).join("");
  }

  /* ---------- research ------------------------------------------------------- */
  // compact venue label: "CVPR 2026", "Int. J. Comput. Vis. 2025", "arXiv 2026"
  const JOURNAL_ABBR = [
    [/Trans\. Pattern Anal\. Mach\. Intell/, "TPAMI"], [/Int\. J\. Comput\. Vis/, "IJCV"], [/Comput\. Vis\. Image Underst/, "CVIU"],
    [/Trans\. Intell\. Transp\. Syst/, "T-ITS"], [/Trans\. Robotics Autom|Robotics Autom\. Lett/, "RA-L"], [/Trans\. Robotics/, "T-RO"],
    [/Trans\. Image Process/, "TIP"], [/Trans\. Circuits Syst\. Video/, "TCSVT"], [/Trans\. Circuits Syst\. II/, "TCAS-II"],
    [/Trans\. Multim/, "TMM"], [/Trans Autom\. Sci\. Eng/, "T-ASE"], [/Trans\. Emerg\. Top\. Comput\. Intell/, "TETCI"],
    [/Pattern Recognit\. Lett/, "PRL"], [/Pattern Recognit\./, "Pattern Recognit."], [/Mach\. Vis\. Appl/, "MVA"],
    [/Image Vis\. Comput/, "IVC"], [/Remote\. Sens/, "Remote Sens."], [/IEEE Access/, "IEEE Access"], [/Neural Networks/, "Neural Networks"],
    [/Sensors/, "Sensors"], [/Internet Things/, "IoT-J"], [/Real Time Imaging/, "Real-Time Imaging"], [/Comput\. Graph\. Forum/, "CGF"]
  ];
  // short text for the venue badge: "ICLR 2026", "TPAMI 2024", "arXiv 2026"
  function venueLabel(p) {
    if (p.badge) return p.badge;
    const par = p.venue.match(/\(([^)]*[A-Za-z][^)]*)\)/);                 // "(ICLR 2026)" or "(TPAMI)"
    if (par) return /\d{4}/.test(par[1]) ? par[1] : `${par[1]} ${p.year}`;
    if (/^CoRR/.test(p.venue)) return "arXiv " + p.year;
    const base = p.venue.split(":")[0].replace(/\s+\d+(\(\d+\))?$/, "").replace(/\s*\(\d{4}\)$/, "").replace(/\s*\(\d+\)/, "").trim();
    const ab = JOURNAL_ABBR.find(([re]) => re.test(base));
    if (ab) return `${ab[1]} ${p.year}`;
    if (/^PhD thesis/.test(p.venue)) return "PhD thesis " + p.year;
    const lbl = /\d{4}/.test(base) ? base : `${base} ${p.year}`;
    return lbl.length > 26 ? lbl.slice(0, 24).trim() + "… " + p.year : lbl;
  }

  // ---- tagging: research pillars ("topics") and secondary keywords (technology, learning, sensors, applications) ----
  const rxCache = {};
  const hit = (title, kws) => kws.some((k) => (rxCache[k] ||= new RegExp("(^|[^a-z0-9])" + k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i")).test(title));
  const TAX = () => window.TAXONOMY || {};
  const DIM_OF = () => { const m = {}; Object.entries(TAX()).forEach(([d, g]) => Object.keys(g).forEach((l) => (m[l] = d))); return m; };

  const axisOf = (label) => { const r = (window.RESEARCH || []).find((x) => (x.short || x.title) === label); return r ? r.axis || "what" : "what"; };

  // pillar tags: explicit `topics`, otherwise guessed from the title (+ optional `addTopics`)
  function topicsOf(p) {
    if (p.topics) return p.topics;
    if (!p._topics) {
      const order = (window.RESEARCH || []).map((r) => r.short || r.title);
      const found = (window.RESEARCH || []).filter((r) => hit(p.title, r.keywords)).map((r) => r.short || r.title).concat(p.addTopics || []);
      p._topics = order.filter((t) => found.includes(t)).concat(found.filter((t) => !order.includes(t)));
    }
    return p._topics;
  }
  // secondary keywords: explicit `keywords`, otherwise guessed from the title
  function keywordsOf(p) {
    if (p.keywords) return p.keywords;
    if (!p._kw) p._kw = Object.values(TAX()).flatMap((g) => Object.entries(g).filter(([, kws]) => hit(p.title, kws)).map(([l]) => l));
    return p._kw;
  }

  // latest publications (cards + archive) whose title matches one of the topic keywords
  function relatedPubs(r) {
    const all = (window.PUBLICATIONS || []).concat(archiveObjects());
    const label = r.short || r.title;
    return all.filter((p) => topicsOf(p).includes(label)).sort((a, b) => b.year - a.year);
  }

  const AUTOPLAY_MS = 5000;   // time spent on each topic before moving on

  function renderCarousel(el) {
    const topics = window.RESEARCH;
    const slides = topics.map((r, i) => {
      const rel = relatedPubs(r);
      const q = encodeURIComponent(r.title);
      return `<article class="slide" data-ax="${r.axis || "what"}" aria-roledescription="slide" aria-label="${i + 1} / ${topics.length}">
        <div class="slide-img">${r.image ? `<img src="${url(/\.\w{3,4}$/.test(r.image) ? r.image : r.image + ".png")}" data-base="${/\.\w{3,4}$/.test(r.image) ? "" : esc(r.image)}" data-ph="${esc(r.short || r.title)}" alt="${esc(r.title)}" draggable="false" loading="${i < 3 ? "eager" : "lazy"}">` : `<div class="ph"><span>${esc(r.short || r.title)}</span><small>image coming soon</small></div>`}</div>
        <div class="slide-body">
          <span class="slide-num">${String(i + 1).padStart(2, "0")} / ${String(topics.length).padStart(2, "0")}<em>${(r.axis || "what") === "how" ? "How we make it work" : "What we perceive"}</em></span>
          <h3>${esc(r.title)}</h3>
          <p>${esc(r.text)}</p>
          ${rel.length ? `<h6>Latest papers</h6><ul class="slide-papers">${rel.slice(0, 3).map((p) =>
            `<li>${esc(p.title)} <span>${esc(venueLabel(p))}</span></li>`).join("")}</ul>
          <a class="slide-more" href="${url("publications/")}?topic=${q}">See all ${rel.length} publications →</a>` : ""}
        </div>
      </article>`;
    }).join("");
    el.innerHTML = `<div class="rc" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Research topics">
        <div class="car-track">${slides}</div>
      </div>
      <div class="container"><div class="car-nav">
        <div class="car-dots">${topics.map((r, i) => `<button type="button" aria-label="${esc(r.title)}" data-i="${i}"></button>`).join("")}</div>
        <div class="car-arrows">
          <button type="button" class="car-btn" data-dir="-1" aria-label="Previous topic">←</button>
          <button type="button" class="car-btn" data-dir="1" aria-label="Next topic">→</button>
        </div>
      </div></div>`;

    // figures named without extension: try .png, .jpg, .jpeg, .webp; missing file -> placeholder
    el.querySelectorAll(".slide-img img").forEach((img) => {
      const exts = [".png", ".jpg", ".jpeg", ".webp"]; let k = 0;
      img.addEventListener("error", () => {
        if (img.dataset.base && ++k < exts.length) img.src = url(img.dataset.base + exts[k]);
        else img.replaceWith(Object.assign(document.createElement("div"), { className: "ph", innerHTML: `<span>${esc(img.dataset.ph)}</span><small>image coming soon</small>` }));
      });
    });

    const rc = $(".rc", el), track = $(".car-track", el), nav = $(".car-nav", el);
    const slideEls = [...track.children], dots = [...el.querySelectorAll(".car-dots button")];
    const autoplay = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!autoplay) nav.classList.add("static");
    let cur = 0, hold = false, timer = null;

    const target = (i) => { const sl = slideEls[i]; return sl.offsetLeft - (track.clientWidth - sl.offsetWidth) / 2; };
    const nearest = () => {
      const mid = track.scrollLeft + track.clientWidth / 2;
      let best = 0, d = Infinity;
      slideEls.forEach((sl, i) => { const k = Math.abs(sl.offsetLeft + sl.offsetWidth / 2 - mid); if (k < d) { d = k; best = i; } });
      return best;
    };
    const go = (i) => { restart(); track.scrollTo({ left: target(Math.max(0, Math.min(topics.length - 1, i))), behavior: "smooth" }); };

    // (re)start the 5 s countdown: progress bar on the active dot + timer to the next topic
    function restart() {
      clearTimeout(timer);
      dots.forEach((d) => d.classList.remove("on"));
      void nav.offsetWidth;                     // restart the CSS animation
      dots[cur].classList.add("on");
      nav.classList.toggle("paused", hold);
      if (autoplay && !hold) timer = setTimeout(() => go(cur + 1 >= topics.length ? 0 : cur + 1), AUTOPLAY_MS);
    }
    const mark = () => slideEls.forEach((sl, i) => sl.classList.toggle("active", i === cur));

    track.addEventListener("scroll", () => {
      const n = nearest();
      if (n !== cur) { cur = n; mark(); restart(); }
    }, { passive: true });

    // arrows, dots, click on a neighbouring slide
    el.addEventListener("click", (e) => {
      if (drag?.moved) return;
      const d = e.target.closest("[data-i]"), n = e.target.closest("[data-dir]"), sl = e.target.closest(".slide");
      if (d) go(+d.dataset.i);
      else if (n) go(cur + +n.dataset.dir);
      else if (sl && !e.target.closest("a") && !sl.classList.contains("active")) go(slideEls.indexOf(sl));
    });
    rc.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); go(cur + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(cur - 1); }
    });

    // mouse drag (touch uses native scrolling + scroll-snap)
    let drag = null;
    track.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      drag = { x: e.clientX, left: track.scrollLeft, moved: false };
    });
    window.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > 5) { drag.moved = true; track.classList.add("dragging"); }
      if (drag.moved) track.scrollLeft = drag.left - dx;
    });
    window.addEventListener("pointerup", () => {
      if (!drag) return;
      const moved = drag.moved;
      track.classList.remove("dragging");
      if (moved) { go(nearest()); setTimeout(() => (drag = null), 0); } else drag = null;
    });

    // hold the autoplay while the pointer / keyboard focus is on the carousel or the tab is hidden
    const setHold = (v) => { if (hold !== v) { hold = v; restart(); } };
    el.addEventListener("mouseenter", () => setHold(true));
    el.addEventListener("mouseleave", () => setHold(false));
    el.addEventListener("focusin", () => setHold(true));
    el.addEventListener("focusout", () => setHold(false));
    document.addEventListener("visibilitychange", () => setHold(document.hidden));
    window.addEventListener("resize", () => track.scrollTo({ left: target(cur) }));

    mark(); restart();
  }

  // "Perceive -> Estimate -> Reconstruct -> Understand -> Adapt"
  function renderStory(el) {
    el.innerHTML = `<ol class="story">${window.STORY.map((x, i) => `<li class="step">
      <span class="step-n">${String(i + 1).padStart(2, "0")}</span>
      <h3>${esc(x.step)}</h3><p>${esc(x.text)}</p>
      <a href="${topicHref(x.pillar)}">${esc(x.pillar)} →</a></li>`).join("")}</ol>`;
  }

  // secondary dimensions as links to the filtered publication list
  function renderDimensions(el) {
    const all = (window.PUBLICATIONS || []).concat(archiveObjects());
    const counts = {};
    all.forEach((p) => keywordsOf(p).forEach((l) => (counts[l] = (counts[l] || 0) + 1)));
    el.innerHTML = Object.entries(TAX()).map(([d, g]) => {
      const items = Object.keys(g).filter((l) => counts[l]);
      return items.length ? `<div class="dim"><h4>${esc(d)}</h4><div class="chips">${items.map((l) => `<a class="chip" href="${tagHref(l)}">${esc(l)} <span>${counts[l]}</span></a>`).join("")}</div></div>` : "";
    }).join("");
  }

  // text overview at the top of the Research page
  function renderOverview(el) {
    const o = window.OVERVIEW;
    if (!o) { el.closest("section").hidden = true; return; }
    el.innerHTML = `<div><h2>${esc(o.title)}</h2>${o.paragraphs.map((x) => `<p>${x}</p>`).join("")}</div>`;
  }

  function renderResearch() {
    renderOverview($("#research-overview"));
    renderCarousel($("#research-carousel"));
    renderStory($("#research-story"));
    renderDimensions($("#research-dims"));
  }

  /* ---------- team ----------------------------------------------------------- */
  // people who have not started yet (start date in the future) are shown as "Incoming ..." and not counted
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const isIncoming = (p) => !!p.start && p.start > new Date().toISOString().slice(0, 10);
  const roleOf = (p) => {
    if (!isIncoming(p)) return p.role;
    const [y, m, d] = p.start.split("-").map(Number);
    return `Incoming ${p.role} · from ${d} ${MONTHS[m - 1]} ${y}`;
  };

  // "Matteo Poggi" -> "matteo-poggi" (photo file name, no accents)
  const slug = (n) => n.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const initials = (n) => n.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const linkLabel = (u) => (/linkedin\.com/.test(u) ? "LinkedIn" : /unibo\.it/.test(u) ? "Unibo page" : "Website");

  // round photo (or initials when the file is missing)
  function avatarHtml(p, cls = "avatar") {
    const src = url(p.photo || `imgs/team/${slug(p.name)}.jpg`);
    return `<img class="${cls}" src="${src}" alt="${esc(p.name)}" loading="lazy" data-initials="${esc(initials(p.name))}">`;
  }
  function fixMissingPhotos(root) {
    root.querySelectorAll("img[data-initials]").forEach((img) => {
      const swap = () => {
        const d = document.createElement("div");
        d.className = img.className;
        d.textContent = img.dataset.initials;
        img.replaceWith(d);
      };
      img.addEventListener("error", swap, { once: true });
      if (img.complete && img.naturalWidth === 0) swap();
    });
  }

  function renderTeam() {
    $("#team-list").innerHTML = window.TEAM.filter((g) => g.people.length).map((g) => `<h3 class="group-title" id="g-${slug(g.group)}">${esc(g.group)}</h3>
      <div class="grid grid-4">${g.people.map((p) => {
        const name = p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)}</a>` : esc(p.name);
        const links = [p.url && `<a class="pill" href="${esc(p.url)}" target="_blank" rel="noopener">${linkLabel(p.url)} ↗</a>`,
                       p.email && `<a class="pill" href="mailto:${esc(p.email)}">Email</a>`].filter(Boolean).join("");
        return `<div class="person">${avatarHtml(p)}<h5>${name}</h5><p class="role">${esc(roleOf(p))}</p>${links ? `<div class="links">${links}</div>` : ""}</div>`;
      }).join("")}</div>`).join("");
    fixMissingPhotos($("#team-list"));
    renderTeamOverview($("#team-overview"));
  }

  // text overview + composition of the group (counts come from data/team.js)
  function renderTeamOverview(el) {
    const o = window.TEAM_OVERVIEW;
    if (!o) { el.closest("section").hidden = true; return; }
    const cnt = (kind) => window.TEAM.filter((g) => g.kind === kind).reduce((a, g) => a + g.people.filter((p) => !isIncoming(p)).length, 0);
    const n = { faculty: cnt("faculty"), postdocs: cnt("postdocs"), phd: cnt("phd"), visiting: cnt("visiting"), alumni: cnt("alumni") };
    n.current = n.faculty + n.postdocs + n.phd + n.visiting;
    const fill = (t) => t.replace(/\{(\w+)\}/g, (m, k) => (k in n ? n[k] : m));
    el.innerHTML = `<div><h2>${esc(o.title)}</h2>${o.paragraphs.map((x) => `<p>${fill(x)}</p>`).join("")}</div>`;
  }

  // home: strip with the current members (alumni excluded), seniors first (order of data/team.js).
  // It drifts to the right, pauses at the end, drifts back to the left, and so on. Can also be
  // dragged / swiped / moved with the arrows.
  function renderPeopleStrip(el) {
    const people = window.TEAM.filter((g) => !g.alumni).flatMap((g) => g.people);
    if (!people.length) { el.closest("section").hidden = true; return; }
    const card = (p) => {
      const inner = `${avatarHtml(p, "pavatar")}<div class="pname">${esc(p.name)}</div><div class="prole">${esc(roleOf(p))}</div>`;
      return p.url ? `<a class="pcard" href="${esc(p.url)}" target="_blank" rel="noopener">${inner}</a>` : `<div class="pcard">${inner}</div>`;
    };
    el.innerHTML = `<div class="people-scroll" tabindex="0" aria-label="Current members">${people.map(card).join("")}</div>`;
    fixMissingPhotos(el);

    const box = $(".people-scroll", el);
    const SPEED = 28;                    // px per second (lower = slower)
    const END_PAUSE = 2000;              // ms to rest at each end
    const auto = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pos = 0, dir = 1, paused = false, drag = null, last = 0, ticking = false;
    let resumeAt = performance.now() + 1500;          // let the seniors be seen first

    box.addEventListener("scroll", () => { if (!ticking) pos = box.scrollLeft; }, { passive: true });
    const tick = (t) => {
      const dt = Math.min(0.05, (t - (last || t)) / 1000); last = t;
      if (auto && !paused && !drag && t > resumeAt) {
        const max = box.scrollWidth - box.clientWidth;
        pos = Math.max(0, Math.min(max, pos + dir * SPEED * dt));
        ticking = true; box.scrollLeft = pos; ticking = false;
        if (dir > 0 && pos >= max - 1) { dir = -1; resumeAt = t + END_PAUSE; }
        else if (dir < 0 && pos <= 0) { dir = 1; resumeAt = t + END_PAUSE; }
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const hold = (v) => { paused = v; if (!v) resumeAt = performance.now() + 800; };
    el.addEventListener("mouseenter", () => hold(true));
    el.addEventListener("mouseleave", () => hold(false));
    el.addEventListener("focusin", () => hold(true));
    el.addEventListener("focusout", () => hold(false));
    document.addEventListener("visibilitychange", () => hold(document.hidden));

    // mouse drag (touch scrolls natively)
    box.addEventListener("pointerdown", (e) => { if (e.pointerType === "mouse" && e.button === 0) drag = { x: e.clientX, left: box.scrollLeft, moved: false }; });
    window.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > 5) { drag.moved = true; box.classList.add("dragging"); }
      if (drag.moved) box.scrollLeft = drag.left - dx;
    });
    window.addEventListener("pointerup", () => {
      if (!drag) return;
      const moved = drag.moved;
      box.classList.remove("dragging");
      setTimeout(() => (drag = null), 0);               // swallow the click that ends a drag
      if (moved) pos = box.scrollLeft;
    });
    box.addEventListener("click", (e) => { if (drag?.moved) e.preventDefault(); }, true);

    // arrows (in the section header)
    document.querySelectorAll("[data-people-dir]").forEach((b) => b.addEventListener("click", () => {
      resumeAt = performance.now() + 2500;
      dir = +b.dataset.peopleDir;
      box.scrollBy({ left: dir * 3 * (box.children[0].offsetWidth + 36), behavior: "smooth" });
    }));
  }

  /* ---------- theme preview (remove: set themePreview: false in data/site.js) ---- */
  const THEMES = [
    { id: "teal",     name: "Teal",          note: "current",                c: ["#0f172a", "#0f766e", "#ffffff"] },
    { id: "m-lime",   name: "Mono + lime",   note: "the one you liked",      c: ["#0a0a0a", "#bef264", "#ffffff"], font: "Space+Grotesk:wght@500;600;700" },
    { id: "m-sky",    name: "Mono + sky",    note: "pale sky blue marker",   c: ["#0a0a0a", "#bae6fd", "#ffffff"], font: "Space+Grotesk:wght@500;600;700" },
    { id: "m-mint",   name: "Mono + mint",   note: "soft mint green",        c: ["#0a0a0a", "#a7f3d0", "#ffffff"], font: "Space+Grotesk:wght@500;600;700" },
    { id: "m-peach",  name: "Mono + peach",  note: "warm peach",             c: ["#0a0a0a", "#fed7aa", "#ffffff"], font: "Space+Grotesk:wght@500;600;700" },
    { id: "m-lilac",  name: "Mono + lilac",  note: "light lilac",            c: ["#0a0a0a", "#ddd6fe", "#ffffff"], font: "Space+Grotesk:wght@500;600;700" },
    { id: "m-butter", name: "Mono + butter", note: "classic yellow highlighter", c: ["#0a0a0a", "#fde68a", "#ffffff"], font: "Space+Grotesk:wght@500;600;700" },
    { id: "m-rose",   name: "Mono + rose",   note: "pale rose",              c: ["#0a0a0a", "#fecdd3", "#ffffff"], font: "Space+Grotesk:wght@500;600;700" }
  ];
  function applyTheme(id) {
    const t = THEMES.find((x) => x.id === id) || THEMES[0];
    document.documentElement.dataset.theme = t.id;
    if (t.font && !document.getElementById("font-heading")) {
      const l = document.createElement("link");
      l.id = "font-heading"; l.rel = "stylesheet"; l.href = `https://fonts.googleapis.com/css2?family=${t.font}&display=swap`;
      document.head.appendChild(l);
    }
    try { localStorage.setItem("cvlab-theme", t.id); } catch (e) {}
    document.querySelectorAll(".theme-switch li button").forEach((b) => b.classList.toggle("on", b.dataset.t === t.id));
    return t;
  }
  function initThemes() {
    let id = new URLSearchParams(location.search).get("theme");
    try { id = id || localStorage.getItem("cvlab-theme"); } catch (e) {}
    if (!S.themePreview) { applyTheme(S.theme || "teal"); return; }
    const box = document.createElement("div");
    box.className = "theme-switch";
    box.innerHTML = `<ul>${THEMES.map((t) => `<li><button type="button" data-t="${t.id}"><span class="sw">${t.c.map((c) => `<i style="background:${c}"></i>`).join("")}</span><span>${t.name}<small>${t.note}</small></span></button></li>`).join("")}</ul>
      <button type="button" class="ts-toggle">Theme preview</button>`;
    document.body.appendChild(box);
    box.addEventListener("click", (e) => {
      const b = e.target.closest("[data-t]");
      if (b) applyTheme(b.dataset.t);
      else if (e.target.closest(".ts-toggle")) box.classList.toggle("open");
    });
    applyTheme(id || S.theme || "teal");
  }

  /* ---------- scrolling team photos behind a hero title (home, team) ----------------------------- */
  function initHeroPhotos() {
    const strip = $("#hero-photos");
    if (!strip) return;
    const src = window[strip.dataset.list || "PHOTOS"];
    if (!src?.length) { strip.closest(".hero")?.classList.remove("hero--photos"); strip.remove(); return; }
    const list = [...src];
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }   // shuffled
    const imgs = list.concat(list).map((src) => `<img src="${url(src)}" alt="" decoding="async">`).join("");                               // duplicated: seamless loop
    strip.innerHTML = `<div class="strip" style="--n:${list.length};animation-delay:-${(Math.random() * list.length * 11).toFixed(1)}s">${imgs}</div>`;
  }

  // positions page: who to write to (the faculty, from data/team.js)
  function renderPositions() {
    const el = $("#pos-faculty");
    if (!el) return;
    const people = window.TEAM.filter((g) => g.kind === "faculty").flatMap((g) => g.people);
    el.innerHTML = people.map((p) => `<div class="fac">
      ${avatarHtml(p, "fac-avatar")}
      <div><div class="fac-name">${esc(p.name)}</div><div class="fac-role">${esc(roleOf(p))}</div>
        <div class="fac-links">${p.url ? `<a class="pill" href="${esc(p.url)}" target="_blank" rel="noopener">${linkLabel(p.url)} ↗</a>` : ""}${p.email ? `<a class="pill" href="mailto:${esc(p.email)}">Email</a>` : ""}</div></div></div>`).join("");
    fixMissingPhotos(el);
  }

  // a missing figure file falls back to the placeholder instead of a broken image
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement) || !img.matches(".hl-thumb img, .pub-thumb img")) return;
    const ph = document.createElement("div");
    ph.className = "hl-ph";
    ph.innerHTML = "<span>Figure</span><small>image coming soon</small>";
    img.replaceWith(ph);
  }, true);

  /* ---------- publication figures scrolling behind a page title (publications) --------------------- */
  function initHeroFigures() {
    const strip = $("#hero-figs");
    if (!strip) return;
    const imgs = (window.PUBLICATIONS || []).filter((p) => p.image && !p.noBanner).map((p) => p.image);
    if (!imgs.length) { strip.remove(); return; }
    const list = [...new Set(imgs)];
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
    const html = list.concat(list).map((src) => `<img src="${url(src)}" alt="" decoding="async">`).join("");
    strip.innerHTML = `<div class="strip" style="--n:${list.length};--s:10s;animation-delay:-${(Math.random() * list.length * 10).toFixed(1)}s">${html}</div>`;
  }

  /* ---------- boot ----------------------------------------------------------- */
  initThemes();
  initHeroPhotos();
  initHeroFigures();
  renderNav();
  renderFooter();
  document.title = (document.title ? document.title + " | " : "") + S.name;
  ({ home: renderHome, publications: renderPublications, news: renderNews, research: renderResearch, team: renderTeam, positions: renderPositions }[PAGE] || (() => {}))();
})();
