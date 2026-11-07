export default function LearningSection() {
  return (
    <section className="mx-auto grid w-[calc(100%-48px)] max-w-[1160px] gap-9 border-t border-white/10 py-24 sm:py-32 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16" id="learn">
      <div data-reveal>
        <p className="text-[9px] font-bold tracking-[0.14em] text-cyan-300">04 / LEARN &amp; MAKE</p>
        <h2 className="mt-4 text-[42px] font-semibold leading-[1.02] text-slate-50 sm:text-[54px] lg:text-[76px]">
          Notes from
          <br />
          the <span className="text-cyan-300">process.</span>
        </h2>
        <p className="mt-6 max-w-[460px] text-[13px] leading-7 text-slate-400">
          A future collection of practical tutorials on frontend craft, Ableton, Serum, sound design, and creative software.
        </p>
        <span className="mt-7 inline-block text-[8px] tracking-[0.13em] text-slate-400">ARTICLES &amp; VIDEO GUIDES / COMING SOON</span>
      </div>
      <div className="min-h-[290px] rounded-xl border border-white/10 bg-black/75 p-6 backdrop-blur-xl sm:p-8" data-reveal id="video">
        <span aria-hidden="true" className="mb-8 grid size-12 place-items-center rounded-full border border-cyan-300/40 text-xl text-cyan-300">+</span>
        <p className="text-[9px] font-bold tracking-[0.14em] text-cyan-300">VIDEO LIBRARY / PREVIEW</p>
        <h3 className="mt-3 text-xl font-semibold text-slate-50">A place for ideas in motion.</h3>
        <p className="mt-2 max-w-[430px] text-xs leading-6 text-slate-400">Video categories and shareable pages are planned. Uploads and accounts are not enabled.</p>
        <span className="mt-6 inline-block text-[8px] tracking-[0.13em] text-slate-400">NO VIDEOS YET</span>
      </div>
    </section>
  );
}