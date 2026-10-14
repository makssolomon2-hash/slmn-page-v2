---
name: iterative-component
description: Build isolated, fully styled UI components that are cheap to redesign. Trigger for component-first development, iterative UI, Hero, Navbar, Card, reusable sections, visual variants, or design iteration requests.
---

# Iterative Component

Build and validate one self-contained component at a time. Keep its visual contract and variation points obvious so a redesign does not require rewriting the page.

## Work in small slices

- Identify the component’s content, states, responsive behavior, and accessibility requirements before coding.
- Implement its complete structure, styling, and interactions in isolation; do not leave a bare skeleton for later styling.
- Keep component styles scoped to the component or use existing project conventions. Avoid broad selectors and unrelated page edits.
- Expose only meaningful variation points as typed props or CSS custom properties. Keep content replaceable and avoid hard-coded brand claims.
- Show the component in context with realistic sample content, then tune spacing, contrast, hover/focus states, and mobile layout before moving on.

## Practical examples

- **Hero:** Isolate `Hero` with `eyebrow`, `title`, `description`, `primaryAction`, and a small `variant` union such as `"signal" | "editorial"`. Keep layout and styles inside its own module.
- **Card:** Make `ProjectCard` accept a typed project model and optional accent token. Keep links, tags, and focus state styled and test long titles and missing optional metadata.
- **Navbar:** Isolate menu state and responsive presentation in `SiteNav`; expose navigation items as data rather than embedding page-specific links in its styles.

```tsx
type HeroProps = {
  title: string;
  description: string;
  variant?: "signal" | "editorial";
};

export function Hero({ title, description, variant = "signal" }: HeroProps) {
  return (
    <section className={`hero hero--${variant}`}>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
```

```css
.hero {
  display: grid;
  align-content: end;
  gap: 1rem;
  min-height: min(80svh, 48rem);
  padding: clamp(2rem, 8vw, 7rem);
  color: #f2f4f7;
  background: radial-gradient(ellipse at 75% 25%, rgb(0 225 255 / 0.12), transparent 40%), #000;
}
.hero h1 { max-width: 12ch; font-size: clamp(3rem, 10vw, 8rem); line-height: 0.95; }
.hero p { max-width: 42rem; color: rgb(242 244 247 / 0.72); }
.hero--editorial h1 { font-family: Georgia, serif; font-weight: 400; }
```

## Avoid

- Do not generate the entire site as one monolithic component before validating its parts.
- Do not split every small element into a file without a real reuse or isolation benefit.
- Do not add speculative prop systems or arbitrary configuration knobs.
- Do not deliver unstyled markup, placeholder controls that do nothing, or a component whose essential states depend on the parent page.
