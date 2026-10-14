---
name: design-system-explorer
description: Explore visual directions before building a dark immersive site. Trigger for design exploration, art direction, visual concepts, design systems, moodboards, electronic music, DJ, synth, glassmorphism, or pure-black UI requests.
---

# Design System Explorer

Before writing a full page, generate **2–4 genuinely distinct visual directions** for the user to compare. Do not blend them into one vague moodboard.

## Explore

- Start with the product, audience, content, and desired emotional tone. Keep unknown brand facts as explicit placeholders.
- Make each direction concrete: give it a name, a one-sentence thesis, a visual hierarchy, and a distinct balance of type, color, materials, and motion.
- Include pure black (`#000`) as a deliberate option for immersive electronic, music, and performance identities. Use glass as a material, not as a substitute for contrast.
- For every direction, specify:
  - A compact set of named color tokens with hex values and semantic roles.
  - Display and text font roles, including sensible fallback stacks.
  - A hero, navigation, and one reusable component concept.
  - A purposeful motion idea and a static/reduced-motion equivalent.
- End with a short comparison and a clear recommendation. Ask the user to select or combine directions before a full build.

## Practical examples

- **Signal / pure black:** `--bg: #000000`, `--text: #f2f4f7`, `--signal: #a8f7ff`; condensed display type plus a neutral sans; waveform hero; one GSAP pulse synchronized to section entry.
- **Afterhours / smoked glass:** `--bg: #030407`, `--surface: rgb(255 255 255 / 0.06)`, `--accent: #bda5ff`; editorial serif paired with sans; framed mix artwork; slow entrance reveal with no perpetual movement.
- **Studio / acid detail:** `--bg: #050505`, `--text: #f4f0e7`, `--accent: #c9ff4a`; technical mono labels plus a wide grotesk; modular project list; restrained hover response.

## Avoid

- Do not produce several near-identical palettes and call them distinct directions.
- Do not start the full site before presenting the directions and decision points.
- Do not use blur, glow, grain, gradients, or GSAP merely as decoration.
- Do not invent brand facts, use low-contrast token pairs, or make motion the only way to understand content.
