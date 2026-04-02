import {
  Bot,
  Box,
  Brain,
  Car,
  Cloud,
  Crosshair,
  Eye,
  Factory,
  FileText,
  Gamepad2,
  Glasses,
  HardHat,
  HeartPulse,
  Layers,
  MapIcon,
  Monitor,
  Network,
  Paintbrush,
  Plane,
  Radio,
  ScanSearch,
  Search,
  Shield,
  ShieldCheck,
  ShieldEllipsis,
  Sofa,
  Train,
  Users,
  Waves,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";

export interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
  tag: string;
  image: string;
}

export interface Product {
  icon: ReactNode;
  name: string;
  desc: string;
  image: string;
}

export interface Industry {
  icon: ReactNode;
  name: string;
  desc: string;
  image: string;
  bannerImage?: string;
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Custom VR Headset icon (person wearing Meta Quest style)
function VRHeadsetIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="VR Headset"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Head */}
      <circle cx="12" cy="7" r="3" />
      {/* VR Headset on face */}
      <rect x="5" y="11" width="14" height="7" rx="3" />
      {/* Lens left */}
      <circle cx="9" cy="14.5" r="1.5" />
      {/* Lens right */}
      <circle cx="15" cy="14.5" r="1.5" />
      {/* Strap */}
      <path d="M5 14 Q2 14 2 11" />
      <path d="M19 14 Q22 14 22 11" />
    </svg>
  );
}

export const SERVICES: Service[] = [
  {
    icon: <VRHeadsetIcon className="w-7 h-7" />,
    title: "Virtual Reality (VR)",
    desc: "Immersive VR solutions for operational and maintenance training, interactive simulations, product and concept visualization, design studies, and marketing applications optimized for performance across a wide range of platforms and devices",
    tag: "Training · Education · Defence",
    image: "/assets/generated/service-vr.dim_800x500.jpg",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Augmented Reality (AR)",
    desc: "Augmented Reality (AR) solutions for maintenance training, education, technical assistance, product trials, interactive walkthroughs, and sales and marketing applications.",
    tag: "Manufacturing · Healthcare · Retail",
    image: "/assets/generated/service-ar.dim_800x500.jpg",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Mixed Reality (MR)",
    desc: "Blended MR experiences that merge physical and digital worlds for advanced training, collaboration, and design review.",
    tag: "Aerospace · Engineering · Design",
    image: "/assets/generated/service-mr.dim_800x500.jpg",
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: "Visual Simulation (VS)",
    desc: "Visual Simulation services encompassing optimized 3D model and terrain development, scenario creation, high performance visual simulation application development, and desktop as well as hardware-in-the-loop simulator development.",
    tag: "Aerospace · Defence · Automotive",
    image: "/assets/generated/service-vs.dim_800x500.jpg",
  },
  {
    icon: <Network className="w-7 h-7" />,
    title: "Digital Twins (DT)",
    desc: "Real-time virtual replicas of physical assets, systems, and processes — enabling predictive maintenance, performance optimization, and remote monitoring.",
    tag: "Manufacturing · Aerospace · Infrastructure",
    image: "/assets/generated/service-digitaltwin.dim_800x500.jpg",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Artificial Intelligence (AI)",
    desc: "AI-powered solutions including intelligent bots for assistance, machine learning–based object recognition, predictive analytics, intelligent automation, and data-driven decision-making across industries.",
    tag: "Machine Learning · Automation · Analytics",
    image: "/assets/generated/service-ai.dim_800x500.jpg",
  },
];

