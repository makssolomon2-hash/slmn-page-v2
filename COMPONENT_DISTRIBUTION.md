# Distribution Package: ParticleText & AnimatedBackground Components

This guide explains how to package and distribute these reusable components across your projects.

## Package Structure

```
components-package/
├── particle-text/
│   └── particle-text.tsx
├── animated-background/
│   ├── animated-background.tsx
│   └── animated-background.css
├── dependencies/
│   └── signal-particle-field.tsx
├── INSTALLATION.md
├── USAGE.md
├── EXAMPLES.tsx
└── README.md
```

## Quick Distribution Methods

### Method 1: Copy Components Folder

**Best for:** Small teams, monorepos

1. Create a shared folder in your monorepo:
```bash
packages/components/
├── ui/
│   ├── particle-text.tsx
│   ├── animated-background.tsx
│   ├── animated-background.css
│   └── signal-particle-field.tsx
```

2. Reference in projects:
```tsx
import ParticleText from "@packages/components/ui/particle-text";
```

---

### Method 2: NPM Package (Advanced)

**Best for:** Multiple projects, public sharing

#### Step 1: Create package.json

```json
{
  "name": "@yourusername/particle-components",
  "version": "1.0.0",
  "description": "Reusable particle text and animated background components",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": [
    "dist",
    "src"
  ],
  "scripts": {
    "build": "tsc",
    "prepublish": "npm run build"
  },
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  },
  "keywords": [
    "react",
    "particles",
    "animation",
    "background",
    "canvas"
  ]
}
```

#### Step 2: Create src/index.ts

```typescript
export { default as ParticleText } from "./components/ui/particle-text";
export type { ParticleTextProps } from "./components/ui/particle-text";

export { default as AnimatedBackground } from "./components/ui/animated-background";
export type { AnimatedBackgroundProps } from "./components/ui/animated-background";
```

#### Step 3: Build and Publish

```bash
npm run build
npm publish
```

#### Step 4: Install in Projects

```bash
npm install @yourusername/particle-components
```

```tsx
import { ParticleText, AnimatedBackground } from "@yourusername/particle-components";
```

---

### Method 3: GitHub Repository

**Best for:** Open source sharing

#### Create Repository Structure

```
particle-components/
├── src/
│   └── components/
│       └── ui/
│           ├── particle-text.tsx
│           ├── animated-background.tsx
│           └── animated-background.css
├── examples/
│   └── nextjs-demo/
├── docs/
│   ├── INSTALLATION.md
│   ├── USAGE.md
│   └── API.md
├── package.json
├── README.md
└── LICENSE
```

#### Install from GitHub

```bash
npm install github:yourusername/particle-components#main
```

---

### Method 4: Local File System (Development)

**Best for:** Local development, testing

```bash
# In your project
npm install ../path/to/components-package
```

In `package.json`:
```json
{
  "dependencies": {
    "particle-components": "file:../packages/particle-components"
  }
}
```

---

## Installation Verification Checklist

Before distributing, verify:

- [ ] **No TypeScript errors:** `npx tsc --noEmit`
- [ ] **Linting passes:** `npm run lint`
- [ ] **Components import correctly**
- [ ] **CSS file included in distribution**
- [ ] **Dependency on `signal-particle-field.tsx` documented**
- [ ] **All props are TypeScript typed**
- [ ] **Component works in test project**

---

## File Checklist for Distribution

### Required Files
- ✅ `particle-text.tsx`
- ✅ `animated-background.tsx`
- ✅ `animated-background.css`
- ✅ `signal-particle-field.tsx`

### Documentation Files
- ✅ `INSTALLATION.md` or `INSTALLATION_GUIDE.md`
- ✅ `USAGE.md` or `QUICK_REFERENCE.md`
- ✅ `EXAMPLES.tsx`
- ✅ `README.md`

### Optional but Recommended
- ✅ `LICENSE` (MIT recommended)
- ✅ `.npmignore` (for NPM packages)
- ✅ `CHANGELOG.md`
- ✅ TypeScript declaration files (`.d.ts`)

---

## Creating a Complete Package

### Package Bundle Contents

**Minimum (Simple Copy)**
```
/src
  /components
    /ui
      - particle-text.tsx
      - animated-background.tsx
      - animated-background.css
      - signal-particle-field.tsx
```

**Recommended (Full Package)**
```
/
├── README.md
├── INSTALLATION.md
├── USAGE.md
├── QUICK_REFERENCE.md
├── EXAMPLES.tsx
├── CHANGELOG.md
├── LICENSE
├── package.json
└── /src
    └── /components
        └── /ui
            ├── particle-text.tsx
            ├── particle-text.d.ts
            ├── animated-background.tsx
            ├── animated-background.d.ts
            ├── animated-background.css
            ├── signal-particle-field.tsx
            └── signal-particle-field.d.ts
```

