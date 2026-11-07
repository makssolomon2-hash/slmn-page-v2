import Link from "next/link";
import Image from "next/image";
import type { ArchivePost } from "@/data/archive";
import HeroWorld from "@/components/ui/hero-world";
import ProjectArtwork from "@/components/sections/project-artwork";
import BrandLink from "@/components/ui/brand-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProjectDetail({ project }: { project: ArchivePost }) {
  return (
    <div className="relative isolate min-h-screen">
      <HeroWorld dimmed />
      <main className="relative z-[1] mx-auto min-h-screen w-[calc(100%-32px)] max-w-[1160px] sm:w-[calc(100%-48px)]">
        <header className="flex min-h-[72px] items-center justify-between gap-4 border-b border-white/10 sm:min-h-[92px]">
          <BrandLink href="/" />
          <Link className={cn(buttonVariants({ variant: "link" }), "gap-2 text-[10px] sm:text-xs")} href="/#development">
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
          {project.screenshot ? (
            <div className="relative mt-10 aspect-[1.85] overflow-hidden rounded-lg border border-white/10 bg-[#080808] sm:mt-14">
              <Image alt={project.screenshot.alt} className="object-contain" fill sizes="(max-width: 1208px) calc(100vw - 48px), 1160px" src={project.screenshot.src} />
            </div>
          ) : (
            <ProjectArtwork cover={project.cover} title={project.title} />
          )}

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
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-8 gap-5")}
            href={`https://github.com/makssolomon2-hash/${project.repository}`}
            rel="noreferrer"
            target="_blank"
          >
            View source on GitHub <span aria-hidden="true" className="text-base text-cyan-300">↗</span>
          </a>
        </section>

      </main>
      <footer className="relative z-[1] bg-black">
        <div className="mx-auto flex min-h-[62px] w-[calc(100%-32px)] max-w-[1160px] items-center justify-between gap-4 border-t border-white/10 text-[8px] tracking-[0.1em] text-slate-500 sm:w-[calc(100%-48px)]">
          <span>© 2026 MAKS SOLOMON</span>
          <Link className={cn(buttonVariants({ variant: "link" }), "text-[8px] tracking-[0.1em]")} href="/#development">BACK TO SELECTED WORK ↑</Link>
        </div>
      </footer>
    </div>
  );
}