export const PRODUCTS: Product[] = [
  {
    icon: <MapIcon className="w-5 h-5" />,
    name: "TRIAN3DBUILDER",
    desc: "3D Terrain Development software",
    image: "/assets/generated/product-trian3dbuilder.dim_600x380.jpg",
  },
  {
    icon: <Box className="w-5 h-5" />,
    name: "REMO3D",
    desc: "3D model development software",
    image: "/assets/generated/product-remo3d.dim_600x380.jpg",
  },
  {
    icon: <Crosshair className="w-5 h-5" />,
    name: "SSG",
    desc: "War Gaming software",
    image: "/assets/generated/product-simax.dim_600x380.jpg",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    name: "SILVERLINING",
    desc: "Cloud and Sky rendering SDK",
    image: "/assets/generated/product-silverlining.dim_600x380.jpg",
  },
  {
    icon: <Waves className="w-5 h-5" />,
    name: "TRITON",
    desc: "Ocean simulation SDK",
    image: "/assets/generated/product-triton.dim_600x380.jpg",
  },
  {
    icon: <Search className="w-5 h-5" />,
    name: "VIDERE",
    desc: "Virtual Design Review tool",
    image: "/assets/generated/product-videre.dim_600x380.jpg",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    name: "VRSAFE",
    desc: "VR based Fire Safety Training tool",
    image: "/assets/generated/product-vrsafe.dim_600x380.jpg",
  },
  {
    icon: <Radio className="w-5 h-5" />,
    name: "AUGMENTOR",
    desc: "Remote Assistance Tool",
    image: "/assets/generated/product-augmentor.dim_600x380.jpg",
  },
  {
    icon: <Sofa className="w-5 h-5" />,
    name: "FARNISH",
    desc: "AR based Furniture Trial and Sales tool",
    image: "/assets/generated/product-farnish.dim_600x380.jpg",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    name: "PRODOC",
    desc: "Interactive product document creator",
    image: "/assets/generated/product-prodoc.dim_600x380.jpg",
  },
  {
    icon: <ScanSearch className="w-5 h-5" />,
    name: "LAYAR",
    desc: "ML based AR tool",
    image: "/assets/generated/product-layar.dim_600x380.jpg",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    name: "INTBOT",
    desc: "AI based Chatbot to assist users",
    image: "/assets/generated/product-intbot.dim_600x380.jpg",
  },
  {
    icon: <Paintbrush className="w-5 h-5" />,
    name: "PAINTX",
    desc: "VR based training tool for painters",
    image: "/assets/generated/product-paintx-car.dim_600x380.jpg",
  },
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    name: "TORQUE",
    desc: "Multiplayer car stunt racing game",
    image: "/assets/generated/product-torque.dim_600x380.jpg",
  },
  {
    icon: <Users className="w-5 h-5" />,
    name: "COLLAB",
    desc: "Solution for collaborative virtual reality",
    image: "/assets/generated/product-collab.dim_600x380.jpg",
  },
];

export const INDUSTRIES: Industry[] = [
  {
    icon: <Plane className="w-7 h-7" />,
    name: "Aerospace",
    desc: "Flight simulation, mission training, and avionics visualization",
    image: "/assets/generated/industry-aerospace.dim_600x400.jpg",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    name: "Defense",
    desc: "War gaming, tactical training, and defense simulation systems",
    image: "/assets/generated/industry-defense.dim_600x400.jpg",
  },
  {
    icon: <ShieldEllipsis className="w-7 h-7" />,
    name: "Homeland Security",
    desc: "Surveillance simulation, border security training, and crisis response systems",
    image: "/assets/generated/industry-homeland-security.dim_600x400.jpg",
  },
  {
    icon: <Car className="w-7 h-7" />,
    name: "Automotive",
    desc: "Design review, assembly training, and driver simulation",
    image: "/assets/generated/industry-automotive.dim_600x400.jpg",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    name: "Engineering",
    desc: "CAD visualization, maintenance training, and process simulation",
    image: "/assets/generated/industry-engineering.dim_600x400.jpg",
  },
  {
    icon: <HardHat className="w-7 h-7" />,
    name: "Mining",
    desc: "Safety training, underground navigation, and equipment simulation",
    image: "/assets/generated/industry-mining.dim_600x400.jpg",
  },
  {
    icon: <Train className="w-7 h-7" />,
    name: "Transport",
    desc: "Driver training, route simulation, and operational systems",
    image: "/assets/generated/industry-transport.dim_600x400.jpg",
  },
  {
    icon: <HeartPulse className="w-7 h-7" />,
    name: "Healthcare",
    desc: "Medical procedure training and patient care visualization",
    image: "/assets/generated/industry-healthcare-mri.dim_600x400.jpg",
    bannerImage:
      "/assets/generated/industry-healthcare-pharma.dim_1200x400.jpg",
  },
  {
    icon: <Factory className="w-7 h-7" />,
    name: "Manufacturing",
    desc: "AR-guided assembly, quality inspection simulation, and smart factory training",
    image: "/assets/generated/industry-manufacturing.dim_600x400.jpg",
  },
  {
    icon: <Gamepad2 className="w-7 h-7" />,
    name: "Gaming",
    desc: "Immersive game development, VR/AR gaming experiences, and multiplayer simulation",
    image: "/assets/generated/industry-gaming.dim_600x400.jpg",
    bannerImage: "/assets/generated/industry-gaming-racing.dim_1200x400.jpg",
  },
];

// Extended details for detail pages
export const SERVICE_DETAILS: Record<
  string,
  { features: string[]; industries: string[] }
