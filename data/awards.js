/* ===========================================================================
   Awards – shown in "Awards & recognition" on the home page and in the News timeline.

   Paper awards are picked up automatically from the `tag` field of
   data/publications.js:
     "Best Paper…", "Best Poster…", "…Award", "…Honorable Mention"  -> award card
     "Oral", "Highlight", "Spotlight"                              -> "Orals, spotlights & highlights" list
   so there is no need to repeat them here.

   Add below the awards that are NOT tied to a paper card:
     year    (required)
     title   (required) name of the award
     event   where / who gave it (short: it is shown in capitals), e.g. "CVPL 2022" =
             Italian Association for Computer Vision, Pattern Recognition and Machine Learning
     work    the paper, thesis or invention that was awarded (optional)
     person  shown only for personal awards such as thesis prizes; the other
             awards are presented as awards of the lab
     url     page that documents the award (optional)
   =========================================================================== */
window.AWARDS = [
  { year: 2022, title: "Best PhD Thesis Award", person: "Fabio Tosi",
    event: "CVPL 2022", work: "Deep-learning for 3D reconstruction",
    url: "https://www.cvpl.it/en/awards/#miglior_tesi_dottorato" },
  { year: 2022, title: "Winner, OpenCV Spatial AI Competition",
    event: "OpenCV AI Competition 2022", work: "eyecan reborn" },
  { year: 2021, title: "Intellectual Property Award – Future Mobility, category winner",
    event: "IPA 2021 · Expo 2020 Dubai",
    work: "Self-confident: online learning for detecting depth sensor failures",
    url: "https://uibm.mise.gov.it/images/DOSSIER.pdf" },
  { year: 2018, title: "PhD Thesis Award – Honorable Mention", person: "Matteo Poggi", event: "CVPL 2018" },
  { year: 2018, title: "Best Paper Award",
    event: "14th IEEE Embedded Vision Workshop · CVPR 2018",
    work: "KCNN: Extremely-Efficient Hardware Keypoint Detection With a Compact Convolutional Neural Network",
    url: "https://openaccess.thecvf.com/content_cvpr_2018_workshops/w12/html/Di_Febbo_KCNN_Extremely-Efficient_Hardware_CVPR_2018_paper.html" },
  { year: 2014, title: "Best Demo Paper Award",
    event: "4th IEEE Workshop on Mobile Vision · CVPR 2014" },
    // probably "A Compact 3D Camera Suited for Mobile and Embedded Vision Applications" (the lab's only CVPRW 2014 paper): to confirm, then add it as `work`
  { year: 2011, title: "Best Paper Award",
    event: "7th IEEE Embedded Vision Workshop · CVPR 2011",
    work: "Near real-time Fast Bilateral Stereo on the GPU" }
];
