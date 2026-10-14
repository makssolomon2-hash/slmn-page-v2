Act as a senior product designer and frontend engineer. Build a polished, modern personal website that brings together my professional frontend-development work and my electronic-music/DJ identity.

First inspect the existing repository: identify its framework, structure, installed dependencies, and conventions. Then implement the site in the existing project. Don’t replace working setup unnecessarily. If the repository is empty, use the stack and structure below.

## Goal and creative direction

Create a distinctive, high-end personal site that feels like the meeting point of a digital design studio and an electronic-music artist’s world. It should feel intentional, immersive, and professional—not like a generic AI-generated portfolio or template.

Visual direction:
- Dark, near-black foundation with a carefully limited palette of cool electric accents, such as icy blue, violet, or acid green.
- Atmospheric layers: soft blur, translucent glass surfaces, subtle grain, abstract gradients, light trails, and restrained spark-like details.
- A custom abstract visual identity inspired by sound waves, synth signals, and motion. Use CSS, SVG, canvas, or lightweight effects where appropriate.
- Strong typography, deliberate spacing, sharp hierarchy, and sophisticated transitions.
- Make the design feel art-directed. Avoid generic dashboard layouts, excessive cards, random glowing borders, and decorative effects that obscure content.
- Use polished visual placeholders where I haven’t provided content. Keep text, links, and media easy to replace.

## Stack

Use the project’s existing setup where possible. The target stack is:
- Next.js with the App Router
- TypeScript
- Tailwind CSS
- GSAP for animation, using @gsap/react if appropriate for the project
- Reusable, accessible React components

Use client components only where interactivity or animation requires them. Keep the rest server-rendered where practical.

## Information architecture

Build a responsive site with these main areas:

1. Home
   - Immersive hero introducing me as both a frontend developer and electronic-music artist/DJ.
   - Clear calls to action for exploring development work and music.
   - A short introduction and a sense of the site’s two connected creative worlds.

2. Development
   - Portfolio/project section with editable sample projects.
   - Space for case studies, skills, tools, and development experience.
   - Project cards should show a concise summary, role, technology, and a link treatment. Don’t invent real clients or accomplishments.

3. Music
   - Artist/DJ introduction, releases or mixes, selected performances, and a waveform-inspired visual area.
   - Use clearly labeled placeholder content where real tracks or event details are unavailable.

4. Studio / Synths
   - An editorial section for synths, gear, studio setup, and music-making tools.

5. Learn
   - A section prepared for tutorials and articles about topics such as frontend development, Ableton, Serum, sound design, and creative software.

6. Video
   - A frontend-only video-library concept with sample video tiles and categories.
   - Prepare the UI for future uploads and sharing, but do not build authentication, a database, file uploads, or backend APIs.

7. About / Contact
   - Personal bio placeholder, social-link placeholders, and a clear contact action.

Use sensible routes and navigation for the project’s existing structure. If building every page as a separate route would make the first implementation too broad, create a complete, functional home page with well-designed section links and a reusable structure that can expand into those routes.

## Navigation

Create an advanced, responsive navigation system that makes both sides of the site easy to explore:
- A refined desktop navigation with grouped categories for Development, Music, Studio, Learn, Video, and About.
- A mobile menu that is genuinely usable with keyboard and touch.
- Clear active, hover, focus, open, and close states.
- Animated menu transitions that feel smooth and purposeful.
- Keep navigation understandable; don’t bury essential destinations in an overcomplicated mega-menu.

## Motion and interaction

Use GSAP throughout the experience, but make every animation serve a purpose. Aim for rich, varied motion without making the site tiring, slow, or difficult to use.

Include appropriate examples of:
- A carefully sequenced hero entrance.
- Scroll-triggered reveals and section transitions.
- Subtle parallax or depth in selected background layers.
- Text or word-level animation in a few deliberate places.
- Animated navigation and button interactions.
- A footer entrance or finishing transition.
- A subtle animated waveform or sound-reactive-inspired visual.

Implementation requirements:
- Prefer GSAP timelines and ScrollTrigger where they genuinely help.
- Scope animations to their components and clean them up correctly on unmount.
- Avoid animating every element independently or adding motion that harms readability.
- Respect prefers-reduced-motion; provide a reduced-motion experience.
- Keep scrolling, touch input, and page performance smooth.
- Avoid hydration errors and browser-only APIs during server rendering.

## Sound

Make sound an optional, user-controlled enhancement:
- Never autoplay audio or music.
- Add a small, accessible sound on/off control only if you can implement it cleanly.
- Any sound should begin only after an explicit user interaction.
- Use a simple original Web Audio effect or a clearly labeled placeholder; do not embed copyrighted tracks or pretend sample audio is my music.
- Ensure the site works fully when sound is off.

## Accessibility and responsive behavior

- Support keyboard navigation and visible focus states.
- Use semantic HTML, accessible labels, and appropriate contrast.
- Give interactive elements clear names and states.
- Test layouts at mobile, tablet, and desktop widths.
- Make menus, controls, and content usable with touch.
- Don’t communicate important information through color or animation alone.

