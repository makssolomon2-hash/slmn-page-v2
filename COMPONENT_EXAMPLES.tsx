/**
 * Example: Using ParticleText and AnimatedBackground
 * 
 * These examples show different ways to use the reusable components
 * in your Next.js projects.
 */

// ============================================================
// EXAMPLE 1: Simple Hero Page
// ============================================================

import ParticleText from "@/components/ui/particle-text";
import AnimatedBackground from "@/components/ui/animated-background";

export default function HeroPage() {
  return (
    <>
      <AnimatedBackground introAnimation={true} />

      <main className="relative z-10">
        <section className="flex flex-col items-center justify-center min-h-screen px-5">
          <div className="w-full max-w-3xl">
            {/* Particle text header */}
            <div className="h-48 mb-12 flex items-center justify-center">
              <ParticleText text="HELLO WORLD" animate={true} />
            </div>

            {/* Regular content */}
            <h2 className="text-4xl font-bold text-center mb-4">
              Welcome to My Site
            </h2>
            <p className="text-center text-gray-300 max-w-2xl mx-auto">
              This page uses particle text animations and an animated background.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

// ============================================================
// EXAMPLE 2: Multiple Section Backgrounds
// ============================================================

function SectionWithTheme({
  title,
  bgColor,
  glowColor,
  children,
}: {
  title: string;
  bgColor: string;
  glowColor: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <AnimatedBackground
        bgColor={bgColor}
        glowColor={glowColor}
        showParticles={false}
      />
      <div className="relative z-10 py-20 px-5">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function MultiSectionPage() {
  return (
    <div>
      <SectionWithTheme
        title="Dark Cyberpunk"
        bgColor="#0a0a0a"
        glowColor="rgba(0, 255, 255, 0.15)"
      >
        <p>This section has a cyberpunk theme</p>
      </SectionWithTheme>

      <SectionWithTheme
        title="Purple Vaporwave"
        bgColor="#1a0033"
        glowColor="rgba(255, 0, 127, 0.2)"
      >
        <p>This section has a vaporwave theme</p>
      </SectionWithTheme>

      <SectionWithTheme
        title="Warm Sunset"
        bgColor="#0d0000"
        glowColor="rgba(255, 127, 0, 0.2)"
      >
        <p>This section has a sunset theme</p>
      </SectionWithTheme>
    </div>
  );
}

// ============================================================
// EXAMPLE 3: Portfolio with Particle Text
// ============================================================

interface Project {
  id: string;
  title: string;
  color: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "PROJECT A",
    color: "#00E5FF",
    description: "A cyberpunk-themed web experience",
  },
  {
    id: "2",
    title: "PROJECT B",
    color: "#FF006E",
    description: "Creative motion design",
  },
  {
    id: "3",
    title: "PROJECT C",
    color: "#FFD60A",
    description: "Interactive digital installation",
  },
];

export function PortfolioGrid() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-5 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col">
            {/* Particle text for project name */}
            <div className="h-32 mb-6 border border-gray-700 rounded-lg overflow-hidden">
              <ParticleText
                text={project.title}
                animate={false}
                brightColor={project.color}
                paleColor={project.color + "88"}
                className="w-full h-full"
              />
            </div>

            {/* Project info */}
            <div className="flex-1">
              <p className="text-gray-400">{project.description}</p>
              <button className="mt-4 px-4 py-2 bg-cyan-600 rounded hover:bg-cyan-500">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// EXAMPLE 4: Landing Page with Custom Styling
// ============================================================

export function LandingPage() {
  return (
    <>
      {/* Full background effect */}
      <AnimatedBackground
        introAnimation={true}
        bgColor="#050607"
        glowColor="rgba(0, 200, 232, 0.2)"
      />

      <main className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-5">
          <div className="text-center max-w-4xl">
            <div className="h-64 mb-16">
              <ParticleText
                text="DIGITAL STUDIO"
                animate={true}
                brightColor="#00c8e8"
                paleColor="#dcfaff"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Creative Technology
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              We build immersive digital experiences with cutting-edge animation
              and interaction design.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold">
                Start Project
              </button>
              <button className="px-8 py-3 border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-black rounded-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {["Fast", "Beautiful", "Accessible"].map((feature, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{feature}</h3>
                  <p className="text-gray-400">
                    High-performance animations and interactions that work
                    across all devices.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ============================================================
// EXAMPLE 5: Dynamic Particle Text Colors
// ============================================================

export function DynamicColorText() {
  const colorSchemes = [
    {
      name: "Cyan",
      bright: "#00E5FF",
      pale: "#B0F0F7",
    },
    {
      name: "Magenta",
      bright: "#FF006E",
      pale: "#FFC8DD",
    },
    {
      name: "Yellow",
      bright: "#FFD60A",
      pale: "#FFE066",
    },
    {
      name: "Green",
      bright: "#00FF88",
      pale: "#88FFDD",
    },
  ];

  return (
    <div className="space-y-12 py-20 px-5">
      {colorSchemes.map((scheme) => (
        <div key={scheme.name}>
          <p className="text-sm text-gray-400 mb-4">{scheme.name}</p>
          <div className="h-32 border border-gray-700 rounded">
            <ParticleText
              text={scheme.name}
              animate={false}
              brightColor={scheme.bright}
              paleColor={scheme.pale}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// EXAMPLE 6: Layout Component (Reusable)
// ============================================================

interface PageLayoutProps {
  children: React.ReactNode;
  showBackground?: boolean;
  animateBackground?: boolean;
}

export function PageLayout({
  children,
  showBackground = true,
  animateBackground = false,
}: PageLayoutProps) {
  return (
    <>
      {showBackground && (
        <AnimatedBackground introAnimation={animateBackground} />
      )}
      <div className="relative z-10">{children}</div>
    </>
  );
}

// Usage:
export function PageUsingLayout() {
  return (
    <PageLayout showBackground={true} animateBackground={true}>
      <main className="min-h-screen flex items-center justify-center">
        <h1>Welcome</h1>
      </main>
    </PageLayout>
  );
}

// ============================================================
// EXAMPLE 7: With Tailwind Responsive
// ============================================================

export function ResponsivePage() {
  return (
    <>
      <AnimatedBackground introAnimation={true} />

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-5 md:px-10">
        <div className="w-full max-w-2xl">
          {/* Responsive container - height changes based on breakpoint */}
          <div className="h-32 sm:h-40 md:h-64 lg:h-80 mb-8 border border-gray-700 rounded">
            <ParticleText text="RESPONSIVE" animate={true} />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            Mobile Friendly
          </h1>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-400">
            This layout works great on all screen sizes
          </p>
        </div>
      </section>
    </>
  );
}

// ============================================================
// EXAMPLE 8: Lazy Loading with Suspense
// ============================================================

import { lazy, Suspense } from "react";

const LazyParticleText = lazy(() =>
  import("@/components/ui/particle-text").then((mod) => ({
    default: mod.default,
  }))
);

export function LazyLoadingPage() {
  return (
    <section>
      <Suspense fallback={<div className="h-32 bg-gray-800 rounded" />}>
        <LazyParticleText text="LAZY LOADED" animate={true} />
      </Suspense>
    </section>
  );
}
