# Reusable Components: ParticleText & AnimatedBackground

This guide explains how to extract and use the `ParticleText` and `AnimatedBackground` components in your projects.

## Components Overview

### 1. **ParticleText** - Text Rendered as Animated Particles

A React component that renders text as animated particles that form and dissolve. The particles respond to mouse movement and have ambient floating particles.

**File:** `src/components/ui/particle-text.tsx`

**Features:**
- Customizable text content
- Animation on mount
- Customizable colors for bright and pale particles
- Particle size control
- Respects `prefers-reduced-motion` for accessibility
- Responds to pointer movement
- Fully responsive

### 2. **AnimatedBackground** - Full-Screen Animated Background

A React component that creates a fixed, animated background layer with gradient effects, particle field, and pointer-tracking glow.

**Files:**
- `src/components/ui/animated-background.tsx` (Component)
- `src/components/ui/animated-background.css` (Styles)

**Features:**
- Particle field animation
- Pointer-tracking glow effect
- Scroll-triggered shade overlay
- Animated gradient layers
- Fully customizable colors
- Respects `prefers-reduced-motion`
- Works with custom scroll targets

---

## Installation Instructions

### Option 1: Copy to Existing Next.js Project

#### Prerequisites
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "^14.0.0 or ^16.0.0"
  }
}
```

#### Step 1: Copy Component Files

Copy these files to your project's component directory:

```
your-project/src/components/ui/
├── particle-text.tsx              (NEW)
├── animated-background.tsx        (NEW)
├── animated-background.css        (NEW)
└── signal-particle-field.tsx      (EXISTING - needed as dependency)
```

**If you don't have `signal-particle-field.tsx`**, copy it from the original project:
```bash
cp src/components/ui/signal-particle-field.tsx your-project/src/components/ui/
```

#### Step 2: Import Styles (Global or in Layout)

In your global CSS file (e.g., `src/app/globals.css`):

```css
@import "./components/ui/animated-background.css";
```

Or if using separate CSS module, import it in your layout:

```tsx
import "@/components/ui/animated-background.css";
```

#### Step 3: Add CSS Variables to Root

Ensure these CSS variables are defined in your root stylesheet:

```css
:root {
  --page: #050607;
  --text: #f4f6f7;
  --accent: #00c8e8;
}
```

---

## Usage Examples

### Using ParticleText Component

#### Basic Usage

```tsx
import ParticleText from "@/components/ui/particle-text";

export default function MyComponent() {
  return (
    <div className="flex items-center justify-center w-full h-96">
      <ParticleText text="HELLO" animate={true} />
    </div>
  );
}
```

#### Custom Colors

```tsx
<ParticleText
  text="CREATIVE"
  animate={true}
  brightColor="#FF006E"
  paleColor="#FFC8DD"
  className="w-full h-96"
/>
```

#### With Customization

```tsx
<ParticleText
  text="YOUR TEXT"
  animate={true}
  brightColor="#00E5FF"
  paleColor="#B0F0F7"
  particleSize={1.2}
  maxParticles={5000}
  fontSize={120}
  fontFamily="'Arial Black', sans-serif"
  fontWeight={900}
  className="w-full h-96 bg-slate-950 rounded-lg"
/>
```

#### All Props

```tsx
interface ParticleTextProps {
  text: string;                    // Text to render
  animate?: boolean;               // Animation on mount (default: true)
  brightColor?: string;            // Bright particle color (default: #00c8e8)
  paleColor?: string;              // Pale particle color (default: #dcfaff)
  className?: string;              // Container class
  particleSize?: number;           // Size multiplier (default: 1)
  maxParticles?: number;           // Max particle count (default: 4200)
  fontSize?: number;               // Font size in px
  fontFamily?: string;             // Font family (default: Arial)
  fontWeight?: number | string;    // Font weight (default: 900)
}
```

---

### Using AnimatedBackground Component

#### Basic Usage (Replaces Hero World)

```tsx
// In your layout or main page
import AnimatedBackground from "@/components/ui/animated-background";

