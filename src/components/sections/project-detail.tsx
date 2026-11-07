import Link from "next/link";
import type { ArchivePost } from "@/data/archive";
import HeroWorld from "@/components/ui/hero-world";
import ProjectArtwork from "@/components/sections/project-artwork";

export default function ProjectDetail({ project }: { project: ArchivePost }) {
  return (
    <div className="relative min-h-screen">
      <HeroWorld />
      <main className="relative z-[1] mx-auto min-h-screen w-[calc(100%-32px)] max-w-[1160px] sm:w-[calc(100%-48px)]">
        <header className="flex min-h-[72px] items-center justify-between gap-4 border-b border-white/10 sm:min-h-[92px]">
          <Link className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.1em] sm:gap-3 sm:text-[11px]" href="/">
            <span className="grid size-9 place-items-center rounded-full border border-cyan-300/40 text-[10px] tracking-normal text-cyan-300">MS</span>
            <span>MAKS SOLOMON</span>
          </Link>
          <Link className="inline-flex items-center gap-2 text-[10px] text-slate-400 transition hover:text-cyan-200 sm:text-xs" href="/#development">
            <span aria-hidden="true" className="text-base text-cyan-300">←</span> All projects
          </Link>
        </header>

        <section className="py-16 sm:py-28" aria-labelledby="project-title">
          <p className="text-[9px] tracking-[0.16em] text-cyan-300">SELECTED WORK / {project.category}</p>
          <h1 className="mt-5 max-w-[880px] text-[46px] font-semibold leading-[0.98] text-slate-50 sm:text-[76px] lg:text-[106px]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[620px] text-base leading-7 text-slate-400 sm:text-lg">
            {project.description}
          </p>
          <ProjectArtwork cover={project.cover} title={project.title} />

          <div className="grid gap-10 border-b border-white/10 py-12 sm:py-[70px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="text-[9px] tracking-[0.16em] text-cyan-300">OVERVIEW</p>
              <h2 className="mt-5 max-w-[430px] text-[28px] font-semibold leading-tight text-slate-100 sm:text-4xl">
                A study in thoughtful interaction.
              </h2>
              <p className="mt-4 max-w-[500px] text-[13px] leading-7 text-slate-400">
                A personal project exploring interface design, responsive layouts, and the details that make a digital experience feel clear and considered.
              </p>
            </div>
            <dl className="grid content-start">
              {[
                ["ROLE", "Design & development"],
                ["TOOLS", project.stack.join(" · ")],
                ["TYPE", project.category],
                ["STATUS", "Independent project"],
              ].map(([label, value]) => (
                <div className="grid grid-cols-[80px_1fr] gap-4 border-b border-white/10 py-4 sm:grid-cols-[100px_1fr]" key={label}>
                  <dt className="text-[8px] tracking-[0.13em] text-slate-500">{label}</dt>
                  <dd className="m-0 text-[11px] leading-6 text-slate-300">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <a
            className="mt-8 inline-flex min-h-12 items-center gap-5 rounded border border-cyan-300/40 bg-cyan-400/[0.08] px-5 text-[11px] text-cyan-50 transition hover:border-cyan-300 hover:bg-cyan-400/[0.16] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            href={`https://github.com/makssolomon2-hash/${project.repository}`}
            rel="noreferrer"
            target="_blank"
          >
            View source on GitHub <span aria-hidden="true" className="text-base text-cyan-300">↗</span>
          </a>
        </section>

        <footer className="flex min-h-[62px] items-center justify-between gap-4 border-t border-white/10 text-[8px] tracking-[0.1em] text-slate-500">
          <span>© 2026 MAKS SOLOMON</span>
          <Link className="text-slate-300 transition hover:text-cyan-300" href="/#development">BACK TO SELECTED WORK ↑</Link>
        </footer>
      </main>
    </div>
  );
}