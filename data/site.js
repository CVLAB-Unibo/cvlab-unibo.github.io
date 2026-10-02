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
  logoFull: "assets/img/logo-full.png",       // symbol + LAB + name (footer)
  parentLogo: null,                           // e.g. "assets/img/logo-unibo.png" (shown left of the lab logo)
  parentUrl: "https://www.unibo.it/en",

  // Colour theme: "teal" | "m-lime" | "m-sky" | "m-mint" | "m-peach" | "m-lilac" | "m-butter" | "m-rose".  themePreview shows the floating switcher
  // (set it to false once you have chosen).
  theme: "m-peach",
  themePreview: true,

  tagline: "We study how machines perceive, reconstruct and understand the 3D world, and how to make that perception efficient, robust and general.",

  // Home hero title
  hero: { title: "Computer Vision Laboratory", subtitle: "University of Bologna" },

  // "About us" block on the home page – edit freely (paragraphs may contain simple HTML)
  about: {
    title: "About us",
    paragraphs: [
      "The <strong>Computer Vision Laboratory (CVLab)</strong> is a research group of the <a href=\"https://disi.unibo.it/en\" target=\"_blank\" rel=\"noopener\">Department of Computer Science and Engineering (DISI)</a> at the <strong>University of Bologna</strong>, Italy. We work on machine learning methods for understanding the visual and geometric structure of the world.",
      "Our research spans the whole perception pipeline. We recover <strong>depth and 3D geometry</strong> from images and heterogeneous sensors such as stereo rigs, event cameras, LiDAR and time-of-flight, and we build maps with <strong>SLAM</strong>. We <strong>reconstruct and represent</strong> scenes with neural fields and Gaussian Splatting, and we study <strong>neural fields as a new kind of data</strong>: models that learn, classify and reason directly on NeRFs and 3D shapes, and connect them to <strong>language</strong>. We <strong>understand</strong> scenes, from semantic segmentation and point-cloud learning to <strong>anomaly detection</strong> for industrial inspection, driving and intelligent transportation, and the analysis of generated images.",
      "A common thread is <em>how</em> we make it work: models that are <strong>efficient and real-time</strong>, able to run on CPUs, embedded and low-power devices, and that stay <strong>robust and adaptive</strong> across domains, sensors and conditions, increasingly with foundation, vision-language and generative models.",
      "We publish at top venues such as CVPR, ICCV, ECCV, NeurIPS, ICLR and TPAMI, and we release our code and datasets openly. We are always happy to hear from motivated students and researchers: have a look at our <a href=\"{root}positions/\">open positions</a>."
    ],
    // Card on the right of "About us". icon: pin | users | code | mail | topics
    // `value` may contain HTML; `link` adds a small link under the text.
    facts: [
      { icon: "pin", label: "Where",
        value: "<a href=\"https://disi.unibo.it/en\" target=\"_blank\" rel=\"noopener\">Department of Computer Science and Engineering (DISI)</a><br>University of Bologna, Italy",
        link: { label: "Directions", href: "https://www.openstreetmap.org/search?query=Viale%20del%20Risorgimento%202%20Bologna" } },
      { icon: "users", label: "People",
        value: "Faculty, researchers and students working together.",
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
    { label: "Open Positions", href: "positions/" }
  ],

  contact: {
    lines: [
      "Viale del Risorgimento 2",
      "40136 Bologna",
      "Italy"
    ],
    email: "name.surname@unibo.it"
  },

  social: [
    { label: "GitHub",  href: "https://github.com/CVLAB-Unibo" },
    { label: "Google Scholar", href: "#" },
    { label: "X / Twitter",    href: "#" }
  ]
};
