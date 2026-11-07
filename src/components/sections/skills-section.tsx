import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section className="border-b border-white/10 bg-[radial-gradient(ellipse_at_90%_40%,rgba(0,200,232,0.075),transparent_35%)] py-24 sm:py-32" id="studio">
      <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1160px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <div data-reveal>
          <p className="text-[9px] font-bold tracking-[0.14em] text-cyan-300">02 / TOOLS &amp; PRACTICE</p>
          <h2 className="mt-4 text-[42px] font-semibold leading-[1.02] text-slate-50 sm:text-[54px] lg:text-[76px]">
            The things
            <br />
            I work <span className="text-cyan-300">with.</span>
          </h2>
          <p className="mt-6 max-w-[420px] text-[13px] leading-7 text-slate-400">
            Frontend is where I&apos;m strongest today. I&apos;m growing into full-stack development with Node.js and Express.
          </p>
        </div>
        <ul aria-label="Skills and tools" className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3" data-reveal>
          {skills.map((skill, index) => (
            <li className="flex min-h-[68px] items-center gap-3 border-b border-r border-white/10 bg-white/[0.016] px-3 text-[11px] text-slate-200 transition hover:bg-cyan-300/[0.07] hover:text-cyan-100 sm:min-h-20 sm:px-4 sm:text-xs" key={skill}>
              <span className="text-[8px] text-slate-500">{String(index + 1).padStart(2, "0")}</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}