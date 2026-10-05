/* ===========================================================================
   Publications – add one object per paper. Order does not matter: the page
   groups by `year` (newest first). Only `title`, `authors`, `venue`, `year`
   are required; every other field is optional.

   {
     title:    "Paper title",
     authors:  ["First Author*", "Second Author", "Last Author"],   // "*" = equal contribution
     equalContribution: true,              // shows "(* equal contribution)"
     venue:    "CVPR 2025",                // text shown after "Conference:"
     venueUrl: "https://cvpr.thecvf.com/", // optional link on the venue
     kind:     "Conference",               // label, default "Conference" (e.g. "Journal", "Workshop")
     tag:      "Oral",                     // optional badge: Oral / Spotlight / Highlight / Best Paper …
     year:     2025,
     abstract: "One to three sentences.",
     image:    "assets/img/publications/cvpr2025/teaser.png",   // thumbnail (path from site root)
     links: {                              // all optional – only existing ones are shown as buttons
       project: "https://…",
       pdf:     "https://arxiv.org/abs/…",
       code:    "https://github.com/CVLAB-Unibo/…",
       video:   "https://youtu.be/…",
       dataset: "https://huggingface.co/…"
     },
     bibtex:   "@inproceedings{…}",        // optional – if omitted a basic entry is generated
     noBanner: true,                       // optional: keep this figure out of the scrolling banner on the Publications page
     featured: 1,                          // 1, 2, 3… = show in "Highlights" on the home page, in this order
     summary:  "One line shown on the highlight card",
   }
   =========================================================================== */
