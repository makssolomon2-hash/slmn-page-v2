"use client";

import { useEffect, useState } from "react";
import PixelFlowField from "@/components/ui/pixel-flow-field";

export default function HeroWorld() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const sections = ["#opening", "#main-hero"]
      .map((selector) => document.querySelector(selector))
      .filter((section): section is Element => section !== null);
    const visibility = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          visibility.set(entry.target, entry.isIntersecting),
        );
        setActive([...visibility.values()].some(Boolean));
      },
      { rootMargin: "80px 0px" },
    );

    sections.forEach((section) => {
      visibility.set(section, false);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-world-background" aria-hidden="true">
      <PixelFlowField
        className="hero-world-pixels"
        cellSize={6}
        colors={["#050607", "#00c8e8", "#d9fbff"]}
        gap={4}
        paused={!active}
        pointerRadius={92}
        pointerStrength={0.58}
        pointerTracking="window"
        speed={0.7}
        text="SLMN"
        weight={900}
      />
    </div>
  );
}