> = {
  "virtual-reality-vr": {
    features: [
      "Immersive head-mounted display (HMD) experiences for training and simulation",
      "Multi-user collaborative VR environments for team training scenarios",
      "Cross-platform support: Oculus, HTC Vive, Windows Mixed Reality, and custom hardware",
      "Real-time physics and interaction systems for realistic training fidelity",
      "VR content authoring tools for rapid scenario development",
      "Performance analytics and trainee assessment dashboards",
    ],
    industries: ["Defence", "Aerospace", "Healthcare", "Mining", "Automotive"],
  },
  "augmented-reality-ar": {
    features: [
      "Marker-based and markerless AR overlays for maintenance and assembly guidance",
      "Mobile AR apps for iOS and Android platforms",
      "AR-powered remote assistance and expert guidance systems",
      "Furniture and product visualization for retail and e-commerce",
      "AR-based interactive instruction manuals and documentation",
      "Integration with existing enterprise systems and workflows",
    ],
    industries: [
      "Manufacturing",
      "Healthcare",
      "Retail",
      "Engineering",
      "Transport",
    ],
  },
  "mixed-reality-mr": {
    features: [
      "Microsoft HoloLens and Magic Leap application development",
      "Spatial mapping and holographic content for industrial environments",
      "Collaborative design review with remote stakeholder participation",
      "Hands-free MR workflows for field technicians and engineers",
      "Integration with CAD/CAM tools for real-time design visualization",
      "Gesture and voice-controlled interactive interfaces",
    ],
    industries: ["Aerospace", "Engineering", "Design", "Automotive", "Defence"],
  },
  "visual-simulation-vs": {
    features: [
      "High-fidelity 3D terrain and environment development",
      "Real-time rendering using OpenGL, Vulkan, and DirectX",
      "Integration with simulation frameworks like CIGI, HLA, and DIS",
      "Custom scenario editors for training system developers",
      "Sensor simulation: EO/IR, radar, sonar, and SAR imagery",
      "Database management tools for large-scale terrain datasets",
    ],
    industries: ["Aerospace", "Defence", "Automotive", "Mining", "Transport"],
  },
  "digital-twins-dt": {
    features: [
      "Real-time synchronization between physical assets and their virtual counterparts",
      "Predictive maintenance using sensor data and ML-based anomaly detection",
      "Remote monitoring dashboards with 3D interactive visualization",
      "Integration with IoT sensors, SCADA systems, and industrial protocols",
      "Performance simulation for what-if scenario analysis and optimization",
      "Digital twin lifecycle management from design through decommissioning",
      "Integration with VR/AR for immersive digital twin interaction",
    ],
    industries: [
      "Manufacturing",
      "Aerospace",
      "Infrastructure",
      "Energy",
      "Defence",
    ],
  },
  // keep old key for backward compat
  "digital-twins": {
    features: [
      "Real-time synchronization between physical assets and their virtual counterparts",
      "Predictive maintenance using sensor data and ML-based anomaly detection",
      "Remote monitoring dashboards with 3D interactive visualization",
      "Integration with IoT sensors, SCADA systems, and industrial protocols",
      "Performance simulation for what-if scenario analysis and optimization",
      "Digital twin lifecycle management from design through decommissioning",
      "Integration with VR/AR for immersive digital twin interaction",
    ],
    industries: [
      "Manufacturing",
      "Aerospace",
      "Infrastructure",
      "Energy",
      "Defence",
    ],
  },
  "artificial-intelligence-ai": {
    features: [
      "Machine Learning model development for object recognition and classification",
      "Computer Vision integration for AR/VR-based quality inspection and maintenance",
      "Predictive analytics for equipment failure detection and preventive maintenance",
      "Natural Language Processing for intelligent chatbot and documentation systems",
      "Deep learning pipelines for training data generation from simulation environments",
      "AI-powered performance analytics for training system effectiveness measurement",
      "Edge AI deployment for low-latency inference on industrial hardware",
    ],
    industries: [
      "Manufacturing",
      "Aerospace",
      "Defence",
      "Healthcare",
      "Automotive",
    ],
  },
};

export const PRODUCT_DETAILS: Record<
  string,
  { features: string[]; highlights: string[] }
