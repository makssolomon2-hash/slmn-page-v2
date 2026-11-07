export type PlatformPage = {
  number: string;
  label: string;
  title: string;
  highlight: string;
  description: string;
  sections: { title: string; description: string }[];
  action: { label: string; href: string };
};

export const platformPages = {
  development: {
    number: "01",
    label: "DEVELOPMENT",
    title: "Building for",
    highlight: "the screen.",
    description: "Selected work, experiments, and the tools behind thoughtful digital experiences.",
    sections: [
      { title: "Selected projects", description: "A collection of personal projects and interface experiments." },
      { title: "Skills & stack", description: "React, Next.js, TypeScript, animation, and the tools I use to build." },
      { title: "Process & case studies", description: "Space for future notes on decisions, iterations, and lessons learned." },
    ],
    action: { label: "See work on the homepage", href: "/#development" },
  },
  music: {
    number: "02",
    label: "MUSIC",
    title: "A different",
    highlight: "frequency.",
    description: "Electronic music I make, DJ sets I play, and ideas that happen away from the screen.",
    sections: [
      { title: "Music", description: "Explore my music on the SoundCloud profiles linked above." },
      { title: "Mixes & sets", description: "Listen to my DJ sets on SoundCloud, without autoplay on this site." },
      { title: "Sound design", description: "Future notes and experiments from the music-making process." },
    ],
    action: { label: "Explore music on the homepage", href: "/#music" },
  },
  studio: {
    number: "03",
    label: "STUDIO",
    title: "Tools for",
    highlight: "making.",
    description: "An evolving space for the instruments, software, and workflows behind the work.",
    sections: [
      { title: "Synths & sound", description: "A future look at synthesizers, sound design, and the tools used to explore them." },
      { title: "Studio setup", description: "A place to document the workspace and gear as the setup evolves." },
      { title: "Creative workflow", description: "Notes on moving from an idea to something you can hear or interact with." },
    ],
    action: { label: "See tools on the homepage", href: "/#studio" },
  },
  learn: {
    number: "04",
    label: "LEARN",
    title: "Ideas worth",
    highlight: "sharing.",
    description: "A future library of practical notes on development, music production, and creative software.",
    sections: [
      { title: "Frontend craft", description: "Future articles about React, animation, accessibility, and interface details." },
      { title: "Production & sound", description: "A place for future Ableton, Serum, and sound design tutorials." },
      { title: "Work in progress", description: "Notes from experiments, mistakes, and things learned along the way." },
    ],
    action: { label: "See the learning preview", href: "/#learn" },
  },
  video: {
    number: "05",
    label: "VIDEO",
    title: "Ideas in",
    highlight: "motion.",
    description: "A frontend preview for a future collection of videos about building, making, and experimenting.",
    sections: [
      { title: "Development", description: "Future walkthroughs and experiments in frontend development." },
      { title: "Music & studio", description: "Future production sessions, sound design, and studio videos." },
      { title: "Behind the work", description: "A place for process videos and works in progress." },
    ],
    action: { label: "See the video preview", href: "/#video" },
  },
  about: {
    number: "06",
    label: "ABOUT",
    title: "Between code",
    highlight: "and sound.",
    description: "I'm Maks, a self-taught frontend developer in Poznań with a curiosity for electronic music and thoughtful digital experiences.",
    sections: [
      { title: "Development", description: "Building responsive interfaces with React, Next.js, and a focus on motion and usability." },
      { title: "Music", description: "Exploring electronic music production, sound design, and DJ culture." },
      { title: "What's next", description: "Open to junior and mid-level frontend opportunities and thoughtful collaborations." },
    ],
    action: { label: "Get in touch", href: "mailto:maks.solomon2@gmail.com" },
  },
} satisfies Record<string, PlatformPage>;
