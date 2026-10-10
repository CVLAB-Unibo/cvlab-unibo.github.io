/* ===========================================================================
   News – add newest items anywhere; they are sorted by `date` (YYYY-MM-DD).
   `kind: "grant"` shows the item as a grant in the timeline (default: people).
   `kind: "service"` (reviewing / area chair awards) shows only in the home news: in the timeline these
   come from the "service" rows of data/activities.js, so add the award there too.
   `text` may contain simple HTML; write internal links as {root}path/ so they work on every page.
   =========================================================================== */
window.NEWS = [
  { date: "2026-10-10", kind: "service", title: "Top Area Chair at NeurIPS 2026",
    text: "Congratulations to <strong>Matteo Poggi</strong>, acknowledged as a <strong>Top Area Chair</strong> at NeurIPS 2026!" },
  { date: "2026-10-05", kind: "grant", title: "PRIN 2026 grant for PREMISE",
    text: "<strong>Matteo Poggi</strong> (Co-PI) and <strong>Fabio Tosi</strong> won a PRIN 2026 grant for <strong>PREMISE</strong>, <em>PREdictive Multimodal Intelligence with Spatial and Episodic memory</em>, led by PI Lorenzo Baraldi (UNIMORE) with UniTrento, CNR, PoliMi and Bocconi. CVLab leads the work package on 3D scene memory and geometric grounding. PREMISE ranked 2nd in the PE6 panel (first in the under-40 line), in a call that funded about 6% of the proposals." },
  { date: "2026-10-02", title: "Welcome to our new PhD students",
    text: "<strong>Mehdi Amlal</strong>, <strong>Gabriele Pattarozzi</strong> and <strong>Leonardo Montrucchio</strong> will join CVLab as PhD students on 1 November 2026. Welcome! See the <a href='{root}team/'>team</a>." },
  { date: "2026-10-02", title: "Our new website is online",
    text: "Welcome to the new CVLab website! More content is coming soon." }
];
