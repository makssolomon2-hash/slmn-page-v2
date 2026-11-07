import Link from "next/link";
import { featuredProjects } from "@/data/portfolio";
import { ArrowIcon } from "@/components/ui/icons";
import SectionHeading from "@/components/ui/section-heading";

export default function ProjectsSection() {
  return (
    <section className="border-y border-white/10 bg-black/35 py-24 sm:py-32" id="development">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1160px]">
        <SectionHeading
          description="Personal projects and interface experiments. Open a project to see its overview and repository link."
          eyebrow="01 / SELECTED DEVELOPMENT"
        >
          A few things
          <br />
          <span className="text-cyan-300">I&apos;ve made.</span>
        </SectionHeading>
        <div className="border-t border-white/20">
          {featuredProjects.map((project) => (
            <Link
              className="group grid min-h-[112px] grid-cols-[28px_minmax(0,1fr)_34px] items-center gap-3 border-b border-white/10 px-2 py-5 transition-colors hover:bg-white/[0.025] sm:grid-cols-[48px_minmax(220px,1.15fr)_minmax(180px,0.9fr)_36px] sm:gap-5 sm:px-4"
              data-reveal
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <span className="text-[10px] tracking-[0.1em] text-cyan-300">{project.number}</span>
              <div>
                <h3 className="text-base font-semibold text-slate-100 sm:text-xl">{project.title}</h3>
                <p className="mt-1.5 text-[11px] leading-5 text-slate-400 sm:text-xs">{project.description}</p>
              </div>
              <span className="col-start-2 row-start-2 text-[7px] leading-5 tracking-[0.08em] text-slate-500 sm:col-auto sm:row-auto sm:text-[8px]">
                {project.stack.join(" · ").toUpperCase()}
              </span>
              <span aria-hidden="true" className="col-start-3 row-span-2 grid size-[34px] place-items-center rounded-full border border-white/20 text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-cyan-300 group-hover:text-cyan-300 sm:col-start-4 sm:row-auto">
                <ArrowIcon diagonal className="size-[15px]" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}