/* ===========================================================================
   Global site settings: edit this file to change name, menu, footer, etc.
   =========================================================================== */
window.SITE = {
  name: "CVLab",
  fullName: "Computer Vision Laboratory",
  affiliation: "University of Bologna",
  department: "Department of Computer Science and Engineering (DISI)",
  departmentUrl: "https://disi.unibo.it/en",
  logo: "assets/img/logo-mark.png",           // symbol only (navbar) – built by tools/build_logo.py
  logoFull: "assets/img/logo-full.png",       // symbol + LAB + name
  parentLogo: null,                           // e.g. "assets/img/logo-unibo.png" (shown left of the lab logo)
  parentUrl: "https://www.unibo.it/en",

  // Colour theme: "teal" | "m-lime" | "m-sky" | "m-mint" | "m-peach" | "m-lilac" | "m-butter" | "m-rose".  themePreview shows the floating switcher
  // (set it to false once you have chosen).
  theme: "m-peach",
  themePreview: false,

  // Home page: these photos (file names in imgs/photos, without extension) open the scrolling strip,
  // in this order; the others follow, shuffled at every visit
  heroLead: ["vietato_esaltarsi", "disi"],

  tagline: "We study how machines perceive, reconstruct and understand the 3D world, and how to make that perception efficient, robust and general.",

  // Home hero title
  hero: { title: "Computer Vision Laboratory", subtitle: "University of Bologna" },

  // "About us" block on the home page – edit freely (paragraphs may contain simple HTML)
  about: {
    title: "About us",
    // {faculty} {postdocs} {phd} {visitingPhrase} are filled in from data/team.js
    paragraphs: [
      "The <strong>Computer Vision Laboratory (CVLab)</strong> is a research group of the <a href=\"https://disi.unibo.it/en\" target=\"_blank\" rel=\"noopener\">Department of Computer Science and Engineering (DISI)</a> at the <strong>University of Bologna</strong>. We study how machines see and understand the world: from <strong>monocular depth, stereo and SLAM</strong> to <strong>semantic and scene understanding</strong>, <strong>neural fields</strong> as a new kind of data that can be classified, generated and connected to <strong>language</strong>, <strong>vision-language models</strong> and <strong>anomaly detection</strong>, with methods that stay efficient and robust on real devices.",
      "We are <strong>{faculty} faculty members, {postdocs} postdocs and {phd} PhD students</strong>{visitingPhrase} together with the master's students who do their thesis in the lab, working side by side on shared projects and collaborating with universities and companies in Italy and abroad.",
      "We publish at top venues such as CVPR, ICCV, ECCV, NeurIPS, ICLR and TPAMI and release our code and datasets openly. Motivated students and researchers are always welcome: see how to <a href=\"{root}positions/\">work with us</a>."
    ],
    // Card on the right of "About us". icon: pin | users | code | mail | topics
    // `value` may contain HTML; `link` adds a small link under the text.
    facts: [
      { icon: "pin", label: "Where",
        value: "<a href=\"https://disi.unibo.it/en\" target=\"_blank\" rel=\"noopener\">Department of Computer Science and Engineering (DISI)</a><br>University of Bologna, Italy",
        link: { label: "Directions", href: "https://www.openstreetmap.org/search?query=Viale%20del%20Risorgimento%202%20Bologna" } },
      { icon: "users", label: "People",
        value: "{current} people, from faculty to PhD students and visiting researchers.",
        link: { label: "Meet the team", href: "team/" } },
      { icon: "code", label: "Open source",
        value: "Code and datasets of our papers are public.",
        link: { label: "github.com/CVLAB-Unibo", href: "https://github.com/CVLAB-Unibo" } }
    ]
  },

  // top navigation (path is relative to the site root)
  nav: [
    { label: "Publications", href: "publications/" },
    { label: "Research",     href: "research/" },
    { label: "News",         href: "news/" },
    { label: "Team",         href: "team/" },
    { label: "Work with us", href: "positions/" }
  ],

  contact: {
    lines: [
      "Viale del Risorgimento 2",
      "40136 Bologna",
      "Italy"
    ]
    // e-mails in the footer: the faculty members of data/team.js (each with an `email`)
  },

  social: [
    { label: "GitHub",  href: "https://github.com/CVLAB-Unibo" }
  ]
};