---

## Version Control

### Git Repository Template

```bash
# Initialize
git init particle-components
cd particle-components

# Create directory structure
mkdir -p src/components/ui
mkdir docs
mkdir examples

# Add files
# Copy components to src/components/ui/
# Add documentation files

# Initial commit
git add .
git commit -m "Initial commit: ParticleText and AnimatedBackground components"

# Tag version
git tag v1.0.0

# Push
git remote add origin https://github.com/yourusername/particle-components.git
git branch -M main
git push -u origin main
git push --tags
```

### Semantic Versioning

```
v1.0.0
│  ││└─ Patch (bug fixes)
│  │└── Minor (new features)
│  └─── Major (breaking changes)
```

Changes:
- **Patch**: Bug fixes, performance improvements
- **Minor**: New props, new features (backward compatible)
- **Major**: API changes, removed props, major rewrites

---

## Creating Releases

### GitHub Release Template

**Title:** `v1.0.0 - ParticleText & AnimatedBackground`

**Description:**
```markdown
## 🎉 Initial Release

### Features
- ✨ ParticleText component - Render text as animated particles
- ✨ AnimatedBackground component - Full-screen animated backgrounds
- 🎨 Fully customizable colors and particle counts
- ♿ Accessibility features (prefers-reduced-motion)
- 📱 Responsive design
- ⚡ Zero external animation library dependencies

### Installation
```bash
npm install github:yourusername/particle-components#v1.0.0
```

### Documentation
- [Installation Guide](./INSTALLATION.md)
- [Usage Guide](./USAGE.md)
- [Quick Reference](./QUICK_REFERENCE.md)
- [Examples](./EXAMPLES.tsx)

### Components
- `ParticleText` - Text as particles
- `AnimatedBackground` - Animated background layer
- `signal-particle-field.tsx` - Particle rendering engine

### Browser Support
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari (iOS 13+)
- ❌ Internet Explorer

### Credits
Extracted from [slmn-page](https://github.com/makssolomon2-hash/slmn-page-v2)
```

---

## Template: README.md for Distribution

```markdown
# Particle Components

High-performance React components for particle text animations and animated backgrounds.

## Features

- 🎯 **ParticleText** - Render text as animated particles
- 🎨 **AnimatedBackground** - Full-screen animated backgrounds with gradients
- ⚡ **Zero Dependencies** - No external animation libraries
- ♿ **Accessible** - Respects prefers-reduced-motion
- 📱 **Responsive** - Works on all screen sizes
- 🎮 **Interactive** - Pointer tracking and scroll effects
- 🔧 **Customizable** - Full control over colors and animations

## Quick Start

### Installation

```bash
npm install github:yourusername/particle-components
# or
npm install @yourusername/particle-components
```

### Basic Usage

```tsx
import ParticleText from "@yourusername/particle-components";
import AnimatedBackground from "@yourusername/particle-components";

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <ParticleText text="HELLO" animate={true} />
    </>
  );
}
```

## Documentation

- [Installation Guide](./INSTALLATION.md)
- [API Reference](./USAGE.md)
- [Examples](./EXAMPLES.tsx)
- [Quick Reference](./QUICK_REFERENCE.md)

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅      |
| Firefox | ✅      |
| Safari  | ✅      |
| Edge    | ✅      |

## License

MIT

## Author

[Your Name/Username]

## Credits

Components extracted and improved from [slmn-page-v2](https://github.com/makssolomon2-hash/slmn-page-v2)
```

---

## Distribution Checklist

- [ ] All TypeScript files have proper types
- [ ] CSS file is included
- [ ] No console errors in production build
- [ ] Documentation is complete and accurate
- [ ] Examples work correctly
- [ ] README is clear and informative
- [ ] License file is included
- [ ] Version number is incremented
- [ ] Git repository is set up
- [ ] Package is tagged with version
- [ ] Package is published/released

---

## Updating Components

When making updates:

1. **Increment version** in package.json
2. **Update CHANGELOG.md**
3. **Update documentation** if APIs changed
4. **Run tests** and linting
5. **Create git tag:** `git tag v1.0.1`
6. **Publish:** `npm publish` or push to GitHub

---

## Troubleshooting Distribution

### Problem: CSS not loading
**Solution:** Ensure CSS is imported in consuming project:
```tsx
import "@yourusername/particle-components/animated-background.css";
```

### Problem: Components not found
**Solution:** Check imports match distribution paths:
```tsx
// ❌ Wrong
import ParticleText from "particle-components/particle-text";

// ✅ Correct
import { ParticleText } from "@yourusername/particle-components";
```

### Problem: TypeScript errors
**Solution:** Ensure declaration files (`.d.ts`) are included in distribution

---

**Distribution Version:** 1.0.0  
**Last Updated:** 2026-11-07
