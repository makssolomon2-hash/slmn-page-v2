"use client";

import { useEffect, useRef } from "react";
import SignalParticleField from "@/components/ui/signal-particle-field";

const progressBetween = (value: number, start: number, end: number) =>
  Math.max(0, Math.min(1, (value - start) / Math.max(end - start, 1)));

export default function HeroWorld({ intro = false }: { intro?: boolean }) {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;
    const hero = document.querySelector<HTMLElement>("#main-hero");
    const projects = document.querySelector<HTMLElement>("#development");
    const shade = background.querySelector<HTMLElement>(".hero-world-shade");

    let pointerFrame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    const moveGlow = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        background.style.setProperty("--pointer-x", `${pointerX}px`);
        background.style.setProperty("--pointer-y", `${pointerY}px`);
      });
    };
    const updateShade = () => {
      if (!(hero && projects && shade)) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const heroStart = hero.offsetTop - viewportHeight;
      const heroEnd = hero.offsetTop + hero.offsetHeight;
      const projectsStart = projects.offsetTop - viewportHeight;
      const projectsEnd = projects.offsetTop;
      const pageEnd = Math.max(
        projectsEnd,
        document.documentElement.scrollHeight - viewportHeight,
      );

      let opacity = 0.14 * progressBetween(scrollY, heroStart, heroEnd);
      if (scrollY >= projectsStart) {
        opacity =
          0.14 + 0.14 * progressBetween(scrollY, projectsStart, projectsEnd);
      }
      if (scrollY >= projectsEnd) {
        opacity =
          0.28 + 0.14 * progressBetween(scrollY, projectsEnd, pageEnd);
      }
      shade.style.opacity = opacity.toFixed(3);
    };

    window.addEventListener("pointermove", moveGlow, { passive: true });
    window.addEventListener("scroll", updateShade, { passive: true });
    window.addEventListener("resize", updateShade);
    updateShade();
    return () => {
      cancelAnimationFrame(pointerFrame);
      window.removeEventListener("pointermove", moveGlow);
      window.removeEventListener("scroll", updateShade);
      window.removeEventListener("resize", updateShade);
    };
  }, []);

  return (
    <div className="hero-world-background" ref={backgroundRef} aria-hidden="true">
      <div className="hero-world-glow" />
      <SignalParticleField intro={intro} />
      <div className="hero-world-shade" />
    </div>
  );
}
