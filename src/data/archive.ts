export type ArchiveChannel = "code" | "sound" | "studio" | "learn" | "video" | "notes";

export type ArchivePost = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  repository: string;
  cover: "orbit" | "grid" | "glass" | "moon" | "signal" | "index";
  screenshot?: { src: string; alt: string };
  channels: ArchiveChannel[];
};

export const archiveChannels: { id: ArchiveChannel; label: string; emptyHint: string }[] = [
  { id: "code", label: "Code", emptyHint: "Frontend projects and interface experiments will appear here." },
  { id: "sound", label: "Sound", emptyHint: "Mixes, releases, and set notes will appear here." },
  { id: "studio", label: "Studio", emptyHint: "Gear notes and studio experiments will appear here." },
  { id: "learn", label: "Learn", emptyHint: "Tutorials and learning notes will appear here." },
  { id: "video", label: "Video", emptyHint: "Video posts will appear here." },
  { id: "notes", label: "Notes", emptyHint: "Writing and process notes will appear here." },
];

export const archivePosts: ArchivePost[] = [
  {
    slug: "dj-digger-web-ui",
    title: "DJ-DIGGER WEB-UI",
    category: "DJ TOOL / WEB INTERFACE",
    description:
      "A responsive music-discovery interface for DJs, with smooth transitions and animated interactions.",
    stack: ["React", "GSAP", "Tailwind"],
    repository: "dj-digger-ui",
    cover: "signal",
    screenshot: { src: "/projects/dj-digger-ui.jpeg", alt: "DJ-Digger interface showing playlists, tracks, and a waveform" },
    channels: ["code", "sound"],
  },
  {
    slug: "moon-phase-calendar",
    title: "3D MOON PHASE CALENDAR",
    category: "INTERACTIVE / THREE.JS",
    description: "An interactive, real-time 3D moon phase calendar.",
    stack: ["React", "Three.js", "GSAP"],
    repository: "moon-3d-calendar",
    cover: "moon",
    channels: ["code"],
  },
  {
    slug: "cloudy",
    title: "CLOUDY",
    category: "MESSENGER / WEB APP",
    description:
      "A web messenger with real-time chat, user profiles, and dark and light themes.",
    stack: ["React", "GSAP", "Tailwind"],
    repository: "cloudy",
    cover: "glass",
    screenshot: { src: "/projects/cloudy.png", alt: "Cloudy messenger interface in dark mode" },
    channels: ["code"],
  },
  {
    slug: "macbook-landing",
    title: "MACBOOK LANDING",
    category: "PRODUCT / MOTION",
    description: "An animated product landing page inspired by Apple.",
    stack: ["React", "Vite", "GSAP", "Three.js"],
    repository: "macbook-landing",
    cover: "orbit",
    screenshot: { src: "/projects/macbook-landing.png", alt: "MacBook landing page with an illuminated product render" },
    channels: ["code"],
  },
  {
    slug: "mobbin-remake",
    title: "MOBBIN REMAKE",
    category: "INTERFACE / LAYOUT",
    description: "A UI remake focused on modern layout patterns.",
    stack: ["Next.js", "React", "Tailwind"],
    repository: "mobbin-remake",
    cover: "grid",
    screenshot: { src: "/projects/mobbin-remake.png", alt: "Mobbin-inspired design discovery landing page" },
    channels: ["code"],
  },
  {
    slug: "frontend-starter",
    title: "FRONTEND STARTER",
    category: "DEVELOPER TOOLS / STARTER",
    description: "A frontend starter with React, Tailwind CSS, GSAP, and a Three.js preview.",
    stack: ["React", "Vite", "Tailwind", "GSAP", "Three.js"],
    repository: "front-end-starters",
    cover: "orbit",
    screenshot: { src: "/projects/frontend-starter.png", alt: "Frontend starter page showing its tool stack and a blue 3D sphere" },
    channels: ["code"],
  },
  {
    slug: "portfolio-website",
    title: "PORTFOLIO WEBSITE",
    category: "PRODUCT / LANDING PAGE",
    description: "An animated product landing page inspired by Apple.",
    stack: ["React", "Vite", "Tailwind", "GSAP", "Three.js"],
    repository: "nextjs-ts-portfolio",
    cover: "index",
    screenshot: { src: "/projects/portfolio-website.png", alt: "Portfolio website showing a laptop with an Earth-themed design and an about section" },
    channels: ["code"],
  },
];
