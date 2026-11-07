# Quick Reference: ParticleText & AnimatedBackground

## TL;DR - Copy & Paste Setup

### Step 1: Copy Files to Your Project
```bash
# Copy these 3 files to your-project/src/components/ui/
particle-text.tsx
animated-background.tsx
animated-background.css
signal-particle-field.tsx  # (if you don't have it)
```

### Step 2: Import CSS
```css
/* In your globals.css */
@import "./components/ui/animated-background.css";
```

### Step 3: Use It
```tsx
import ParticleText from "@/components/ui/particle-text";
import AnimatedBackground from "@/components/ui/animated-background";

export default function Page() {
  return (
    <>
      <AnimatedBackground introAnimation={true} />
      <div className="h-96">
        <ParticleText text="HELLO WORLD" animate={true} />
      </div>
    </>
  );
}
```

---

## ParticleText - One Liner Examples

```tsx
// Default - cyan particles
<ParticleText text="HELLO" animate={true} />

// Custom colors
<ParticleText text="HELLO" brightColor="#FF006E" paleColor="#FFC8DD" />

// Different font
<ParticleText text="HELLO" fontSize={150} fontFamily="'Courier New'" />

// More particles, bigger size
<ParticleText text="HELLO" maxParticles={6000} particleSize={1.5} />

// Static (no animation)
<ParticleText text="HELLO" animate={false} />

// In a container
<div className="h-96 bg-slate-950 rounded-lg">
  <ParticleText text="HELLO" animate={true} className="w-full h-full" />
</div>
```

---

## AnimatedBackground - One Liner Examples

```tsx
// Minimal setup
<AnimatedBackground />

// With intro animation
<AnimatedBackground introAnimation={true} />

// Custom glow color
<AnimatedBackground glowColor="rgba(255, 0, 110, 0.2)" />

// Gradient only (no particles)
<AnimatedBackground showParticles={false} />

// Custom theme
<AnimatedBackground
  bgColor="#0a0a0a"
  glowColor="rgba(0, 255, 255, 0.15)"
  shadeColor="rgba(0, 0, 0, 0.8)"
/>

// Disable pointer glow
<AnimatedBackground enablePointerGlow={false} />

// Different scroll target
<AnimatedBackground scrollTarget="#my-section" />
```

---

## Props Reference

### ParticleText Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | required | Text to render |
| `animate` | boolean | true | Animate formation |
| `brightColor` | string | #00c8e8 | Bright particle color |
| `paleColor` | string | #dcfaff | Pale particle color |
| `className` | string | - | Container class |
| `particleSize` | number | 1 | Size multiplier |
| `maxParticles` | number | 4200 | Max particle count |
| `fontSize` | number | auto | Font size (px) |
| `fontFamily` | string | Arial | Font family |
| `fontWeight` | string\|number | 900 | Font weight |

### AnimatedBackground Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showParticles` | boolean | true | Show particle field |
| `introAnimation` | boolean | false | Animate on load |
| `bgColor` | string | var(--page) | Background color |
| `enablePointerGlow` | boolean | true | Follow pointer |
| `glowColor` | string | rgba(0,179,217,0.2) | Glow color |
| `shadeColor` | string | rgb(2,7,10) | Shade overlay color |
| `className` | string | - | Container class |
| `scrollTarget` | string | #main-hero | Scroll target selector |

---

## Common Patterns

### Hero Section
```tsx
<div className="relative">
  <AnimatedBackground introAnimation={true} />
  <section className="relative z-10 flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="h-64 mb-12">
        <ParticleText text="WELCOME" animate={true} />
      </div>
      <h1 className="text-5xl font-bold">My Site</h1>
    </div>
  </section>
</div>
```

### Portfolio Grid
```tsx
<section className="grid grid-cols-2 gap-8">
  {projects.map((p) => (
    <div key={p.id} className="h-48">
      <ParticleText
        text={p.name}
        brightColor={p.color}
        animate={false}
      />
    </div>
  ))}
</section>
```

### Themed Section
```tsx
function PurpleSection() {
  return (
    <div className="relative">
      <AnimatedBackground
        bgColor="#1a0033"
        glowColor="rgba(255, 0, 127, 0.2)"
        shadeColor="rgba(50, 0, 100, 0.6)"
      />
      <section className="relative z-10 py-20">
        {/* content */}
      </section>
    </div>
  );
}
```

### Multiple Text
```tsx
const texts = ["DESIGN", "CODE", "ANIMATE"];

<div className="space-y-24">
  {texts.map((t) => (
    <div key={t} className="h-40">
      <ParticleText text={t} animate={false} />
    </div>
  ))}
</div>
```

---

## CSS Variables (Optional Customization)

```css
:root {
  --page: #050607;           /* Background color */
  --text: #f4f6f7;           /* Text color */
  --accent: #00c8e8;         /* Accent color */
}
```

---

## Accessibility

Both components automatically respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations are disabled automatically */
}
```

---

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (iOS 13+)
- IE: ❌ Not supported (ES6+ required)

---

## Performance Tips

1. **Reduce particle count for multiple instances:**
   ```tsx
   <ParticleText text="A" maxParticles={1500} />
   <ParticleText text="B" maxParticles={1500} />
   ```

2. **Disable particles if not needed:**
   ```tsx
   <AnimatedBackground showParticles={false} />
   ```

3. **Use `animate={false}` for static text:**
   ```tsx
   <ParticleText text="STATIC" animate={false} />
   ```

4. **Lazy load on scroll:**
   ```tsx
   const [show, setShow] = useState(false);
   
   {show && <ParticleText text="HELLO" animate={true} />}
   ```

---

## Color Palette Ideas

### Cyberpunk
- Bright: `#00E5FF` | Pale: `#B0F0F7`
- Glow: `rgba(0, 255, 255, 0.15)`

### Cyberpunk Red
- Bright: `#FF006E` | Pale: `#FFC8DD`
- Glow: `rgba(255, 0, 110, 0.2)`

### Sunset
- Bright: `#FF7F00` | Pale: `#FFBB66`
- Glow: `rgba(255, 127, 0, 0.2)`

### Forest
- Bright: `#00FF88` | Pale: `#88FFDD`
- Glow: `rgba(0, 255, 136, 0.15)`

### Gold
- Bright: `#FFD60A` | Pale: `#FFE066`
- Glow: `rgba(255, 214, 10, 0.15)`

---

## Debugging

```tsx
// Show component boundaries
<div style={{ border: "1px solid red" }}>
  <ParticleText text="DEBUG" animate={true} />
</div>

// Check if rendering at all
<div className="h-96 bg-blue-500">
  <ParticleText text="TEST" animate={true} />
</div>

// Console logs (add to component)
console.log("Container size:", width, height);
console.log("Particle count:", particles.length);
```

---

## Files Location

```
your-project/
├── src/
│   └── components/
│       └── ui/
│           ├── particle-text.tsx           ← Main component
│           ├── animated-background.tsx     ← Main component
│           ├── animated-background.css     ← Styles (REQUIRED)
│           └── signal-particle-field.tsx   ← Dependency
├── app/
│   └── globals.css                         ← Import CSS here
```

---

**Need more details?** See `COMPONENT_INSTALLATION_GUIDE.md`
