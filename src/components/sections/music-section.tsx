import SectionHeading from "@/components/ui/section-heading";

export default function MusicSection() {
  return (
    <section className="mx-auto w-[calc(100%-48px)] max-w-[1160px] py-24 sm:py-32" id="music">
      <SectionHeading
        description="A space for future mixes, releases, and notes from the studio. No audio plays until I add and choose to share it."
        eyebrow="03 / MUSIC &amp; DJ CULTURE"
      >
        Outside the
        <br />
        <span className="text-cyan-300">browser.</span>
      </SectionHeading>
      <div className="relative flex min-h-[260px] flex-col justify-center gap-5 overflow-hidden rounded-[9px] border border-cyan-100/15 bg-[linear-gradient(110deg,rgba(0,200,232,0.09),rgba(12,20,24,0.58)_50%,rgba(205,241,247,0.035))] p-6 shadow-[inset_0_1px_rgba(255,255,255,0.07),0_24px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:flex-row sm:items-center sm:gap-14 sm:p-12" data-reveal>
        <div aria-hidden="true" className="select-none text-[70px] font-bold leading-none text-cyan-300/40 sm:text-[130px]">S.</div>
        <div className="relative z-[1]">
          <p className="text-[9px] font-bold tracking-[0.14em] text-cyan-300">A WORK IN PROGRESS</p>
          <h3 className="mt-3 text-xl font-semibold text-slate-50 sm:text-2xl">New sounds are taking shape.</h3>
          <p className="mt-2 text-xs leading-6 text-slate-400">Mixes, releases, and live set details will find a home here.</p>
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] items-center justify-center gap-[5px] opacity-40 sm:flex">
          {Array.from({ length: 34 }, (_, index) => (
            <span
              className="w-[2px] rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(0,200,232,0.45)]"
              key={index}
              style={{ height: `${18 + ((index * 37) % 70)}%` }}
            />
          ))}
        </div>
        <span className="absolute bottom-5 right-5 text-[8px] tracking-[0.13em] text-slate-400">MUSIC / SOON</span>
      </div>
    </section>
  );
}