## Code quality

- Use clean, maintainable TypeScript and small reusable components.
- Keep content and repeated navigation data in easy-to-edit structures.
- Use existing project dependencies where possible. Don’t add a large dependency for a minor visual effect.
- Avoid unnecessary abstractions and placeholder functionality that appears real but does nothing.
- Add sensible loading, empty, and fallback states for media placeholders.
- Don’t claim that backend features work when they are only frontend mockups.

## Work process and delivery

1. Inspect the repository and briefly summarize the implementation plan.
2. Build the experience in the existing project.
3. Run the available lint, type-check, and build commands. Fix any issues introduced by your changes.
4. In your final response, summarize what you built, list the main files or routes changed, mention any commands you ran, and clearly identify anything that still requires my real content or a backend.

Prioritize a cohesive, memorable design over adding lots of superficial effects. Use “YOUR NAME” or similarly obvious editable placeholders rather than inventing personal details.

Build a complete modern personal portfolio website as a Next.js 15 (App Router) + TypeScript project.

### Tech Stack (strict)
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 + custom CSS variables
- GSAP 3 + ScrollTrigger + SplitText (or text plugin) + Flip + Observer (use all of them heavily)
- Framer Motion only if needed for simple presence, otherwise pure GSAP
- Lenis smooth scroll (or GSAP ScrollSmoother if available)
- Three.js or React Three Fiber for subtle 3D background elements (sparks / abstract shapes)
- Howler.js or Tone.js for interactive sound elements (very light, optional mute)
- Lucide React or custom SVG icons
- No UI libraries (no shadcn, no daisy, no MUI). Pure Tailwind + custom components.