> = {
  trian3dbuilder: {
    features: [
      "Import and process geospatial data from multiple sources (DTED, GeoTIFF, shapefiles)",
      "Automated LOD generation for optimized real-time rendering performance",
      "Support for culture features: roads, buildings, vegetation, and water bodies",
      "Batch processing tools for large-scale terrain database creation",
      "Export to OpenFlight, FBX, and other standard 3D formats",
      "Built-in quality assurance and validation tools",
    ],
    highlights: [
      "Multi-format GIS data import",
      "OpenFlight export support",
      "Automated LOD generation",
      "Scalable batch processing",
    ],
  },
  remo3d: {
    features: [
      "Intuitive 3D modelling environment optimised for simulation databases",
      "OpenFlight native editor with full hierarchy support",
      "Texture management with automatic mipmap generation",
      "LOD management and polygon reduction tools",
      "Animation and articulation support for dynamic models",
      "Scripting interface for automated model processing pipelines",
    ],
    highlights: [
      "OpenFlight native editor",
      "LOD management tools",
      "Animation and articulation",
      "Scripting interface",
    ],
  },
  ssg: {
    features: [
      "Tactical scenario creation with real-world terrain data",
      "Multi-force wargaming support with configurable units and behaviors",
      "AI-driven opponent simulation for realistic adversarial training",
      "After-action review and debrief tools for training effectiveness",
      "Integration with command and control (C2) systems",
      "Scenario export for use in live exercises and simulations",
    ],
    highlights: [
      "Real-world terrain integration",
      "AI adversarial simulation",
      "After-action review tools",
      "C2 system integration",
    ],
  },
  silverlining: {
    features: [
      "Physically-based sky and atmospheric scattering simulation",
      "Dynamic weather system with clouds, rain, snow, and fog",
      "GPU-accelerated 3D volumetric cloud rendering",
      "Day/night cycle with accurate solar and lunar positioning",
      "API integration with OpenGL, OpenSceneGraph, and VSIGL",
      "Real-time weather data feed support",
    ],
    highlights: [
      "GPU-accelerated clouds",
      "Physically-based atmosphere",
      "Dynamic weather system",
      "Real-time weather feeds",
    ],
  },
  triton: {
    features: [
      "Real-time 3D ocean surface simulation using spectral wave models",
      "Dynamic wake and vessel interaction effects",
      "Underwater visibility simulation for naval training",
      "Integration with OpenGL and DirectX rendering pipelines",
      "Support for OpenSceneGraph, osgEarth, and custom engines",
      "Configurable sea state and wind speed parameters",
    ],
    highlights: [
      "Spectral wave models",
      "Wake and vessel effects",
      "Underwater visibility",
      "Multi-engine support",
    ],
  },
  videre: {
    features: [
      "Real-time 3D CAD model visualization and design review",
      "Multi-user collaborative review sessions with annotation tools",
      "Exploded view and assembly sequence visualization",
      "Integration with CAD formats: STEP, IGES, OBJ, FBX",
      "VR headset support for immersive design review",
      "Measurement tools and section view capabilities",
    ],
    highlights: [
      "Multi-user collaboration",
      "VR headset support",
      "CAD format integration",
      "Annotation and measurement",
    ],
  },
  vrsafe: {
    features: [
      "Immersive VR-based fire safety training scenarios",
      "Realistic fire behavior simulation with smoke and heat effects",
      "Interactive extinguisher operation and evacuation training",
      "Performance tracking and trainee assessment reporting",
      "Customizable building layouts and fire scenarios",
      "Multi-platform support: Oculus, HTC Vive, and desktop VR",
    ],
    highlights: [
      "Realistic fire simulation",
      "Performance tracking",
      "Customizable scenarios",
      "Multi-platform VR support",
    ],
  },
  augmentor: {
    features: [
      "Real-time AR-based remote assistance for field technicians",
      "Live video streaming with annotation and markup tools",
      "Step-by-step guided maintenance and repair workflows",
      "Integration with enterprise ticketing and knowledge management systems",
      "Offline capability for low-connectivity field environments",
      "Multi-device support: smartphones, tablets, and AR glasses",
    ],
    highlights: [
      "Live AR annotation",
      "Guided maintenance workflows",
      "Enterprise system integration",
      "Offline field capability",
    ],
  },
  farnish: {
    features: [
      "AR-based furniture and home décor visualization on mobile devices",
      "Real-scale 3D product placement using ARKit and ARCore",
      "Photo-realistic rendering of products in real environments",
      "Product catalogue integration with e-commerce platforms",
      "Social sharing and wishlist features",
      "Custom branding and white-label deployment options",
    ],
    highlights: [
      "ARKit and ARCore support",
      "Photo-realistic rendering",
      "E-commerce integration",
      "White-label deployment",
    ],
  },
  prodoc: {
    features: [
      "Interactive 3D product documentation with embedded animations",
      "Step-by-step assembly and disassembly instructions",
      "Hotspot-based information overlays on 3D models",
      "Export to web, mobile, and AR formats",
      "Multi-language support for global product documentation",
      "Version control and content management for documentation updates",
    ],
    highlights: [
      "3D interactive animations",
      "Hotspot overlays",
      "Multi-format export",
      "Multi-language support",
    ],
  },
  layar: {
    features: [
      "ML-based object recognition and AR overlay triggering",
      "Marker and markerless AR experiences for print and packaging",
      "Real-time product information display on physical objects",
      "Integration with CMS for dynamic content updates",
      "Analytics dashboard for AR experience tracking",
      "iOS and Android SDK for seamless app integration",
    ],
    highlights: [
      "ML object recognition",
      "Marker and markerless AR",
      "Dynamic CMS integration",
      "Cross-platform SDK",
    ],
  },
  intbot: {
    features: [
      "AI-powered chatbot for product and service assistance",
      "Natural language understanding with intent classification",
      "Integration with knowledge bases, FAQs, and CRM systems",
      "Multi-channel deployment: web, mobile, and messaging platforms",
      "Escalation workflows to human agents with context handover",
      "Analytics and conversation insights dashboard",
    ],
    highlights: [
      "NLU intent classification",
      "CRM system integration",
      "Multi-channel deployment",
      "Analytics dashboard",
    ],
  },
  paintx: {
    features: [
      "VR-based paint application training for automotive and industrial use",
      "Realistic spray gun simulation with pressure and distance feedback",
      "Coverage analysis and defect detection for quality training",
      "Multiple paint scenarios: priming, base coat, clear coat",
      "Performance metrics and trainee progress tracking",
      "Compatible with leading VR headsets and haptic gloves",
    ],
    highlights: [
      "Realistic spray simulation",
      "Coverage analysis",
      "Performance metrics",
      "Haptic glove support",
    ],
  },
  torque: {
    features: [
      "Multiplayer car stunt racing with real-time physics",
      "Customizable vehicles and stunt tracks",
      "Competitive leaderboards and tournament modes",
      "Cross-platform multiplayer support",
      "High-fidelity 3D graphics with dynamic lighting",
      "Regular content updates with new cars and tracks",
    ],
    highlights: [
      "Real-time physics engine",
      "Multiplayer support",
      "Competitive leaderboards",
      "Dynamic 3D graphics",
    ],
  },
  collab: {
    features: [
      "Synchronized multi-user VR sessions across locations",
      "Voice and gesture communication in shared virtual spaces",
      "Collaborative 3D model review and annotation",
      "Session recording and playback for asynchronous collaboration",
      "Integration with enterprise collaboration platforms",
      "Scalable architecture supporting large group sessions",
    ],
    highlights: [
      "Multi-user synchronization",
      "Voice and gesture comms",
      "Session recording",
      "Enterprise integration",
    ],
  },
};

