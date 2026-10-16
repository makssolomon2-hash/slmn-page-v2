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
      if (!(hero && shade)) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const heroStart = hero.offsetTop - viewportHeight;
      const heroEnd = hero.offsetTop + hero.offsetHeight;
      const progress = progressBetween(scrollY, heroStart, heroEnd);

      shade.style.opacity = (0.62 * progress).toFixed(3);
      background.style.setProperty(
        "--background-blur",
        `${(2 + 30 * progress).toFixed(1)}px`,
      );
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
