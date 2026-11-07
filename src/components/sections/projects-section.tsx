import Link from "next/link";
import Image from "next/image";
import { featuredProjects } from "@/data/portfolio";
import { ArrowIcon } from "@/components/ui/icons";
import SectionHeading from "@/components/ui/section-heading";

export default function ProjectsSection() {
  return (
    <section className="border-y border-white/10 bg-[var(--ambient-veil)] py-24 sm:py-32" id="development">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1160px]">
        <SectionHeading
          description="Personal projects and interface experiments. Open a project to see its overview and repository link."
          eyebrow="01 / SELECTED DEVELOPMENT"
        >
          A few things
          <br />
          <span className="text-cyan-300">I&apos;ve made.</span>
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#080808] transition-colors hover:border-white/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              data-reveal
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <div aria-hidden="true" className="relative flex aspect-[1.85] items-center justify-center overflow-hidden border-b border-white/10 bg-black">
                {project.screenshot ? (
                  <Image alt="" className="object-cover object-top transition duration-500 group-hover:scale-[1.03]" fill sizes="(max-width: 639px) 100vw, (max-width: 1208px) 50vw, 572px" src={project.screenshot.src} />
                ) : (
                  <>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="relative flex h-[68%] w-[75%] flex-col overflow-hidden rounded-md border border-white/15 bg-[#050505] shadow-2xl transition duration-500 group-hover:scale-[1.03]">
                  <div className="flex h-7 shrink-0 items-center gap-1 border-b border-white/10 px-3">
                    <span className="size-1 rounded-full bg-white/40" /><span className="size-1 rounded-full bg-white/20" /><span className="size-1 rounded-full bg-white/20" />
                    <span className="ml-auto text-[7px] tracking-[0.1em] text-white/40">PROJECT / {project.number}</span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center px-[10%]">
                    <span className="text-[7px] tracking-[0.15em] text-cyan-300/80">DIGITAL EXPERIENCE</span>
                    <span className="mt-2 max-w-[85%] text-[clamp(1rem,2.4vw,2rem)] font-bold leading-tight tracking-tight text-white/90">{project.title}</span>
                    <span className="mt-3 h-px w-12 bg-cyan-300/70" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 text-[7px] tracking-[0.1em] text-white/35">CONCEPT PREVIEW</span>
                  </>
                )}
              </div>
              <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="text-[9px] tracking-[0.12em] text-slate-500">{project.number} / PERSONAL PROJECT</p>
                  <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{project.title}</h3>
                  <p className="mt-2 max-w-[400px] text-xs leading-6 text-slate-400">{project.description}</p>
                  <p className="mt-4 text-[9px] tracking-[0.06em] text-slate-500">{project.stack.join(" · ").toUpperCase()}</p>
                </div>
                <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full border border-white/20 text-slate-300 transition group-hover:border-white/50 group-hover:text-white">
                  <ArrowIcon diagonal className="size-[15px]" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}