window.PUBLICATIONS = [
  {
    title: "Weight Space Representation Learning on Diverse NeRF Architectures",
    image: "assets/img/publications/weight-space.jpg",
    authors: ["Francesco Ballerini", "Pierluigi Zama Ramirez", "Luigi Di Stefano", "Samuele Salti"],
    venue: "International Conference on Learning Representations (ICLR 2026)",
    rank: "CORE A*",
    year: 2026,
    abstract: "We learn representations directly from the weights of NeRFs trained with diverse architectures, enabling a single framework to process and reason on heterogeneous neural fields.",
    links: {
      project: "gmnerf/",
      pdf: "https://arxiv.org/abs/2502.09623",
      code: "https://github.com/CVLAB-Unibo/gmnerf",
      dataset: "https://huggingface.co/datasets/frallebini/gmnerf"
    },
    featured: 13,
    summary: "Learns directly from the weights of NeRFs with different architectures, with one single framework."
  },
  {
    "title": "Spectral Gating via Damped Oscillations for Adaptive Implicit Neural Representations",
    "authors": ["Alex Costanzino", "Pierluigi Zama Ramirez", "Giuseppe Lisanti", "Luigi Di Stefano"],
    "kind": "Conference",
    "venue": "European Conference on Computer Vision",
    "badge": "ECCV 2026",
    "year": 2026,
    "rank": "CORE A*",
    "tag": "Spotlight Oral",
    "abstract": "Each neuron's activation is modelled as the steady-state response of a sinusoidally-forced damped harmonic oscillator, learnt together with the weights: the network adapts its spectral selectivity to the target signal, following a coarse-to-fine curriculum and needing no task-specific tuning.",
    "image": "assets/img/publications/spectral.png",
    "url": "https://alex-costanzino.github.io/fdho/",
    "links": {
      "project": "https://alex-costanzino.github.io/fdho/",
      "paper": "https://eccv.ecva.net/virtual/2026/spotlight/6070",
      "code": "https://github.com/alex-costanzino/fdho-release"
    },
    "topics": ["3D Reconstruction & NVS"],
    "bibtex": "@inproceedings{costanzino2026fdho,\n  author    = {Costanzino, Alex and Zama Ramirez, Pierluigi and Lisanti, Giuseppe and Di Stefano, Luigi},\n  title     = {Spectral Gating via Damped Oscillations for Adaptive Implicit Neural Representations},\n  booktitle = {The European Conference on Computer Vision},\n  year      = {2026},\n}",
    "featured": 2,
    "summary": "Activations as damped oscillators: implicit neural representations that tune their own spectral gate, with no per-task tuning."
  },
  {
    "title": "Modulate-and-Map: Crossmodal Feature Mapping with Cross-View Modulation for 3D Anomaly Detection",
    "authors": ["Alex Costanzino", "Pierluigi Zama Ramirez", "Giuseppe Lisanti", "Luigi Di Stefano"],
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition – Findings",
    "badge": "CVPR Findings 2026",
    "year": 2026,
    "abstract": "ModMap maps features across both modalities and views, modelling view-dependent relationships through feature-wise modulation and a cross-view training strategy, with a depth encoder for industrial data released alongside; state of the art on the multiview, multimodal SiM3D benchmark.",
    "image": "assets/img/publications/modulate-and-map.png",
    "url": "https://alex-costanzino.github.io/modmap/",
    "links": {
      "project": "https://alex-costanzino.github.io/modmap/",
      "arxiv": "https://arxiv.org/abs/2604.02328",
      "code": "https://github.com/alex-costanzino/modmap-code",
      "dataset": "https://huggingface.co/datasets/arcanoXIII/SiM3D"
    },
    "bibtex": "@article{costanzino2026modmap,\n  author    = {Costanzino, Alex and Zama Ramirez, Pierluigi and Lisanti, Giuseppe and Di Stefano, Luigi},\n  title     = {Modulate-and-Map: Crossmodal Feature Mapping with Cross-View Modulation for 3D Anomaly Detection},\n  journal   = {The IEEE/CVF Conference on Computer Vision and Pattern Recognition Findings},\n  year      = {2026},\n}"
  },
  {
    title: "Deep Learning on Object-centric 3D Neural Fields",
    authors: ["Pierluigi Zama Ramirez*", "Luca De Luigi*", "Daniele Sirocchi*", "Adriano Cardace", "Riccardo Spezialetti", "Francesco Ballerini", "Samuele Salti", "Luigi Di Stefano"],
    equalContribution: true,
    kind: "Journal",
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
    year: 2024,
    abstract: "We introduce nf2vec, a framework that processes neural fields of 3D objects (NeRFs) as a new data modality for tasks such as classification, retrieval, segmentation and generation.",
    image: "nf2vec/img/teaser.png",
    links: {
      project: "nf2vec/",
      pdf: "https://arxiv.org/abs/2312.13277",
      code: "https://github.com/CVLAB-Unibo/nf2vec"
    }
  },
  {
    title: "Connecting NeRFs, Images, and Text",
    authors: ["Francesco Ballerini", "Pierluigi Zama Ramirez", "Roberto Mirabella", "Samuele Salti", "Luigi Di Stefano"],
    kind: "Workshop",
    venue: "CVPR Workshops – Implicit Neural Representations for Vision (INRV 2024)",
    year: 2024,
    abstract: "We learn a bidirectional mapping between NeRF embeddings and image/text embeddings, unlocking zero-shot NeRF classification and NeRF retrieval from images or text.",
    image: "clip2nerf/img/teaser.png",
    links: {
      project: "clip2nerf/",
      pdf: "https://arxiv.org/abs/2404.07993",
      code: "https://github.com/CVLAB-Unibo/clip2nerf"
    }
  },
  {
    title: "Deep Learning on Implicit Neural Representations of Shapes",
    authors: ["Luca De Luigi*", "Adriano Cardace*", "Riccardo Spezialetti*", "Pierluigi Zama Ramirez", "Samuele Salti", "Luigi Di Stefano"],
    equalContribution: true,
    venue: "International Conference on Learning Representations (ICLR 2023)",
    rank: "CORE A*",
    year: 2023,
    abstract: "inr2vec compresses an Implicit Neural Representation of a 3D shape into a compact embedding that can be fed to standard deep learning pipelines.",
    image: "inr2vec/img/teaser.png",
    links: {
      project: "inr2vec/",
      pdf: "https://arxiv.org/abs/2302.05438",
      code: "https://github.com/CVLAB-Unibo/inr2vec"
    },
    featured: 11,
    summary: "Compact embeddings of implicit neural representations, so that standard deep learning can work on shapes."
  },
  {
    title: "Self-Distillation for Unsupervised 3D Domain Adaptation",
    authors: ["Adriano Cardace", "Riccardo Spezialetti", "Pierluigi Zama Ramirez", "Samuele Salti", "Luigi Di Stefano"],
    venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV 2023)",
    year: 2023,
    abstract: "A self-distillation approach to unsupervised domain adaptation for point cloud classification on an unlabeled target domain.",
    image: "FeatureDistillation/img/teaser.jpg",
    links: {
      project: "FeatureDistillation/",
      pdf: "https://arxiv.org/abs/2210.08226",
      code: "https://github.com/CVLAB-Unibo/Feature-Distillation-for-3D-UDA"
    }
  },
  {
    title: "RefRec: Pseudo-labels Refinement via Shape Reconstruction for Unsupervised 3D Domain Adaptation",
    authors: ["Adriano Cardace", "Riccardo Spezialetti", "Pierluigi Zama Ramirez", "Samuele Salti", "Luigi Di Stefano"],
    venue: "International Conference on 3D Vision (3DV 2021)",
    tag: "Oral",
    year: 2021,
    abstract: "We refine pseudo-labels for unsupervised 3D domain adaptation by exploiting a shape reconstruction task on the target domain.",
    image: "RefRec/img/teaser.png",
    links: {
      project: "RefRec/",
      pdf: "https://arxiv.org/abs/2110.11036",
      code: "https://github.com/CVLAB-Unibo/RefRec"
    }
  },

  {
    "title": "Multimodal Industrial Anomaly Detection by Crossmodal Feature Mapping",
    "featured": 5,
    "summary": "Learns to map features across modalities on nominal samples and flags anomalies as inconsistencies.",
    "authors": [
      "Alex Costanzino*",
      "Pierluigi Zama Ramirez*",
      "Giuseppe Lisanti",
      "Luigi Di Stefano"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2024), pp. 17234–17243",
    "year": 2024,
    "rank": "CORE A*",
    "abstract": "We propose a light and fast framework that learns to map features from one modality (point clouds, images) to the other on nominal samples, and detects anomalies by pinpointing inconsistencies between observed and mapped features. It achieves state-of-the-art detection and segmentation on MVTec 3D-AD, in the standard and few-shot settings, with faster inference and a smaller memory footprint than previous multimodal methods.",
    "links": {
      "project": "https://cvlab-unibo.github.io/CrossmodalFeatureMapping/",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2024/papers/Costanzino_Multimodal_Industrial_Anomaly_Detection_by_Crossmodal_Feature_Mapping_CVPR_2024_paper.pdf",
      "code": "https://github.com/CVLAB-Unibo/crossmodal-feature-mapping"
    },
    "image": "assets/img/publications/crossmodal-feature-mapping.jpg",
    "equalContribution": true,
    "bibtex": "@inproceedings{costanzino2024cross,\n    title = {Multimodal Industrial Anomaly Detection by Crossmodal Feature Mapping},\n    author = {Costanzino, Alex and Zama Ramirez, Pierluigi and Lisanti, Giuseppe and Di Stefano, Luigi},\n    booktitle = {Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition},\n    note = {CVPR},\n    year = {2024},\n}"
  },

  {
    "title": "CompletionFormer: Depth Completion with Convolutions and Vision Transformers",
    "authors": [
      "Youmin Zhang",
      "Xianda Guo",
      "Matteo Poggi",
      "Zheng Zhu",
      "Guan Huang",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2023), pp. 18527–18536",
    "year": 2023,
    "rank": "CORE A*",
    "topics": [
      "Depth Perception"
    ],
    "featured": 10,
    "summary": "Fuses convolutions and vision Transformers in a single block for depth completion.",
    "image": "assets/img/publications/completionformer.jpg",
    "links": {
      "project": "https://youmi-zym.github.io/projects/CompletionFormer",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2023/papers/Zhang_CompletionFormer_Depth_Completion_With_Convolutions_and_Vision_Transformers_CVPR_2023_paper.pdf",
      "code": "https://github.com/youmi-zym/CompletionFormer",
      "video": "https://www.youtube.com/watch?v=SLKAwrY2qjg&t=111s"
    },
    "bibtex": "@inproceedings{zhang2023completionformer,\n  title={Completionformer: Depth completion with convolutions and vision transformers},\n  author={Zhang, Youmin and Guo, Xianda and Poggi, Matteo and Zhu, Zheng and Huang, Guan and Mattoccia, Stefano},\n  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n  pages={18527--18536},\n  year={2023}\n}"
  },
  {
    "title": "ReLight My NeRF: A Dataset for Novel View Synthesis and Relighting of Real World Objects",
    "authors": [
      "Marco Toschi*",
      "Riccardo De Matteo*",
      "Riccardo Spezialetti*",
      "Daniele De Gregorio",
      "Luigi Di Stefano",
      "Samuele Salti"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2023), pp. 20762–20772",
    "year": 2023,
    "rank": "CORE A*",
    "featured": 9,
    "summary": "A dataset for novel view synthesis and relighting of real-world objects.",
    "image": "assets/img/publications/relight-my-nerf.jpg",
    "equalContribution": true,
    "tag": "Highlight",
    "links": {
      "project": "https://eyecan-ai.github.io/rene/",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2023/html/Toschi_ReLight_My_NeRF_A_Dataset_for_Novel_View_Synthesis_and_CVPR_2023_paper.html",
      "code": "https://github.com/eyecan-ai/rene",
      "leaderboard": "https://eyecan-ai.github.io/rene/#leaderboard",
      "video": "https://www.youtube.com/watch?v=23vZMbbZAHY"
    }
  },
  {
    "title": "Unsupervised Learning of Local Equivariant Descriptors for Point Clouds",
    "authors": [
      "Marlon Marcon",
      "Riccardo Spezialetti",
      "Samuele Salti",
      "Luciano Silva",
      "Luigi Di Stefano"
    ],
    "kind": "Journal",
    "venue": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), vol. 44(12): 9687–9702",
    "year": 2022,
    "rank": "Q1",
    "summary": "Self-supervised learning of local equivariant 3D descriptors for point clouds."
  },
  {
    "title": "LLaNA: Large Language and NeRF Assistant",
    "authors": [
      "Andrea Amaduzzi",
      "Pierluigi Zama Ramirez",
      "Giuseppe Lisanti",
      "Samuele Salti",
      "Luigi Di Stefano"
    ],
    "kind": "Conference",
    "venue": "Conference on Neural Information Processing Systems (NeurIPS 2024)",
    "year": 2024,
    "rank": "CORE A*",
    "featured": 7,
    "summary": "A multimodal language assistant that understands NeRFs directly from their weights.",
    "image": "assets/img/publications/LLaNA.jpg",
    "links": {
      "project": "https://andreamaduzzi.github.io/llana/",
      "pdf": "https://arxiv.org/pdf/2406.11840",
      "extended": "https://arxiv.org/pdf/2504.13995",
      "code": "https://github.com/CVLAB-Unibo/LLaNA",
      "dataset": "https://huggingface.co/datasets/andreamaduzzi/ShapeNeRF-Text/tree/main"
    }
  },
  {
    "title": "SiM3D: Single-Instance Multiview Multimodal and Multisetup 3D Anomaly Detection Benchmark",
    "authors": [
      "Alex Costanzino",
      "Pierluigi Zama Ramirez",
      "Luigi Lella",
      "Matteo Ragaglia",
      "Alessandro Oliva",
      "Giuseppe Lisanti",
      "Luigi Di Stefano"
    ],
    "kind": "Conference",
    "venue": "International Conference on Computer Vision (ICCV 2025), pp. 20944–20953",
    "year": 2025,
    "rank": "CORE A*",
    "featured": 3,
    "summary": "A benchmark for single-instance, multiview and multimodal 3D anomaly detection.",
    "image": "assets/img/publications/sim3d.jpg",
    "links": {
      "project": "https://alex-costanzino.github.io/SiM3D/",
      "pdf": "https://openaccess.thecvf.com/content/ICCV2025/papers/Costanzino_SiM3D_Single-instance_Multiview_Multimodal_and_Multisetup_3D_Anomaly_Detection_Benchmark_ICCV_2025_paper.pdf",
      "dataset": "https://huggingface.co/datasets/arcanoXIII/SiM3D"
    },
    "bibtex": "@inproceedings{costanzino2025sim3d,\n  author    = {Costanzino, Alex and Zama Ramirez, Pierluigi and Lella, Luigi and Ragaglia, Matteo and Oliva, Alessandro and Lisanti, Giuseppe and Di Stefano, Luigi},\n  title     = {SiM3D: Single-instance Multiview Multimodal and Multisetup 3D Anomaly Detection Benchmark},\n  booktitle = {International Conference on Computer Vision (ICCV)},\n  year      = {2025},\n}"
  },

  // ---- Fabio Tosi's papers (imported from fabiotosi92.github.io; thumbnails in assets/img/publications/) ----
  {
    "title": "Marigold V2: Revisiting Diffusion Transformers for Monocular Depth Estimation",
    "featured": 1,
    "summary": "Revisits diffusion transformers for monocular depth estimation.",
    "authors": [
      "Igor Pavlovic*",
      "Thiemo Wandel*",
      "Anton Obukhov",
      "Luca Bartolomei",
      "Andrey Davydov",
      "Fabio Tosi",
      "Matteo Poggi",
      "Sabine Süsstrunk",
      "Dengxin Dai"
    ],
    "authorLinks": {
      "Igor Pavlovic": "https://www.linkedin.com/in/igor-pavlovic-328979221/",
      "Thiemo Wandel": "https://www.linkedin.com/in/thiemo-wandel/",
      "Anton Obukhov": "https://www.obukhov.ai/",
      "Luca Bartolomei": "https://bartn8.github.io/",
      "Andrey Davydov": "https://www.linkedin.com/in/andrey-davydov1/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "equalContribution": true,
    "kind": "Journal",
    "venue": "ACM Transactions on Graphics, vol. 45, no. 6, art. 204",
    "badge": "SIGGRAPH Asia 2026",
    "rank": "CORE A*",
    "year": 2026,
    "image": "assets/img/publications/marigoldv2.jpg",
    "url": "https://huggingface.co/spaces/huawei-bayerlab/marigold-v2-web",
    "links": {
      "project": "https://huggingface.co/spaces/huawei-bayerlab/marigold-v2-web",
      "arxiv": "https://arxiv.org/abs/2609.08084",
      "code": "https://github.com/huawei-bayerlab/marigold-v2",
      "weights": "https://huggingface.co/huawei-bayerlab/marigold-v2-0",
      "demo": "https://huggingface.co/spaces/toshas/Marigold-V2"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "ZipDepth: Bringing Lightweight Zero-Shot Monocular Depth Anywhere, on Any Device",
    "authors": [
      "Fabio Tosi",
      "Luca Bartolomei",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Luca Bartolomei": "https://bartn8.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "kind": "Conference",
    "venue": "European Conference on Computer Vision",
    "badge": "ECCV 2026",
    "year": 2026,
    "rank": "CORE A*",
    "image": "assets/img/publications/zipdepth.jpg",
    "url": "https://zipdepth.github.io/",
    "links": {
      "project": "https://zipdepth.github.io/",
      "arxiv": "https://arxiv.org/abs/2607.08771",
      "supp": "https://zipdepth.github.io/static/pdfs/zipdepth_supplementary.pdf",
      "code": "https://github.com/fabiotosi92/ZipDepth",
      "demo": "https://fabiotosi92.github.io/depth.zip/",
      "video": "https://www.youtube.com/watch?v=Rmlk2TsIl6k"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "DINO-SLAM: DINO-informed RGB-D SLAM for Neural Implicit and Explicit Representations",
    "authors": [
      "Ziren Gong",
      "Xiaohan Li",
      "Fabio Tosi",
      "Youmin Zhang",
      "Stefano Mattoccia",
      "Jiawei Wu",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Ziren Gong": "https://zorangong.github.io/",
      "Youmin Zhang": "https://youmi-zym.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "European Conference on Computer Vision",
    "badge": "ECCV 2026",
    "year": 2026,
    "rank": "CORE A*",
    "image": "assets/img/publications/dinoslam.jpg",
    "url": "https://zorangong.github.io/DINO-SLAM/",
    "links": {
      "project": "https://zorangong.github.io/DINO-SLAM/",
      "arxiv": "https://arxiv.org/abs/2507.19474",
      "paper": "https://doi.org/10.1007/978-3-032-37041-9_9"
    },
    "addTopics": ["SLAM & Localization"]
  },
  {
    "title": "MAGiSt3R: Multi-Agent Feed-forward 3D Reconstruction from Monocular RGB Videos",
    "authors": [
      "Ziren Gong",
      "Xiaohan Li",
      "Fabio Tosi",
      "Ninghui Xu",
      "Stefano Mattoccia",
      "Jianfei Cai",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Ziren Gong": "https://zorangong.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "European Conference on Computer Vision",
    "badge": "ECCV 2026",
    "year": 2026,
    "rank": "CORE A*",
    "image": "assets/img/publications/magist3r.jpg",
    "url": "https://zorangong.github.io/magist3r_page/",
    "links": {
      "project": "https://zorangong.github.io/magist3r_page/",
      "arxiv": "https://arxiv.org/abs/2607.15211",
      "paper": "https://doi.org/10.1007/978-3-032-36984-0_23"
    },
    "addTopics": ["SLAM & Localization"]
  },
  {
    "title": "FlowIt: Global Matching via Hierarchical Transformers and Optimal Transport for Optical Flow",
    "authors": [
      "Sadra Safadoust",
      "Fabio Tosi",
      "Matteo Poggi",
      "Fatma Güney"
    ],
    "authorLinks": {
      "Sadra Safadoust": "https://sadrasafa.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Fatma Güney": "https://mysite.ku.edu.tr/fguney/"
    },
    "kind": "Conference",
    "venue": "British Machine Vision Conference",
    "badge": "BMVC 2026",
    "year": 2026,
    "rank": "CORE A",
    "image": "assets/img/publications/flowit.jpg",
    "url": "https://github.com/sadrasafa/FlowIt",
    "links": {
      "code": "https://github.com/sadrasafa/FlowIt",
      "arxiv": "https://arxiv.org/abs/2603.28759"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "Bidirectional Cross-Modal Prompting for Event-Frame Asymmetric Stereo",
    "authors": [
      "Ninghui Xu",
      "Fabio Tosi",
      "Lihui Wang",
      "Jiawei Han",
      "Luca Bartolomei",
      "Zhiting Yao",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Luca Bartolomei": "https://bartn8.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2026",
    "year": 2026,
    "rank": "CORE A*",
    "image": "assets/img/publications/bicmpstereo.jpg",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Bidirectional_Cross-Modal_Prompting_for_Event-Frame_Asymmetric_Stereo_CVPR_2026_paper.pdf",
    "links": {
      "pdf": "https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Bidirectional_Cross-Modal_Prompting_for_Event-Frame_Asymmetric_Stereo_CVPR_2026_paper.pdf",
      "code": "https://github.com/xnh97/Bi-CMPStereo"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "EventHub: Data Factory for Generalizable Event-Based Stereo Networks without Active Sensors",
    "authors": [
      "Luca Bartolomei",
      "Fabio Tosi",
      "Matteo Poggi",
      "Stefano Mattoccia",
      "Guillermo Gallego"
    ],
    "authorLinks": {
      "Luca Bartolomei": "https://bartn8.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2026",
    "year": 2026,
    "rank": "CORE A*",
    "tag": "Highlight",
    "image": "assets/img/publications/eventhub.jpg",
    "url": "https://bartn8.github.io/eventhub/",
    "links": {
      "project": "https://bartn8.github.io/eventhub/",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2026/papers/Bartolomei_EventHub_Data_Factory_for_Generalizable_Event-Based_Stereo_Networks_without_Active_CVPR_2026_paper.pdf",
      "arxiv": "https://arxiv.org/abs/2604.02331",
      "poster": "https://bartn8.github.io/eventhub/assets/poster_cvpr2026.pdf",
      "code": "https://github.com/bartn8/eventhub"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "StereoSpace: Depth-Free Synthesis of Stereo Geometry via End-to-End Diffusion in a Canonical Space",
    "authors": [
      "Tjark Behrens",
      "Anton Obukhov",
      "Bingxin Ke",
      "Fabio Tosi",
      "Matteo Poggi",
      "Konrad Schindler"
    ],
    "authorLinks": {
      "Anton Obukhov": "https://www.obukhov.ai/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition – Findings",
    "badge": "CVPR Findings 2026",
    "year": 2026,
    "image": "assets/img/publications/stereospace.jpg",
    "url": "https://arxiv.org/abs/2512.10959",
    "links": {
      "arxiv": "https://arxiv.org/abs/2512.10959",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2026F/papers/Behrens_StereoSpace_Depth-Free_Synthesis_of_Stereo_Geometry_via_End-to-End_Diffusion_in_CVPRF_2026_paper.pdf",
      "code": "https://github.com/prs-eth/stereospace",
      "demo": "https://huggingface.co/spaces/prs-eth/stereospace"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "Ov3R: Open-Vocabulary Semantic 3D Reconstruction from RGB Videos",
    "authors": [
      "Ziren Gong",
      "Xiaohan Li",
      "Fabio Tosi",
      "Jiawei Han",
      "Stefano Mattoccia",
      "Jianfei Cai",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Ziren Gong": "https://zorangong.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2026",
    "year": 2026,
    "rank": "CORE A*",
    "image": "assets/img/publications/ov3r.jpg",
    "url": "https://zorangong.github.io/Ov3R_page/",
    "links": {
      "project": "https://zorangong.github.io/Ov3R_page/",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2026/papers/Gong_Ov3R_Open-Vocabulary_Semantic_3D_Reconstruction_from_RGB_Videos_CVPR_2026_paper.pdf",
      "code": "https://github.com/ZoranGong/Ov3R"
    },
    "addTopics": ["SLAM & Localization"]
  },
  {
    "title": "How NeRFs and 3D Gaussian Splatting are Reshaping SLAM: a Survey",
    "authors": [
      "Fabio Tosi",
      "Youmin Zhang",
      "Ziren Gong",
      "Erik Sandström",
      "Stefano Mattoccia",
      "Martin R. Oswald",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Youmin Zhang": "https://youmi-zym.github.io/",
      "Ziren Gong": "https://zorangong.github.io/",
      "Erik Sandström": "https://eriksandstroem.github.io/",
      "Martin R. Oswald": "https://cvg.ethz.ch/team/Dr-Martin-R-Oswald",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Journal",
    "venue": "IEEE Transactions on Robotics, vol. 42, pp. 1405–1427",
    "badge": "T-RO 2026",
    "year": 2026,
    "rank": "Q1",
    "image": "assets/img/publications/slam_survey.jpg",
    "url": "https://arxiv.org/abs/2402.13255",
    "links": {
      "arxiv": "https://arxiv.org/abs/2402.13255",
      "paper": "https://doi.org/10.1109/tro.2026.3666139"
    },
    "addTopics": ["SLAM & Localization", "3D Reconstruction & NVS"]
  },
  {
    "title": "FoundationSLAM: Unleashing the Power of Depth Foundation Models for End-to-End Dense Visual SLAM",
    "authors": [
      "Yuchen Wu",
      "Jiahe Li",
      "Fabio Tosi",
      "Matteo Poggi",
      "Jin Zheng",
      "Xiao Bai"
    ],
    "authorLinks": {
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "AAAI Conference on Artificial Intelligence",
    "badge": "AAAI 2026",
    "year": 2026,
    "rank": "CORE A*",
    "tag": "Oral",
    "image": "assets/img/publications/foundationslam.jpg",
    "url": "https://arxiv.org/pdf/2512.25008",
    "links": {
      "pdf": "https://arxiv.org/pdf/2512.25008"
    },
    "addTopics": ["SLAM & Localization", "Depth Perception"]
  },
  {
    "title": "WarpRF: Multi-View Consistency for Training-Free Uncertainty Quantification and Applications in Radiance Fields",
    "authors": [
      "Sadra Safadoust",
      "Fabio Tosi",
      "Fatma Güney",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Sadra Safadoust": "https://sadrasafa.github.io/",
      "Fatma Güney": "https://mysite.ku.edu.tr/fguney/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "IEEE/CVF Winter Conference on Applications of Computer Vision",
    "badge": "WACV 2026",
    "year": 2026,
    "rank": "CORE A",
    "image": "assets/img/publications/warprf.jpg",
    "url": "https://kuis-ai.github.io/WarpRF/",
    "links": {
      "project": "https://kuis-ai.github.io/WarpRF/",
      "pdf": "https://arxiv.org/pdf/2506.22433.pdf",
      "code": "https://github.com/sadrasafa/WarpRF"
    },
    "addTopics": ["3D Reconstruction & NVS"]
  },
  {
    "title": "Eve3D: Elevating Vision Models for Enhanced 3D Surface Reconstruction via Gaussian Splatting",
    "authors": [
      "Jiawei Zhang",
      "Youmin Zhang",
      "Fabio Tosi",
      "Meiying Gu",
      "Jiahe Li",
      "Xiaohan Yu",
      "Jin Zheng",
      "Xiao Bai",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Jiawei Zhang": "https://github.com/JiaweiZhang-THU",
      "Youmin Zhang": "https://youmi-zym.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "Conference on Neural Information Processing Systems",
    "badge": "NeurIPS 2025",
    "year": 2025,
    "rank": "CORE A*",
    "image": "assets/img/publications/eve3d.jpg",
    "url": "https://fabiotosi92.github.io/files/14521_Eve3D_Elevating_Vision_M-main.pdf",
    "links": {
      "pdf": "https://fabiotosi92.github.io/files/14521_Eve3D_Elevating_Vision_M-main.pdf",
      "supp": "https://fabiotosi92.github.io/files/14521_Eve3D_Elevating_Vision_M-appendix.pdf",
      "project": "https://youmi-zym.github.io/projects/Eve3D/"
    },
    "addTopics": ["3D Reconstruction & NVS", "SLAM & Localization"]
  },
  {
    "title": "FlowSeek: Optical Flow Made Easier with Depth Foundation Models and Motion Bases",
    "authors": [
      "Matteo Poggi",
      "Fabio Tosi"
    ],
    "authorLinks": {
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "International Conference on Computer Vision",
    "badge": "ICCV 2025",
    "year": 2025,
    "rank": "CORE A*",
    "image": "assets/img/publications/flowseek.jpg",
    "url": "https://arxiv.org/abs/2509.05297",
    "links": {
      "project": "https://flowseek25.github.io/",
      "pdf": "https://arxiv.org/abs/2509.05297",
      "code": "https://github.com/mattpoggi/flowseek",
      "poster": "https://iccv.thecvf.com/media/PosterPDFs/ICCV%202025/1668.png?t=1756118189.8297398"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "A Survey on Deep Stereo Matching in the Twenties",
    "authors": [
      "Fabio Tosi",
      "Luca Bartolomei",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Luca Bartolomei": "https://bartn8.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Journal",
    "venue": "International Journal of Computer Vision",
    "badge": "IJCV 2025",
    "year": 2025,
    "rank": "Q1",
    "image": "assets/img/publications/stereo_survey_twenties.jpg",
    "url": "https://link.springer.com/article/10.1007/s11263-024-02331-0",
    "links": {
      "pdf": "https://link.springer.com/article/10.1007/s11263-024-02331-0",
      "preprint": "https://fabiotosi92.github.io/files/survey-stereo.pdf",
      "code": "https://github.com/fabiotosi92/Awesome-Deep-Stereo-Matching"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "Stereo Anywhere: Robust Zero-Shot Deep Stereo Matching Even Where Either Stereo or Mono Fail",
    "featured": 4,
    "summary": "Zero-shot stereo that stays robust even where stereo or monocular cues fail.",
    "authors": [
      "Luca Bartolomei",
      "Fabio Tosi",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Luca Bartolomei": "https://bartn8.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2025",
    "year": 2025,
    "rank": "CORE A*",
    "image": "assets/img/publications/stereoanywhere.jpg",
    "url": "https://arxiv.org/pdf/2412.04472",
    "links": {
      "project": "https://stereoanywhere.github.io/",
      "pdf": "https://arxiv.org/pdf/2412.04472",
      "code": "https://github.com/bartn8/stereoanywhere/"
    },
    "addTopics": ["Stereo & Multi-Sensor", "Depth Perception"]
  },
  {
    "title": "Depth AnyEvent: A Cross-Modal Distillation Paradigm for Event-Based Monocular Depth Estimation",
    "authors": [
      "Luca Bartolomei",
      "Enrico Mannocci",
      "Fabio Tosi",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Luca Bartolomei": "https://bartn8.github.io/",
      "Enrico Mannocci": "https://www.unibo.it/sitoweb/enrico.mannocci3/en",
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "kind": "Conference",
    "venue": "International Conference on Computer Vision",
    "badge": "ICCV 2025",
    "year": 2025,
    "rank": "CORE A*",
    "image": "assets/img/publications/depthanyevent.jpg",
    "url": "https://bartn8.github.io/depthanyevent/",
    "links": {
      "project": "https://bartn8.github.io/depthanyevent/",
      "pdf": "https://doi.org/10.1109/ICCV51701.2025.01829",
      "code": "https://github.com/bartn8/depthanyevent"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "Active Stereo in the Wild through Virtual Pattern Projection",
    "authors": [
      "Luca Bartolomei",
      "Matteo Poggi",
      "Fabio Tosi",
      "Andrea Conti",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Luca Bartolomei": "https://bartn8.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Andrea Conti": "https://andreaconti.github.io//",
    },
    "kind": "Journal",
    "venue": "International Journal of Computer Vision",
    "badge": "IJCV 2025",
    "year": 2025,
    "rank": "Q1",
    "image": "assets/img/publications/active_stereo_wild.jpg",
    "links": {
      "pdf": "https://arxiv.org/pdf/2406.04345",
      "project": "https://vppstereo.github.io/",
      "code": "https://github.com/bartn8/vppstereo"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "CabNIR: A Benchmark for In-Vehicle Infrared Monocular Depth Estimation",
    "authors": [
      "Ugo Leone Cavalcanti",
      "Matteo Poggi",
      "Fabio Tosi",
      "Valerio Cambareri",
      "Vladimir Zlokolica",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Ugo Leone Cavalcanti": "https://www.ugoleonecavalcanti.com/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "kind": "Conference",
    "venue": "Winter Conference on Applications of Computer Vision",
    "badge": "WACV 2025",
    "year": 2025,
    "rank": "CORE A",
    "image": "assets/img/publications/cabnir.jpg",
    "url": "https://cabnir.github.io/",
    "links": {
      "project": "https://cabnir.github.io/",
      "pdf": "https://doi.org/10.1109/WACV61041.2025.00256"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "HS-SLAM: Hybrid Representation with Structural Supervision for Improved Dense SLAM",
    "authors": [
      "Ziren Gong",
      "Fabio Tosi",
      "Youmin Zhang",
      "Stefano Mattoccia",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Ziren Gong": "https://zorangong.github.io/",
      "Youmin Zhang": "https://youmi-zym.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "International Conference on Robotics and Automation",
    "badge": "ICRA 2025",
    "year": 2025,
    "rank": "CORE A*",
    "image": "assets/img/publications/hsslam.jpg",
    "url": "https://zorangong.github.io/HS-SLAM/",
    "links": {
      "project": "https://zorangong.github.io/HS-SLAM/",
      "pdf": "https://doi.org/10.1109/ICRA55743.2025.11127551",
      "video": "https://zorangong.github.io/HS-SLAM/static/videos/ICRA2025_video.mp4"
    },
    "addTopics": ["SLAM & Localization"]
  },
  {
    "title": "Self-Evolving Depth-Supervised 3D Gaussian Splatting from Rendered Stereo Pairs",
    "authors": [
      "Sadra Safadoust",
      "Fabio Tosi",
      "Fatma Güney",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Sadra Safadoust": "https://sadrasafa.github.io/",
      "Fatma Güney": "https://mysite.ku.edu.tr/fguney/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "British Machine Vision Conference",
    "badge": "BMVC 2024",
    "year": 2024,
    "rank": "CORE A",
    "tag": "Best Poster Award",
    "image": "assets/img/publications/stereogs.jpg",
    "url": "https://arxiv.org/pdf/2409.07456",
    "links": {
      "project": "https://kuis-ai.github.io/StereoGS/",
      "pdf": "https://arxiv.org/pdf/2409.07456",
      "code": "https://github.com/sadrasafa/StereoGS/"
    },
    "addTopics": ["3D Reconstruction & NVS", "Stereo & Multi-Sensor"]
  },
  {
    "title": "Diffusion Models for Monocular Depth Estimation: Overcoming Challenging Conditions",
    "featured": 6,
    "summary": "Diffusion models make monocular depth work in challenging conditions.",
    "authors": [
      "Fabio Tosi",
      "Pierluigi Zama Ramirez",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Pierluigi Zama Ramirez": "https://pierlui92.github.io//",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "European Conference on Computer Vision",
    "badge": "ECCV 2024",
    "year": 2024,
    "rank": "CORE A*",
    "image": "assets/img/publications/overcoming_challenging.jpg",
    "url": "https://raw.githubusercontent.com/fabiotosi92/Diffusion4RobustDepth/main/assets/main.pdf",
    "links": {
      "project": "https://diffusion4robustdepth.github.io/",
      "pdf": "https://raw.githubusercontent.com/fabiotosi92/Diffusion4RobustDepth/main/assets/main.pdf",
      "code": "https://github.com/fabiotosi92/Diffusion4RobustDepth"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "Booster: a Benchmark for Depth from Images of Specular and Transparent Surfaces",
    "authors": [
      "Pierluigi Zama Ramirez",
      "Alex Costanzino",
      "Fabio Tosi",
      "Matteo Poggi",
      "Stefano Mattoccia",
      "Luigi Di Stefano"
    ],
    "authorLinks": {
      "Pierluigi Zama Ramirez": "https://pierlui92.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Luigi Di Stefano": "https://www.unibo.it/sitoweb/luigi.distefano"
    },
    "kind": "Journal",
    "venue": "IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 46, no. 1, pp. 85–102",
    "badge": "TPAMI 2024",
    "year": 2024,
    "rank": "Q1",
    "image": "assets/img/publications/booster_tpami.jpg",
    "links": {
      "pdf": "https://doi.org/10.1109/TPAMI.2023.3323858",
      "project": "https://cvlab-unibo.github.io/booster-web/"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "Neural Disparity Refinement",
    "authors": [
      "Fabio Tosi",
      "Filippo Aleotti",
      "Pierluigi Zama Ramirez",
      "Matteo Poggi",
      "Stefano Mattoccia",
      "Luigi Di Stefano"
    ],
    "authorLinks": {
      "Filippo Aleotti": "https://filippoaleotti.github.io/website/",
      "Pierluigi Zama Ramirez": "https://pierlui92.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Luigi Di Stefano": "https://www.unibo.it/sitoweb/luigi.distefano"
    },
    "kind": "Journal",
    "venue": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    "badge": "TPAMI 2024",
    "year": 2024,
    "rank": "Q1",
    "image": "assets/img/publications/neural_disparity_refinement_tpami.jpg",
    "links": {
      "pdf": "https://doi.org/10.1109/TPAMI.2024.3411292",
      "project": "https://cvlab-unibo.github.io/neural-disparity-refinement-web/",
      "code": "https://github.com/CVLAB-Unibo/neural-disparity-refinement"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "Federated Online Adaptation for Deep Stereo",
    "authors": [
      "Matteo Poggi",
      "Fabio Tosi"
    ],
    "authorLinks": {
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2024",
    "year": 2024,
    "rank": "CORE A*",
    "image": "assets/img/publications/federated.jpg",
    "noBanner": true,
    "url": "https://mattpoggi.github.io/assets/papers/poggi2024cvpr.pdf",
    "links": {
      "project": "https://fedstereo.github.io/",
      "pdf": "https://mattpoggi.github.io/assets/papers/poggi2024cvpr.pdf",
      "code": "https://github.com/mattpoggi/fedstereo"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "GO-SLAM: Global Optimization for Consistent 3D Instant Reconstruction",
    "featured": 8,
    "summary": "Real-time global optimization for consistent 3D reconstruction from monocular, stereo and RGB-D input.",
    "authors": [
      "Youmin Zhang",
      "Fabio Tosi",
      "Stefano Mattoccia",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Youmin Zhang": "https://youmi-zym.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "International Conference on Computer Vision",
    "badge": "ICCV 2023",
    "year": 2023,
    "rank": "CORE A*",
    "image": "assets/img/publications/goslam.jpg",
    "url": "https://youmi-zym.github.io/projects/GO-SLAM/",
    "links": {
      "project": "https://youmi-zym.github.io/projects/GO-SLAM/",
      "pdf": "https://arxiv.org/pdf/2309.02436.pdf",
      "code": "https://github.com/youmi-zym/GO-SLAM"
    },
    "addTopics": ["SLAM & Localization"]
  },
  {
    "title": "Active Stereo Without Pattern Projector",
    "authors": [
      "Luca Bartolomei",
      "Matteo Poggi",
      "Fabio Tosi",
      "Andrea Conti",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Luca Bartolomei": "https://bartn8.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Andrea Conti": "https://andreaconti.github.io//",
    },
    "kind": "Conference",
    "venue": "International Conference on Computer Vision",
    "badge": "ICCV 2023",
    "year": 2023,
    "rank": "CORE A*",
    "image": "assets/img/publications/vpp.jpg",
    "url": "https://vppstereo.github.io/",
    "links": {
      "project": "https://vppstereo.github.io/",
      "code": "https://github.com/bartn8/vppstereo"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "NeRF-Supervised Deep Stereo",
    "featured": 12,
    "summary": "Trains stereo networks without ground truth, using NeRF-rendered stereo data.",
    "authors": [
      "Fabio Tosi",
      "Alessio Tonioni",
      "Daniele De Gregorio",
      "Matteo Poggi"
    ],
    "authorLinks": {
      "Alessio Tonioni": "https://alessiotonioni.github.io/",
      "Daniele De Gregorio": "https://www.eyecan.ai/",
      "Matteo Poggi": "https://mattpoggi.github.io/"
    },
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2023",
    "year": 2023,
    "rank": "CORE A*",
    "image": "assets/img/publications/stereonerf.jpg",
    "url": "https://nerfstereo.github.io/",
    "links": {
      "project": "https://nerfstereo.github.io/",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2023/papers/Tosi_NeRF-Supervised_Deep_Stereo_CVPR_2023_paper.pdf",
      "supp": "https://github.com/fabiotosi92/NeRF-Supervised-Deep-Stereo/raw/main/assets/Tosi_et_al_CVPR2023_supplementary.pdf",
      "code": "https://github.com/fabiotosi92/NeRF-Supervised-Deep-Stereo",
      "dataset": "https://amsacta.unibo.it/id/eprint/7218/",
      "video": "https://www.youtube.com/watch?v=m7dqHkxb4yg&feature=youtu.be"
    },
    "addTopics": ["Stereo & Multi-Sensor", "3D Reconstruction & NVS"]
  },
  {
    "title": "Learning Depth Estimation for Transparent and Mirror Surfaces",
    "authors": [
      "Alex Costanzino*",
      "Pierluigi Zama Ramirez*",
      "Matteo Poggi*",
      "Fabio Tosi",
      "Stefano Mattoccia",
      "Luigi Di Stefano"
    ],
    "authorLinks": {
      "Pierluigi Zama Ramirez": "https://pierlui92.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Luigi Di Stefano": "https://www.unibo.it/sitoweb/luigi.distefano"
    },
    "equalContribution": true,
    "kind": "Conference",
    "venue": "International Conference on Computer Vision",
    "badge": "ICCV 2023",
    "year": 2023,
    "rank": "CORE A*",
    "image": "assets/img/publications/depth4tom.jpg",
    "url": "https://cvlab-unibo.github.io/Depth4ToM/",
    "links": {
      "project": "https://cvlab-unibo.github.io/Depth4ToM/",
      "pdf": "https://doi.org/10.1109/ICCV51070.2023.00848",
      "code": "https://github.com/CVLAB-Unibo/Depth4ToM"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "GasMono: Geometry-Aided Self-Supervised Monocular Depth Estimation for Indoor Scenes",
    "authors": [
      "Chaoqiang Zhao",
      "Matteo Poggi",
      "Fabio Tosi",
      "Lingzhe Zhou",
      "Qiyu Sun",
      "Yue Tang",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Chaoqiang Zhao": "https://zxcqlf.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "kind": "Conference",
    "venue": "International Conference on Computer Vision",
    "badge": "ICCV 2023",
    "year": 2023,
    "rank": "CORE A*",
    "image": "assets/img/publications/gasmono.jpg",
    "links": {
      "pdf": "https://doi.org/10.1109/ICCV51070.2023.01485"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "MonoViT: Self-supervised Monocular Depth Estimation with a Vision Transformer",
    "authors": [
      "Chaoqiang Zhao",
      "Youmin Zhang",
      "Matteo Poggi",
      "Fabio Tosi",
      "Xianda Guo",
      "Zheng Zhu",
      "Guan Huang",
      "Yang Tang",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Chaoqiang Zhao": "https://zxcqlf.github.io/",
      "Youmin Zhang": "https://youmi-zym.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "kind": "Conference",
    "venue": "International Conference on 3D Vision",
    "badge": "3DV 2022",
    "year": 2022,
        "image": "assets/img/publications/monovit.jpg",
    "url": "https://github.com/zxcqlf/MonoViT",
    "links": {
      "pdf": "https://arxiv.org/abs/2208.03543",
      "code": "https://github.com/zxcqlf/MonoViT"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "Cross-Spectral Neural Radiance Fields",
    "authors": [
      "Matteo Poggi*",
      "Pierluigi Zama Ramirez*",
      "Fabio Tosi*",
      "Samuele Salti",
      "Stefano Mattoccia",
      "Luigi Di Stefano"
    ],
    "authorLinks": {
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Pierluigi Zama Ramirez": "https://pierlui92.github.io/",
      "Samuele Salti": "https://www.unibo.it/sitoweb/samuele.salti",
      "Luigi Di Stefano": "https://www.unibo.it/sitoweb/luigi.distefano"
    },
    "equalContribution": true,
    "kind": "Conference",
    "venue": "International Conference on 3D Vision",
    "badge": "3DV 2022",
    "year": 2022,
        "image": "assets/img/publications/xnerf.jpg",
    "url": "https://cvlab-unibo.github.io/xnerf-web/",
    "links": {
      "pdf": "https://arxiv.org/abs/2209.00648",
      "videosupplementary": "https://drive.google.com/file/d/1V40AeNQ7qacg4GlxK_6jmfm6bCcqykms/view",
      "dataset": "http://amsacta.unibo.it/7142/"
    },
    "addTopics": ["3D Reconstruction & NVS"]
  },
  {
    "title": "Open Challenges in Deep Stereo: the Booster Dataset",
    "authors": [
      "Pierluigi Zama Ramirez*",
      "Fabio Tosi*",
      "Matteo Poggi*",
      "Samuele Salti",
      "Stefano Mattoccia",
      "Luigi Di Stefano"
    ],
    "authorLinks": {
      "Pierluigi Zama Ramirez": "https://pierlui92.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Samuele Salti": "https://www.unibo.it/sitoweb/samuele.salti",
      "Luigi Di Stefano": "https://www.unibo.it/sitoweb/luigi.distefano"
    },
    "equalContribution": true,
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2022",
    "year": 2022,
    "rank": "CORE A*",
    "image": "assets/img/publications/booster.jpg",
    "url": "https://cvlab-unibo.github.io/booster-web/",
    "links": {
      "pdf": "https://openaccess.thecvf.com/content/CVPR2022/papers/Ramirez_Open_Challenges_in_Deep_Stereo_The_Booster_Dataset_CVPR_2022_paper.pdf",
      "supp": "https://openaccess.thecvf.com/content/CVPR2022/supplemental/Ramirez_Open_Challenges_in_CVPR_2022_supplemental.pdf",
      "dataset": "http://amsacta.unibo.it/6876/",
      "benchmark": "https://cvlab-unibo.github.io/booster-web/benchmark.html",
      "video": "https://youtu.be/EEg3z9b_Bt4"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "RGB-Multispectral Matching: Dataset, Learning Methodology, Evaluation",
    "authors": [
      "Fabio Tosi*",
      "Pierluigi Zama Ramirez*",
      "Matteo Poggi*",
      "Samuele Salti",
      "Stefano Mattoccia",
      "Luigi Di Stefano"
    ],
    "authorLinks": {
      "Pierluigi Zama Ramirez": "https://pierlui92.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Samuele Salti": "https://www.unibo.it/sitoweb/samuele.salti",
      "Luigi Di Stefano": "https://www.unibo.it/sitoweb/luigi.distefano"
    },
    "equalContribution": true,
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2022",
    "year": 2022,
    "rank": "CORE A*",
    "image": "assets/img/publications/rgb-ms.jpg",
    "url": "https://cvlab-unibo.github.io/rgb-ms-web/",
    "links": {
      "pdf": "https://openaccess.thecvf.com/content/CVPR2022/papers/Tosi_RGB-Multispectral_Matching_Dataset_Learning_Methodology_Evaluation_CVPR_2022_paper.pdf",
      "supp": "https://openaccess.thecvf.com/content/CVPR2022/supplemental/Tosi_RGB-Multispectral_Matching_Dataset_CVPR_2022_supplemental.pdf",
      "dataset": "http://amsacta.unibo.it/6877/",
      "video": "https://youtu.be/dmN23_rnmjQ"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "Continual Adaptation for Deep Stereo",
    "authors": [
      "Matteo Poggi",
      "Alessio Tonioni",
      "Fabio Tosi",
      "Stefano Mattoccia",
      "Luigi Di Stefano"
    ],
    "authorLinks": {
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Alessio Tonioni": "https://alessiotonioni.github.io/",
      "Luigi Di Stefano": "https://www.unibo.it/sitoweb/luigi.distefano"
    },
    "kind": "Journal",
    "venue": "IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 44, no. 9, pp. 4713–4729",
    "badge": "TPAMI 2022",
    "year": 2022,
    "rank": "Q1",
    "image": "assets/img/publications/continual_adaptation.jpg",
    "links": {
      "pdf": "https://doi.org/10.1109/TPAMI.2021.3075815",
      "code": "https://github.com/CVLAB-Unibo/Real-time-self-adaptive-deep-stereo"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "On the Confidence of Stereo Matching in a Deep-Learning Era: A Quantitative Evaluation",
    "authors": [
      "Matteo Poggi",
      "Sunok Kim",
      "Fabio Tosi",
      "Seungryong Kim",
      "Filippo Aleotti",
      "Dongbo Min",
      "Kwanghoon Sohn",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Filippo Aleotti": "https://filippoaleotti.github.io/website/",
    },
    "kind": "Journal",
    "venue": "IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 44, no. 9, pp. 5293–5313",
    "badge": "TPAMI 2022",
    "year": 2022,
    "rank": "Q1",
    "image": "assets/img/publications/confidence_quantitative_tpami.jpg",
    "links": {
      "pdf": "https://doi.org/10.1109/TPAMI.2021.3069706"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "Neural Disparity Refinement for Arbitrary Resolution Stereo",
    "authors": [
      "Filippo Aleotti*",
      "Fabio Tosi*",
      "Pierluigi Zama Ramirez*",
      "Matteo Poggi",
      "Samuele Salti",
      "Stefano Mattoccia",
      "Luigi Di Stefano"
    ],
    "authorLinks": {
      "Filippo Aleotti": "https://filippoaleotti.github.io/website/",
      "Pierluigi Zama Ramirez": "https://pierlui92.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Samuele Salti": "https://www.unibo.it/sitoweb/samuele.salti",
      "Luigi Di Stefano": "https://www.unibo.it/sitoweb/luigi.distefano"
    },
    "equalContribution": true,
    "kind": "Conference",
    "venue": "International Conference on 3D Vision",
    "badge": "3DV 2021",
    "year": 2021,
        "tag": "Best Paper Honorable Mention",
    "image": "assets/img/publications/3dv2021.jpg",
    "url": "https://cvlab-unibo.github.io/neural-disparity-refinement-web/",
    "links": {
      "project": "https://cvlab-unibo.github.io/neural-disparity-refinement-web/",
      "papersupplementary": "https://arxiv.org/abs/2110.15367",
      "code": "https://github.com/CVLAB-Unibo/neural-disparity-refinement"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "On the Synergies Between Machine Learning and Binocular Stereo for Depth Estimation From Images: A Survey",
    "authors": [
      "Matteo Poggi",
      "Fabio Tosi",
      "Konstantinos Batsos",
      "Philippos Mordohai",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Philippos Mordohai": "https://mordohai.github.io/",
    },
    "kind": "Journal",
    "venue": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    "badge": "TPAMI 2021",
    "year": 2021,
    "rank": "Q1",
    "image": "assets/img/publications/stereo_survey.jpg",
    "links": {
      "pdf": "https://arxiv.org/abs/2004.08566"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "SMD-Nets: Stereo Mixture Density Networks",
    "authors": [
      "Fabio Tosi",
      "Yiyi Liao",
      "Carolin Schmitt",
      "Andreas Geiger"
    ],
    "authorLinks": {
      "Yiyi Liao": "https://yiyiliao.github.io/",
      "Andreas Geiger": "https://www.cvlibs.net/"
    },
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2021",
    "year": 2021,
    "rank": "CORE A*",
    "image": "assets/img/publications/smdnets.jpg",
    "url": "https://autonomousvision.github.io/smdnets/",
    "links": {
      "pdf": "https://www.cvlibs.net/publications/Tosi2021CVPR.pdf",
      "supplement": "http://www.cvlibs.net/publications/Tosi2021CVPR_supplementary.pdf",
      "blog": "https://autonomousvision.github.io/smdnets/",
      "code": "https://github.com/fabiotosi92/SMD-Nets",
      "video": "https://www.youtube.com/watch?v=tvVGuUSe2n8&t=148s",
      "poster": "http://www.cvlibs.net/publications/Tosi2021CVPR_poster.pdf"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "Distilled Semantics for Comprehensive Scene Understanding from Videos",
    "authors": [
      "Fabio Tosi*",
      "Filippo Aleotti*",
      "Pierluigi Zama Ramirez*",
      "Matteo Poggi",
      "Samuele Salti",
      "Stefano Mattoccia",
      "Luigi Di Stefano"
    ],
    "authorLinks": {
      "Filippo Aleotti": "https://filippoaleotti.github.io/website/",
      "Pierluigi Zama Ramirez": "https://pierlui92.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
      "Samuele Salti": "https://www.unibo.it/sitoweb/samuele.salti",
      "Luigi Di Stefano": "https://www.unibo.it/sitoweb/luigi.distefano"
    },
    "equalContribution": true,
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2020",
    "year": 2020,
    "rank": "CORE A*",
    "image": "assets/img/publications/omeganet.jpg",
    "url": "https://github.com/CVLAB-Unibo/omeganet",
    "links": {
      "pdf": "https://openaccess.thecvf.com/content_CVPR_2020/papers/Tosi_Distilled_Semantics_for_Comprehensive_Scene_Understanding_from_Videos_CVPR_2020_paper.pdf",
      "supp": "https://openaccess.thecvf.com/content_CVPR_2020/supplemental/Tosi_Distilled_Semantics_for_CVPR_2020_supplemental.pdf",
      "code": "https://github.com/CVLAB-Unibo/omeganet",
      "poster": "https://github.com/CVLAB-Unibo/omeganet/blob/master/assets/poster.pdf"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "Reversing the Cycle: Self-Supervised Deep Stereo through Enhanced Monocular Distillation",
    "authors": [
      "Filippo Aleotti*",
      "Fabio Tosi*",
      "Li Zhang",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Filippo Aleotti": "https://filippoaleotti.github.io/website/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "equalContribution": true,
    "kind": "Conference",
    "venue": "European Conference on Computer Vision",
    "badge": "ECCV 2020",
    "year": 2020,
    "rank": "CORE A*",
    "image": "assets/img/publications/reversing.jpg",
    "url": "https://arxiv.org/pdf/2008.07130.pdf",
    "links": {
      "pdf": "https://arxiv.org/pdf/2008.07130.pdf",
      "code": "https://github.com/FilippoAleotti/Reversing",
      "video": "https://drive.google.com/file/d/1V1vrMtEw6uy3TfAW0wXlc-zxxsuIlJY2/view"
    },
    "addTopics": ["Stereo & Multi-Sensor", "Depth Perception"]
  },
  {
    "title": "Learning Monocular Depth Estimation Infusing Traditional Stereo Knowledge",
    "authors": [
      "Fabio Tosi",
      "Filippo Aleotti",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Filippo Aleotti": "https://filippoaleotti.github.io/website/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2019",
    "year": 2019,
    "rank": "CORE A*",
    "image": "assets/img/publications/monoresmatch.jpg",
    "links": {
      "pdf": "https://openaccess.thecvf.com/content_CVPR_2019/papers/Tosi_Learning_Monocular_Depth_Estimation_Infusing_Traditional_Stereo_Knowledge_CVPR_2019_paper.pdf",
      "supp": "https://openaccess.thecvf.com/content_CVPR_2019/supplemental/Tosi_Learning_Monocular_Depth_CVPR_2019_supplemental.pdf",
      "code": "https://github.com/fabiotosi92/monoResMatch-Tensorflow",
      "video": "https://www.youtube.com/watch?v=h6Wo5MqbCY0&t=2s"
    },
    "addTopics": ["Depth Perception"]
  },
  {
    "title": "Real-Time Self-Adaptive Deep Stereo",
    "authors": [
      "Alessio Tonioni",
      "Fabio Tosi",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Alessio Tonioni": "https://alessiotonioni.github.io/",
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2019",
    "year": 2019,
    "rank": "CORE A*",
    "tag": "Oral",
    "image": "assets/img/publications/adaptation2019.jpg",
    "links": {
      "pdf": "https://openaccess.thecvf.com/content_CVPR_2019/papers/Tonioni_Real-Time_Self-Adaptive_Deep_Stereo_CVPR_2019_paper.pdf",
      "supp": "https://openaccess.thecvf.com/content_CVPR_2019/supplemental/Tonioni_Real-Time_Self-Adaptive_Deep_CVPR_2019_supplemental.pdf",
      "code": "https://github.com/CVLAB-Unibo/Real-time-self-adaptive-deep-stereo",
      "video": "https://www.youtube.com/watch?v=7SjyzDxmCY4",
      "livedemo": "https://www.youtube.com/watch?v=4O-7OzVYAeU"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "Guided Stereo Matching",
    "authors": [
      "Matteo Poggi*",
      "Davide Pallotti*",
      "Fabio Tosi",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "equalContribution": true,
    "kind": "Conference",
    "venue": "Conference on Computer Vision and Pattern Recognition",
    "badge": "CVPR 2019",
    "year": 2019,
    "rank": "CORE A*",
    "image": "assets/img/publications/guided.jpg",
    "links": {
      "pdf": "https://openaccess.thecvf.com/content_CVPR_2019/papers/Poggi_Guided_Stereo_Matching_CVPR_2019_paper.pdf",
      "democode": "https://github.com/mattpoggi/guided-stereo",
      "video": "https://www.youtube.com/watch?v=AVlPu3K2ays",
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },
  {
    "title": "Quantitative Evaluation of Confidence Measures in a Machine Learning World",
    "authors": [
      "Matteo Poggi",
      "Fabio Tosi",
      "Stefano Mattoccia"
    ],
    "authorLinks": {
      "Matteo Poggi": "https://mattpoggi.github.io/",
    },
    "kind": "Conference",
    "venue": "International Conference on Computer Vision",
    "badge": "ICCV 2017",
    "year": 2017,
    "rank": "CORE A*",
    "tag": "Spotlight",
    "image": "assets/img/publications/confidence2017.jpg",
    "links": {
      "pdf": "https://doi.org/10.1109/ICCV.2017.559"
    },
    "addTopics": ["Stereo & Multi-Sensor"]
  },

  /* ---- 2025–2026 papers moved here from the archive (figures: assets/img/publications/<name>.jpg|png) ---- */
  {
    "title": "Image-to-Point Cloud Feature Back-Projection for Multimodal Training of 3D Semantic Segmentation",
    "authors": [
      "Jiawei Han",
      "Matteo Poggi",
      "Li Huan",
      "Changshuo Wang",
      "Kaiqi Liu",
      "Wei Li"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2026), pp. 42049–42060",
    "badge": "CVPR 2026",
    "year": 2026,
    "rank": "CORE A*",
    "abstract": "This paper proposes Image-to-Point Cloud Feature Back-Projection (IPFP), a novel method for training multimodal fusion networks that back-projects aggregated image-feature centers (from non-projection-aligned image pixels) into the point-cloud feature set via the estimated depth map.",
    "image": "assets/img/publications/img2pc-backprojection",
    "links": {
      "pdf": "https://openaccess.thecvf.com/content/CVPR2026/papers/Han_Image-to-Point_Cloud_Feature_Back-Projection_for_Multimodal_Training_of_3D_Semantic_CVPR_2026_paper.pdf"
    }
  },
  {
    "title": "FGDepth: Fine-Grained Boundary Perception Enhancement in Self-Supervised Indoor Depth Estimation",
    "authors": [
      "Chenggong Han",
      "Chen Lv",
      "He Jiang",
      "Qiqi Kou",
      "Deqiang Cheng",
      "Stefano Mattoccia"
    ],
    "kind": "Journal",
    "venue": "IEEE Transactions on Multimedia, vol. 28, pp. 4851–4863",
    "badge": "TMM 2026",
    "year": 2026,
    "rank": "Q1",
    "abstract": "We propose FGDepth, a framework designed to enhance depth estimation through fine-grained boundary perception.",
    "image": "assets/img/publications/fgdepth",
    "links": {
      "paper": "https://doi.org/10.1109/tmm.2026.3660182"
    }
  },
  {
    "title": "NVS-HO: A Benchmark for Novel View Synthesis of Handheld Objects",
    "authors": [
      "Musawar Ali",
      "Manuel Carranza-García",
      "Nicola Fioraio",
      "Samuele Salti",
      "Luigi Di Stefano"
    ],
    "kind": "Conference",
    "venue": "International Conference on Pattern Recognition (ICPR 2026), pp. 560–574",
    "badge": "ICPR 2026",
    "year": 2026,
    "abstract": "We propose NVS-HO, the first benchmark designed for novel view synthesis of handheld objects in real-world environments using only RGB inputs.",
    "image": "assets/img/publications/nvs-ho",
    "links": {
      "paper": "https://doi.org/10.1007/978-3-032-31583-0_37",
      "arxiv": "https://arxiv.org/abs/2602.05822"
    }
  },
  {
    "title": "RendBEV: Semantic Perspective View Rendering as Supervision for Bird's Eye View Segmentation",
    "authors": [
      "Henrique Piñeiro Monteagudo",
      "Leonardo Taccari",
      "Aurel Pjetri",
      "Francesco Sambo",
      "Samuele Salti"
    ],
    "kind": "Journal",
    "venue": "IEEE Access, vol. 14, pp. 12255–12272",
    "badge": "IEEE Access 2026",
    "year": 2026,
    "abstract": "We present RendBEV, a new method to train BEV semantic segmentation networks without direct BEV supervision. We leverage rendering with neural density fields or monocular depth estimation models to shift the supervision to semantic perspective views, where targets can be computed by a 2D semantic segmentation model.",
    "image": "assets/img/publications/rendbev-access",
    "links": {
      "paper": "https://ieeexplore.ieee.org/document/11359590"
    }
  },
  {
    "title": "GeCHO: Generation of Contextualized Human-Object Interactions",
    "authors": [
      "Giovanni Minelli",
      "Andrea Benericetti",
      "Leonardo Taccari",
      "Francesco Sambo",
      "Samuele Salti"
    ],
    "kind": "Journal",
    "venue": "IEEE Access, vol. 14, pp. 48872–48886",
    "badge": "IEEE Access 2026",
    "year": 2026,
    "abstract": "We propose an inpainting approach that specifically tackles the complexities of generating contextual human-object interactions, which we refer to as GeCHO.",
    "image": "assets/img/publications/gecho",
    "url": "https://johnminelli.github.io/GeCHO/",
    "links": {
      "project": "https://johnminelli.github.io/GeCHO/",
      "paper": "https://ieeexplore.ieee.org/document/11456932",
      "code": "https://github.com/johnMinelli/GeCHO"
    }
  },
  {
    "title": "The PRISM benchmark: PhotoRealistic Image Synthesis and Manipulation to detect generated images",
    "authors": [
      "Filippo Bartolucci",
      "Samuele Salti",
      "Giuseppe Lisanti"
    ],
    "kind": "Journal",
    "venue": "Computer Vision and Image Understanding, vol. 270, art. 104826",
    "badge": "CVIU 2026",
    "year": 2026,
    "rank": "Q1",
    "abstract": "We propose PRISM, a new challenging benchmark for generated content detection designed to reflect the complexity of real-world visual data.",
    "image": "assets/img/publications/prism",
    "links": {
      "paper": "https://www.sciencedirect.com/science/article/pii/S1077314226001931",
      "code": "https://github.com/filippobartolucci/PRISM_Benchmark",
      "dataset": "https://huggingface.co/datasets/oppiliF/PRISM_Benchmark"
    }
  },
  {
    "title": "Additive decomposition of one-dimensional signals using Transformers",
    "authors": [
      "Samuele Salti",
      "Andrea Pinto",
      "Alessandro Lanza",
      "Serena Morigi"
    ],
    "kind": "Journal",
    "venue": "Pattern Recognition Letters, vol. 199, pp. 239–245",
    "badge": "PRL 2026",
    "year": 2026,
    "abstract": "One-dimensional signal decomposition is a well-established and widely used technique across various scientific fields. It serves as a highly valuable pre-processing step for data analysis.",
    "image": "assets/img/publications/additive-decomposition",
    "links": {
      "paper": "https://doi.org/10.1016/j.patrec.2025.11.002",
      "arxiv": "https://arxiv.org/abs/2506.05942"
    }
  },
  {
    "title": "Domain Adaptation for Image Classification of Defects in Semiconductor Manufacturing",
    "authors": [
      "Adrian Poniatowski",
      "Natalie Gentner",
      "Manuel Barusco",
      "Davide Dalle Pezze",
      "Samuele Salti",
      "Gian Antonio Susto"
    ],
    "kind": "Journal",
    "venue": "IEEE Transactions on Automation Science and Engineering, vol. 23, pp. 3818–3828",
    "badge": "T-ASE 2026",
    "year": 2026,
    "rank": "Q1",
    "abstract": "We propose the DBACS approach, a CycleGAN-inspired model enhanced with additional loss terms to improve performance.",
    "image": "assets/img/publications/semiconductor-da",
    "links": {
      "paper": "https://doi.org/10.1109/TASE.2025.3621854",
      "arxiv": "https://arxiv.org/abs/2506.15260",
      "code": "https://bitbucket.org/papers_vad_group/dbacs"
    }
  },
  {
    "title": "How to Evaluate and Refine Your CAM",
    "authors": [
      "Luca Domeniconi",
      "Alessandra Stramiglio",
      "Michele Lombardi",
      "Samuele Salti"
    ],
    "kind": "Conference",
    "venue": "International Conference on Pattern Recognition (ICPR 2026), pp. 543–557",
    "badge": "ICPR 2026",
    "year": 2026,
    "abstract": "We introduce a synthetic dataset with ground-truth attributions that enables a rigorous comparison of CAM evaluation metrics. Using this dataset, we analyze existing metrics and propose ARCC, a new composite metric that more reliably identifies faithful explanations.",
    "image": "assets/img/publications/cam-evaluation",
    "url": "https://refinecam.github.io",
    "links": {
      "project": "https://refinecam.github.io",
      "paper": "https://doi.org/10.1007/978-3-032-31663-9_36",
      "arxiv": "https://arxiv.org/abs/2605.14641",
      "code": "https://github.com/liuktc/RefineCAM"
    }
  },
  {
    "title": "NTIRE 2025 Challenge on HR Depth from Images of Specular and Transparent Surfaces",
    "authors": [
      "Pierluigi Zama Ramirez",
      "Fabio Tosi",
      "Luigi Di Stefano",
      "Radu Timofte",
      "Alex Costanzino",
      "Matteo Poggi",
      "Samuele Salti",
      "Stefano Mattoccia",
      "et al."
    ],
    "kind": "Workshop",
    "venue": "CVPR Workshops – NTIRE 2025, pp. 987–1001",
    "badge": "CVPR Workshops 2025",
    "year": 2025,
    "abstract": "This paper reports on the NTIRE 2025 challenge on HR Depth From images of Specular and Transparent surfaces, held in conjunction with the New Trends in Image Restoration and Enhancement (NTIRE) workshop at CVPR 2025.",
    "image": "assets/img/publications/ntire2025",
    "url": "https://cvlai.net/ntire/2025/",
    "links": {
      "project": "https://cvlai.net/ntire/2025/",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2025W/NTIRE/papers/Ramirez_NTIRE_2025_Challenge_on_HR_Depth_from_Images_of_Specular_CVPRW_2025_paper.pdf",
      "arxiv": "https://arxiv.org/abs/2506.05815",
      "dataset": "https://cvlab-unibo.github.io/booster-web/"
    }
  },
  {
    "title": "The Fourth Monocular Depth Estimation Challenge",
    "authors": [
      "Anton Obukhov",
      "Matteo Poggi",
      "Fabio Tosi",
      "et al."
    ],
    "kind": "Workshop",
    "venue": "CVPR Workshops – MDEC 2025, pp. 6182–6195",
    "badge": "CVPR Workshops 2025",
    "year": 2025,
    "abstract": "This paper presents the results of the fourth edition of the Monocular Depth Estimation Challenge (MDEC), which focuses on zero-shot generalization to the SYNS-Patches benchmark, a dataset featuring challenging environments in both natural and indoor settings.",
    "image": "assets/img/publications/mdec2025",
    "url": "https://jspenmar.github.io/MDEC/",
    "links": {
      "project": "https://jspenmar.github.io/MDEC/",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2025W/MDEC/papers/Obukhov_The_Fourth_Monocular_Depth_Estimation_Challenge_CVPRW_2025_paper.pdf",
      "arxiv": "https://arxiv.org/abs/2504.17787",
      "code": "https://github.com/toshas/mdec_benchmark"
    }
  },
  {
    "title": "Semantic Library Adaptation: LoRA Retrieval and Fusion for Open-Vocabulary Semantic Segmentation",
    "authors": [
      "Reza Qorbani",
      "Gianluca Villani",
      "Theodoros Panagiotakopoulos",
      "Marc Botet Colomer",
      "Linus Härenstam-Nielsen",
      "Mattia Segù",
      "Pier Luigi Dovesi",
      "Jussi Karlgren",
      "Daniel Cremers",
      "Federico Tombari",
      "Matteo Poggi"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2025), pp. 9804–9815",
    "badge": "CVPR 2025",
    "year": 2025,
    "rank": "CORE A*",
    "abstract": "We introduce Semantic Library Adaptation (SemLA), a novel framework for training-free, test-time domain adaptation. SemLA leverages a library of LoRA-based adapters indexed with CLIP embeddings, dynamically merging the most relevant adapters based on proximity to the target domain in the embedding space.",
    "image": "assets/img/publications/semla",
    "url": "https://thegoodailab.org/semla",
    "links": {
      "project": "https://thegoodailab.org/semla",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2025/papers/Qorbani_Semantic_Library_Adaptation_LoRA_Retrieval_and_Fusion_for_Open-Vocabulary_Semantic_CVPR_2025_paper.pdf",
      "arxiv": "https://arxiv.org/abs/2503.21780",
      "code": "https://github.com/rezaqorbani/SemLA"
    },
    "topics": [
      "Scene Understanding",
      "Robust & Generalizable",
      "Foundation & Generative"
    ]
  },
  {
    "title": "Learning Temporally Consistent Video Depth from Video Diffusion Priors",
    "authors": [
      "Jiahao Shao",
      "Yuanbo Yang",
      "Hongyu Zhou",
      "Youmin Zhang",
      "Yujun Shen",
      "Vitor Guizilini",
      "Yue Wang",
      "Matteo Poggi",
      "Yiyi Liao"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2025), pp. 22841–22852",
    "badge": "CVPR 2025",
    "year": 2025,
    "rank": "CORE A*",
    "abstract": "Specifically, we propose a consistent context-aware training and inference strategy for arbitrarily long videos to provide cross-clip context. We sample independent noise levels for each frame within a clip during training while using a sliding window strategy and initializing overlapping frames with previously predicted frames without adding noise.",
    "image": "assets/img/publications/chronodepth",
    "url": "https://xdimlab.github.io/ChronoDepth/",
    "links": {
      "project": "https://xdimlab.github.io/ChronoDepth/",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2025/papers/Shao_Learning_Temporally_Consistent_Video_Depth_from_Video_Diffusion_Priors_CVPR_2025_paper.pdf",
      "arxiv": "https://arxiv.org/abs/2406.01493",
      "code": "https://github.com/jiahao-shao1/ChronoDepth"
    }
  },
  {
    "title": "TRICKY 2025 Challenge on Monocular Depth from Images of Specular and Transparent Surfaces",
    "authors": [
      "Pierluigi Zama Ramirez",
      "Alex Costanzino",
      "Fabio Tosi",
      "Matteo Poggi",
      "Luigi Di Stefano",
      "et al."
    ],
    "kind": "Workshop",
    "venue": "ICCV Workshops – TRICKY 2025, pp. 3311–3322",
    "badge": "ICCV Workshops 2025",
    "year": 2025,
    "abstract": "This paper presents the results of the TRICKY 2025 Monocular Depth Track Challenge, held as part of the Transparent & Reflective objects In the wild Challenges (TRICKY) workshop at ICCV 2025. The challenge aims to advance the state-of-the-art in dense depth prediction for reflective and transparent surfaces, building on recent progress in the field.",
    "image": "assets/img/publications/tricky2025-depth",
    "url": "https://sites.google.com/view/iccv25tricky",
    "links": {
      "project": "https://sites.google.com/view/iccv25tricky",
      "pdf": "https://openaccess.thecvf.com/content/ICCV2025W/TRICKY/papers/Ramirez_TRICKY_2025_Challenge_on_Monocular_Depth_from_Images_of_Specular_ICCVW_2025_paper.pdf"
    }
  },
  {
    "title": "TRICKY 2025 HouseCat6D Object Pose Estimation Challenge with Specular and Transparent Surfaces",
    "authors": [
      "Weihang Li",
      "Junwen Huang",
      "Hyunjun Jung",
      "Guangyao Zhai",
      "Pierluigi Zama Ramirez",
      "Alex Costanzino",
      "Fabio Tosi",
      "Matteo Poggi",
      "Luigi Di Stefano",
      "et al."
    ],
    "kind": "Workshop",
    "venue": "ICCV Workshops – TRICKY 2025, pp. 3323–3333",
    "badge": "ICCV Workshops 2025",
    "year": 2025,
    "abstract": "This paper presents the TRICKY 2025 HouseCat6D Category-Level Object Pose Estimation Challenge, held in conjunction with the ICCV 2025 workshop on Transparent and Reflective Objects in the Wild. The challenge addresses the critical limitations of existing pose estimation systems when applied to non-Lambertian surfaces, such as glass and metal.",
    "image": "assets/img/publications/tricky2025-pose",
    "url": "https://sites.google.com/view/iccv25tricky",
    "links": {
      "project": "https://sites.google.com/view/iccv25tricky",
      "pdf": "https://openaccess.thecvf.com/content/ICCV2025W/TRICKY/papers/Li_TRICKY_2025_HouseCat6D_Object_Pose_Estimation_Challenge_with_Specular_and_ICCVW_2025_paper.pdf"
    }
  },
  {
    "title": "Learnable Fractional Reaction-Diffusion Dynamics for Under-Display ToF Imaging and Beyond",
    "authors": [
      "Xin Qiao",
      "Matteo Poggi",
      "Xing Wei",
      "Pengchao Deng",
      "Yanhui Zhou",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF International Conference on Computer Vision (ICCV 2025), pp. 6080–6090",
    "badge": "ICCV 2025",
    "year": 2025,
    "rank": "CORE A*",
    "abstract": "To alleviate this drawback, we propose Learnable Fractional Reaction-Diffusion Dynamics (LFRD2), a hybrid framework that combines the expressive power of neural networks with the interpretability of physical modeling.",
    "image": "assets/img/publications/lfrd2",
    "links": {
      "pdf": "https://openaccess.thecvf.com/content/ICCV2025/papers/Qiao_Learnable_Fractional_Reaction-Diffusion_Dynamics_for_Under-Display_ToF_Imaging_and_Beyond_ICCV_2025_paper.pdf",
      "arxiv": "https://arxiv.org/abs/2511.01704",
      "code": "https://github.com/wudiqx106/LFRD2"
    }
  },
  {
    "title": "ToF-Splatting: Dense SLAM Using Sparse Time-of-Flight Depth and Multi-Frame Integration",
    "authors": [
      "Andrea Conti",
      "Matteo Poggi",
      "Valerio Cambareri",
      "Martin R. Oswald",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF International Conference on Computer Vision (ICCV 2025), pp. 28344–28353",
    "badge": "ICCV 2025",
    "year": 2025,
    "rank": "CORE A*",
    "abstract": "We propose ToF-Splatting, the first 3D Gaussian Splatting-based SLAM pipeline tailored for using effectively very sparse ToF input data.",
    "image": "assets/img/publications/tof-splatting",
    "links": {
      "pdf": "https://openaccess.thecvf.com/content/ICCV2025/papers/Conti_ToF-Splatting_Dense_SLAM_using_Sparse_Time-of-Flight_Depth_and_Multi-Frame_Integration_ICCV_2025_paper.pdf",
      "arxiv": "https://arxiv.org/abs/2504.16545"
    }
  },
  {
    "title": "Zero-Shot Neural Architecture Search for Efficient Deep Stereo Matching",
    "authors": [
      "Alessio Mingozzi",
      "Stefano Mattoccia",
      "Matteo Poggi",
      "Fatma Güney"
    ],
    "kind": "Conference",
    "venue": "International Conference on Image Analysis and Processing (ICIAP 2025), pp. 17–28",
    "badge": "ICIAP 2025",
    "year": 2025,
    "abstract": "This paper introduces a novel and efficient architecture for deep stereo matching obtained through Zero-Shot Neural Architecture Search (NAS). Applied to RAFT-Stereo, this process yields a significantly smaller – 1.14M parameters, compared to the original 11M – and substantially faster network.",
    "image": "assets/img/publications/zs-nas-stereo",
    "links": {
      "paper": "https://doi.org/10.1007/978-3-032-10185-3_2",
      "code": "https://github.com/amingozz/RAFT-StereoZero"
    }
  },
  {
    "title": "Lightstereo: Channel Boost is All You Need for Efficient 2D Cost Aggregation",
    "authors": [
      "Xianda Guo",
      "Chenming Zhang",
      "Youmin Zhang",
      "Wenzhao Zheng",
      "Dujun Nie",
      "Matteo Poggi",
      "Long Chen"
    ],
    "kind": "Conference",
    "venue": "IEEE International Conference on Robotics and Automation (ICRA 2025), pp. 8738–8744",
    "badge": "ICRA 2025",
    "year": 2025,
    "rank": "CORE A*",
    "abstract": "We present LightStereo, a cutting-edge stereo-matching network crafted to accelerate the matching process. Departing from conventional methodologies that rely on aggregating computationally intensive 4D costs, LightStereo adopts the 3D cost volume as a lightweight alternative.",
    "image": "assets/img/publications/lightstereo",
    "links": {
      "paper": "https://doi.org/10.1109/icra55743.2025.11127711",
      "arxiv": "https://arxiv.org/abs/2406.19833",
      "code": "https://github.com/XiandaGuo/OpenStereo"
    }
  },
  {
    "title": "Drive with the Flow",
    "authors": [
      "Enrico Mannocci",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "IEEE International Conference on Robotics and Automation (ICRA 2025), pp. 10028–10034",
    "badge": "ICRA 2025",
    "year": 2025,
    "rank": "CORE A*",
    "abstract": "End-to-end autonomous driving systems still struggle with dense traffic, lacking an understanding of the dynamics of the surrounding vehicles.",
    "image": "assets/img/publications/drive-with-the-flow",
    "url": "https://noce99.github.io/FlowFuser/",
    "links": {
      "project": "https://noce99.github.io/FlowFuser/",
      "paper": "https://zenodo.org/records/16893607",
      "code": "https://github.com/Noce99/FlowFuser"
    }
  },
  {
    "title": "Self-supervised Monocular Depth Estimation for Dynamic Objects with Ground Propagation",
    "authors": [
      "Huan Li",
      "Matteo Poggi",
      "Fabio Tosi",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2025), pp. 2384–2391",
    "badge": "IROS 2025",
    "year": 2025,
    "rank": "CORE A",
    "abstract": "Self-supervised single-view depth estimation faces significant challenges when dynamic objects are present in the training data, as they violate the multi-view geometry assumptions behind photometric losses.",
    "image": "assets/img/publications/dynamic-objects-depth",
    "links": {
      "paper": "https://doi.org/10.1109/IROS60139.2025.11246123",
      "code": "https://github.com/LiHuanLi/GroundMono"
    }
  },
  {
    "title": "Stereo 3D Gaussian Splatting SLAM for Outdoor Urban Scenes",
    "authors": [
      "Xiaohan Li",
      "Ziren Gong",
      "Fabio Tosi",
      "Matteo Poggi",
      "Stefano Mattoccia",
      "Dong Liu",
      "Jun Wu"
    ],
    "kind": "Preprint",
    "venue": "arXiv preprint",
    "badge": "arXiv 2025",
    "year": 2025,
    "abstract": "We present BGS-SLAM, the first binocular 3D Gaussian Splatting SLAM system designed for outdoor scenarios. Our approach uses only RGB stereo pairs without requiring LiDAR or active sensors.",
    "image": "assets/img/publications/stereo-gs-slam",
    "links": {
      "arxiv": "https://arxiv.org/abs/2507.23677"
    }
  },
  {
    "title": "StereoCarla: A High-Fidelity Driving Dataset for Generalizable Stereo",
    "authors": [
      "Xianda Guo",
      "Chenming Zhang",
      "Ruilin Wang",
      "Youmin Zhang",
      "Wenzhao Zheng",
      "Matteo Poggi",
      "Hao Zhao",
      "Qin Zou",
      "Long Chen"
    ],
    "kind": "Preprint",
    "venue": "arXiv preprint",
    "badge": "arXiv 2025",
    "year": 2025,
    "abstract": "We present StereoCarla, a high-fidelity synthetic stereo dataset specifically designed for autonomous driving scenarios.",
    "image": "assets/img/publications/stereocarla",
    "url": "https://xiandaguo.net/StereoCarla",
    "links": {
      "project": "https://xiandaguo.net/StereoCarla",
      "arxiv": "https://arxiv.org/abs/2509.12683",
      "code": "https://github.com/XiandaGuo/OpenStereo"
    }
  },
  {
    "title": "Lost in Translation? Vocabulary Alignment for Source-Free Adaptation in Open-Vocabulary Semantic Segmentation",
    "authors": [
      "Silvio Mazzucco",
      "Carl Persson",
      "Mattia Segù",
      "Pier Luigi Dovesi",
      "Federico Tombari",
      "Luc Van Gool",
      "Matteo Poggi"
    ],
    "kind": "Conference",
    "venue": "British Machine Vision Conference (BMVC 2025)",
    "badge": "BMVC 2025",
    "rank": "CORE A",
    "year": 2025,
    "abstract": "We introduce VocAlign, a novel source-free domain adaptation framework specifically designed for VLMs in open-vocabulary semantic segmentation. Our method adopts a student-teacher paradigm enhanced with a vocabulary alignment strategy, which improves pseudo-label generation by incorporating additional class concepts.",
    "image": "assets/img/publications/vocalign",
    "url": "https://thegoodailab.org/blog/vocalign",
    "links": {
      "project": "https://thegoodailab.org/blog/vocalign",
      "arxiv": "https://arxiv.org/abs/2509.15225",
      "code": "https://github.com/Sisso16/VocAlign"
    }
  },
  {
    "title": "Learning to Be a Transformer to Pinpoint Anomalies",
    "authors": [
      "Alex Costanzino",
      "Pierluigi Zama Ramirez",
      "Giuseppe Lisanti",
      "Luigi Di Stefano"
    ],
    "kind": "Journal",
    "venue": "IEEE Access, vol. 13, pp. 109624–109637",
    "badge": "IEEE Access 2025",
    "year": 2025,
    "abstract": "We propose a novel Teacher--Student paradigm to leverage strong pre-trained features while processing high-resolution input images very efficiently.",
    "image": "assets/img/publications/l2bt",
    "url": "https://alex-costanzino.github.io/learning_to_be_a_transformer/",
    "links": {
      "project": "https://alex-costanzino.github.io/learning_to_be_a_transformer/",
      "paper": "https://doi.org/10.1109/ACCESS.2025.3582900",
      "arxiv": "https://arxiv.org/abs/2407.04092",
      "code": "https://github.com/alex-costanzino/L2BT"
    }
  },
  {
    "title": "Multimodal SAM-Adapter for Semantic Segmentation",
    "authors": [
      "Iacopo Curti",
      "Pierluigi Zama Ramirez",
      "Alioscia Petrelli",
      "Luigi Di Stefano"
    ],
    "kind": "Journal",
    "venue": "IEEE Access, vol. 13, pp. 160438–160455",
    "badge": "IEEE Access 2025",
    "year": 2025,
    "abstract": "We present MM SAM-adapter, a novel framework that extends the capabilities of the Segment Anything Model (SAM) for multimodal semantic segmentation. The proposed method employs an adapter network that injects fused multimodal features into SAM's rich RGB features.",
    "image": "assets/img/publications/mm-sam-adapter",
    "links": {
      "paper": "https://doi.org/10.1109/access.2025.3609640",
      "arxiv": "https://arxiv.org/abs/2509.10408",
      "code": "https://github.com/iacopo97/Multimodal-SAM-Adapter"
    },
    "topics": [
      "Scene Understanding",
      "Multimodal",
      "Foundation & Generative"
    ]
  },
  {
    "title": "Few-Shot Anomaly Classification by Learning to Inpaint Nominal Images",
    "authors": [
      "Rubin Carkaxhia",
      "Musawar Ali",
      "Nicola Fioraio",
      "Luigi Di Stefano",
      "Samuele Salti"
    ],
    "kind": "Conference",
    "venue": "International Conference on Image Analysis and Processing (ICIAP 2025), pp. 520–532",
    "badge": "ICIAP 2025",
    "year": 2025,
    "abstract": "Automated inspection suffers from data scarcity, as only a few anomalous samples are usually available. We generate high-resolution defective images by inpainting the few available real defects, and fine-tune a second inpainting model to vary the nominal parts of the generated images, reaching a new state of the art on MVTec-AD.",
    "image": "assets/img/publications/fewshot-inpaint-anomaly",
    "links": {
      "paper": "https://doi.org/10.1007/978-3-032-10185-3_41"
    }
  },
  {
    "title": "Spatially-aware Weights Tokenization for NeRF-Language Models",
    "authors": [
      "Andrea Amaduzzi",
      "Pierluigi Zama Ramirez",
      "Giuseppe Lisanti",
      "Samuele Salti",
      "Luigi Di Stefano"
    ],
    "kind": "Conference",
    "venue": "Conference on Neural Information Processing Systems (NeurIPS 2025)",
    "badge": "NeurIPS 2025",
    "year": 2025,
    "rank": "CORE A*",
    "abstract": "We propose weights2space, a self-supervised framework featuring a meta-encoder that computes a sequence of spatial tokens directly from the weights of a NeRF. Leveraging this representation, we build Spatial LLaNA, an MLLM for NeRFs capable of understanding details and spatial relationships in objects represented as NeRFs.",
    "image": "assets/img/publications/weights-tokenization",
    "url": "https://andreamaduzzi.github.io/spatial-llana/",
    "links": {
      "project": "https://andreamaduzzi.github.io/spatial-llana/",
      "paper": "https://proceedings.neurips.cc/paper_files/paper/2025/hash/dc2e744f0e3fa6e869af915482b57210-Abstract-Conference.html",
      "code": "https://github.com/CVLAB-Unibo/Spatial-LLaNA",
      "dataset": "https://huggingface.co/datasets/andreamaduzzi/Spatial-ObjaNeRF"
    }
  },
  {
    "title": "Scaling LLaNA: Advancing NeRF-Language Understanding Through Large-Scale Training",
    "authors": [
      "Andrea Amaduzzi",
      "Pierluigi Zama Ramirez",
      "Giuseppe Lisanti",
      "Samuele Salti",
      "Luigi Di Stefano"
    ],
    "kind": "Preprint",
    "venue": "arXiv preprint",
    "badge": "arXiv 2025",
    "year": 2025,
    "abstract": "We introduce LLaNA, the first MLLM able to perform new tasks such as NeRF captioning and Q\\&A, by directly processing the weights of a NeRF's MLP. Notably, LLaNA is able to extract information about the represented objects without the need to render images or materialize 3D data structures.",
    "image": "assets/img/publications/scaling-llana",
    "url": "https://andreamaduzzi.github.io/llana/",
    "links": {
      "project": "https://andreamaduzzi.github.io/llana/",
      "arxiv": "https://arxiv.org/abs/2504.13995",
      "code": "https://github.com/CVLAB-Unibo/LLaNA"
    }
  },
  {
    "title": "VS-Sim: A Synthetic Dataset for Viewpoint Shift Robustness",
    "authors": [
      "Riccardo Turra",
      "Matteo Simoncini",
      "Henrique Piñeiro Monteagudo",
      "Aurel Pjetri",
      "Samuele Salti",
      "Leonardo Taccari"
    ],
    "kind": "Conference",
    "venue": "International Conference on Image Analysis and Processing (ICIAP 2025), pp. 507–519",
    "badge": "ICIAP 2025",
    "year": 2025,
    "abstract": "We release VS-Sim, a synthetic dataset of road scene images to study the robustness of computer vision models to viewpoint shift, with frontal-view (depth, semantic segmentation) and Bird's Eye View annotations.",
    "image": "assets/img/publications/vs-sim",
    "url": "https://henriquepm.github.io/VS-SIM/",
    "links": {
      "project": "https://henriquepm.github.io/VS-SIM/",
      "paper": "https://doi.org/10.1007/978-3-032-10185-3_40",
      "dataset": "https://huggingface.co/datasets/vzc-research-chapter/VS-SIM"
    }
  },
  {
    "title": "RendBEV: Semantic Novel View Synthesis for Self-Supervised Bird's Eye View Segmentation",
    "authors": [
      "Henrique Piñeiro Monteagudo",
      "Leonardo Taccari",
      "Aurel Pjetri",
      "Francesco Sambo",
      "Samuele Salti"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV 2025), pp. 535–544",
    "badge": "WACV 2025",
    "year": 2025,
    "rank": "CORE A",
    "abstract": "We present RendBEV, a new method for the self-supervised training of BEV semantic segmentation networks, leveraging differentiable volumetric rendering to receive supervision from semantic perspective views computed by a 2D semantic segmentation model. Used as pretraining, it significantly boosts performance in low-annotation regimes.",
    "image": "assets/img/publications/rendbev",
    "url": "https://henriquepm.github.io/RendBEV/",
    "links": {
      "project": "https://henriquepm.github.io/RendBEV/",
      "pdf": "https://openaccess.thecvf.com/content/WACV2025/papers/Monteagudo_RendBEV_Semantic_Novel_View_Synthesis_for_Self-Supervised_Birds_Eye_View_WACV_2025_paper.pdf",
      "arxiv": "https://arxiv.org/abs/2502.14792"
    }
  },

  /* ---- 2024 papers moved here from the archive ---- */
  {
    "title": "RGB Guided ToF Imaging System: A Survey of Deep Learning-Based Methods",
    "authors": [
      "Xin Qiao",
      "Matteo Poggi",
      "Pengchao Deng",
      "Hao Wei",
      "Chenyang Ge",
      "Stefano Mattoccia"
    ],
    "kind": "Journal",
    "venue": "International Journal of Computer Vision, vol. 132, no. 11, pp. 4954–4991",
    "badge": "IJCV 2024",
    "year": 2024,
    "rank": "Q1",
    "abstract": "A comprehensive review of deep learning for RGB guided ToF imaging, covering guided depth super-resolution and guided depth completion: network structures, learning strategies, evaluation metrics, benchmark datasets and objective functions, with quantitative comparisons of state-of-the-art methods.",
    "image": "assets/img/publications/tof-imaging-survey",
    "links": {
      "arxiv": "https://arxiv.org/abs/2405.10357"
    }
  },
  {
    "title": "Range-Agnostic Multi-View Depth Estimation with Keyframe Selection",
    "authors": [
      "Andrea Conti",
      "Matteo Poggi",
      "Valerio Cambareri",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "International Conference on 3D Vision (3DV 2024), pp. 1350–1359",
    "badge": "3DV 2024",
    "year": 2024,
    "abstract": "We focus on multi-view depth estimation without requiring prior knowledge about the metric range of the scene by proposing RAMDepth, an efficient and purely 2D framework that reverses the depth estimation and matching steps order.",
    "image": "assets/img/publications/range-agnostic-mvs",
    "url": "https://andreaconti.github.io/projects/range_agnostic_multi_view_depth",
    "links": {
      "project": "https://andreaconti.github.io/projects/range_agnostic_multi_view_depth",
      "arxiv": "https://arxiv.org/abs/2401.14401",
      "code": "https://github.com/andreaconti/ramdepth"
    }
  },
  {
    "title": "Revisiting Depth Completion from a Stereo Matching Perspective for Cross-domain Generalization",
    "authors": [
      "Luca Bartolomei",
      "Matteo Poggi",
      "Andrea Conti",
      "Fabio Tosi",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "International Conference on 3D Vision (3DV 2024), pp. 1360–1370",
    "badge": "3DV 2024",
    "year": 2024,
    "abstract": "This paper proposes a new framework for depth completion robust against domain-shifting issues. It exploits the generalization capability of modern stereo networks to face depth completion, by processing fictitious stereo pairs obtained through a virtual pattern projection paradigm.",
    "image": "assets/img/publications/revisiting-depth-completion",
    "url": "https://vppdc.github.io/",
    "links": {
      "project": "https://vppdc.github.io/",
      "arxiv": "https://arxiv.org/abs/2312.09254",
      "code": "https://github.com/bartn8/vppdc"
    }
  },
  {
    "title": "The Third Monocular Depth Estimation Challenge",
    "authors": [
      "Jaime Spencer",
      "Fabio Tosi",
      "Matteo Poggi",
      "et al."
    ],
    "kind": "Workshop",
    "venue": "CVPR Workshops – MDEC 2024, pp. 1–14",
    "badge": "CVPR Workshops 2024",
    "year": 2024,
    "abstract": "This paper discusses the results of the third edition of the Monocular Depth Estimation Challenge (MDEC). The challenge focuses on zero-shot generalization to the challenging SYNS-Patches dataset, featuring complex scenes in natural and indoor settings.",
    "image": "assets/img/publications/mdec2024",
    "links": {
      "arxiv": "https://arxiv.org/abs/2404.16831"
    }
  },
  {
    "title": "NTIRE 2024 Challenge on HR Depth from Images of Specular and Transparent Surfaces",
    "authors": [
      "Pierluigi Zama Ramirez",
      "Fabio Tosi",
      "Luigi Di Stefano",
      "Radu Timofte",
      "Alex Costanzino",
      "Matteo Poggi",
      "Samuele Salti",
      "Stefano Mattoccia",
      "et al."
    ],
    "kind": "Workshop",
    "venue": "CVPR Workshops – NTIRE 2024, pp. 6499–6512",
    "badge": "CVPR Workshops 2024",
    "year": 2024,
    "abstract": "This paper reports on the NTIRE 2024 challenge on HR Depth From images of Specular and Transparent surfaces held in conjunction with the New Trends in Image Restoration and Enhancement (NTIRE) workshop at CVPR 2024.",
    "image": "assets/img/publications/ntire2024",
    "url": "https://cvlab-unibo.github.io/booster-web/ntire24.html",
    "links": {
      "project": "https://cvlab-unibo.github.io/booster-web/ntire24.html",
      "pdf": "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/papers/Ramirez_NTIRE_2024_Challenge_on_HR_Depth_from_Images_of_Specular_CVPRW_2024_paper.pdf"
    }
  },
  {
    "title": "LiDAR-Event Stereo Fusion with Hallucinations",
    "authors": [
      "Luca Bartolomei",
      "Matteo Poggi",
      "Andrea Conti",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "European Conference on Computer Vision (ECCV 2024), pp. 125–145",
    "badge": "ECCV 2024",
    "year": 2024,
    "rank": "CORE A*",
    "abstract": "We integrate a stereo event camera with a fixed-frequency active sensor such as a LiDAR: its sparse depth hints are used to hallucinate fictitious events in the stacks or raw input streams, compensating for the lack of information where no brightness changes occur.",
    "image": "assets/img/publications/lidar-event-stereo",
    "url": "https://eventvppstereo.github.io/",
    "links": {
      "project": "https://eventvppstereo.github.io/",
      "arxiv": "https://arxiv.org/abs/2408.04633",
      "code": "https://github.com/bartn8/eventvppstereo"
    }
  },
  {
    "title": "TRICKY 2024 Challenge on Monocular Depth from Images of Specular and Transparent Surfaces",
    "authors": [
      "Pierluigi Zama Ramirez",
      "Alex Costanzino",
      "Fabio Tosi",
      "Matteo Poggi",
      "Luigi Di Stefano",
      "et al."
    ],
    "kind": "Workshop",
    "venue": "ECCV Workshops – TRICKY 2024, pp. 248–266",
    "badge": "ECCV Workshops 2024",
    "year": 2024,
    "image": "assets/img/publications/tricky2024-depth",
    "url": "https://cvlab-unibo.github.io/booster-web/tricky24.html",
    "links": {
      "project": "https://cvlab-unibo.github.io/booster-web/tricky24.html",
      "workshop": "https://sites.google.com/view/eccv24-tricky-workshop/"
    }
  },
  {
    "title": "Depth on Demand: Streaming Dense Depth from a Low Frame Rate Active Sensor",
    "authors": [
      "Andrea Conti",
      "Matteo Poggi",
      "Valerio Cambareri",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "European Conference on Computer Vision (ECCV 2024), pp. 283–302",
    "badge": "ECCV 2024",
    "year": 2024,
    "rank": "CORE A*",
    "abstract": "Depth on Demand (DoD) achieves accurate temporal and spatial depth densification by coupling a high frame rate RGB sensor with a lower frame rate, sparse active depth sensor, reducing energy consumption and the streaming requirements on the depth sensor.",
    "image": "assets/img/publications/depth-on-demand",
    "url": "https://andreaconti.github.io/projects/depth_on_demand",
    "links": {
      "project": "https://andreaconti.github.io/projects/depth_on_demand",
      "arxiv": "https://arxiv.org/abs/2409.08277",
      "code": "https://github.com/andreaconti/depth-on-demand"
    }
  },
  {
    "title": "MaskingDepth: Masked Consistency Regularization for Semi-Supervised Monocular Depth Estimation",
    "authors": [
      "Jongbeom Baek",
      "Gyeongnyeon Kim",
      "Seonghoon Park",
      "Honggyu An",
      "Matteo Poggi",
      "Seungryong Kim"
    ],
    "kind": "Conference",
    "venue": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2024), pp. 2755–2762",
    "badge": "IROS 2024",
    "year": 2024,
    "rank": "CORE A",
    "abstract": "We propose MaskingDepth, a novel semi-supervised learning framework for monocular depth estimation to mitigate the reliance on large ground-truth depth quantities.",
    "image": "assets/img/publications/maskingdepth",
    "url": "https://ku-cvlab.github.io/MaskingDepth/",
    "links": {
      "project": "https://ku-cvlab.github.io/MaskingDepth/",
      "arxiv": "https://arxiv.org/abs/2212.10806",
      "code": "https://github.com/KU-CVLAB/MaskingDepth"
    }
  },
  {
    "title": "Exploring Few-Beam LiDAR Assistance in Self-Supervised Multi-Frame Depth Estimation",
    "authors": [
      "Rizhao Fan",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2024), pp. 2770–2777",
    "badge": "IROS 2024",
    "year": 2024,
    "rank": "CORE A",
    "image": "assets/img/publications/few-beam-lidar",
    "links": {
      "paper": "https://ieeexplore.ieee.org/document/10801997"
    }
  },

  /* ---- 2023–2024 papers moved here from the archive (batch 3) ---- */
  {
    "title": "Automatic Implant Generation for Cranioplasty via Occupancy Networks",
    "authors": [
      "Stefano Mazzocchetti",
      "Mirko Bevini",
      "Giovanni Badiali",
      "Giuseppe Lisanti",
      "Luigi Di Stefano",
      "Samuele Salti"
    ],
    "kind": "Journal",
    "venue": "IEEE Access, vol. 12, pp. 95185–95195",
    "badge": "IEEE Access 2024",
    "year": 2024,
    "abstract": "We generate patient-specific cranial implants with a conditioned occupancy network: starting from the partial skull point cloud, the completed voxel grid is reconstructed by evaluating the learned occupancy function, matching state-of-the-art results on SkullBreak and SkullFix with significantly fewer computational resources.",
    "image": "assets/img/publications/cranioplasty-implant",
    "links": {
      "paper": "https://ieeexplore.ieee.org/document/10589384"
    }
  },
  {
    "title": "AnomalyControl: Few-Shot Anomaly Generation by ControlNet Inpainting",
    "authors": [
      "Musawar Ali",
      "Nicola Fioraio",
      "Samuele Salti",
      "Luigi Di Stefano"
    ],
    "kind": "Journal",
    "venue": "IEEE Access, vol. 12, pp. 192903–192914",
    "badge": "IEEE Access 2024",
    "year": 2024,
    "abstract": "We show how casting defect generation as inpainting of nominal images and using ControlNet to specialize a state-of-the-art inpainting model based on stable diffusion can be an effective solution for the few-shot anomaly generation task.",
    "image": "assets/img/publications/anomalycontrol",
    "links": {
      "paper": "https://ieeexplore.ieee.org/document/10806704"
    }
  },
  {
    "title": "Dynamic Bird's Eye View Reconstruction of Driving Accidents",
    "authors": [
      "Marco Boschi",
      "Luca De Luigi",
      "Samuele Salti",
      "Francesco Sambo",
      "Douglas Coimbra de Andrade",
      "Leonardo Taccari",
      "Alex Quintero Garcia"
    ],
    "kind": "Journal",
    "venue": "IEEE Transactions on Intelligent Transportation Systems, vol. 25, no. 8, pp. 8671–8680",
    "badge": "T-ITS 2024",
    "year": 2024,
    "rank": "Q1",
    "image": "assets/img/publications/bev-driving-accidents",
    "links": {
      "paper": "https://ieeexplore.ieee.org/document/10496390"
    }
  },
  {
    "title": "Test Time Training for Industrial Anomaly Segmentation",
    "authors": [
      "Alex Costanzino",
      "Pierluigi Zama Ramirez",
      "Mirko Del Moro",
      "Agostino Aiezzo",
      "Giuseppe Lisanti",
      "Samuele Salti",
      "Luigi Di Stefano"
    ],
    "kind": "Workshop",
    "venue": "CVPR Workshops 2024, pp. 3910–3920",
    "badge": "CVPR Workshops 2024",
    "year": 2024,
    "abstract": "Anomaly detection methods output per-pixel scores, but turning them into a binary segmentation usually relies on statistics from nominal-only validation data. We propose a test time training strategy that extracts features directly from the anomalous test samples to train a classifier that discriminates defects, on top of any anomaly detection and segmentation method.",
    "image": "assets/img/publications/ttt-anomaly-segmentation",
    "links": {
      "arxiv": "https://arxiv.org/abs/2404.03743"
    }
  },
  {
    "title": "Neural Processing of Tri-Plane Hybrid Neural Fields",
    "authors": [
      "Adriano Cardace",
      "Pierluigi Zama Ramirez",
      "Francesco Ballerini",
      "Allan Zhou",
      "Samuele Salti",
      "Luigi Di Stefano"
    ],
    "kind": "Conference",
    "venue": "International Conference on Learning Representations (ICLR 2024)",
    "badge": "ICLR 2024",
    "year": 2024,
    "rank": "CORE A*",
    "abstract": "We show that the tri-plane discrete data structure encodes rich information, which can be effectively processed by standard deep-learning machinery. We define an extensive benchmark covering a diverse set of fields such as occupancy, signed/unsigned distance, and, for the first time, radiance fields.",
    "image": "assets/img/publications/triplane-neural-fields",
    "links": {
      "arxiv": "https://arxiv.org/abs/2310.01140",
      "code": "https://github.com/CVLAB-Unibo/triplane_processing"
    }
  },
  {
    "title": "Depth super-resolution from explicit and implicit high-frequency features",
    "authors": [
      "Xin Qiao",
      "Chenyang Ge",
      "Youmin Zhang",
      "Yanhui Zhou",
      "Fabio Tosi",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "kind": "Journal",
    "venue": "Computer Vision and Image Understanding, vol. 237, art. 103841",
    "badge": "CVIU 2023",
    "year": 2023,
    "rank": "Q1",
    "abstract": "We propose a novel multi-stage depth super-resolution network, which progressively reconstructs high-resolution depth maps from explicit and implicit high-frequency features. The former are extracted by an efficient transformer processing both local and global contexts, while the latter are obtained by projecting color images into the frequency domain.",
    "image": "assets/img/publications/depth-sr-high-frequency",
    "links": {
      "arxiv": "https://arxiv.org/abs/2303.09307"
    }
  },
  {
    "title": "Self-supervised depth super-resolution with contrastive multiview pre-training",
    "authors": [
      "Xin Qiao",
      "Chenyang Ge",
      "Chaoqiang Zhao",
      "Fabio Tosi",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "kind": "Journal",
    "venue": "Neural Networks, vol. 168, pp. 223–236",
    "badge": "Neural Networks 2023",
    "year": 2023,
    "rank": "Q1",
    "image": "assets/img/publications/depth-sr-contrastive",
    "links": {
      "paper": "https://www.sciencedirect.com/science/article/pii/S0893608023005166"
    }
  },
  {
    "title": "Depth Restoration in Under-Display Time-of-Flight Imaging",
    "authors": [
      "Xin Qiao",
      "Chenyang Ge",
      "Pengchao Deng",
      "Hao Wei",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "kind": "Journal",
    "venue": "IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 45, no. 5, pp. 5668–5683",
    "badge": "TPAMI 2023",
    "year": 2023,
    "rank": "Q1",
    "abstract": "We propose a cascaded deep network to restore depth from under-display ToF cameras: a complex-valued subnet jointly denoises, deblurs and enhances the raw measurements, and a second subnet refines the depth map. We also build a real and a large-scale synthetic UD-ToF dataset.",
    "image": "assets/img/publications/under-display-tof",
    "links": {
      "paper": "https://ieeexplore.ieee.org/document/9903562"
    }
  },
  {
    "title": "Lightweight Self-Supervised Depth Estimation with few-beams LiDAR Data",
    "authors": [
      "Rizhao Fan",
      "Fabio Tosi",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "British Machine Vision Conference (BMVC 2023)",
    "badge": "BMVC 2023",
    "year": 2023,
    "rank": "CORE A",
    "abstract": "A self-supervised depth completion network trained only on monocular videos and sparse raw LiDAR measurements: a lightweight multi-stage architecture with a novel guided sparse convolution and a distance-dependent outlier mask reaches state-of-the-art results from 4-beam LiDAR to 64-beam depth completion with a fraction of the parameters.",
    "image": "assets/img/publications/few-beams-lidar-lightweight",
    "links": {
      "paper": "https://cris.unibo.it/handle/11585/962061",
      "code": "https://github.com/franky-ciomp/GSCNN"
    }
  },
  {
    "title": "On-Site Adaptation for Monocular Depth Estimation with a Static Camera",
    "authors": [
      "Huan Li",
      "Matteo Poggi",
      "Fabio Tosi",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "British Machine Vision Conference (BMVC 2023)",
    "badge": "BMVC 2023",
    "year": 2023,
    "rank": "CORE A",
    "abstract": "An on-site adaptation technique to deploy off-the-shelf monocular depth networks on a fixed camera mounted above the ground: it improves the depth of moving subjects, makes the predicted structure consistent with the scene and recovers absolute metric depth. We also release the StaticDepth dataset, with synthetic CARLA and real stereo sequences.",
    "image": "assets/img/publications/onsite-adaptation",
    "links": {
      "dataset": "https://sites.google.com/view/staticdepth-dataset",
      "paper": "https://proceedings.bmvc2023.org/901/"
    }
  },

  /* ---- 2023 papers moved here from the archive (batch 4) ---- */
  {
    "title": "Contrastive Learning for Depth Prediction",
    "authors": [
      "Rizhao Fan",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "kind": "Workshop",
    "venue": "CVPR Workshops 2023, pp. 3226–3237",
    "badge": "CVPR Workshops 2023",
    "year": 2023,
    "abstract": "This paper proposes a novel framework combining contrastive learning and depth prediction, allowing us to pay more attention to depth distribution and consequently enabling improvements to the overall estimation process.",
    "image": "assets/img/publications/contrastive-depth",
    "links": {
      "pdf": "https://cris.unibo.it/retrieve/handle/11585/961727/226ec78f-625c-400f-9fd7-e08b646a5230/Fan_Contrastive_Learning_for_Depth_Prediction_CVPRW_2023_paper.pdf"
    }
  },
  {
    "title": "To Adapt or Not to Adapt? Real-Time Adaptation for Semantic Segmentation",
    "authors": [
      "Marc Botet Colomer",
      "Pier Luigi Dovesi",
      "Theodoros Panagiotakopoulos",
      "Joao Frederico Carvalho",
      "Linus Härenstam-Nielsen",
      "Hossein Azizpour",
      "Hedvig Kjellström",
      "Daniel Cremers",
      "Matteo Poggi"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF International Conference on Computer Vision (ICCV 2023), pp. 16502–16513",
    "badge": "ICCV 2023",
    "year": 2023,
    "rank": "CORE A*",
    "abstract": "In this paper we propose HAMLET, a Hardware-Aware Modular Least Expensive Training framework for real-time domain adaptation. Our approach includes a hardware-aware back-propagation orchestration agent (HAMT) and a dedicated domain-shift detector that enables active control over when and how the model is adapted (LT).",
    "image": "assets/img/publications/hamlet",
    "url": "https://marcbotet.github.io/hamlet-web/",
    "links": {
      "arxiv": "https://arxiv.org/abs/2307.15063",
      "project": "https://marcbotet.github.io/hamlet-web/"
    }
  },
  {
    "title": "Depth Self-Supervision for Single Image Novel View Synthesis",
    "authors": [
      "Giovanni Minelli",
      "Matteo Poggi",
      "Samuele Salti"
    ],
    "kind": "Conference",
    "venue": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2023), pp. 5836–5843",
    "badge": "IROS 2023",
    "year": 2023,
    "rank": "CORE A",
    "abstract": "We tackle the problem of generating a novel image from an arbitrary viewpoint given a single frame as input.",
    "image": "assets/img/publications/depth-nvs",
    "links": {
      "arxiv": "https://arxiv.org/abs/2308.14108"
    }
  },
  {
    "title": "TemporalStereo: Efficient Spatial-Temporal Stereo Matching Network",
    "authors": [
      "Youmin Zhang",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2023), pp. 9528–9535",
    "badge": "IROS 2023",
    "year": 2023,
    "rank": "CORE A",
    "abstract": "We present TemporalStereo, a coarse-to-fine stereo matching network that is highly efficient, and able to effectively exploit the past geometry and context information to boost matching accuracy. Our network leverages sparse cost volume and proves to be effective when a single stereo pair is given.",
    "image": "assets/img/publications/temporalstereo",
    "url": "https://youmi-zym.github.io/projects/TemporalStereo/",
    "links": {
      "project": "https://youmi-zym.github.io/projects/TemporalStereo/",
      "code": "https://github.com/youmi-zym/TemporalStereo",
      "arxiv": "https://arxiv.org/abs/2211.13755"
    }
  },
  {
    "title": "ScanNeRF: a Scalable Benchmark for Neural Radiance Fields",
    "authors": [
      "Luca De Luigi",
      "Damiano Bolognini",
      "Federico Domeniconi",
      "Daniele De Gregorio",
      "Matteo Poggi",
      "Luigi Di Stefano"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV 2023), pp. 816–825",
    "badge": "WACV 2023",
    "year": 2023,
    "rank": "CORE A",
    "abstract": "We propose the first-ever real benchmark thought for evaluating Neural Radiance Fields (NeRFs) and, in general, Neural Rendering (NR) frameworks. We design and implement an effective pipeline for scanning real objects in quantity and effortlessly.",
    "image": "assets/img/publications/scannerf",
    "links": {
      "arxiv": "https://arxiv.org/abs/2211.13762"
    }
  },
  {
    "title": "Sparsity Agnostic Depth Completion",
    "authors": [
      "Andrea Conti",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "kind": "Conference",
    "venue": "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV 2023), pp. 5860–5869",
    "badge": "WACV 2023",
    "year": 2023,
    "rank": "CORE A",
    "abstract": "We present a novel depth completion approach agnostic to the sparsity of depth points, that is very likely to vary in many practical applications. State-of-the-art approaches yield accurate results only when processing a specific density and distribution of input points, i.e. the one observed during training, narrowing their deployment in real use cases.",
    "image": "assets/img/publications/sparsity-agnostic-dc",
    "url": "https://andreaconti.github.io/projects/sparsity_agnostic_depth_completion",
    "links": {
      "arxiv": "https://arxiv.org/abs/2212.00790",
      "project": "https://andreaconti.github.io/projects/sparsity_agnostic_depth_completion",
      "code": "https://github.com/andreaconti/sparsity-agnostic-depth-completion"
    }
  },
  {
    "title": "Boosting Multi-Modal Unsupervised Domain Adaptation for LiDAR Semantic Segmentation by Self-Supervised Depth Completion",
    "authors": [
      "Adriano Cardace",
      "Andrea Conti",
      "Pierluigi Zama Ramirez",
      "Riccardo Spezialetti",
      "Samuele Salti",
      "Luigi Di Stefano"
    ],
    "kind": "Journal",
    "venue": "IEEE Access, vol. 11, pp. 85155–85164",
    "badge": "IEEE Access 2023",
    "year": 2023,
    "abstract": "We propose a novel Unsupervised Domain Adaptation (UDA) technique for multi-modal LiDAR segmentation. Unlike previous works in this field, we leverage depth completion as an auxiliary task to align features extracted from 2D images across domains, and as a powerful data augmentation for LiDARs.",
    "image": "assets/img/publications/lidar-uda-depth-completion",
    "url": "https://cvlab-unibo.github.io/cts-web/",
    "links": {
      "code": "https://github.com/CVLAB-Unibo/CtS",
      "project": "https://cvlab-unibo.github.io/cts-web/",
      "paper": "https://ieeexplore.ieee.org/document/10214589"
    }
  },

  /* ---- papers reported missing by Alex Costanzino and Luca Bartolomei; CVPR 2024 demo ---- */
  {
    "title": "Towards Reliable Identification of Diffusion-based Image Manipulations",
    "authors": [
      "Alex Costanzino",
      "Woody Bayliss",
      "Juil Sock",
      "Marc Gorriz Blanch",
      "Danijela Horak",
      "Ivan Laptev",
      "Philip Torr",
      "Fabio Pizzati"
    ],
    "kind": "Conference",
    "venue": "Conference on Neural Information Processing Systems (NeurIPS 2025), pp. 42473–42508",
    "badge": "NeurIPS 2025",
    "year": 2025,
    "rank": "CORE A*",
    "abstract": "We propose RADAR (ReliAble iDentification of inpainted AReas), which builds on foundation models, combines features from different image modalities and uses an auxiliary contrastive loss to isolate manipulated patches, generalising to a large number of diffusion models. We also introduce BBC-PAIR, a benchmark for realistic evaluation.",
    "image": "assets/img/publications/radar",
    "url": "https://alex-costanzino.github.io/radar/",
    "links": {
      "project": "https://alex-costanzino.github.io/radar/",
      "paper": "https://neurips.cc/virtual/2025/loc/san-diego/poster/117068",
      "arxiv": "https://arxiv.org/abs/2506.05466",
      "code": "https://github.com/alex-costanzino/RADAR-code",
      "dataset": "https://github.com/bbc/PAIR",
      "demo": "https://huggingface.co/spaces/radar-ifdl/RADAR-demo",
      "poster": "https://neurips.cc/media/PosterPDFs/NeurIPS%202025/117068.png?t=1762382992.4399571"
    }
  },
  {
    "title": "Towards Event-Based Stereo Depth Estimation at Millisecond Resolution",
    "authors": [
      "Enrico Mannocci",
      "Luca Bartolomei",
      "Fabio Tosi",
      "Matteo Poggi",
      "Stefano Mattoccia"
    ],
    "kind": "Journal",
    "venue": "IET Image Processing, vol. 20, no. 1, art. e70472",
    "badge": "IET Image Processing 2026",
    "year": 2026,
    "abstract": "We introduce MADNet-ε, a lightweight architecture for event-based stereo matching that infers disparity at more than 140 FPS: events are stacked into 10 ms histograms and a recurrent feature extractor with spiking convolutional LSTM cells keeps temporal information. It is pre-trained on ε-CARLA, a new synthetic dataset generated with the CARLA simulator.",
    "image": "assets/img/publications/madnet-epsilon",
    "links": {
      "paper": "https://doi.org/10.1049/ipr2.70472"
    }
  },
  {
    "title": "Robust depth perception through Virtual Pattern Projection",
    "authors": [
      "Luca Bartolomei",
      "Matteo Poggi",
      "Fabio Tosi",
      "Andrea Conti",
      "Stefano Mattoccia"
    ],
    "kind": "Demo",
    "venue": "Live demo at CVPR 2024 (record on Zenodo)",
    "badge": "CVPR 2024 Demo",
    "year": 2024,
    "image": "assets/img/publications/vpp-demo2024",
    "links": {
      "demo": "https://github.com/bartn8/cvpr24-demo",
      "paper": "https://zenodo.org/records/12903866"
    },
    "topics": [
      "Depth Perception",
      "Stereo & Multi-Sensor"
    ]
  }
];