export default function Home() {
  return (
    <>
      <AnimatedBackground introAnimation={true} />
      <div className="site-shell">
        {/* Your content */}
      </div>
    </>
  );
}
```

#### With Custom Colors

```tsx
<AnimatedBackground
  introAnimation={true}
  glowColor="rgba(255, 0, 110, 0.2)"
  shadeColor="rgba(255, 0, 0, 0.3)"
  bgColor="#0a0a0a"
/>
```

#### Without Particles (Gradient Only)

```tsx
<AnimatedBackground
  showParticles={false}
  enablePointerGlow={true}
/>
```

#### All Props

```tsx
interface AnimatedBackgroundProps {
  showParticles?: boolean;           // Show particle field (default: true)
  introAnimation?: boolean;          // Animate on load (default: false)
  bgColor?: string;                  // Background color
  enablePointerGlow?: boolean;       // Enable glow follow (default: true)
  glowColor?: string;                // Glow gradient color
  shadeColor?: string;               // Scroll shade overlay color
  className?: string;                // Container class
  scrollTarget?: string;             // Scroll target selector (default: #main-hero)
}
```

---

## Advanced Usage Examples

### Example 1: Landing Page Hero with Particle Text

```tsx
import ParticleText from "@/components/ui/particle-text";
import AnimatedBackground from "@/components/ui/animated-background";

export default function LandingHero() {
  return (
    <div className="relative">
      <AnimatedBackground introAnimation={true} />
      
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-12 h-64">
            <ParticleText
              text="WELCOME"
              animate={true}
              brightColor="#00E5FF"
              paleColor="#B0F0F7"
            />
          </div>
          
          <h2 className="text-4xl font-bold text-center">
            My Amazing Project
          </h2>
          <p className="text-center mt-4 text-gray-300">
            Built with particle text and animated backgrounds
          </p>
        </div>
      </section>
    </div>
  );
}
```

### Example 2: Multiple Particle Text Elements

```tsx
import ParticleText from "@/components/ui/particle-text";

export default function Portfolio() {
  const projects = [
    { name: "PROJECT A", color: "#FF006E" },
    { name: "PROJECT B", color: "#00E5FF" },
    { name: "PROJECT C", color: "#FFD60A" },
  ];

  return (
    <div className="space-y-24 py-24">
      {projects.map((project) => (
        <section key={project.name} className="relative">
          <div className="h-48 mb-8">
            <ParticleText
              text={project.name}
              animate={false}
              brightColor={project.color}
              paleColor={project.color + "77"}
              className="w-full"
            />
          </div>
          {/* Project details */}
        </section>
      ))}
    </div>
  );
}
```

### Example 3: Themed Backgrounds

```tsx
import AnimatedBackground from "@/components/ui/animated-background";

// Dark Cyberpunk Theme
export function CyberpunkBackground() {
  return (
    <AnimatedBackground
      bgColor="#0a0a0a"
      glowColor="rgba(0, 255, 255, 0.15)"
      shadeColor="rgba(0, 0, 0, 0.8)"
      enablePointerGlow={true}
    />
  );
}

// Purple Vaporwave Theme
export function VaporwaveBackground() {
  return (
    <AnimatedBackground
      bgColor="#1a0033"
      glowColor="rgba(255, 0, 127, 0.2)"
      shadeColor="rgba(50, 0, 100, 0.6)"
    />
  );
}

// Warm Sunset Theme
export function SunsetBackground() {
  return (
    <AnimatedBackground
      bgColor="#0d0000"
      glowColor="rgba(255, 127, 0, 0.2)"
      shadeColor="rgba(40, 10, 0, 0.5)"
    />
  );
}
```

---

## Customization Guide

### Changing Particle Colors

Both components use CSS color values:

```tsx
// Named colors
<ParticleText brightColor="cyan" paleColor="lightblue" />

