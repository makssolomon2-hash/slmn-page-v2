import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import HeroWorld from "@/components/ui/hero-world";
import { archivePosts } from "@/data/archive";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return archivePosts
    .filter((project) =>
      ["portfolio-website", "macbook-landing", "mobbin-remake", "dj-digger-web-ui"].includes(
        project.slug,
      ),
    )
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = archivePosts.find((item) => item.slug === slug);

  return {
    title: project
      ? `${project.title} — Maks Solomon`
      : "Project — Maks Solomon",
    description: project?.description,
  };
}

function ProjectArtwork({ cover, title }: { cover: string; title: string }) {
  return (
    <div className={`project-artwork project-artwork-${cover}`} role="img" aria-label={`${title} visual preview`}>
      <div className="artwork-glow" />
      <div className="artwork-frame">
        <div className="artwork-topbar">
          <span />
          <span />
          <span />
          <i>PROJECT PREVIEW</i>
        </div>
        <div className="artwork-content">
          {cover === "signal" ? (
            <div className="artwork-wave" aria-hidden="true">
              {Array.from({ length: 48 }, (_, index) => (
                <span
                  key={index}
                  style={{ "--bar": `${16 + ((index * 37) % 74)}%` } as CSSProperties}
                />
              ))}
            </div>
          ) : cover === "moon" || cover === "orbit" ? (
            <div className="artwork-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
              <i />
            </div>
          ) : cover === "grid" ? (
            <div className="artwork-grid" aria-hidden="true">
              {Array.from({ length: 12 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
          ) : (
            <div className="artwork-layout" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          )}
          <p>{title}</p>
        </div>
      </div>
      <span className="artwork-caption">VISUAL STUDY / REPLACE WITH PROJECT SCREENSHOT</span>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = archivePosts.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <div className="site-shell project-site-shell">
      <HeroWorld />
      <main className="project-detail">
      <header className="project-detail-header">
        <Link className="project-detail-brand" href="/">
          <span className="project-detail-mark">MS</span>
          <span>MAKS SOLOMON</span>
        </Link>
        <Link className="project-back-link" href="/#development">
          <span aria-hidden="true">←</span> All projects
        </Link>
      </header>

      <section className="project-detail-main" aria-labelledby="project-title">
        <p className="project-detail-kicker">SELECTED WORK / {project.category}</p>
        <h1 id="project-title">{project.title}</h1>
        <p className="project-detail-description">{project.description}</p>
        <ProjectArtwork cover={project.cover} title={project.title} />

        <div className="project-detail-information">
          <div className="project-detail-about">
            <p className="project-detail-label">OVERVIEW</p>
            <h2>A study in thoughtful interaction.</h2>
            <p>
              A personal project exploring interface design, responsive
              layouts, and the details that make a digital experience feel
              clear and considered.
            </p>
          </div>
          <dl className="project-detail-facts">
            <div>
              <dt>ROLE</dt>
              <dd>Design &amp; development</dd>
            </div>
            <div>
              <dt>TOOLS</dt>
              <dd>{project.stack.join(" · ")}</dd>
            </div>
            <div>
              <dt>TYPE</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>STATUS</dt>
              <dd>Independent project</dd>
            </div>
          </dl>
        </div>

        <a
          className="project-repository-link"
          href={`https://github.com/makssolomon2-hash/${project.repository}`}
          target="_blank"
          rel="noreferrer"
        >
          View source on GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="project-detail-footer">
        <span>© 2026 MAKS SOLOMON</span>
        <Link href="/#development">BACK TO SELECTED WORK ↑</Link>
      </footer>
      </main>
    </div>
  );
}