export const INDUSTRY_SOLUTIONS: Record<
  string,
  { services: string[]; products: string[] }
> = {
  aerospace: {
    services: [
      "Virtual Reality (VR)",
      "Visual Simulation (VS)",
      "Digital Twins (DT)",
    ],
    products: ["TRIAN3DBUILDER", "SILVERLINING", "TRITON", "VIDERE"],
  },
  defense: {
    services: [
      "Virtual Reality (VR)",
      "Visual Simulation (VS)",
      "Artificial Intelligence (AI)",
    ],
    products: ["TRIAN3DBUILDER", "SSG", "SILVERLINING", "TRITON"],
  },
  "homeland-security": {
    services: [
      "Virtual Reality (VR)",
      "Visual Simulation (VS)",
      "Artificial Intelligence (AI)",
    ],
    products: ["SSG", "SILVERLINING", "VIDERE"],
  },
  automotive: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Digital Twins (DT)",
    ],
    products: ["VIDERE", "PAINTX", "PRODOC"],
  },
  engineering: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Mixed Reality (MR)",
    ],
    products: ["VIDERE", "AUGMENTOR", "PRODOC"],
  },
  mining: {
    services: [
      "Virtual Reality (VR)",
      "Visual Simulation (VS)",
      "Augmented Reality (AR)",
    ],
    products: ["TRIAN3DBUILDER", "VRSAFE"],
  },
  transport: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
    ],
    products: ["TRIAN3DBUILDER", "SILVERLINING", "PRODOC"],
  },
  healthcare: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Mixed Reality (MR)",
    ],
    products: ["VRSAFE", "PRODOC", "INTBOT"],
  },
  manufacturing: {
    services: [
      "Augmented Reality (AR)",
      "Digital Twins (DT)",
      "Artificial Intelligence (AI)",
    ],
    products: ["AUGMENTOR", "PRODOC", "LAYAR", "INTBOT"],
  },
  gaming: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Artificial Intelligence (AI)",
    ],
    products: ["TORQUE", "COLLAB"],
  },
};
