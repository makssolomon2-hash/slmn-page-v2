import { archivePosts } from "@/data/archive";

export const navigationItems = [
  { label: "Work", href: "/development" },
  { label: "Music", href: "/music" },
  { label: "Studio", href: "/studio" },
  { label: "Learn", href: "/learn" },
  { label: "Video", href: "/video" },
  { label: "About", href: "/about" },
] as const;

export const soundcloudProfiles = [
  { label: "SLMN on SoundCloud", href: "https://soundcloud.com/slmn-895944364", shortLabel: "SLMN profile" },
  { label: "Second SoundCloud profile", href: "https://soundcloud.com/user-104929278-437155238", shortLabel: "Second profile" },
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
  {
    label: soundcloudProfiles[0].label,
    href: soundcloudProfiles[0].href,
    kind: "soundcloud",
  },
] as const;

const featuredProjectSlugs = [
  "dj-digger-web-ui",
  "cloudy",
  "macbook-landing",
  "mobbin-remake",
  "frontend-starter",
  "portfolio-website",
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