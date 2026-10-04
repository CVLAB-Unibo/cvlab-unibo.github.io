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
      "Paper": "https://eccv.ecva.net/virtual/2026/spotlight/6070",
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
      "pdf": "https://openaccess.thecvf.com/content/ICCV2025/papers/Costanzino_SiM3D_Single-instance_Multiview_Multimodal_and_Multisetup_3D_Anomaly_Detection_Benchmark_ICCV_2025_paper.pdf"
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
      "arxiv": "https://arxiv.org/abs/2507.19474"
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
      "arxiv": "https://arxiv.org/abs/2607.15211"
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
      "arxiv": "https://arxiv.org/abs/2402.13255"
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
      "pdf": "https://arxiv.org/pdf/2506.22433.pdf"
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
      "supp": "https://fabiotosi92.github.io/files/14521_Eve3D_Elevating_Vision_M-appendix.pdf"
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
      "preprint": "https://fabiotosi92.github.io/files/survey-stereo.pdf"
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
      "project": "https://vppstereo.github.io/"
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
      "pdf": "https://doi.org/10.1109/ICRA55743.2025.11127551"
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
  }
];
