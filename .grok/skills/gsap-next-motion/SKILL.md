---
name: gsap-next-motion
description: Implement GSAP, ScrollTrigger, and @gsap/react motion in Next.js App Router. Trigger for GSAP, ScrollTrigger, useGSAP, Next.js animation, scroll reveal, motion cleanup, reduced motion, or magnetic button requests.
---

# GSAP Next Motion

Use these patterns when adding motion to a Next.js App Router project.

## Set up safely

- Keep animated UI in a small client component with `"use client"`; leave static page content server-rendered.
- Register plugins once in the client module that uses them.
- Scope selectors to a component ref with `useGSAP`; let its context revert on unmount. Use `revertOnUpdate: true` when dependencies rebuild an animation.
- Wrap delayed callbacks and event handlers that create GSAP work with `contextSafe`.
- Do not animate during render or read `window`/`document` at module scope.

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HeroMotion() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from("[data-title]", { y: 28, autoAlpha: 0, duration: 0.8 })
        .from("[data-copy]", { y: 12, autoAlpha: 0, duration: 0.45 }, "-=0.4");

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.timeline({
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        }).from(element, { y: 20, autoAlpha: 0, duration: 0.6 });
      });
    });
  }, { scope: root });

  return (
    <section ref={root}>
      <h1 data-title>Title</h1>
      <p data-copy>Description</p>
      <div data-reveal>Scroll-revealed content</div>
    </section>
  );
}
```

## Practical examples and motion recipes

- **Hero:** Sequence heading, supporting copy, and primary action in one short timeline. Keep content visible in the static markup.
- **Navbar:** Build a paused timeline for the panel and links; play/reverse it from React state. Keep `aria-expanded`, keyboard dismissal, focus handling, and static visibility when motion is reduced.

```tsx
const menuTimeline = gsap.timeline({ paused: true })
  .fromTo("[data-menu-panel]", { height: 0, autoAlpha: 0 }, { height: "auto", autoAlpha: 1, duration: 0.35 })
  .from("[data-menu-link]", { y: 8, autoAlpha: 0, stagger: 0.05, duration: 0.2 }, "-=0.1");
// On open, play(0); on close, reverse(). Keep open state and aria-expanded in React.
```

- **Scroll reveals:** Use one-shot timelines tied to the element with `scrollTrigger: { trigger: element, start: "top 88%", once: true }`. Reveal nonessential entrances only.
- **Magnetic button:** Use pointer movement only for fine pointers and clamp offsets to a few pixels. Animate one button timeline to the pointer-derived `x`/`y`, then reverse or reset it on pointer leave. Keep touch, keyboard, and reduced-motion behavior ordinary.

```tsx
// Inside useGSAP((_, contextSafe) => { ... }, { scope: root }):
const button = root.current?.querySelector<HTMLButtonElement>("[data-magnetic]");
if (button
  && window.matchMedia("(hover: hover) and (pointer: fine)").matches
  && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const magnet = gsap.timeline({ paused: true });
  const move = contextSafe((event: PointerEvent) => {
    const rect = button.getBoundingClientRect();
    const x = gsap.utils.clamp(-4, 4, (event.clientX - rect.left - rect.width / 2) * 0.12);
    const y = gsap.utils.clamp(-4, 4, (event.clientY - rect.top - rect.height / 2) * 0.12);
    magnet.clear().to(button, { x, y, duration: 0.2, ease: "power2.out" }).restart();
  });
  const reset = contextSafe(() => {
    magnet.clear().to(button, { x: 0, y: 0, duration: 0.3, ease: "power2.out" }).restart();
  });
  button.addEventListener("pointermove", move);
  button.addEventListener("pointerleave", reset);
  return () => {
    button.removeEventListener("pointermove", move);
    button.removeEventListener("pointerleave", reset);
  };
}
```

## Avoid

- Do not use global selectors, orphaned ScrollTriggers, or unscoped effects that survive unmount.
- Do not rely on animation completion to reveal essential text or controls.
- Do not use perpetual motion, scroll-jacking, or large magnetic offsets.
- Do not apply animated behavior to `prefers-reduced-motion: reduce`; provide static content and preserve interaction.
