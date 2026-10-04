/* ===========================================================================
   Research taxonomy.

   1) RESEARCH – the research pillars. One slide of the carousel each, and the main
      "topic" tags / filters on the Publications page.
        title:    full name (slide title)
        short:    label of the tag on publications and in the filter bar
        text:     short description
        axis:     "what" (what we perceive), "how" (how we make it work) or "past" (earlier lines of work)
        image:    path from the site root, e.g. "imgs/research/stereo.png". Without an extension
                  ("imgs/research/anomaly") the site tries .png .jpg .jpeg .webp. Missing file or null = placeholder
        keywords: words searched in the paper titles to tag papers automatically
                  (start of a word, case-insensitive: "adapt" matches "adaptation")
      A paper can belong to several pillars. To fix one by hand, set on the paper in
      data/publications.js:   topics: ["Depth Perception", ...]   (exact list)
                              addTopics: ["SLAM & Localization"]  (extra, on top of the automatic ones)

   2) TAXONOMY – secondary dimensions (technology, learning paradigm, sensors, applications).
      They become the small outlined keyword tags and the "More filters". Each label has
      title keywords; to set them by hand use  keywords: ["Event Cameras", "Zero-/Few-Shot"]  on a paper.

   3) STORY – the "Perceive → Estimate → Reconstruct → Understand → Adapt" narrative.
   =========================================================================== */
