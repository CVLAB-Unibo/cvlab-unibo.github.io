/* ===========================================================================
   Activities of the lab beyond papers. Workshops, tutorials, demos and patents are
   shown in the News timeline, together with the reviewing awards of the service rows.

   kind: "workshop"  workshops and challenges organised by CVLab (not chair roles of single members)
         "tutorial"  tutorials we give at conferences
         "demo"      live demos at conferences and exhibitions
         "patent"    patents (year: filing year)
         "service"   recognitions for reviewing / area chairing, editorial roles

   Fields: year, event (short, e.g. "CVPR 2026"), title, people, url, note.
   "service" rows: Outstanding / Top Reviewer and Outstanding Area Chair awards appear in the
   News timeline (one item per year, with the names in small); all service rows also feed one
   sentence under the awards on the home page. `who` lists the members concerned. Add yourself!
   =========================================================================== */
window.ACTIVITIES = [
  /* ---- workshops & challenges ---- */
  { kind: "workshop", year: 2026, event: "ECCV 2026", title: "NeuSLAM 2026: 3rd Dense Neural SLAM Workshop", url: "https://sites.google.com/view/neuslam" },
  { kind: "workshop", year: 2026, event: "ECCV 2026", title: "CV4GOOD: Computer Vision for Humanitarian Action" },
  { kind: "workshop", year: 2026, event: "CVPR 2026", title: "NTIRE 2026 Challenge on HR Depth from Images of Specular and Transparent Surfaces",
    note: "Two tracks: stereo and metric monocular depth.", url: "https://cvlai.net/ntire/2026/" },
  { kind: "workshop", year: 2025, event: "ICCV 2025", title: "NeuSLAM 2025: 2nd Dense Neural SLAM Workshop", url: "https://sites.google.com/view/neuslam" },
  { kind: "workshop", year: 2025, event: "ICCV 2025", title: "TRICKY 2025: Transparent & Reflective objects In the Wild Challenges" },
  { kind: "workshop", year: 2025, event: "CVPR 2025", title: "NTIRE 2025 Challenge on HR Depth from Images of Specular and Transparent Surfaces", url: "https://cvlai.net/ntire/2025/" },
  { kind: "workshop", year: 2025, event: "CVPR 2025", title: "4th Monocular Depth Estimation Challenge (MDEC)", url: "https://jspenmar.github.io/MDEC/" },
  { kind: "workshop", year: 2024, event: "ECCV 2024", title: "NeuSLAM 2024: 1st Dense Neural SLAM Workshop", url: "https://sites.google.com/view/neuslam" },
  { kind: "workshop", year: 2024, event: "ECCV 2024", title: "TradiCV 2024: 2nd Workshop on Traditional Computer Vision in the Age of Deep Learning", url: "https://sites.google.com/view/tradicv" },
  { kind: "workshop", year: 2024, event: "ECCV 2024", title: "TRICKY 2024: Transparent & Reflective objects In the Wild Challenges", url: "https://sites.google.com/view/eccv24-tricky-workshop/" },
  { kind: "workshop", year: 2024, event: "CVPR 2024", title: "NTIRE 2024 Challenge on HR Depth from Images of Specular and Transparent Surfaces",
    note: "Two tracks: stereo and monocular depth.", url: "https://cvlab-unibo.github.io/booster-web/ntire" },
  { kind: "workshop", year: 2024, event: "CVPR 2024", title: "3rd Monocular Depth Estimation Challenge (MDEC)", url: "https://jspenmar.github.io/MDEC/" },
  { kind: "workshop", year: 2023, event: "CVPR 2023", title: "NTIRE 2023 Challenge on HR Depth from Images of Specular and Transparent Surfaces",
    note: "Two tracks: stereo and monocular depth.", url: "https://cvlab-unibo.github.io/booster-web/ntire" },
  { kind: "workshop", year: 2021, event: "ICCV 2021", title: "1st Workshop on Traditional Computer Vision in the Age of Deep Learning (TradiCV)" },

  /* ---- tutorials ---- */
  { kind: "tutorial", year: 2024, event: "CVPR 2024", title: "Deep Stereo Matching in the Twenties",
    people: "Matteo Poggi, Fabio Tosi", url: "https://sites.google.com/view/stereo-twenties" },
  { kind: "tutorial", year: 2020, event: "ECCV 2020", title: "Facing depth estimation in-the-wild with deep networks",
    people: "Matteo Poggi, Fabio Tosi, Filippo Aleotti, Konstantinos Batsos, Philippos Mordohai, Stefano Mattoccia",
    url: "https://sites.google.com/view/eccv-2020-robust-depth/home" },
  { kind: "tutorial", year: 2020, event: "CVPR 2020", title: "Learning and understanding single image depth estimation in the wild",
    people: "Matteo Poggi, Fabio Tosi, Filippo Aleotti, Stefano Mattoccia, Clément Godard, Jamie Watson, Michael Firman, Gabriel J. Brostow",
    url: "https://sites.google.com/view/cvpr-2020-depth-from-mono/home" },
  { kind: "tutorial", year: 2019, event: "CVPR 2019", title: "Learning-based depth estimation from stereo and monocular images: successes, limitations and future challenges",
    people: "Matteo Poggi, Fabio Tosi, Konstantinos Batsos, Philippos Mordohai, Stefano Mattoccia",
    url: "https://sites.google.com/view/cvpr-2019-depth-from-image/home" },
  { kind: "tutorial", year: 2018, event: "3DV 2018", title: "Learning-based depth estimation from stereo and monocular images: successes, limitations and future challenges",
    people: "Matteo Poggi, Fabio Tosi, Konstantinos Batsos, Philippos Mordohai, Stefano Mattoccia",
    url: "https://sites.google.com/view/3dv-2018-depth-from-image/home" },

  /* ---- demos ---- */
  { kind: "demo", year: 2026, event: "CVPR 2026", title: "Zero-Shot Real-Time Monocular Depth on Mobile Devices",
    people: "Fabio Tosi, Luca Bartolomei, Matteo Poggi, Stefano Mattoccia", url: "https://fabiotosi92.github.io/depth.zip/" },
  { kind: "demo", year: 2025, event: "CVPR 2025", title: "Robust Zero-Shot Depth Perception through Mono-Stereo Fusion",
    people: "Luca Bartolomei, Fabio Tosi, Matteo Poggi, Stefano Mattoccia", url: "https://stereoanywhere.github.io/" },
  { kind: "demo", year: 2024, event: "ECCV 2024", title: "Multi-Setup Depth Perception through Virtual Image Hallucination",
    people: "Luca Bartolomei, Matteo Poggi, Fabio Tosi, Andrea Conti, Stefano Mattoccia", url: "https://eventvppstereo.github.io/demo.html" },
  { kind: "demo", year: 2024, event: "CVPR 2024", title: "Robust depth perception through Virtual Pattern Projection",
    people: "Luca Bartolomei, Matteo Poggi, Fabio Tosi, Andrea Conti, Stefano Mattoccia", url: "https://github.com/bartn8/cvpr24-demo" },
  { kind: "demo", year: 2021, event: "Expo 2020 Dubai", title: "Scene perception from images with deep learning",
    people: "Matteo Poggi, Fabio Tosi, Stefano Mattoccia",
    note: "Real-time 3D mapping and social-distance monitoring from a single camera." },
  { kind: "demo", year: 2019, event: "CVPR 2019", title: "Real-time self-adaptive deep stereo",
    people: "Alessio Tonioni, Fabio Tosi, Matteo Poggi, Stefano Mattoccia, Luigi Di Stefano" },
  { kind: "demo", year: 2019, event: "CVPR 2019", title: "Real-time monocular depth estimation without GPU",
    people: "Matteo Poggi, Fabio Tosi, Filippo Aleotti, Stefano Mattoccia" },
  { kind: "demo", year: 2019, event: "DATE 2019", title: "Energy-efficient monocular depth estimation on ARM-based embedded platforms",
    people: "Valentino Peluso, Antonio Cipolletta, Andrea Calimera, Matteo Poggi, Fabio Tosi, Stefano Mattoccia", note: "University Booth." },
  { kind: "demo", year: 2018, event: "3DV 2018", title: "Towards real-time monocular and unsupervised depth estimation on CPU",
    people: "Matteo Poggi, Fabio Tosi, Stefano Mattoccia" },
  { kind: "demo", year: 2018, event: "ECCV 2018", title: "Towards real-time learning of monocular depth estimation enabling multiple view synthesis on CPU",
    people: "Matteo Poggi, Fabio Tosi, Stefano Mattoccia" },

  /* ---- patents (year = filing year) ---- */
  { kind: "patent", year: 2023, title: "Virtual Pattern Projection", note: "International (PCT) application",
    people: "Luca Bartolomei, Stefano Mattoccia, Matteo Poggi, Fabio Tosi",
    url: "https://www.unibo.it/en/university-outreach/business-and-nonprofit/university-patents/university-patents/scheda/2484" },
  { kind: "patent", year: 2021, title: "Method for determining the depth from a single image and system thereof", note: "With Politecnico di Torino",
    people: "Matteo Poggi, Filippo Aleotti, Fabio Tosi, Stefano Mattoccia, Valentino Peluso, Antonio Cipolletta, Andrea Calimera",
    url: "https://www.unibo.it/it/con-societa-e-impresa/imprese-e-non-profit/brevetti-ateneo/brevetti-ateneo/scheda/2365" },
  { kind: "patent", year: 2020, title: "Method for determining the confidence of a disparity map through a self-adaptive learning of a neural network, and sensor system thereof",
    note: "Italian patent no. 102020000016054 · Intellectual Property Award 2021", people: "Matteo Poggi, Filippo Aleotti, Fabio Tosi, Stefano Mattoccia" },
  { kind: "patent", year: 2019, title: "Depth determination method based on images, self-adaptive neural networks, and relative system",
    note: "IT201900022707 · WO2021111482A1", people: "Alessio Tonioni, Matteo Poggi, Fabio Tosi, Stefano Mattoccia, Luigi Di Stefano",
    url: "https://patents.google.com/patent/WO2021111482A1/en" },
  { kind: "patent", year: 2019, title: "Depth determination method based on images, and relative system",
    note: "Italian patent no. 102019000006964", people: "Matteo Poggi, D. Pallotti, Fabio Tosi, Stefano Mattoccia" },
  { kind: "patent", year: 2007, title: "Apparecchio e metodo per il confronto di immagini digitali",
    note: "IT0001341200", people: "Stefano Mattoccia, Luigi Di Stefano" },
  { kind: "patent", year: 2007, title: "Metodo per l'individuazione e la correzione di disallineamenti di una pluralità di immagini componenti concorrenti a formare un'immagine risultante da controllare",
    note: "MO2007A000032", people: "Stefano Mattoccia, Luigi Di Stefano, A. Annovi" },

  /* ---- service to the community ---- */
  { kind: "service", year: null, event: "IJCV", title: "Associate Editor", who: ["Matteo Poggi"] },
  // editorial roles without a year: only the venue name goes into the generic line on the home page
  { kind: "service", year: null, event: "ECCV", title: "Area Chair / Associate Editor", who: ["Fabio Tosi"] },
  { kind: "service", year: null, event: "ICRA", title: "Area Chair / Associate Editor", who: ["Fabio Tosi"] },
  { kind: "service", year: null, event: "IROS", title: "Area Chair / Associate Editor", who: ["Fabio Tosi"] },
  { kind: "service", year: 2026, event: "ICRA 2026", title: "Associate Editor", who: ["Matteo Poggi"] },
  { kind: "service", year: 2026, event: "NeurIPS 2026", title: "Area Chair", who: ["Matteo Poggi"] },
  { kind: "service", year: 2026, event: "CVPR 2026", title: "Area Chair", who: ["Matteo Poggi", "Fabio Tosi"] },
  { kind: "service", year: 2026, event: "CVPR 2026", title: "Outstanding Area Chair", who: ["Matteo Poggi", "Fabio Tosi"] },
  { kind: "service", year: 2026, event: "ECCV 2026", title: "Outstanding Reviewer", who: ["Pierluigi Zama Ramirez", "Luca Bartolomei", "Alex Costanzino"] },
  { kind: "service", year: 2026, event: "CVPR 2026", title: "Outstanding Reviewer", who: ["Pierluigi Zama Ramirez", "Luca Bartolomei"] },
  { kind: "service", year: 2025, event: "NeurIPS 2025", title: "Top Reviewer", who: ["Luca Bartolomei"] },
  { kind: "service", year: 2025, event: "ICCV 2025", title: "Outstanding Reviewer", who: ["Matteo Poggi", "Fabio Tosi"] },
  { kind: "service", year: 2025, event: "CVPR 2025", title: "Outstanding Reviewer", who: ["Matteo Poggi", "Fabio Tosi", "Pierluigi Zama Ramirez", "Luca Bartolomei", "Alex Costanzino", "Giuseppe Lisanti"] },
  { kind: "service", year: 2025, event: "BMVC 2025", title: "Outstanding Reviewer", who: ["Matteo Poggi"] },
  { kind: "service", year: 2024, event: "ECCV 2024", title: "Outstanding Reviewer", who: ["Fabio Tosi"] },
  { kind: "service", year: 2024, event: "CVPR 2024", title: "Outstanding Reviewer", who: ["Matteo Poggi", "Fabio Tosi"] },
  { kind: "service", year: 2024, event: "BMVC 2024", title: "Outstanding Reviewer", who: ["Matteo Poggi"] },
  { kind: "service", year: 2023, event: "CVPR 2023", title: "Outstanding Reviewer", who: ["Matteo Poggi", "Fabio Tosi"] },
  { kind: "service", year: 2022, event: "ECCV 2022", title: "Outstanding Reviewer", who: ["Matteo Poggi"] },
  { kind: "service", year: 2021, event: "ICCV 2021", title: "Outstanding Reviewer", who: ["Fabio Tosi"] },
  { kind: "service", year: 2021, event: "NeurIPS 2021", title: "Top Reviewer", who: ["Giuseppe Lisanti"] },
  { kind: "service", year: 2021, event: "CVPR 2021", title: "Outstanding Reviewer", who: ["Matteo Poggi", "Samuele Salti"] },
  { kind: "service", year: 2020, event: "ECCV 2020", title: "Outstanding Reviewer", who: ["Fabio Tosi"] },
  { kind: "service", year: 2020, event: "ACCV 2020", title: "Outstanding Reviewer", who: ["Matteo Poggi"] },
  { kind: "service", year: 2020, event: "CVPR 2020", title: "Outstanding Reviewer", who: ["Matteo Poggi", "Samuele Salti"] },
  { kind: "service", year: 2019, event: "CVPR 2019", title: "Outstanding Reviewer", who: ["Matteo Poggi"] },
  { kind: "service", year: 2018, event: "CVPR 2018", title: "Outstanding Reviewer", who: ["Matteo Poggi"] }
];