// Hex codes
<ParticleText brightColor="#FF006E" paleColor="#FFC8DD" />

// RGB/RGBA
<ParticleText brightColor="rgb(255, 0, 110)" paleColor="rgba(255, 200, 221, 0.8)" />
```

### Adjusting Animation Speed

The animation duration is hardcoded to 1800ms for particle formation. To change it, edit the component:

**In `particle-text.tsx`, line ~138:**
```tsx
const formation = reducedMotion.matches
  ? 1
  : clamp(elapsed / 1800, 0, 1);  // Change 1800 to your desired ms
```

### Responsive Container

Use Tailwind's responsive utilities:

```tsx
<div className="h-48 md:h-64 lg:h-96">
  <ParticleText text="HELLO" animate={true} />
</div>
```

### Reducing Motion for Performance

The components already respect `prefers-reduced-motion`. To test:

```tsx
// Disable animations on slow devices
const [reduced, setReduced] = useState(false);

useEffect(() => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  setReduced(query.matches);
}, []);

<ParticleText text="HELLO" animate={!reduced} />
```

---

## Dependency Tree

```
particle-text.tsx
  └── (No external dependencies beyond React)

animated-background.tsx
  ├── signal-particle-field.tsx
  └── (No external dependencies beyond React)

signal-particle-field.tsx
  └── (No external dependencies beyond React)
```

All components are **pure React** with no external animation libraries required.

---

## Troubleshooting

### Particles Not Showing

1. Verify `signal-particle-field.tsx` is in the correct location
2. Check browser console for errors
3. Ensure the container has a defined width/height
4. Check z-index layering in your CSS

### Animation Not Smooth

1. Check `prefers-reduced-motion` settings
2. Test on a device with more GPU resources
3. Reduce `maxParticles` prop on ParticleText
4. Disable `showParticles` on AnimatedBackground if not needed

### Colors Not Applying

1. Verify color format is valid CSS
2. Check CSS specificity - component inline styles override classes
3. Use `!important` only as last resort
4. Ensure colors have sufficient contrast

### Pointer Glow Not Following

1. Verify `enablePointerGlow={true}` on AnimatedBackground
2. Check that the component is not inside a `pointer-events: none` container
3. Ensure no CSS transforms are blocking events

### Import Errors

```
// ❌ Wrong
import ParticleText from "@/particle-text";

// ✅ Correct
import ParticleText from "@/components/ui/particle-text";
```

---

## Performance Tips

### For Multiple ParticleText Components

```tsx
// ❌ Avoid - high particle count
{items.map((item) => (
  <ParticleText key={item.id} text={item.text} maxParticles={4200} />
))}

// ✅ Better - reduce particle count
{items.map((item) => (
  <ParticleText key={item.id} text={item.text} maxParticles={1500} />
))}
```

### Lazy Load with Intersection Observer

```tsx
import { lazy, Suspense } from "react";

const ParticleText = lazy(() => import("@/components/ui/particle-text"));

export default function LazyParticles() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ParticleText text="HELLO" animate={true} />
    </Suspense>
  );
}
```

---

## Migration from Original HeroWorld

### Before (Original slmn-page)
```tsx
import HeroWorld from "@/components/ui/hero-world";

export default function Home() {
  return (
    <>
      <HeroWorld intro />
      {/* content */}
    </>
  );
}
```

### After (Using AnimatedBackground)
```tsx
import AnimatedBackground from "@/components/ui/animated-background";

export default function Home() {
  return (
    <>
      <AnimatedBackground introAnimation={true} />
      {/* content */}
    </>
  );
}
```

The new component is backward compatible and easier to customize.

---

## License

These components are extracted from the slmn-page project and are free to use, modify, and distribute in your projects.

---

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the component TypeScript interfaces for available props
3. Check browser console for error messages
4. Test in a fresh project to isolate issues

---

**Last Updated:** 2026-11-07  
**Component Versions:** ParticleText v1.0, AnimatedBackground v1.0