window.RESEARCH = [
  {
    title: "3D Perception & Depth",
    short: "Depth Perception",
    axis: "what",
    image: "imgs/research/monocular.png",
    text: "How do we recover 3D information from images and sensors? We work on monocular depth, depth completion and super-resolution, depth from sparse LiDAR and time-of-flight data, optical flow and confidence estimation, with a focus on real scenes, hard conditions such as transparent and reflective surfaces, and efficient models.",
    keywords: ["depth", "disparity", "optical flow", "scene flow", "flowseek", "flowit", "confidence", "uncertainty", "time-of-flight", "tof", "monocular", "super-resolution", "profilometry"]
  },
  {
    title: "Stereo Vision & Multi-Sensor 3D Sensing",
    short: "Stereo & Multi-Sensor",
    axis: "what",
    image: "imgs/research/stereo.png",
    text: "From deep stereo matching to zero-shot, generalizable stereo. We study active and virtual-pattern stereo, event-based and LiDAR-stereo fusion, multispectral matching, stereo confidence and even the synthesis of stereo geometry.",
    keywords: ["stereo", "disparity", "event-based", "event camera", "event stereo", "event-frame", "eventhub", "multispectral", "lidar", "multi-view stereo"]
  },
  {
    title: "3D Reconstruction, Neural Fields & Novel View Synthesis",
    short: "3D Reconstruction & NVS",
    axis: "what",
    image: "imgs/research/nvs_task.jpg",
    text: "Reconstructing and representing 3D scenes with NeRFs, 3D Gaussian Splatting and implicit neural representations. Neural fields are not a single task but a new data modality: we learn directly on them, for classification, retrieval, segmentation, generation and language (inr2vec, nf2vec, LLaNA), and we build datasets and benchmarks for novel view synthesis and relighting.",
    keywords: ["nerf", "radiance field", "neural field", "implicit neural", "gaussian splatting", "splatting", "novel view", "view synthesis", "3d reconstruction", "surface reconstruction", "tri-plane", "relight", "rendering", "feed-forward", "occupancy network", "multi-view reconstruction"]
  },
  {
    title: "SLAM, Localization & Spatial Computing",
    short: "SLAM & Localization",
    axis: "what",
    image: "imgs/research/slam.png",
    text: "Tracking the camera and building maps in real time. Our SLAM works with neural implicit and Gaussian representations, depth and DINO foundation models, stereo and time-of-flight sensors, from RGB-D to monocular video.",
    keywords: ["slam", "localization", "localisation", "relocali", "pose estimation", "odometry", "camera pose", "and mapping", "mapping framework", "real-time mapping"]
  },
  {
    title: "Semantic & 3D Scene Understanding",
    short: "Scene Understanding",
    axis: "what",
    image: "imgs/research/semantic-segmentation.png",
    text: "From geometry to meaning: semantic and open-vocabulary segmentation, 3D semantics on point clouds and reconstructed scenes, learning descriptors and features for point clouds, object recognition, human-object interaction, visual perception for driving and intelligent transportation, and the detection of generated images.",
    keywords: ["semantic", "segmentation", "scene understanding", "recognition", "human-object", "object detection", "open-vocabulary", "open vocabulary", "traffic sign", "vehicle detection", "vehicle classification", "maneuver", "dashcam", "driving accident", "bird's eye", "fleet", "gps data", "generated images", "pole-like"]
  },
  {
    title: "3D Anomaly Detection & Industrial Vision",
    short: "Anomaly & Industrial",
    axis: "what",
    image: "imgs/research/anomaly",
    text: "Visual inspection and anomaly understanding for industry: 2D and 3D, multiview and few-shot anomaly detection, segmentation and generation, with transformers, inpainting and cross-modal feature mapping.",
    keywords: ["anomal", "industrial", "inspection", "defect", "semiconductor"]
  },
  {
    title: "Efficient & Real-Time Vision",
    short: "Efficient & Real-Time",
    axis: "how",
    image: "imgs/research/efficient",
    text: "A trademark of the lab: 3D perception that runs where it is needed. Real-time and energy-efficient depth and stereo, lightweight architectures and neural architecture search, low-power and embedded deployment on CPU, FPGA and microcontrollers, and accuracy-efficiency trade-offs.",
    keywords: ["efficient", "lightweight", "real-time", "real time", "energy", "low-power", "low power", "embedded", "fpga", "cpu", "microcontroller", "architecture search", "quantiz", "compress", "power budget", "edge"]
  },
  {
    title: "Robust, Adaptive & Generalizable Vision",
    short: "Robust & Generalizable",
    axis: "how",
    image: "imgs/research/robust",
    text: "A cross-cutting theme: models that keep working in new domains, with new sensors and without labels. Domain adaptation, source-free and online adaptation, test-time training, self-supervision, zero- and few-shot learning, confidence and uncertainty.",
    keywords: ["adapt", "domain adaptation", "domain-shift", "domain shift", "domains", "domain invariant", "self-supervised", "unsupervised", "zero-shot", "few-shot", "test time", "test-time", "generaliz", "robust", "self-distillation", "continual", "cross-domain", "source-free"]
  },
  {
    title: "Multimodal & Cross-Modal Perception",
    short: "Multimodal",
    axis: "how",
    image: "imgs/research/multimodal",
    text: "Perception that combines RGB, stereo, depth, LiDAR, time-of-flight, event cameras, multispectral imagery, video and text: multimodal fusion, cross-modal distillation, event-frame and image-to-point-cloud transfer.",
    keywords: ["multimodal", "multi-modal", "cross-modal", "crossmodal", "fusion", "lidar", "multispectral", "rgb-d", "time-of-flight", "tof", "event-based", "event camera", "event stereo", "event-frame", "eventhub", "image-text", "sensor-guided"]
  },
  {
    title: "Foundation, Vision-Language & Generative Models",
    short: "Foundation & Generative",
    axis: "how",
    image: "imgs/research/foundation",
    text: "An emerging direction: depth and vision foundation models (DINO, SAM, LoRA), vision-language and NeRF-language models, diffusion models, generative 3D and depth, language-conditioned 3D understanding.",
    keywords: ["foundation", "vision-language", "language", "diffusion", "generative", "dino", "segment anything", "sam-adapter", "lora", "prompt", "llana", "clip", "text-to-shape"]
  },
  {
    title: "3D Local Features, Keypoints & Shape Matching",
    short: "3D Features & Matching",
    axis: "past",
    image: "imgs/research/3d-features.png",
    text: "Where much of our 3D work started: local descriptors such as SHOT, 3D keypoint detectors and their evaluation, local reference frames, registration and 3D object recognition in clutter. These tools, now learned rather than hand-crafted, are still at the core of how we match and align 3D data.",
    keywords: ["descriptor", "3d keypoint", "local reference frame", "shape matching", "surface matching", "surface description", "signatures of histograms", "shape context", "3d data description", "3d feature", "3d detectors", "learned 3d features", "registration", "geometric hashing", "range images"]
  },
  {
    title: "Image Matching, Change Detection & Tracking",
    short: "Matching & Video Analysis",
    axis: "past",
    image: "imgs/research/river.png",
    text: "The roots of the lab in image and video analysis: fast, full-search-equivalent template matching, interest points, change detection and background subtraction for video surveillance, visual tracking and markerless augmented reality.",
    keywords: ["template matching", "pattern matching", "full-search", "full search", "bounded partial correlation", "interest point", "interest region", "keypoints from", "keypoint detection", "bold features", "change detection", "change-detection", "change detector", "background subtraction", "background generation", "background maintenance", "surveillance", "tracking", "track vehicles", "fast matching", "markerless", "access monitoring", "augmented reality", "mosaic", "denoising", "pixel-level", "grey level", "transition model", "circular objects", "cellular array", "image processing"]
  }
];