### Overall Vision
Personal platform of a frontend developer + electronic music producer / DJ.
The site must feel like a high-end digital experience, not a template.
Dark pure black theme (#000000 / #050505) with deep glassmorphism, heavy blur, and constant motion.
Think: refined cyber-noir + electronic music club aesthetic.

### Design System
- Background: pure black with layered animated abstract elements
  - Soft glowing particles / sparklers
  - Slow drifting 3D abstract geometric shapes (very subtle)
  - Fluid blur morphing blobs
  - Vertical / horizontal sound-wave like lines that react lightly to scroll
- Glassmorphism everywhere: navbar, cards, modals, buttons → backdrop-blur-xl / 2xl, semi-transparent black/white borders, soft inner glow
- Typography: 
  - Headings → modern geometric sans (Inter / Satoshi / Geist) with heavy GSAP character/word animations
  - Body → clean readable
- Color palette: pure black + off-white text + one strong accent (electric cyan or magenta, your choice, used sparingly for highlights and underlines)
- Lots of soft glow, noise texture overlay (very low opacity), and depth

### Extremely heavy GSAP requirement
I want GSAP used on almost everything:
- Navbar: advanced magnetic / sticky / morphing on scroll, active link indicators with fluid animation, dropdowns that open with Flip or fancy clip-path
- Hero: full-screen with massive SplitText + stagger reveal, background elements that move with mouse (parallax) and scroll
- All section titles: character-by-character or word-by-word reveal on scroll
- Cards & portfolio items: 3D tilt + magnetic hover + scale + blur transitions
- Buttons: liquid / magnetic hover, sound-wave ripple effect on click
- Footer: animated reveal
- Page transitions between routes (if using multiple pages)
- Scroll-triggered animations on every major block
- Continuous ambient motion in the background (never static)

### Information Architecture & Advanced Navigation
Create a sophisticated dual-identity navigation that clearly separates but also connects the two worlds:

Main areas:
1. Frontend / Development
   - Portfolio / Projects
   - Skills & Stack
   - Case studies / Process
   - Blog / Writings (optional)

2. Music / Electronic Production
   - Releases / Tracks
   - Live sets / DJ mixes
   - Synths & Sound Design (Serum, etc.)
   - Ableton / Workflow tutorials
   - Videos
   - Gear / Setup

3. About / Journey (personal experiences that connect both worlds)
4. Contact / Collab

The navbar must be advanced:
- Desktop: floating glass pill or full-width with mega-menu style dropdowns that feel premium
- Mobile: full-screen overlay with staggered GSAP reveal of links + categories
- Categories should be expandable and feel like a real platform navigation, not a simple list
- Active section highlighting with smooth indicator
- Possibly a subtle “mode switcher” (Dev / Music) that changes accent color or background mood

### Key Sections to build (start with these)
1. Hero – full viewport, powerful statement about being both developer and electronic music artist, heavy animation
2. Dual identity intro – two columns or interactive cards that represent Frontend vs Music
3. Featured Projects (web) + Featured Tracks/Videos (music) in a mixed or tabbed layout
4. Skills – visual, interactive (hover reveals more)
5. Experience / Journey timeline with scroll-triggered storytelling
6. Music playground section – simple interactive sound visualizer or waveform that reacts to hover/scroll (even if no real audio yet)
7. Contact

### Future-proofing note
Structure the project so that later we can easily add a video upload / sharing platform (think simple dashboard + public video pages). For now focus 100% on the beautiful frontend experience.

### Code quality expectations
- Clean, well-organized component structure
- Custom hooks for GSAP animations where it makes sense
- Proper TypeScript
- Good performance (lazy load heavy things, respect prefers-reduced-motion)
- Mobile first but desktop is the main experience
- Accessibility basics (keyboard nav, focus states that look good with the design)

Start by scaffolding the full project structure, global styles, GSAP + Lenis setup, the advanced navbar, and the hero section with all the heavy animations and background motion.

Then continue building section by section.

Make it feel expensive, alive, and personal — not like another generic dark portfolio.

## My info

<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00E5FF,50:0891B2,100:0F172A&height=180&section=header&text=Maks%20Solomon&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Frontend%20Developer%20%7C%20JavaScript%20%C2%B7%20TypeScript%20%C2%B7%20React%20%C2%B7%20Next.js&descSize=18&descAlignY=55&descColor=e2e8f0" alt="Header Banner" width="100%"/>
</p>

<p align="center">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=22&duration=3000&pause=1200&color=00E5FF&center=true&vCenter=true&multiline=true&repeat=true&width=650&height=70&lines=Frontend+Developer;JavaScript+%7C+TypeScript+%7C+React+%7C+Next.js;" alt="Typing SVG" />
</p>

</br>

<p align="center" >
<img src="https://skillicons.dev/icons?i=js,ts,react,nextjs,html,css,tailwind,threejs,nodejs,vite,nestjs,express,python,electron,git,figma&perline=8" />
</p>

<br/>


# Hi, I'm Maks Solomon 👋

**Frontend Developer** focused on **React**, **Next.js**, **JavaScript** and smooth animations.

📍 Poznań, Poland  · 🇬🇧 English (B2) · 🇵🇱 Polish (B2)

---

### About me

Self-taught frontend developer.  
I started building websites and web/mobile application development **5 years ago**,  and for the **past year** I’ve been fully focused on the modern stack.

I care about:
- Smooth animations & micro-interactions (GSAP, Framer Motion)
- Clean architecture and reusable components
- Performance and good UX
- Pixel-perfect, responsive interfaces

### Growing into full-stack

I'm actively expanding my skill set toward full-stack development. On the backend I'm working with Node.js, Express, learning how to design APIs, structure server-side code and connect it cleanly to the frontend. Frontend is where I'm strongest today; backend is a work in progress, and I'm building real projects to practice it rather than just following tutorials.

Currently looking for **junior / mid frontend** opportunities (React / Next.js).

---

### Selected Projects

| Project | Description | Tech | Links |
|---------|-------------|------|-------|
| **Portfolio Website** | Animated product landing page inspired by Apple | React, Vite, Tailwind, GSAP, Three.js | [Repo](https://github.com/makssolomon2-hash/nextjs-ts-portfolio)|
| **PERSONAL FRONT-END STARTER** | Scroll-triggered animations & landing reveals | React, PS1| [Repo](https://github.com/makssolomon2-hash/front-end-starters) |
| **MacBook Landing** | Animated product landing page inspired by Apple | React, Vite, Tailwind, GSAP, Three.js | [Repo](https://github.com/makssolomon2-hash/macbook-landing) |
| **Mobbin Remake** | Clean UI remake focused on modern layout patterns | Next.js / React, Tailwind | [Repo](https://github.com/makssolomon2-hash/mobbin-remake) |
| **Cloudy** | 	Modern web messenger with real-time chat, user profiles, dark/light themes | React, GSAP, Tailwind | [Repo](https://github.com/makssolomon2-hash/cloudy) |
| **DJ-DIGGER WEB-UI** | Responsive web interface for a music-discovery tool for DJs, with smooth transitions and animated interactions | React, GSAP, Tailwind | [Repo](https://github.com/makssolomon2-hash/dj-digger-ui) |
| **3D Moon Phase Calendar** | Interactive real-time 3D moon phase calendar | React, Three.js, GSAP | [Repo](https://github.com/makssolomon2-hash/moon-3d-calendar) |
| **GSAP Practice** | Scroll-triggered animations & landing reveals | React, GSAP, Tailwind | [Repo](https://github.com/makssolomon2-hash/gsap-practice) |

---

### Connect with me

- 📧 **Email:** maks.solomon2@gmail.com
- 🐙 **GitHub:** [github.com/makssolomon2-hash](https://github.com/makssolomon2-hash)
- 💼 **LinkedIn:** *(add your LinkedIn link here)*

---

### Tech Stack:

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

---





<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,50:0891B2,100:00E5FF&height=100&section=footer&text=Thanks%20for%20visiting!&fontSize=24&fontColor=ffffff&animation=fadeIn" alt="Footer Banner" width="100%"/>
</p>

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
