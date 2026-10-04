/* ===========================================================================
   Publication archive (compact list rows). Format: [year, title, authors, venue, topics?]
   The optional 5th item fixes the research pillars by hand, e.g. ["Scene Understanding"].
   Papers that already have a full card in data/publications.js are not repeated here.
   Venues of the form "CoRR abs/2603.28759 (2026)" automatically get an arXiv link.
   =========================================================================== */
window.ARCHIVE = (window.ARCHIVE || []).concat([
  /* 2026 */
  [2026, "How NeRFs and 3-D Gaussian Splatting Are Reshaping SLAM: A Survey", "Fabio Tosi, Youmin Zhang, Ziren Gong, Erik Sandström, Stefano Mattoccia, Martin R. Oswald, Matteo Poggi", "IEEE Trans. Robotics 42: 1405-1427 (2026)"],
  [2026, "FoundationSLAM: Unleashing the Power of Depth Foundation Models for End-to-End Dense Visual SLAM", "Yuchen Wu, Jiahe Li, Fabio Tosi, Matteo Poggi, Jin Zheng, Xiao Bai", "AAAI 2026: 10853-10861"],
  [2026, "Ov3R: Open-Vocabulary Semantic 3D Reconstruction from RGB Videos", "Ziren Gong, Xiaohan Li, Fabio Tosi, Jiawei Han, Stefano Mattoccia, Jianfei Cai, Matteo Poggi", "CVPR 2026: 34206-34216"],
  [2026, "EventHub: Data Factory for Generalizable Event-Based Stereo Networks without Active Sensors", "Luca Bartolomei, Fabio Tosi, Matteo Poggi, Stefano Mattoccia, Guillermo Gallego", "CVPR 2026: 37063-37074"],
  [2026, "DINO-SLAM: DINO-Informed RGB-D SLAM for Neural Implicit and Explicit Representations", "Ziren Gong, Xiaohan Li, Fabio Tosi, Youmin Zhang, Stefano Mattoccia, Jun Wu, Matteo Poggi", "ECCV (77) 2026: 158-177"],
  [2026, "MAGiSt3R: Multi-agent Feed-Forward 3D Reconstruction from Monocular RGB Videos", "Ziren Gong, Xiaohan Li, Fabio Tosi, Ninghui Xu, Stefano Mattoccia, Jianfei Cai, Matteo Poggi", "ECCV (1) 2026: 417-436"],
  [2026, "WarpRF: Multi-View Consistency for Training-Free Uncertainty Quantification and Applications in Radiance Fields", "Sadra Safadoust, Fabio Tosi, Fatma Güney, Matteo Poggi", "WACV 2026: 5226-5235"],
  [2026, "FlowIt: Global Matching for Optical Flow with Confidence-Guided Refinement", "Sadra Safadoust, Fabio Tosi, Matteo Poggi, Fatma Güney", "CoRR abs/2603.28759 (2026)"],
  [2026, "Bidirectional Cross-Modal Prompting for Event-Frame Asymmetric Stereo", "Ninghui Xu, Fabio Tosi, Lihui Wang, Jiawei Han, Luca Bartolomei, Zhiting Yao, Matteo Poggi, Stefano Mattoccia", "CoRR abs/2604.15312 (2026)"],
  [2026, "ZipDepth: Bringing Lightweight Zero-Shot Monocular Depth Anywhere, on Any Device", "Fabio Tosi, Luca Bartolomei, Matteo Poggi, Stefano Mattoccia", "CoRR abs/2607.08771 (2026)"],

  /* 2025 */
  [2025, "A Survey on Deep Stereo Matching in the Twenties", "Fabio Tosi, Luca Bartolomei, Matteo Poggi", "Int. J. Comput. Vis. 133(7): 4245-4276 (2025)"],
  [2025, "Active Stereo in the Wild through Virtual Pattern Projection", "Luca Bartolomei, Matteo Poggi, Fabio Tosi, Andrea Conti, Stefano Mattoccia", "Int. J. Comput. Vis. 133(10): 7242-7269 (2025)"],
  [2025, "Stereo Anywhere: Robust Zero-Shot Deep Stereo Matching Even Where Either Stereo or Mono Fail", "Luca Bartolomei, Fabio Tosi, Matteo Poggi, Stefano Mattoccia", "CVPR 2025: 1013-1027"],
  [2025, "FlowSeek: Optical Flow Made Easier with Depth Foundation Models and Motion Bases", "Matteo Poggi, Fabio Tosi", "ICCV 2025: 5667-5679"],
  [2025, "Depth AnyEvent: A Cross-Modal Distillation Paradigm for Event-Based Monocular Depth Estimation", "Luca Bartolomei, Enrico Mannocci, Fabio Tosi, Matteo Poggi, Stefano Mattoccia", "ICCV 2025: 19669-19678"],
  [2025, "HS-SLAM: Hybrid Representation with Structural Supervision for Improved Dense SLAM", "Ziren Gong, Fabio Tosi, Youmin Zhang, Stefano Mattoccia, Matteo Poggi", "ICRA 2025: 8464-8470"],
  [2025, "Eve3D: Elevating Vision Models for Enhanced 3D Surface Reconstruction via Gaussian Splatting", "Jiawei Zhang, Youmin Zhang, Fabio Tosi, Meiying Gu, Jiahe Li, Xiaohan Yu, Jin Zheng, Xiao Bai, Matteo Poggi", "NeurIPS 2025"],
  [2025, "CabNIR: A Benchmark for In-Vehicle Infrared Monocular Depth Estimation", "Ugo Leone Cavalcanti, Matteo Poggi, Fabio Tosi, Valerio Cambareri, Vladimir Zlokolica, Stefano Mattoccia", "WACV 2025: 2578-2590"],
  [2025, "StereoSpace: Depth-Free Synthesis of Stereo Geometry via End-to-End Diffusion in a Canonical Space", "Tjark Behrens, Anton Obukhov, Bingxin Ke, Fabio Tosi, Matteo Poggi, Konrad Schindler", "CoRR abs/2512.10959 (2025)"],
  [2025, "SiM3D: Single-Instance Multiview Multimodal and Multisetup 3D Anomaly Detection Benchmark", "Alex Costanzino, Pierluigi Zama Ramirez, Luigi Lella, Matteo Ragaglia, Alessandro Oliva, Giuseppe Lisanti, Luigi Di Stefano", "ICCV 2025: 20944-20953"],

  /* 2024 */
  [2024, "Guest Editorial: Special Issue on Traditional Computer Vision in the Age of Deep Learning", "Matteo Poggi, Federica Arrigoni, Andrea Fusiello, Stefano Mattoccia, Adrien Bartoli, Torsten Sattler, Tomás Pajdla", "Int. J. Comput. Vis. 132(9): 4128-4130 (2024)"],
  [2024, "Booster: A Benchmark for Depth From Images of Specular and Transparent Surfaces", "Pierluigi Zama Ramirez, Alex Costanzino, Fabio Tosi, Matteo Poggi, Samuele Salti, Stefano Mattoccia, Luigi Di Stefano", "IEEE Trans. Pattern Anal. Mach. Intell. 46(1): 85-102 (2024)"],
  [2024, "Neural Disparity Refinement", "Fabio Tosi, Filippo Aleotti, Pierluigi Zama Ramirez, Matteo Poggi, Samuele Salti, Stefano Mattoccia, Luigi Di Stefano", "IEEE Trans. Pattern Anal. Mach. Intell. 46(12): 8900-8917 (2024)"],
  [2024, "Self-Evolving Depth-Supervised 3D Gaussian Splatting from Rendered Stereo Pairs", "Sadra Safadoust, Fabio Tosi, Fatma Güney, Matteo Poggi", "BMVC 2024"],
  [2024, "Federated Online Adaptation for Deep Stereo", "Matteo Poggi, Fabio Tosi", "CVPR 2024: 20165-20175"],
  [2024, "Diffusion Models for Monocular Depth Estimation: Overcoming Challenging Conditions", "Fabio Tosi, Pierluigi Zama Ramirez, Matteo Poggi", "ECCV (23) 2024: 236-257"],
  [2024, "Robust depth perception through Virtual Pattern Projection (CVPR 2024 DEMO)", "Luca Bartolomei, Matteo Poggi, Fabio Tosi, Andrea Conti, Stefano Mattoccia", "Zenodo, 2024"],
  [2024, "LLaNA: Large Language and NeRF Assistant", "Andrea Amaduzzi, Pierluigi Zama Ramirez, Giuseppe Lisanti, Samuele Salti, Luigi Di Stefano", "NeurIPS 2024"],

  /* 2023 */
  [2023, "NeRF-Supervised Deep Stereo", "Fabio Tosi, Alessio Tonioni, Daniele De Gregorio, Matteo Poggi", "CVPR 2023: 855-866"],
  [2023, "NTIRE 2023 Challenge on HR Depth from Images of Specular and Transparent Surfaces", "Pierluigi Zama Ramirez, Fabio Tosi, Luigi Di Stefano, Radu Timofte, Alex Costanzino, Matteo Poggi, Samuele Salti, Stefano Mattoccia, et al.", "CVPR Workshops 2023: 1384-1395"],
  [2023, "The Second Monocular Depth Estimation Challenge", "Jaime Spencer, C. Stella Qian, Michaela Trescakova, Chris Russell, Simon Hadfield, Erich W. Graf, Wendy J. Adams, Andrew J. Schofield, James H. Elder, Richard Bowden, et al., Matteo Poggi, Fabio Tosi, Stefano Mattoccia", "CVPR Workshops 2023: 3064-3076"],
  [2023, "CompletionFormer: Depth Completion with Convolutions and Vision Transformers", "Youmin Zhang, Xianda Guo, Matteo Poggi, Zheng Zhu, Guan Huang, Stefano Mattoccia", "CVPR 2023: 18527-18536"],
  [2023, "GO-SLAM: Global Optimization for Consistent 3D Instant Reconstruction", "Youmin Zhang, Fabio Tosi, Stefano Mattoccia, Matteo Poggi", "ICCV 2023: 3704-3714"],
  [2023, "Learning Depth Estimation for Transparent and Mirror Surfaces", "Alex Costanzino, Pierluigi Zama Ramirez, Matteo Poggi, Fabio Tosi, Stefano Mattoccia, Luigi Di Stefano", "ICCV 2023: 9210-9221"],
  [2023, "GasMono: Geometry-Aided Self-Supervised Monocular Depth Estimation for Indoor Scenes", "Chaoqiang Zhao, Matteo Poggi, Fabio Tosi, Lei Zhou, Qiyu Sun, Yang Tang, Stefano Mattoccia", "ICCV 2023: 16163-16174"],
  [2023, "Active Stereo Without Pattern Projector", "Luca Bartolomei, Matteo Poggi, Fabio Tosi, Andrea Conti, Stefano Mattoccia", "ICCV 2023: 18424-18436"],
  [2023, "The Monocular Depth Estimation Challenge", "Jaime Spencer, C. Stella Qian, Chris Russell, Simon Hadfield, Erich W. Graf, Wendy J. Adams, Andrew J. Schofield, James H. Elder, Richard Bowden, et al., Stefano Mattoccia, Matteo Poggi, Fabio Tosi", "WACV (Workshops) 2023: 623-632"],
  [2023, "Learning Good Features to Transfer Across Tasks and Domains", "Pierluigi Zama Ramirez, Adriano Cardace, Luca De Luigi, Alessio Tonioni, Samuele Salti, Luigi Di Stefano", "IEEE Trans. Pattern Anal. Mach. Intell. 45(8): 9981-9995 (2023)"],
  [2023, "Lightweight and Effective Convolutional Neural Networks for Vehicle Viewpoint Estimation From Monocular Images", "Simone Magistri, Marco Boschi, Francesco Sambo, Douglas Coimbra de Andrade, Matteo Simoncini, Luca Kubin, Leonardo Taccari, Luca De Luigi, Samuele Salti", "IEEE Trans. Intell. Transp. Syst. 24(1): 191-200 (2023)"],
  [2023, "Exploiting the Complementarity of 2D and 3D Networks to Address Domain-Shift in 3D Semantic Segmentation", "Adriano Cardace, Pierluigi Zama Ramirez, Samuele Salti, Luigi Di Stefano", "CVPR Workshops 2023: 98-109"],
  [2023, "ReLight My NeRF: A Dataset for Novel View Synthesis and Relighting of Real World Objects", "Marco Toschi, Riccardo De Matteo, Riccardo Spezialetti, Daniele De Gregorio, Luigi Di Stefano, Samuele Salti", "CVPR 2023: 20762-20772"],
  [2023, "Looking at words and points with attention: a benchmark for text-to-shape coherence", "Andrea Amaduzzi, Giuseppe Lisanti, Samuele Salti, Luigi Di Stefano", "ICCV (Workshops) 2023: 2860-2869"],

  /* 2022 */
  [2022, "Energy-Quality Scalable Monocular Depth Estimation on Low-Power CPUs", "Antonio Cipolletta, Valentino Peluso, Andrea Calimera, Matteo Poggi, Fabio Tosi, Filippo Aleotti, Stefano Mattoccia", "IEEE Internet Things J. 9(1): 25-36 (2022)"],
  [2022, "Continual Adaptation for Deep Stereo", "Matteo Poggi, Alessio Tonioni, Fabio Tosi, Stefano Mattoccia, Luigi Di Stefano", "IEEE Trans. Pattern Anal. Mach. Intell. 44(9): 4713-4729 (2022)"],
  [2022, "On the Confidence of Stereo Matching in a Deep-Learning Era: A Quantitative Evaluation", "Matteo Poggi, Seungryong Kim, Fabio Tosi, Sunok Kim, Filippo Aleotti, Dongbo Min, Kwanghoon Sohn, Stefano Mattoccia", "IEEE Trans. Pattern Anal. Mach. Intell. 44(9): 5293-5313 (2022)"],
  [2022, "On the Synergies Between Machine Learning and Binocular Stereo for Depth Estimation From Images: A Survey", "Matteo Poggi, Fabio Tosi, Konstantinos Batsos, Philippos Mordohai, Stefano Mattoccia", "IEEE Trans. Pattern Anal. Mach. Intell. 44(9): 5314-5334 (2022)"],
  [2022, "Monocular Depth Perception on Microcontrollers for Edge Applications", "Valentino Peluso, Antonio Cipolletta, Andrea Calimera, Matteo Poggi, Fabio Tosi, Filippo Aleotti, Stefano Mattoccia", "IEEE Trans. Circuits Syst. Video Technol. 32(3): 1524-1536 (2022)"],
  [2022, "Monitoring Social Distancing With Single Image Depth Estimation", "Alessio Mingozzi, Andrea Conti, Filippo Aleotti, Matteo Poggi, Stefano Mattoccia", "IEEE Trans. Emerg. Top. Comput. Intell. 6(6): 1290-1301 (2022)"],
  [2022, "Real-Time Self-Supervised Monocular Depth Estimation Without GPU", "Matteo Poggi, Fabio Tosi, Filippo Aleotti, Stefano Mattoccia", "IEEE Trans. Intell. Transp. Syst. 23(10): 17342-17353 (2022)"],
  [2022, "Cross-Spectral Neural Radiance Fields", "Matteo Poggi, Pierluigi Zama Ramirez, Fabio Tosi, Samuele Salti, Stefano Mattoccia, Luigi Di Stefano", "3DV 2022: 606-616"],
  [2022, "MonoViT: Self-Supervised Monocular Depth Estimation with a Vision Transformer", "Chaoqiang Zhao, Youmin Zhang, Matteo Poggi, Fabio Tosi, Xianda Guo, Zheng Zhu, Guan Huang, Yang Tang, Stefano Mattoccia", "3DV 2022: 668-678"],
  [2022, "A Cascade Dense Connection Fusion Network for Depth Completion", "Rizhao Fan, Zhigen Li, Matteo Poggi, Stefano Mattoccia", "BMVC 2022: 843"],
  [2022, "RGB-Multispectral Matching: Dataset, Learning Methodology, Evaluation", "Fabio Tosi, Pierluigi Zama Ramirez, Matteo Poggi, Samuele Salti, Stefano Mattoccia, Luigi Di Stefano", "CVPR 2022: 15937-15947"],
  [2022, "Open Challenges in Deep Stereo: the Booster Dataset", "Pierluigi Zama Ramirez, Fabio Tosi, Matteo Poggi, Samuele Salti, Stefano Mattoccia, Luigi Di Stefano", "CVPR 2022: 21136-21146"],
  [2022, "Online Domain Adaptation for Semantic Segmentation in Ever-Changing Conditions", "Theodoros Panagiotakopoulos, Pier Luigi Dovesi, Linus Härenstam-Nielsen, Matteo Poggi", "ECCV (34) 2022: 128-146"],
  [2022, "Meta-confidence estimation for stereo matching", "Seungryong Kim, Matteo Poggi, Sunok Kim, Kwanghoon Sohn, Stefano Mattoccia", "ICRA 2022: 10624-10631"],
  [2022, "Unsupervised confidence for LiDAR depth maps and applications", "Andrea Conti, Matteo Poggi, Filippo Aleotti, Stefano Mattoccia", "IROS 2022: 8352-8359"],
  [2022, "Multi-View Guided Multi-View Stereo", "Matteo Poggi, Andrea Conti, Stefano Mattoccia", "IROS 2022: 8391-8398"],
  [2022, "Unsupervised Learning of Local Equivariant Descriptors for Point Clouds", "Marlon Marcon, Riccardo Spezialetti, Samuele Salti, Luciano Silva, Luigi Di Stefano", "IEEE Trans. Pattern Anal. Mach. Intell. 44(12): 9687-9702 (2022)"],
  [2022, "Unsafe Maneuver Classification From Dashcam Video and GPS/IMU Sensors Using Spatio-Temporal Attention Selector", "Matteo Simoncini, Douglas Coimbra de Andrade, Leonardo Taccari, Samuele Salti, Luca Kubin, Fabio Schoen, Francesco Sambo", "IEEE Trans. Intell. Transp. Syst. 23(9): 15605-15615 (2022)"],
  [2022, "Learning the Space of Deep Models", "Gianluca Berardi, Luca De Luigi, Samuele Salti, Luigi Di Stefano", "ICPR 2022: 2482-2488"],
  [2022, "Plugging Self-Supervised Monocular Depth into Unsupervised Domain Adaptation for Semantic Segmentation", "Adriano Cardace, Luca De Luigi, Pierluigi Zama Ramirez, Samuele Salti, Luigi Di Stefano", "WACV 2022: 1999-2009"],
  [2022, "Shallow Features Guide Unsupervised Domain Adaptation for Semantic Segmentation at Class Boundaries", "Adriano Cardace, Pierluigi Zama Ramirez, Samuele Salti, Luigi Di Stefano", "WACV 2022: 2010-2020"]
]);
