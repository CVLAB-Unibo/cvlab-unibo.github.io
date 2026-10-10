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

  const FOOT_ICON = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  // dark footer: a call to action, the faculty as e-mail chips (data/team.js), the address on a map, the menu
  function renderFooter() {
    const c = S.contact;
    const faculty = (window.TEAM || []).filter((g) => g.kind === "faculty").flatMap((g) => g.people).filter((p) => p.email);
    const people = faculty.map((p) => `<li><a href="mailto:${esc(p.email)}" title="${esc(p.email)}"><img src="${url(p.photo || `imgs/team/${slug(p.name)}.jpg`)}" alt="" loading="lazy">${esc(p.name)}</a></li>`).join("")
      || (c.email ? `<li><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>` : "");
    const maps = "https://maps.google.com/?q=" + encodeURIComponent(c.lines.join(", "));
    const social = S.social.map((x) => `<a class="ft-btn" href="${esc(x.href)}" target="_blank" rel="noopener">${/github/i.test(x.href) ? FOOT_ICON.github : ""}${esc(x.label)}</a>`).join("");
    // on the Work with us page the call to action would point to itself: skip it, GitHub moves to the bottom row
    const cta = document.body.dataset.page !== "positions";
    $("#site-footer").outerHTML = `<footer class="footer${cta ? "" : " footer--plain"}"><div class="container">
      ${cta ? `<div class="ft-cta"><h2>Curious about 3D vision? <em>Come and work with us.</em></h2>
        <div class="ft-btns"><a class="ft-btn ft-pri" href="${url("positions/")}">Theses &amp; positions ${FOOT_ICON.arrow}</a>${social}</div></div>` : ""}
      <div class="ft-grid">
        <div class="ft-brand"><a href="${ROOT || "./"}"><img src="${url("assets/img/favicon.png")}" alt="${esc(S.fullName)}"></a>
          <div><b>${esc(S.fullName)}</b><p><a href="${esc(S.departmentUrl || "#")}" target="_blank" rel="noopener">${esc(S.department)}</a><br>${esc(S.affiliation)}</p>
            <a class="ft-unibo" href="https://www.unibo.it/" target="_blank" rel="noopener"><img src="${url("imgs/unibo-white.png")}" alt="Alma Mater Studiorum – Università di Bologna" loading="lazy"></a></div></div>
        ${people ? `<div><h6>Get in touch</h6><ul class="ft-people">${people}</ul></div>` : ""}
        <div class="ft-where"><h6>Find us</h6><a href="${maps}" target="_blank" rel="noopener">${FOOT_ICON.pin}<span>${c.lines.map(esc).join("<br>")}</span></a></div>
      </div>
      <div class="ft-bottom"><span>© ${new Date().getFullYear()} ${esc(S.fullName)} · ${esc(S.affiliation)}</span>
        <nav><a href="${ROOT || "./"}">Home</a>${S.nav.map((n) => `<a href="${url(n.href)}">${esc(n.label)}</a>`).join("")}${cta ? "" : S.social.map((x) => `<a href="${esc(x.href)}" target="_blank" rel="noopener">${esc(x.label)} ↗</a>`).join("")}</nav></div>
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

  // BibTeX reads "Luigi Di Stefano" as first "Luigi Di", last "Stefano": write names as "Last, First".
  // Surnames made of several capitalised words that are not particles go in BIB_SURNAMES.
  const BIB_SURNAMES = ["Zama Ramirez", "Salmon Cinotti"];
  const BIB_PARTICLE = /^(di|de|del|della|dal|da|van|von|der|den|le|la|du|dos)$/i;
  function bibName(n) {
    if (/^et al\.?$/.test(n)) return "others";
    const known = BIB_SURNAMES.find((s) => n.endsWith(" " + s));
    if (known) return `${known}, ${n.slice(0, -known.length - 1)}`;
    const w = n.split(" ");
    if (w.length < 2) return n;
    let i = w.length - 1;
    while (i > 1 && BIB_PARTICLE.test(w[i - 1])) i--;
    return `${w.slice(i).join(" ")}, ${w.slice(0, i).join(" ")}`;
  }

  function autoBibtex(p) {
    if (p.bibtex) return p.bibtex;
    const clean = (a) => a.replace(/\*$/, "");
    const names = p.authors.map(clean).map(bibName);
    const first = names[0].split(",")[0].normalize("NFD").toLowerCase().replace(/[^a-z]/g, "");
    const word = (p.title.split(/\W+/).find((w) => w.length > 3) || "paper").toLowerCase();
    const kind = p.kind || "Conference";
    const type = kind === "Journal" || kind === "Preprint" ? "article" : "inproceedings";
    const f = { title: `{${p.title}}`, author: names.join(" and ") };
    // archive rows carry DBLP-style venues: "IEEE Trans. Robotics 42: 1405-1427 (2026)", "ECCV (77) 2026: 158-177"
    const arxiv = p.venue.match(/^CoRR abs\/(\S+)/);
    const jour = p.archive && p.venue.match(/^(.*?)\s+(\d+)(?:\((\d+)\))?:\s*([\w-]+)\s*\(\d{4}\)$/);
    if (arxiv) { f.journal = "arXiv preprint"; f.eprint = arxiv[1]; }
    else if (jour) { f.journal = jour[1]; f.volume = jour[2]; if (jour[3]) f.number = jour[3]; f.pages = jour[4].replace("-", "--"); }
    else if (p.archive) {
      const pages = (p.venue.match(/:\s*([\w]+-[\w]+)$/) || [])[1];
      f[type === "article" ? "journal" : "booktitle"] = p.venue.replace(/:\s*[\w-]+$/, "").replace(/\s*\(\d+\)/, "").replace(/\s*\(\d{4}\)$/, "");
      if (pages) f.pages = pages.replace("-", "--");
    } else f[type === "article" ? "journal" : "booktitle"] = p.venue;
    f.year = p.year;
    const w = Math.max(...Object.keys(f).map((k) => k.length));
    return `@${type}{${first}${p.year}${word},\n${Object.entries(f).map(([k, v]) => `  ${k.padEnd(w)} = {${v}}`).join(",\n")}\n}`;
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

  // publication figure: "assets/img/publications/name" without extension tries .jpg, .png, .jpeg, .webp
  const FIG_EXTS = ["jpg", "png", "jpeg", "webp"];
  function figImg(path, attrs = 'alt="" loading="lazy"') {
    if (/\.\w{3,4}$/.test(path)) return `<img src="${esc(url(path))}" ${attrs}>`;
    return `<img src="${esc(url(path + "." + FIG_EXTS[0]))}" data-fig="${esc(url(path))}" data-ext="0" ${attrs}>`;
  }

  const LINK_LABELS = { project: "Project", pdf: "PDF", paper: "Paper", openreview: "OpenReview", openaccess: "Open access", workshop: "Workshop", preprint: "Preprint", arxiv: "arXiv", supp: "Supp.", code: "Code", demo: "Demo", video: "Video", poster: "Poster", slides: "Slides", weights: "Weights", dataset: "Dataset", extended: "Extended paper", leaderboard: "Leaderboard" };

  const topicHref = (label) => `${url("publications/")}?topic=${encodeURIComponent(label)}`;
  const tagHref = (label) => `${url("publications/")}?tag=${encodeURIComponent(label)}`;

  // one compact card for every publication (thumbnail only when an image is given)
  function pubCard(p, idx) {
    const href = p.url ? url(p.url) : p.links?.project ? url(p.links.project) : null;
    const ext = href && /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
    const thumb = p.image ? `<${href ? "a" : "div"} class="pub-thumb"${href ? ` href="${href}"${ext} tabindex="-1" aria-hidden="true"` : ""}>${figImg(p.image)}</${href ? "a" : "div"}>` : "";
    const topics = topicsOf(p), kws = keywordsOf(p);
    const venue = p.venueUrl ? `<a href="${esc(p.venueUrl)}">${esc(p.venue)}</a>` : esc(p.venue);
    const keys = Object.keys(LINK_LABELS).filter((k) => p.links?.[k]).concat(Object.keys(p.links || {}).filter((k) => !LINK_LABELS[k]));
    const buttons = keys.map((k) => `<a class="btn btn-xs" href="${url(p.links[k])}" target="_blank" rel="noopener">${esc(LINK_LABELS[k] || k)}</a>`).join("");
    return `<article class="card pub${p.image ? " has-img" : ""}" data-topics="${esc(topics.join("|"))}" data-tags="${esc(kws.join("|"))}" data-search="${esc((p.title + " " + p.authors.join(" ") + " " + p.venue + " " + (p.abstract || "") + " " + topics.join(" ") + " " + kws.join(" ")).toLowerCase())}">
      ${thumb}
      <div class="pub-main">
        <div class="pub-meta">
          <span class="badge badge--venue">${esc(venueLabel(p))}</span>${p.rank ? `<span class="rank" title="${/CORE/.test(p.rank) ? "ICORE 2026 conference ranking" : "Journal quartile (Scimago / JCR)"}">${esc(p.rank)}</span>` : ""}
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
    if (p.kind === "Demo" || /^Zenodo/i.test(p.venue)) return "demo";     // demos / software records
    const key = venueKey(p);
    if (/workshop/i.test(p.venue + " " + key) || /^(ICCVW|CVPRW|ECCVW|WACVW|3DVW)$/.test(key)) return "workshop";
    if (p.rank) {
      if (/A\+\+|A\*/.test(p.rank)) return "top";
      if (/Q1/.test(p.rank)) return "q1";
      if (/(CORE|GGS) A\b/.test(p.rank)) return "a";
    }
    if ((V.top || []).includes(key)) return "top";
    if ((V.q1 || []).includes(key)) return "q1";
    if ((V.a || []).includes(key)) return "a";
    return p.kind === "Journal" ? "journal" : "other";
  }
  const TIERS = {
    top:   { name: "A* conferences",      color: "#c2410c" },
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
      const peer = inRange.filter((p) => !["preprint", "thesis", "workshop", "demo"].includes(tierOf(p)));
      const bucket = (p) => { const t = tierOf(p); return TIERS[t] ? t : "other"; };
      const n = { top: 0, q1: 0, a: 0, other: 0 };
      peer.forEach((p) => n[bucket(p)]++);
      const top = n.top + n.q1;
      const pct = peer.length ? Math.round((100 * top) / peer.length) : 0;
      const tiers = ["top", "q1", "a", "other"].filter((t) => n[t]);
      const nWs = inRange.filter((p) => tierOf(p) === "workshop").length;
      el.innerHTML = `<div class="sum-row"><p class="sum-lead"><b>${pct}%</b> of our peer-reviewed papers${from ? ` since ${from}` : ""} (${top} of ${peer.length}) are in A* conferences or Q1 journals.</p>
          <div class="seg" role="group" aria-label="Time range"><button type="button" data-from="${last - 4}" class="${from ? "on" : ""}">Last 5 years</button><button type="button" data-from="0" class="${from === 0 ? "on" : ""}">All time</button></div></div>
        <div class="sum-bar" role="img" aria-label="Peer-reviewed papers by venue tier">${tiers.map((t) => `<i style="flex:${n[t]};background:${TIERS[t].color}" title="${TIERS[t].name}: ${n[t]}"></i>`).join("")}</div>
        <div class="sum-legend">${tiers.map((t) => `<span><i style="background:${TIERS[t].color}"></i><b>${n[t]}</b>${TIERS[t].name}</span>`).join("")}
          <span class="info" tabindex="0" title="Conferences follow the ICORE 2026 ranking; journals are Q1 in their Scimago/JCR category. Not counted: ${nWs} workshop papers, demos and preprints.">how we count</span></div>`;
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
    const AXES = { what: "Topic", how: "Approach", past: "Earlier work" };
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
      root.querySelectorAll(".year-group").forEach((g) => {
        const n = [...g.querySelectorAll(".card")].filter((c) => !c.hidden).length;
        g.hidden = !n;
        g.querySelector(".year-count").textContent = n;                      // the count follows filters and search
      });
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
    const img = p.image ? figImg(p.image) : `<div class="hl-ph"><span>${esc(tag || "Publication")}</span><small>image coming soon</small></div>`;
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

  /* ---------- home: awards (paper tags from data/publications.js + data/awards.js) -------------- */
  const TROPHY = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4"/></svg>';
  const SPARK = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z"/></svg>';
  // one quiet line on service to the community, built from the "service" rows of data/activities.js
  function serviceHtml() {
    const svc = (window.ACTIVITIES || []).filter((a) => a.kind === "service");
    if (!svc.length) return "";
    const venues = (re) => { const m = {}; svc.filter((a) => re.test(a.title)).forEach((a) => { const v = a.event.replace(/\s*\d{4}$/, ""); m[v] = (m[v] || 0) + 1; }); return Object.keys(m).sort((a, b) => m[b] - m[a]); };
    const list = (xs) => (xs.length > 1 ? xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1] : xs[0] || "");
    // editorial roles: one generic list of venues, without years and without telling AE from AC
    const ORDER = ["TPAMI", "IJCV", "CVPR", "ICCV", "ECCV", "NeurIPS", "ICLR", "ICRA", "IROS"];
    const rank = (v) => (ORDER.includes(v) ? ORDER.indexOf(v) : ORDER.length);
    const ed = [...new Set(svc.filter((a) => /Editor|^Area Chair/.test(a.title)).map((a) => a.event.replace(/\s*\d{4}$/, "")))].sort((a, b) => rank(a) - rank(b));
    const out = venues(/^(Outstanding|Top (Reviewer|Area Chair))/);
    const roles = (ed.length ? `as associate editors and area chairs for ${list(ed)}, and ` : "") + "as reviewers for the main computer vision and machine learning venues";
    // generic wording: "multiple" only when there is more than one award of that kind
    const count = (re) => svc.filter((a) => re.test(a.title)).reduce((n, a) => n + (a.who || [1]).length, 0);
    const nAC = count(/^Outstanding Area Chair/), nTop = count(/^Top Area Chair/), nRev = count(/^(Outstanding|Top) Reviewer/), n = nAC + nTop + nRev;
    const names = [nAC && "Outstanding Area Chair", nTop && "Top Area Chair", nRev && "Outstanding Reviewer"].filter(Boolean);
    const awards = names.length ? `${n > 1 ? "multiple " : "an "}${list(names)} award${n > 1 ? "s" : ""}` : "";
    return `<p class="svc-note">Beyond research, members of the lab serve the community ${esc(roles)}${awards ? `, receiving ${esc(awards)} at ${esc(list(out))}` : ""}.</p>`;
  }

  // a single, short confetti burst the first time a celebration card (e.g. the PRIN grant) comes into view
  function celebrate(card) {
    const cv = card && card.querySelector("canvas");
    if (!cv || !("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const COLS = ["#c2410c", "#fb923c", "#fed7aa", "#fdba74", "#fcd34d", "#0f172a"];
    const burst = () => {
      const ctx = cv.getContext("2d"), r = cv.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      cv.width = r.width * dpr; cv.height = r.height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const parts = Array.from({ length: 110 }, (_, i) => {
        const left = i % 2 === 0;
        return { x: left ? 10 : r.width - 10, y: r.height * (.6 + Math.random() * .3), vx: (left ? 1 : -1) * (3 + Math.random() * 6), vy: -(6 + Math.random() * 6),
          w: 4 + Math.random() * 5, h: 7 + Math.random() * 6, a: Math.random() * 6, va: (Math.random() - .5) * .35, c: COLS[i % COLS.length] };
      });
      const t0 = performance.now();
      const step = (t) => {
        ctx.clearRect(0, 0, r.width, r.height);
        parts.forEach((p) => {
          p.vx *= .985; p.vy += .2; p.x += p.vx; p.y += p.vy; p.a += p.va;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.globalAlpha = Math.max(0, 1 - (t - t0) / 3500);
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.a * 2))); ctx.restore();
        });
        if (t - t0 < 3500 && parts.some((p) => p.y < r.height + 20)) requestAnimationFrame(step); else ctx.clearRect(0, 0, r.width, r.height);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { io.disconnect(); setTimeout(burst, 250); } }, { threshold: .5 });
    io.observe(card);
  }

  function renderAwards(el) {
    if (!el) return;
    const pubs = window.PUBLICATIONS || [];
    const link = (p) => (p.url ? url(p.url) : p.links?.project ? url(p.links.project) : p.links?.pdf ? url(p.links.pdf) : null);
    const awards = pubs.filter((p) => /best|award|honou?rable|prize/i.test(p.tag || ""))
      .map((p) => ({ year: p.year, title: p.tag, event: venueLabel(p), work: p.title, href: link(p), who: authorsHtml(p) }))
      .concat((window.AWARDS || []).map((a) => ({ ...a, href: a.url, who: a.credit ? esc(a.credit) : a.person ? `Awarded to <strong>${esc(a.person)}</strong>` : "" })))
      .sort((a, b) => b.year - a.year);
    const dist = pubs.filter((p) => /^(oral|highlight|spotlight)/i.test(p.tag || "")).sort((a, b) => b.year - a.year);
    if (!awards.length && !dist.length) { el.closest("section").hidden = true; return; }
    const ext = (h) => (h && /^https?:/.test(h) ? ' target="_blank" rel="noopener"' : "");
    el.innerHTML = `<div class="aw-grid">${awards.map((a) => `<article class="aw-card">
        <span class="aw-icon">${TROPHY}</span>
        <div><div class="aw-title">${esc(a.title)}</div><div class="aw-event">${esc(a.event || "")}${a.event && !/\d{4}/.test(a.event) ? ` ${a.year}` : ""}</div>
          ${a.work ? `<p class="aw-paper">${a.href ? `<a href="${a.href}"${ext(a.href)}>${esc(a.work)}</a>` : esc(a.work)}</p>` : a.href ? `<p class="aw-paper"><a href="${a.href}"${ext(a.href)}>Details ↗</a></p>` : ""}
          ${a.who ? `<p class="aw-who">${a.who}</p>` : ""}</div></article>`).join("")}</div>
      ${serviceHtml()}
      ${dist.length ? `<h3 class="aw-sub">Orals, spotlights &amp; highlights</h3><ul class="aw-list">${dist.map((p) => {
        const h = link(p);
        return `<li><span class="aw-kind">${esc(p.tag)}</span><span class="aw-v">${esc(venueLabel(p))}</span>${h ? `<a href="${h}"${ext(h)}>${esc(p.title)}</a>` : `<span>${esc(p.title)}</span>`}</li>`;
      }).join("")}</ul>` : ""}`;
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

    renderAwards($("#home-awards"));
    celebrate($("#prin"));
    renderCarousel($("#home-research"));
    renderGallery($("#home-gallery"));
    renderStory($("#home-story"));
    renderPeopleStrip($("#home-people"));
  }

  /* ---------- news ----------------------------------------------------------- */
  const fmtDate = (d) => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  const newsItem = (n) => `<div class="news-item"><div class="news-date">${fmtDate(n.date)}</div>
    <div><h5>${esc(n.title)}</h5><div class="text-muted">${(n.text || "").replaceAll("{root}", ROOT)}</div></div></div>`;

  // News & events: one timeline built from data/news.js (people), the papers in A* venues and Q1
  // journals, data/awards.js + award tags, and data/activities.js (workshops, tutorials, demos, patents).
  // From NEWS_SINCE on everything is open; the earlier years sit behind the "Earlier events" button.
  const NEWS_SINCE = 2020;
  const NEWS_MONTH = { WACV: 2, AAAI: 2, DATE: 3, ICLR: 4, ICRA: 5, CVPR: 6, ECCV: 9, "3DV": 9, ICCV: 10, IROS: 10, Expo: 10, BMVC: 11, NeurIPS: 12, "SIGGRAPH Asia": 12 };
  const NEWS_KINDS = { all: "All", paper: "Papers", award: "Awards", grant: "Grants", service: "Reviewer awards", workshop: "Workshops & challenges we organise", tutorial: "Tutorials", demo: "Demos", patent: "Patents", people: "People" };
  const NEWS_LABEL = { paper: "Paper", award: "Award", grant: "Grant", service: "Recognition", workshop: "Organised", tutorial: "Tutorial", demo: "Demo", patent: "Patent", people: "People" };

  function newsItems() {
    const link = (t, h) => (h ? `<a href="${esc(h)}"${/^https?:/.test(h) ? ' target="_blank" rel="noopener"' : ""}>${esc(t)}</a>` : esc(t));
    const href = (p) => (p.url ? url(p.url) : p.links?.project ? url(p.links.project) : p.links?.pdf ? url(p.links.pdf) : null);
    const month = (ev) => { const k = Object.keys(NEWS_MONTH).find((m) => (ev || "").includes(m)); return k ? NEWS_MONTH[k] : 0; };
    const items = [];
    const add = (o) => items.push({ m: month(o.venue), ...o });

    (window.NEWS || []).filter((n) => n.kind !== "service").forEach((n) => add({ k: n.kind || "people", year: +n.date.slice(0, 4), m: +n.date.slice(5, 7) + n.date.slice(8, 10) / 32, venue: fmtDate(n.date).replace(/ \d{4}$/, ""),
      title: n.title, body: `<p>${(n.text || "").replaceAll("{root}", ROOT)}</p>` }));

    const groups = {};
    (window.PUBLICATIONS || []).concat(archiveObjects()).filter((p) => ["top", "q1"].includes(tierOf(p)))
      .forEach((p) => (groups[p.year + "|" + venueKey(p)] ||= []).push(p));
    Object.entries(groups).forEach(([key, ps]) => {
      const [year, venue] = key.split("|");
      ps.sort((x, y) => !!y.image - !!x.image);
      const imgs = ps.filter((p) => p.image).slice(0, 5).map((p) => figImg(p.image)).join("");
      const li = ps.map((p) => `<li>${link(p.title, href(p))}${p.tag ? `<em>${esc(p.tag)}</em>` : ""}</li>`);
      const list = li.length > 4 ? `<ul class="nw-papers">${li.slice(0, 3).join("")}</ul><details><summary>+ ${li.length - 3} more</summary><ul class="nw-papers">${li.slice(3).join("")}</ul></details>` : `<ul class="nw-papers">${li.join("")}</ul>`;
      add({ k: "paper", year: +year, venue, title: `${ps.length} paper${ps.length > 1 ? "s" : ""} ${tierOf(ps[0]) === "q1" ? "in" : "at"} ${venue} ${year}`,
        body: (imgs ? `<div class="nw-thumbs">${imgs}</div>` : "") + list });
    });

    (window.PUBLICATIONS || []).filter((p) => /best|award|honou?rable|prize/i.test(p.tag || "")).forEach((p) =>
      add({ k: "award", year: p.year, venue: venueLabel(p).replace(/ \d{4}$/, ""), title: p.tag, body: `<p>${link(p.title, href(p))}</p>` }));
    (window.AWARDS || []).forEach((w) => {
      const parts = (w.event || "").split(/ · | – /), venue = (parts.find((x) => /^[A-Z][A-Za-z0-9]+ \d{4}$/.test(x)) || parts[0]).replace(/ \d{4}$/, "");
      add({ k: "award", year: w.year, venue, title: w.title,
        body: `${w.work ? `<p>${link(w.work, w.url)}</p>` : w.url ? `<p>${link("Details ↗", w.url)}</p>` : ""}<p class="nw-who">${esc(w.event || "")}${w.credit ? ` · ${esc(w.credit)}` : w.person ? ` · awarded to <strong>${esc(w.person)}</strong>` : ""}</p>` });
    });

    // recognitions for reviewing / area chairing: one item per year, venues + names in small
    const recog = (window.ACTIVITIES || []).filter((x) => x.kind === "service" && x.year && /^(Outstanding|Top (Reviewer|Area Chair))/.test(x.title));
    [...new Set(recog.map((x) => x.year))].forEach((y) => {
      const rows = recog.filter((x) => x.year === y).sort((a, b) => month(b.event) - month(a.event) || /Chair/.test(b.title) - /Chair/.test(a.title));
      const n = rows.reduce((t, x) => t + (x.who || [1]).length, 0);
      add({ k: "service", year: y, m: Math.max(...rows.map((x) => month(x.event))) + 0.2, venue: [...new Set(rows.map((x) => x.event.replace(/ \d{4}$/, "")))].join(" · "),
        title: `${n} reviewing award${n > 1 ? "s" : ""}`,
        body: `<ul class="nw-recog">${rows.map((x) => `<li><b>${esc(x.title)}</b> · ${esc(x.event)}<span>${esc((x.who || []).join(", "))}</span></li>`).join("")}</ul>` });
    });

    // associate editor / area chair roles are not in the timeline: they feed one line on the home page
    (window.ACTIVITIES || []).filter((x) => ["workshop", "tutorial", "demo", "patent"].includes(x.kind)).forEach((x) => {
      const ev = (x.event || "").replace(/ \d{4}$/, "");
      add({ k: x.kind, year: x.year, title: x.title,
        venue: x.kind === "workshop" ? `${/challenge/i.test(x.title) ? "Challenge" : "Workshop"} organised by ${S.name} · ${ev}` : x.kind === "tutorial" ? `Tutorial given at ${ev}` : x.kind === "demo" ? `Live demo at ${ev}` : "Filed",
        body: `${x.note ? `<p>${esc(x.note)}</p>` : ""}${x.people ? `<p class="nw-who">${esc(x.people)}</p>` : ""}${x.url ? `<p><a class="nw-go" href="${esc(x.url)}" target="_blank" rel="noopener">${x.kind === "patent" ? "Details" : "Website"} ↗</a></p>` : ""}` });
    });

    return items.sort((x, y) => (y.year || 0) - (x.year || 0) || y.m - x.m);
  }

  function renderNews() {
    const nf = $("#news-filters"), tl = $("#news-list"), yrs = $("#news-years");
    if (!tl) return;
    const items = newsItems();
    const icon = { award: TROPHY, grant: SPARK };
    const item = (i) => `<li class="nw-it nk-${i.k}${icon[i.k] ? " nw-big" : ""}">${icon[i.k] ? `<span class="nw-tro">${icon[i.k]}</span>` : ""}
        <div class="nw-meta"><span class="nw-k">${NEWS_LABEL[i.k]}</span>${i.venue ? `<span class="nw-v">${esc(i.venue)}</span>` : ""}</div>
        <h4>${esc(i.title)}</h4>${i.body || ""}</li>`;
    let filter = "all", early = false;
    const draw = () => {
      nf.innerHTML = Object.entries(NEWS_KINDS).map(([k, t]) => `<button type="button" data-k="${k}" class="nk-${k}${k === filter ? " on" : ""}">${k === "all" ? "" : "<i></i>"}${esc(t)}</button>`).join("");
      const shown = items.filter((i) => filter === "all" || i.k === filter);
      const years = [...new Set(shown.map((i) => i.year))];
      const recent = years.filter((y) => y >= NEWS_SINCE), older = years.filter((y) => y < NEWS_SINCE);
      const open = early || !recent.length;
      const span = older.length ? `${older[older.length - 1]}–${older[0]}` : "";
      yrs.innerHTML = (open ? years : recent).map((y) => `<a href="#y${y}">${y}</a>`).join("") + (!open && older.length ? `<a class="nw-more" href="#y${older[0]}" data-early="${older[0]}">${span} ›</a>` : "");
      tl.innerHTML = (open ? years : recent).map((y) => `<section class="nw-yr" id="y${y}"><h2 class="nw-year">${y}</h2>
          <ol>${shown.filter((i) => i.year === y).map(item).join("")}</ol></section>`).join("") +
        (!open && older.length ? `<div class="nw-early"><button type="button" data-early="${older[0]}">Earlier events<small>${shown.filter((i) => i.year < NEWS_SINCE).length} items · ${span}</small></button></div>` : "");
    };
    nf.addEventListener("click", (e) => { const b = e.target.closest("[data-k]"); if (b) { filter = b.dataset.k; draw(); } });
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-early]");
      if (!b) return;
      e.preventDefault(); early = true; draw();
      document.getElementById("y" + b.dataset.early)?.scrollIntoView({ behavior: "smooth" });
    });
    draw();
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
    [/Sensors/, "Sensors"], [/Internet Things/, "IoT-J"], [/Real Time Imaging/, "Real-Time Imaging"], [/Comput\. Graph\. Forum/, "CGF"],
    [/J\. Sel\. Top\. Signal Process/, "JSTSP"], [/J\. Emerg\. Sel\. Topics Circuits/, "JETCAS"], [/Comput\. Electron\. Agric/, "COMPAG"],
    [/EURASIP J\. Image Video Process/, "EURASIP JIVP"], [/Computer Graphics and Applications/, "IEEE CG&A"], [/IPSJ Trans\. Comput\. Vis/, "IPSJ CVA"],
    [/J\. Parallel Distributed Comput/, "JPDC"], [/J\. Signal Process\. Syst/, "JSPS"], [/J\. Electronic Imaging/, "JEI"], [/Microprocess\. Microsystems/, "MICPRO"]
  ];
  // one spelling for workshops: "ICCVW 2025", "WACV (Workshops) 2023" -> "ICCV Workshops 2025", "WACV Workshops 2023"
  const normVenue = (v) => v.replace(/^([A-Z]+)W(?= \d{4})/, "$1 Workshops").replace(/ \(Workshops\)/, " Workshops").replace(/^Zenodo, /, "Zenodo ");
  // short text for the venue badge: "ICLR 2026", "TPAMI 2024", "arXiv 2026"
  function venueLabel(p) {
    if (p.badge) return p.badge;
    const venue = normVenue(p.venue);
    const par = venue.match(/\(([^)]*[A-Za-z][^)]*)\)/);                 // "(ICLR 2026)" or "(TPAMI)"
    if (par) return /\d{4}/.test(par[1]) ? par[1] : `${par[1]} ${p.year}`;
    if (/^CoRR/.test(venue)) return "arXiv " + p.year;
    const base = venue.split(":")[0].replace(/\s+\d+(\(\d+\))?$/, "").replace(/\s*\(\d{4}\)$/, "").replace(/\s*\(\d+\)/, "").trim();
    const ab = JOURNAL_ABBR.find(([re]) => re.test(base));
    if (ab) return `${ab[1]} ${p.year}`;
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
          <span class="slide-num">${String(i + 1).padStart(2, "0")} / ${String(topics.length).padStart(2, "0")}<em>${{ how: "How we make it work", past: "Where we come from" }[r.axis] || "What we perceive"}</em></span>
          <h3>${esc(r.title)}</h3>
          <p>${esc(r.text)}</p>
          ${rel.length ? `<h6>Latest papers</h6><ul class="slide-papers">${rel.slice(0, 3).map((p) =>
            `<li>${esc(p.title)} <span>${esc(venueLabel(p))}</span></li>`).join("")}</ul>
          <a class="slide-more" href="${url("publications/")}?topic=${q}">See all ${rel.length} publications →</a>${document.getElementById("explore") ? `<a class="slide-3d" href="#explore" data-gx="${esc(r.short || r.title)}">Explore in 3D ↓</a>` : ""}` : ""}
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

  // "Perceive -> Estimate -> Reconstruct -> Understand -> Deploy", each step linking to one or more research areas
  function renderStory(el) {
    el.innerHTML = `<ol class="story">${window.STORY.map((x, i) => `<li class="step">
      <span class="step-n">${String(i + 1).padStart(2, "0")}</span>
      <h3>${esc(x.step)}</h3><p>${esc(x.text)}</p>
      <div class="step-links">${(x.pillars || [x.pillar]).map((p) => `<a href="${topicHref(p)}">${esc(p)} →</a>`).join("")}</div></li>`).join("")}</ol>`;
  }

  // secondary dimensions as links to the filtered publication list
  function renderDimensions(el) {
    const all = (window.PUBLICATIONS || []).concat(archiveObjects());
    const counts = {};
    all.forEach((p) => keywordsOf(p).forEach((l) => (counts[l] = (counts[l] || 0) + 1)));
    // one card per dimension; keywords sorted by number of papers, each with a bar relative to the largest
    el.innerHTML = Object.entries(TAX()).map(([d, g]) => {
      const items = Object.keys(g).filter((l) => counts[l]).sort((a, b) => counts[b] - counts[a]);
      if (!items.length) return "";
      const max = counts[items[0]];
      return `<div class="dim"><h4>${esc(d)}<span>${items.length} keyword${items.length > 1 ? "s" : ""}</span></h4>${items.map((l) =>
        `<a href="${tagHref(l)}"><b>${esc(l)}</b><em>${counts[l]}</em><i style="--w:${Math.round(counts[l] / max * 100)}%"></i></a>`).join("")}</div>`;
    }).join("");
  }

  // text overview at the top of the Research page
  function renderOverview(el) {
    const o = window.OVERVIEW;
    if (!o) { el.closest("section").hidden = true; return; }
    el.innerHTML = `<div><h2>${esc(o.title)}</h2>${o.paragraphs.map((x) => `<p>${x}</p>`).join("")}</div>`;
  }

  function renderResearch() {
    // "Explore in 3D" on a pillar: scroll up to the galaxy and fly to that cloud (assets/js/galaxy.js)
    document.addEventListener("click", (e) => {
      const a = e.target.closest("[data-gx]");
      if (!a) return;
      e.preventDefault();
      $("#explore").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => dispatchEvent(new CustomEvent("gx:focus", { detail: a.dataset.gx })), 500);
    });
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
  const linkLabel = (u) => (/linkedin\.com/.test(u) ? "LinkedIn" : /scholar\.google/.test(u) ? "Scholar" : /unibo\.it/.test(u) ? "Unibo page" : "Website");

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
      <div class="grid grid-4${g.alumni ? " grid-former" : ""}">${g.people.map((p) => {
        const name = p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)}</a>` : esc(p.name);
        const links = [p.url && `<a class="pill" href="${esc(p.url)}" target="_blank" rel="noopener">${linkLabel(p.url)} ↗</a>`,
                       p.email && `<a class="pill" href="mailto:${esc(p.email)}">Email</a>`].filter(Boolean).join("");
        const was = g.alumni ? `<p class="was">${esc(p.was || "PhD at CVLab")}</p>` : "";
        const role = g.alumni && p.role === "Former member" ? "" : `<p class="role">${esc(roleOf(p))}</p>`;
        return `<div class="person${p.badge ? " person--lead" : ""}">${avatarHtml(p)}<h5>${name}</h5>${p.badge ? `<span class="p-badge">${esc(p.badge)}</span>` : ""}${was}${role}${links ? `<div class="links">${links}</div>` : ""}</div>`;
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
    // home: the photos named in SITE.heroLead come first and the strip starts from them
    const base = (p) => p.split("/").pop().replace(/\.\w+$/, "");
    const lead = PAGE === "home" ? (S.heroLead || []).map((n) => src.find((p) => base(p) === n)).filter(Boolean) : [];
    const list = src.filter((p) => !lead.includes(p));
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }   // shuffled
    list.unshift(...lead);
    const imgs = list.concat(list).map((src) => `<img src="${url(src)}" alt="" decoding="async">`).join("");                               // duplicated: seamless loop
    const delay = lead.length ? 0 : Math.random() * list.length * 11;                                                                       // random start, except with lead photos
    strip.innerHTML = `<div class="strip" style="--n:${list.length};animation-delay:-${delay.toFixed(1)}s">${imgs}</div>`;
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

  // missing figure: try the next extension; when none exists, the publication card shows no thumbnail,
  // the banner and the News thumbnails drop the image, a home highlight shows the placeholder
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement)) return;
    if (img.dataset.fig) {
      const k = +img.dataset.ext + 1;
      if (k < FIG_EXTS.length) { img.dataset.ext = k; img.src = img.dataset.fig + "." + FIG_EXTS[k]; return; }
    }
    if (img.closest(".pub-thumb")) { img.closest(".pub")?.classList.remove("has-img"); img.closest(".pub-thumb").remove(); }
    else if (img.closest(".hero-figs, .nw-thumbs")) img.remove();
    else if (img.closest(".hl-thumb")) {
      const ph = document.createElement("div");
      ph.className = "hl-ph";
      ph.innerHTML = "<span>Figure</span><small>image coming soon</small>";
      img.replaceWith(ph);
    }
  }, true);

  /* ---------- publication figures scrolling behind a page title (publications) --------------------- */
  // only figures with at least 2x the pixels of the strip height go in, so nothing is upscaled (also on retina
  // screens); if fewer than BANNER_MIN qualify, the largest ones are used
  const BANNER_MIN = 10;
  const loadFig = (path) => new Promise((done) => {
    const exts = /\.\w{3,4}$/.test(path) ? [""] : FIG_EXTS.map((e) => "." + e);
    const next = (k) => {
      if (k >= exts.length) return done(null);
      const im = new Image();
      im.onload = () => done({ src: url(path + exts[k]), h: im.naturalHeight });
      im.onerror = () => next(k + 1);
      im.src = url(path + exts[k]);
    };
    next(0);
  });
  async function initHeroFigures() {
    const strip = $("#hero-figs");
    if (!strip) return;
    const paths = [...new Set((window.PUBLICATIONS || []).filter((p) => p.image && !p.noBanner).map((p) => p.image))];
    if (!paths.length) { strip.remove(); return; }
    const need = 2 * Math.max(strip.clientHeight - 28, 150);            // 28 = vertical padding of the strip
    const figs = (await Promise.all(paths.map(loadFig))).filter(Boolean).sort((a, b) => b.h - a.h);
    let list = figs.filter((f) => f.h >= need);
    if (list.length < BANNER_MIN) list = figs.slice(0, BANNER_MIN);
    list = list.map((f) => f.src);
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
    const html = list.concat(list).map((src) => `<img src="${esc(src)}" alt="" decoding="async">`).join("");
    strip.innerHTML = `<div class="strip" style="--n:${list.length};--s:10s;animation-delay:-${(Math.random() * list.length * 10).toFixed(1)}s">${html}</div>`;
  }


  window.CVLAB = { archiveObjects, tierOf, topicsOf, venueLabel, url, figImg };   // for assets/js/galaxy.js

  /* ---------- boot ----------------------------------------------------------- */
  initThemes();
  initHeroPhotos();
  initHeroFigures();
  renderNav();
  renderFooter();
  if (!document.title.includes(S.name)) document.title = (document.title ? document.title + " | " : "") + S.name;
  ({ home: renderHome, publications: renderPublications, news: renderNews, research: renderResearch, team: renderTeam, positions: renderPositions }[PAGE] || (() => {}))();
})();
