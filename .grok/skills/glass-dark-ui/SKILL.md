---
name: glass-dark-ui
description: Build readable glassmorphism and atmospheric UI on pure-black backgrounds. Trigger for glass UI, dark immersive design, blur surfaces, subtle grain, light trails, waveform SVGs, electronic music visuals, or black-background recipes.
---

# Glass Dark UI

Compose dark surfaces in layers. Keep the black canvas, readable content, and interaction states stronger than the effects.

## Surface recipe

```css
.glass-panel {
  border: 1px solid rgb(255 255 255 / 0.12);
  background: linear-gradient(145deg, rgb(255 255 255 / 0.09), rgb(255 255 255 / 0.025));
  -webkit-backdrop-filter: blur(18px) saturate(125%);
  backdrop-filter: blur(18px) saturate(125%);
  box-shadow: 0 16px 48px rgb(0 0 0 / 0.45), inset 0 1px rgb(255 255 255 / 0.08);
}
```

- Put broad, soft radial gradients behind content; reserve `backdrop-filter` for the panel itself instead of blurring the whole page.
- Add grain with a tiny tiled texture on an isolated pseudo-element, at very low opacity and `pointer-events: none`.
- Start with `#000` or near-black. Set text and focus colors for contrast before adding atmosphere.
- Give each surface one job: border for separation, translucent fill for depth, blur for background diffusion, shadow for elevation.
- Use two restrained layers rather than stacking many heavy blurs. Add a fallback solid translucent fill for browsers without backdrop filtering.
- Draw a light trail as a thin SVG path with a fading gradient; keep it outside reading and focus areas.
- Draw a waveform with a few deliberate SVG paths. Set `viewBox`, `preserveAspectRatio`, and `aria-hidden="true"` when decorative; use `vector-effect="non-scaling-stroke"` to keep line weight consistent.

## Practical examples

- **Layered panel:** Put a `glass-panel` card above a pure-black page, then add a subtle radial accent behind the card, not on every card edge.
- **Layered backdrop and grain:**

```css
.stage {
  position: relative;
  isolation: isolate;
  background:
    radial-gradient(ellipse at 72% 22%, rgb(89 111 255 / 0.12), transparent 38%),
    radial-gradient(ellipse at 16% 74%, rgb(0 225 255 / 0.06), transparent 32%),
    #000;
}
.stage::after {
  content: "";
  position: absolute;
  z-index: 0;
  inset: 0;
  background: url("/noise.svg") repeat;
  opacity: 0.035;
  pointer-events: none;
}
.stage > * {
  position: relative;
  z-index: 1;
}
```

- **Signal trail and waveform:** Use a soft duplicate behind one sharp SVG stroke; label it if it represents real audio data.

```svg
<svg viewBox="0 0 640 100" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <linearGradient id="signal" x1="0" x2="1">
      <stop stop-color="#a8f7ff" stop-opacity="0" />
      <stop offset=".5" stop-color="#a8f7ff" />
      <stop offset="1" stop-color="#bda5ff" stop-opacity="0" />
    </linearGradient>
    <filter id="soft"><feGaussianBlur stdDeviation="4" /></filter>
  </defs>
  <path d="M0 50 C120 50 130 15 210 50 S330 85 410 50 530 50 640 50"
    fill="none" stroke="url(#signal)" stroke-width="5" filter="url(#soft)" />
  <path d="M0 50 C120 50 130 15 210 50 S330 85 410 50 530 50 640 50"
    fill="none" stroke="url(#signal)" stroke-width="1.5" vector-effect="non-scaling-stroke" />
</svg>
```

## Avoid

- Do not make every surface translucent; reserve glass for hierarchy and focus.
- Do not use blur as a text backdrop when it makes text hard to read.
- Do not add random glow borders, noisy grain, or infinite light animation to every component.
- Do not fake audio visualization as live sound data; label decorative waveforms as visual motifs.
- Give SVG gradients and filters unique IDs when rendering multiple instances on one page.
- Do not use CSS filters or oversized blurred layers without checking mobile performance and reduced-motion behavior.
