import { archivePosts } from "@/data/archive";

export const navigationItems = [
  { label: "Work", href: "#development" },
  { label: "Music", href: "#music" },
  { label: "Studio", href: "#studio" },
  { label: "Learn", href: "#learn" },
  { label: "Video", href: "#video" },
  { label: "About", href: "#about" },
] as const;

export const socialLinks = [
  {
    label: "Discord",
    href: "https://discord.com",
    kind: "discord",
  },
  {
    label: "GitHub",
    href: "https://github.com/makssolomon2-hash",
    kind: "github",
  },
] as const;

const featuredProjectSlugs = [
  "portfolio-website",
  "macbook-landing",
  "mobbin-remake",
  "dj-digger-web-ui",
];

export const featuredProjects = featuredProjectSlugs.flatMap((slug, index) => {
  const project = archivePosts.find((item) => item.slug === slug);
  return project ? [{ ...project, number: String(index + 1).padStart(2, "0") }] : [];
});

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "GSAP",
  "Three.js",
  "Node.js",
  "Figma",
] as const;