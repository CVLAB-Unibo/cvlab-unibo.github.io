/* ===========================================================================
   Team – groups are shown in the order below.

   Fields per person:
     name   (required)
     role   (required) text under the name
     url    personal website / profile. The name becomes a link, a small
            "Website" / "LinkedIn" pill is shown, and the name is also linked
            in the author lists of the publications.
     photo  optional. Default: imgs/team/<name-surname>.jpg  (lowercase, no accents,
            words separated by "-", e.g. imgs/team/matteo-poggi.jpg).
            Without a photo the initials are shown.
     email  optional
     badge  optional highlighted label under the name, e.g. "Active contributor to the lab"
     start  optional, "YYYY-MM-DD". Before that date the person is shown as "Incoming …" and not counted;
            from that date on the label disappears by itself.

   `alumni: true` on a group = former members (any past role: PhD, visiting, postdoc…): they appear on the Team page but
   NOT in the "Our people" carousel on the home page.
   Groups with no people are hidden.
   =========================================================================== */
window.TEAM = [
  {
    group: "Full Professors",
    kind: "faculty",
    people: [
      { name: "Luigi Di Stefano",  role: "Full Professor", url: "https://it.linkedin.com/in/luigi-di-stefano-a4b35b3a7", email: "luigi.distefano@unibo.it" },
      { name: "Stefano Mattoccia", role: "Full Professor", url: "https://stefanomattoccia.github.io/", email: "stefano.mattoccia@unibo.it" }
    ]
  },
  {
    group: "Associate Professors",
    kind: "faculty",
    people: [
      { name: "Giuseppe Lisanti", role: "Associate Professor", url: "https://www.unibo.it/sitoweb/giuseppe.lisanti/en", email: "giuseppe.lisanti@unibo.it" },
      { name: "Matteo Poggi",     role: "Associate Professor", url: "https://mattpoggi.github.io/", email: "m.poggi@unibo.it" },
      { name: "Samuele Salti",    role: "Associate Professor", url: "https://it.linkedin.com/in/samuelesalti", email: "samuele.salti@unibo.it" }
    ]
  },
  {
    group: "Junior Assistant Professors",
    kind: "faculty",
    people: [
      { name: "Fabio Tosi", role: "Junior Assistant Professor", url: "https://fabiotosi92.github.io/", email: "fabio.tosi5@unibo.it" }
    ]
  },
  {
    group: "Postdocs",
    kind: "postdocs",
    people: [
      { name: "Luca Bartolomei", role: "Postdoctoral Researcher", url: "https://bartn8.github.io/" },
      { name: "Andrea Amaduzzi", role: "Postdoctoral Researcher", url: "https://andreamaduzzi.github.io/" }
    ]
  },
  {
    group: "PhD Students",
    kind: "phd",
    people: [
      { name: "Ugo Leone Cavalcanti",  role: "PhD Student", url: "https://www.ugoleonecavalcanti.com/" },
      { name: "Ziren Gong",            role: "PhD Student", url: "https://zorangong.github.io/" },
      { name: "Enrico Mannocci",       role: "PhD Student", url: "https://noce99.github.io/" },
      { name: "Iacopo Curti",          role: "PhD Student", url: "https://www.unibo.it/sitoweb/iacopo.curti2" },
      { name: "Giacomo Melacini",      role: "PhD Student", url: "https://chavelanda.github.io/" },
      { name: "Edoardo Merli",         role: "PhD Student", url: "https://www.linkedin.com/in/edoardo-merli" },
      { name: "Matteo Fusconi",        role: "PhD Student", url: "https://it.linkedin.com/in/matteo-fusconi-2b0907271" },
      { name: "Francesco Ballerini",   role: "PhD Student", url: "https://www.unibo.it/sitoweb/francesco.ballerini4/en" },
      { name: "Alessandra Stramiglio", role: "PhD Student", url: "https://it.linkedin.com/in/alestrami" },
      { name: "Filippo Bartolucci",    role: "PhD Student", url: "https://github.com/filippobartolucci" },
      { name: "Stefano Mazzocchetti",  role: "PhD Student", url: "https://www.unibo.it/sitoweb/stefano.mazzocchett5/cv" },
      { name: "Mehdi Amlal",           role: "PhD Student", start: "2026-11-01", url: "https://mehdiamlal.com/" },
      { name: "Gabriele Pattarozzi",   role: "PhD Student", start: "2026-11-01", url: "https://it.linkedin.com/in/gabriele-pattarozzi" },
      { name: "Leonardo Montrucchio",  role: "PhD Student", start: "2026-11-01", url: "https://www.linkedin.com/in/leonardomontrucchio/" }
    ]
  },
  {
    group: "Visiting Researchers",
    kind: "visiting",
    people: [
      // { name: "Name Surname", role: "Visiting PhD Student – University of …" },
    ]
  },
  {
    group: "Former members",
    kind: "alumni",
    alumni: true,
    people: [
      { name: "Pierluigi Zama Ramirez", role: "Associate Professor at Ca' Foscari University of Venice", badge: "Active contributor to the lab", url: "https://pierlui92.github.io/" },
      { name: "Riccardo Spezialetti",   role: "Now at eyecan.ai", url: "https://it.linkedin.com/in/riccardo-spezialetti-443998212" },
      { name: "Luca De Luigi",          role: "Now at eyecan.ai", url: "https://it.linkedin.com/in/luca-de-luigi-4a713bba" },
      { name: "Filippo Aleotti",        role: "Now Machine Learning Engineer at Niantic, London", url: "https://filippoaleotti.github.io/website/" },
      { name: "Youmin Zhang",           role: "Now Co-founder of Rawmantic AI", url: "https://youmi-zym.github.io/" },
      { name: "Alessio Tonioni",        role: "Now Research Scientist at Google, Zurich", url: "https://alessiotonioni.github.io/" },
      { name: "Alex Costanzino",        role: "Now Postdoctoral Researcher at University of Bonn", url: "https://alex-costanzino.github.io/" },
      { name: "Andrea Conti",           role: "Now Computer Vision Engineer at Sony Depthsensing Solutions", url: "https://andreaconti.github.io/" },
      { name: "Adriano Cardace",        role: "Now Computer Vision Research Scientist at Stanford University", url: "https://www.linkedin.com/in/adriano-cardace" },
      { name: "Tommaso Cavallari",      role: "Now Senior Research Scientist at Niantic, Inc", url: "https://uk.linkedin.com/in/tcavallari" },
      { name: "Paolo Galeone",          role: "Now Head of Software Engineering at Zuru Tech", url: "https://it.linkedin.com/in/paolo-galeone-6782b311b" },
      { name: "Dario De Nardi",         role: "Now Edge AI Engineer at Reply Labs (Area42), Turin", url: "https://dariodenardi.me/" },
      { name: "Chaoqiang Zhao",         role: "Former member", url: "https://zxcqlf.github.io/" },
      { name: "Alessandro Maragno",     role: "Former member", url: "https://www.linkedin.com/in/alessandro-maragno-37784514a/" },
      { name: "Marlon Marcon",          role: "Now Assistant Professor at the Federal University of Technology – Paraná (UTFPR)" },
      { name: "Federico Tombari",       role: "Now Director of Research at Google, Zurich", url: "https://federicotombari.github.io/" },
      { name: "Daniele De Gregorio",    role: "Now CEO of eyecan.ai", url: "https://www.eyecan.ai/" },
      { name: "Rizhao Fan",             role: "Now at the Research Institute of Mine Artificial Intelligence", url: "https://www.linkedin.com/in/rizhao-fan123/?locale=en" },
      { name: "Ninghui Xu",             role: "Visiting researcher from Southeast University" },
      { name: "Xin Qiao",               role: "Visiting researcher from Xi'an Jiaotong University" },
      { name: "Alioscia Petrelli",      role: "Former member", url: "https://www.linkedin.com/in/alioscia-petrelli-851a3b4?originalSubdomain=it" },
      { name: "Gianluca Berardi",       role: "Former member", url: "https://www.linkedin.com/in/gianluca-berardi-phd/?locale=it" },
      { name: "Musawar Ali",            role: "Former member", url: "https://www.linkedin.com/in/musawar-ali-4362a6159/" },
      { name: "Alessio Mingozzi",       role: "Former member" },
      { name: "Marco Boschi",           role: "Former member", url: "https://marcoboschi.altervista.org/it/" }
    ]
  }
];

/* Text at the top of the Team page. {faculty} {postdocs} {phd} {visiting} {alumni} {current} are filled in from the data above. */
window.TEAM_OVERVIEW = {
  title: "Our group",
  paragraphs: [
    "CVLab brings together <strong>{faculty} faculty members</strong>, <strong>{postdocs} postdoctoral researchers</strong> and <strong>{phd} PhD students</strong> at the Department of Computer Science and Engineering (DISI) of the University of Bologna, working side by side on 3D perception, reconstruction and scene understanding.",
    "The faculty, from full professors to a junior assistant professor, give the scientific direction and supervise the work; postdocs and PhD students carry out most of the day-to-day research, often on projects that cut across several of our research pillars, and publish together with the faculty."
  ]
};
