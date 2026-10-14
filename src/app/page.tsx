import MotionEnhancer from "@/app/MotionEnhancer";
import ClerkNavActions from "@/components/ui/clerk-nav-actions";
import HeroWorld from "@/components/ui/hero-world";

const projects = [
  {
    number: "01",
    title: "Portfolio Website",
    description: "An expressive product landing page, inspired by the clarity of Apple.",
    stack: "REACT · VITE · TAILWIND · GSAP · THREE.JS",
    href: "https://github.com/makssolomon2-hash/nextjs-ts-portfolio",
  },
  {
    number: "02",
    title: "MacBook Landing",
    description: "A responsive product story built around motion and visual detail.",
    stack: "REACT · VITE · TAILWIND · GSAP · THREE.JS",
    href: "https://github.com/makssolomon2-hash/macbook-landing",
  },
  {
    number: "03",
    title: "Mobbin Remake",
    description: "A clean interface study focused on modern layout patterns.",
    stack: "NEXT.JS · REACT · TAILWIND",
    href: "https://github.com/makssolomon2-hash/mobbin-remake",
  },
  {
    number: "04",
    title: "DJ-Digger Web UI",
    description: "A music-discovery interface for DJs, with considered transitions.",
    stack: "REACT · GSAP · TAILWIND",
    href: "https://github.com/makssolomon2-hash/dj-digger-ui",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "GSAP",
  "Three.js",
  "Node.js",
  "Figma",
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 20 20" fill="none">
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function SocialIcon({ kind }: { kind: "github" | "discord" }) {
  return kind === "github" ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.29-.5-1.43.11-2.98 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.05-1.14 3.05-1.14.61 1.55.23 2.69.11 2.98.72.78 1.15 1.78 1.15 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.73 5.17a18.2 18.2 0 0 0-4.5-1.39l-.55 1.12a16.9 16.9 0 0 0-5.36 0l-.55-1.12a18.2 18.2 0 0 0-4.5 1.39C1.42 9.36.65 13.44 1.03 17.47a18.3 18.3 0 0 0 5.52 2.79l1.19-1.93a11.9 11.9 0 0 1-1.87-.9l.46-.36c3.61 1.67 7.52 1.67 11.09 0l.47.36c-.6.36-1.23.66-1.88.9l1.19 1.93a18.2 18.2 0 0 0 5.52-2.79c.45-4.68-.77-8.72-3-12.3ZM8.39 15.2c-1.08 0-1.97-.99-1.97-2.2s.87-2.21 1.97-2.21 1.98.99 1.97 2.2c0 1.22-.87 2.21-1.97 2.21Zm7.22 0c-1.08 0-1.97-.99-1.97-2.2s.87-2.21 1.97-2.21 1.98.99 1.97 2.2c0 1.22-.87 2.21-1.97 2.21Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <MotionEnhancer />
      <div className="site-shell" id="top">
        <a className="skip-link" href="#main-content">
          Skip intro
        </a>

        <HeroWorld />

        <section className="opening" id="opening" aria-label="SLMN pixel animation">
          <a className="opening-scroll" href="#main-content" aria-label="Scroll to enter">
            <span />
          </a>
        </section>

        <header className="site-header">
          <a className="brand" href="#top" aria-label="Maks Solomon home">
            <span className="brand-mark">MS</span>
            <span className="brand-word">MAKS SOLOMON</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a data-nav-target="#development" data-nav-item href="#development">Work</a>
            <a data-nav-target="#music" data-nav-item href="#music">Music</a>
            <a data-nav-target="#studio" data-nav-item href="#studio">Studio</a>
            <a data-nav-target="#learn" data-nav-item href="#learn">Learn</a>
            <a data-nav-target="#video" data-nav-item href="#video">Video</a>
            <a data-nav-target="#about" data-nav-item href="#about">About</a>
          </nav>

          <div className="header-utilities">
            <div className="header-socials">
              <a
                className="social-link"
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord (replace with your profile or invite)"
                title="Discord"
              >
                <SocialIcon kind="discord" />
              </a>
              <a
                className="social-link"
                href="https://github.com/makssolomon2-hash"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <SocialIcon kind="github" />
              </a>
            </div>
            <ClerkNavActions />
          </div>

          <details className="mobile-menu">
            <summary aria-label="Toggle navigation menu">
              <span>Menu</span>
              <span className="menu-lines" aria-hidden="true">
                <span />
                <span />
              </span>
            </summary>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              <a href="#development">Development</a>
              <a href="#music">Music</a>
              <a href="#studio">Studio</a>
              <a href="#learn">Learn</a>
              <a href="#video">Video</a>
              <a href="#about">About / Contact</a>
              <a href="https://discord.com" target="_blank" rel="noreferrer">
                Discord ↗
              </a>
              <a
                href="https://github.com/makssolomon2-hash"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <ClerkNavActions mobile />
            </nav>
          </details>
        </header>

        <main id="main-content">
          <section className="main-hero" id="main-hero" aria-labelledby="hero-title">
            <div className="main-hero-content">
              <p className="eyebrow" data-hero-enter>
                <span className="status-dot" />
                FRONTEND DEVELOPER · CREATIVE IN PROGRESS
              </p>
              <h1 id="hero-title" data-hero-enter>
                Building for the
                <br />
                <span>screen &amp; sound.</span>
              </h1>
              <p className="main-hero-description" data-hero-enter>
                I&apos;m Maks — a frontend developer drawn to thoughtful
                interfaces, expressive motion, and electronic music.
              </p>
              <div className="hero-actions" data-hero-enter>
                <a className="button button-primary" href="#development">
                  Explore my work <ArrowIcon />
                </a>
                <a className="button button-secondary" href="#about">
                  Get in touch <ArrowIcon diagonal />
                </a>
              </div>
            </div>
            <span className="hero-section-index" aria-hidden="true">
              01 <span /> 06
            </span>
          </section>

          <section className="about-section section-wrap" id="journey">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">A LITTLE ABOUT ME</p>
                <h2>
                  Two creative worlds.
                  <br />
                  <span>One curious mind.</span>
                </h2>
              </div>
              <p className="section-intro">
                Self-taught and based in Poznań, Poland. I&apos;ve been building
                web and mobile experiences for five years, with a recent focus
                on React and Next.js.
              </p>
            </div>
            <div className="identity-grid">
              <article className="identity-card" data-reveal>
                <span className="identity-number">01 / DEVELOPMENT</span>
                <h3>Interfaces with intention.</h3>
                <p>
                  I care about clean architecture, reusable components,
                  accessibility, and the small interactions that make a product
                  feel considered.
                </p>
                <a className="text-link" href="#development">
                  Selected projects <ArrowIcon />
                </a>
              </article>
              <article className="identity-card identity-card-music" data-reveal>
                <span className="identity-number">02 / MUSIC</span>
                <h3>Curiosity in every frequency.</h3>
                <p>
                  Electronic music production and DJ culture are an ongoing
                  creative practice. Tracks, mixes, and performance details will
                  be added when they&apos;re ready.
                </p>
                <a className="text-link" href="#music">
                  Enter the music space <ArrowIcon />
                </a>
              </article>
            </div>
          </section>

          <section className="projects-section section-wrap" id="development">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">01 / SELECTED DEVELOPMENT</p>
                <h2>
                  A few things
                  <br />
                  <span>I&apos;ve made.</span>
                </h2>
              </div>
              <p className="section-intro">
                Personal projects and interface experiments. Each link opens its
                source repository.
              </p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <a
                  className="project-row"
                  data-reveal
                  href={project.href}
                  key={project.number}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="project-number">{project.number}</span>
                  <div className="project-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span className="project-stack">{project.stack}</span>
                  <span className="project-link" aria-hidden="true">
                    <ArrowIcon diagonal />
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="skills-section" id="studio">
            <div className="section-wrap skills-layout">
              <div data-reveal>
                <p className="eyebrow">02 / TOOLS &amp; PRACTICE</p>
                <h2>
                  The things
                  <br />
                  I work <span>with.</span>
                </h2>
                <p className="section-intro">
                  Frontend is where I&apos;m strongest today. I&apos;m growing
                  into full-stack development with Node.js and Express.
                </p>
              </div>
              <div className="skill-cloud" data-reveal aria-label="Skills and tools">
                {skills.map((skill, index) => (
                  <span key={skill}>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="music-section section-wrap" id="music">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">03 / MUSIC &amp; DJ CULTURE</p>
                <h2>
                  Outside the
                  <br />
                  <span>browser.</span>
                </h2>
              </div>
              <p className="section-intro">
                A space for future mixes, releases, and notes from the studio.
                No audio plays until I add and choose to share it.
              </p>
            </div>
            <div className="music-note" data-reveal>
              <span className="music-note-mark" aria-hidden="true">S.</span>
              <div>
                <p className="eyebrow">A WORK IN PROGRESS</p>
                <h3>New sounds are taking shape.</h3>
                <p>Mixes, releases, and live set details will find a home here.</p>
              </div>
              <span className="coming-soon">MUSIC / SOON</span>
            </div>
          </section>

          <section className="learning-section section-wrap" id="learn">
            <div className="learning-copy" data-reveal>
              <p className="eyebrow">04 / LEARN &amp; MAKE</p>
              <h2>
                Notes from
                <br />
                the <span>process.</span>
              </h2>
              <p className="section-intro">
                A future collection of practical tutorials on frontend craft,
                Ableton, Serum, sound design, and creative software.
              </p>
              <span className="placeholder-label">ARTICLES &amp; VIDEO GUIDES / COMING SOON</span>
            </div>
            <div className="video-panel" id="video" data-reveal>
              <span className="video-play" aria-hidden="true">+</span>
              <span className="eyebrow">VIDEO LIBRARY / PREVIEW</span>
              <h3>A place for ideas in motion.</h3>
              <p>
                Video categories and shareable pages are planned. Uploads and
                accounts are not enabled.
              </p>
              <span className="placeholder-label">NO VIDEOS YET</span>
            </div>
          </section>

          <section
            className="contact-section section-wrap"
            id="about"
            aria-labelledby="contact-title"
          >
            <div className="contact-panel" data-reveal>
              <p className="eyebrow">05 / CONTACT &amp; COLLABORATION</p>
              <h2 id="contact-title">
                Have a good
                <br />
                <span>one in mind?</span>
              </h2>
              <p>
                I&apos;m looking for junior to mid-level frontend opportunities
                in React and Next.js, and open to thoughtful collaborations.
              </p>
              <a className="button button-primary" href="mailto:maks.solomon2@gmail.com">
                Let&apos;s talk <ArrowIcon diagonal />
              </a>
              <span className="contact-backdrop" aria-hidden="true">MS</span>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-main section-wrap">
            <div className="footer-intro">
              <a className="brand" href="#top" aria-label="Back to the top">
                <span className="brand-mark">M</span>
                <span className="brand-word">MAKS SOLOMON</span>
              </a>
              <p>Interfaces by day. Frequencies after hours.</p>
              <a className="footer-email" href="mailto:maks.solomon2@gmail.com">
                maks.solomon2@gmail.com <ArrowIcon diagonal />
              </a>
            </div>
            <div className="footer-column">
              <span>EXPLORE</span>
              <a href="#development">Development</a>
              <a href="#music">Music</a>
              <a href="#studio">Studio &amp; tools</a>
              <a href="#learn">Learn / Video</a>
            </div>
            <div className="footer-column">
              <span>ELSEWHERE</span>
              <a href="https://github.com/makssolomon2-hash" target="_blank" rel="noreferrer">
                GitHub <ArrowIcon diagonal />
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer">
                Discord <ArrowIcon diagonal />
              </a>
            </div>
          </div>
          <div className="footer-bottom section-wrap">
            <span>© 2026 MAKS SOLOMON</span>
            <span>MADE WITH INTENTION / POZNAŃ, PL</span>
            <a href="#top">BACK TO THE TOP ↑</a>
          </div>
        </footer>
      </div>
    </>
  );
}
