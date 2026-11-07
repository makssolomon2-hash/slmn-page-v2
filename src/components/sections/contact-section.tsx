import ActionLink from "@/components/ui/action-link";

export default function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className="mx-auto w-[calc(100%-48px)] max-w-[1160px] pb-20 sm:pb-28" id="about">
      <div className="relative min-h-[360px] overflow-hidden rounded-[10px] border border-cyan-100/15 bg-[linear-gradient(115deg,rgba(0,200,232,0.1),rgba(14,22,25,0.68)_58%,rgba(13,23,27,0.62))] p-7 shadow-[inset_0_1px_rgba(255,255,255,0.07),0_26px_80px_rgba(0,0,0,0.16)] backdrop-blur-2xl sm:p-14" data-reveal>
        <p className="text-[9px] font-bold tracking-[0.14em] text-cyan-300">05 / CONTACT &amp; COLLABORATION</p>
        <h2 className="relative z-[1] mt-6 text-[40px] font-semibold leading-[1.03] text-slate-50 sm:text-[56px] lg:text-[70px]" id="contact-title">
          Have a good
          <br />
          <span className="text-cyan-300">one in mind?</span>
        </h2>
        <p className="relative z-[1] mb-6 mt-4 max-w-[520px] text-[13px] leading-7 text-slate-300">
          I&apos;m looking for junior to mid-level frontend opportunities in React and Next.js, and open to thoughtful collaborations.
        </p>
        <ActionLink diagonal href="mailto:maks.solomon2@gmail.com">Let&apos;s talk</ActionLink>
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-[20%] right-[2%] text-[clamp(11rem,28vw,23rem)] font-extrabold leading-none text-white/[0.025]">MS</span>
      </div>
    </section>
  );
}