"use client";

import { useEffect, useRef } from "react";
import SignalParticleField from "./signal-particle-field";

export interface AnimatedBackgroundProps {
  /** Enable particle field animation */
  showParticles?: boolean;
  /** Animate particles on initial load */
  introAnimation?: boolean;
  /** Background color (CSS color value) */
  bgColor?: string;
  /** Enable pointer tracking for glow effect */
  enablePointerGlow?: boolean;
  /** Glow color (CSS color value) */
  glowColor?: string;
  /** Shade color overlay (CSS color value) */
  shadeColor?: string;
  /** Container class name */
  className?: string;
  /** Scroll target element for shade effect (defaults to #main-hero) */
  scrollTarget?: string;
}

/**
 * AnimatedBackground - A reusable animated background with particles, glow, and gradients
 *
 * Features:
 * - Particle field animation
 * - Pointer-tracking glow effect
 * - Scroll-triggered shade overlay
 * - Animated gradient layers
 * - Fully responsive and respects prefers-reduced-motion
 *
 * @example
 * ```tsx
 * <AnimatedBackground introAnimation={true} />
 * ```
 *
 * @example
 * ```tsx
 * <AnimatedBackground
 *   glowColor="rgba(255, 0, 110, 0.2)"
 *   shadeColor="rgba(255, 0, 0, 0.4)"
 *   scrollTarget="#content-section"
 * />
 * ```
 */
export default function AnimatedBackground({
  showParticles = true,
  introAnimation = false,
  bgColor = "var(--page, #050607)",
  enablePointerGlow = true,
  glowColor = "rgba(0, 179, 217, 0.2)",
  shadeColor = "rgb(2, 7, 10)",
  className = "",
  scrollTarget = "#main-hero",
}: AnimatedBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    const hero = document.querySelector<HTMLElement>(scrollTarget);
    const shade = background.querySelector<HTMLElement>(
      ".animated-background-shade",
    );

    let pointerFrame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const progressBetween = (value: number, start: number, end: number) =>
      Math.max(0, Math.min(1, (value - start) / Math.max(end - start, 1)));

    const moveGlow = (event: PointerEvent) => {
      if (!enablePointerGlow) return;

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
      background.style.setProperty(
        "--glyph-blur",
        `${(10 * progress).toFixed(1)}px`,
      );
    };

    if (enablePointerGlow) {
      window.addEventListener("pointermove", moveGlow, { passive: true });
    }
    window.addEventListener("scroll", updateShade, { passive: true });
    window.addEventListener("resize", updateShade);
    updateShade();

    return () => {
      cancelAnimationFrame(pointerFrame);
      if (enablePointerGlow) {
        window.removeEventListener("pointermove", moveGlow);
      }
      window.removeEventListener("scroll", updateShade);
      window.removeEventListener("resize", updateShade);
    };
  }, [enablePointerGlow, scrollTarget]);

  return (
    <div
      className={`animated-background ${className}`}
      ref={backgroundRef}
      aria-hidden="true"
      style={
        {
          "--bg-color": bgColor,
          "--glow-color": glowColor,
          "--shade-color": shadeColor,
          "--pointer-x": `${typeof window !== "undefined" ? window.innerWidth / 2 : 0}px`,
          "--pointer-y": `${typeof window !== "undefined" ? window.innerHeight / 2 : 0}px`,
          "--background-blur": "2px",
          "--glyph-blur": "0px",
        } as React.CSSProperties
      }
    >
      <div className="animated-background-glow" />
      {showParticles && <SignalParticleField intro={introAnimation} />}
      <div className="animated-background-shade" />
    </div>
  );
}
