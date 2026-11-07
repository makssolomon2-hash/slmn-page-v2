import ActionLink from "@/components/ui/action-link";

export default function HomeHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative grid min-h-[min(830px,calc(100svh-74px))] place-items-center overflow-hidden px-5 py-24 text-center"
      id="main-hero"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,7,8,0.08),rgba(5,7,8,0.46)_72%)]" />
      <div className="relative z-[1] mx-auto w-full max-w-[900px]">
        <p className="mb-7 flex items-center justify-center gap-2.5 text-[8px] font-semibold tracking-[0.13em] text-cyan-50/80 sm:text-[10px]" data-hero-enter>
          <span aria-hidden="true" className="size-[7px] rounded-full bg-cyan-300 shadow-[0_0_13px_rgba(0,200,232,0.5)]" />
          FRONTEND DEVELOPER · CREATIVE IN PROGRESS
        </p>
        <h1 className="text-[54px] font-bold leading-[0.96] text-slate-50 sm:text-[76px] lg:text-[96px] xl:text-[118px]" data-hero-enter id="hero-title">
          Building for the
          <br />
          <span className="text-cyan-300">screen &amp; sound.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-[520px] text-sm leading-7 text-slate-300 sm:text-base" data-hero-enter>
          I&apos;m Maks, a frontend developer drawn to thoughtful interfaces, expressive motion, and electronic music.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3" data-hero-enter>
          <ActionLink href="#development">Explore my work</ActionLink>
          <ActionLink diagonal href="#about" variant="secondary">Get in touch</ActionLink>
        </div>
      </div>
      <span aria-hidden="true" className="absolute bottom-8 right-6 flex items-center gap-2 text-[9px] tracking-[0.12em] text-slate-400 sm:right-12">
        01 <span className="h-px w-[34px] bg-cyan-300" /> 06
      </span>
    </section>
  );
}