window.TAXONOMY = {
  "Technology": {
    "NeRF": ["nerf", "radiance field"],
    "Gaussian Splatting": ["gaussian splatting", "splatting", "3dgs"],
    "Neural Fields": ["neural field", "implicit neural", "tri-plane"],
    "Diffusion": ["diffusion"],
    "Foundation Models": ["foundation", "dino", "sam-adapter", "segment anything", "lora"],
    "Vision-Language": ["vision-language", "language", "llana", "text-to", "open-vocabulary"],
    "Transformers": ["transformer"],
    "Point Clouds": ["point cloud"]
  },
  "Learning": {
    "Domain Adaptation": ["adaptation", "domains", "domain-shift", "domain shift", "cross-domain", "domain invariant"],
    "Self-Supervised": ["self-supervised", "unsupervised", "self-distillation"],
    "Zero-/Few-Shot": ["zero-shot", "few-shot"],
    "Test-Time": ["test time", "test-time"],
    "Uncertainty & Confidence": ["confidence", "uncertaint", "reliab"]
  },
  "Sensors": {
    "Event Cameras": ["event-based", "event camera", "event stereo", "event-frame", "eventhub"],
    "LiDAR": ["lidar"],
    "Time-of-Flight": ["time-of-flight", "tof"],
    "RGB-D": ["rgb-d", "rgbd"],
    "Multispectral": ["multispectral"],
    "Active Stereo": ["active stereo", "virtual pattern", "pattern projector"],
    "Video": ["video"]
  },
  "Efficiency": {
    "Real-Time": ["real-time", "real time"],
    "Embedded / Low-Power": ["embedded", "low-power", "low power", "energy", "fpga", "microcontroller", "cpu", "power budget", "edge"],
    "Lightweight / NAS": ["lightweight", "efficient", "architecture search", "compact"]
  },
  "Applications": {
    "Autonomous Driving": ["driving", "vehicle", "bev", "bird's eye", "dashcam", "traffic", "maneuver", "accident", "in-vehicle", "automotive", "urban"],
    "Robotics": ["robot", "grasp", "manipulat", "navigation"],
    "Industrial Inspection": ["industrial", "anomal", "defect", "inspection", "semiconductor"],
    "Human-Object Interaction": ["human-object"]
  }
};

/* Text shown at the top of the Research page */
window.OVERVIEW = {
  title: "Research overview",
  paragraphs: [
    "The Computer Vision Laboratory studies how machines can <strong>recover, represent and understand the three-dimensional structure of the world</strong> from visual data. Our work spans the whole perception pipeline: estimating depth and motion from images and heterogeneous sensors, and how far those estimates can be trusted (confidence and uncertainty), reconstructing and representing scenes, localizing cameras and building maps, and understanding what is in them.",
    "The group brings together complementary lines of work. <strong>Matteo Poggi, Stefano Mattoccia and Fabio Tosi</strong> lead our research on depth, stereo and optical flow, event cameras and other non-conventional sensors, SLAM and efficient, real-time perception. <strong>Luigi Di Stefano, Samuele Salti and Giuseppe Lisanti</strong> lead the work on <strong>learning on 3D representations</strong> and on <strong>understanding</strong>: neural fields as a new data modality (inr2vec, nf2vec, LLaNA), 3D datasets and benchmarks for novel view synthesis and relighting, domain adaptation and self-supervised learning on point clouds, 2D and 3D anomaly detection for industrial inspection, visual perception for driving and intelligent transportation, and the analysis of generated images.",
    "Two ideas run through everything we do. The first is <strong>what we perceive</strong>: depth and stereo geometry, 3D reconstruction and neural fields, SLAM, semantic scene understanding and anomalies. The second is <strong>how we make it work</strong>: models that are efficient and real-time, robust and adaptive to new domains and sensors, multimodal, and increasingly built on foundation, vision-language and generative models.",
    "Our roots are in image and video analysis and in 3D shape description: fast template matching, change detection and tracking for video surveillance, and 3D local features such as the SHOT descriptor and 3D keypoint detectors. Over the years our research has moved from geometric perception, depth and stereo, towards learned 3D representations, neural rendering and generalizable scene understanding, while keeping a strong focus on perception that works in the real world."
  ]
};

window.STORY = [
  { step: "Perceive",    text: "Sense the 3D world with cameras, stereo rigs, event cameras, LiDAR and time-of-flight.", pillar: "Stereo & Multi-Sensor" },
  { step: "Estimate",    text: "Infer depth, disparity, motion and their confidence from visual data.",                  pillar: "Depth Perception" },
  { step: "Reconstruct", text: "Build and represent 3D scenes with neural fields, Gaussian Splatting and SLAM.",         pillar: "3D Reconstruction & NVS" },
  { step: "Understand",  text: "Add semantics, language and scene-level reasoning on top of the geometry.",              pillar: "Scene Understanding" },
  { step: "Adapt",       text: "Make models robust across domains, sensors and operating conditions.",                  pillar: "Robust & Generalizable" }
];
