export default function OpeningIntro() {
  return (
    <section
      aria-label="SLMN particle animation"
      className="relative h-[100svh] min-h-[480px] overflow-hidden"
      id="opening"
    >
      <a
        aria-label="Scroll to enter"
        className="absolute bottom-6 left-1/2 grid h-12 w-[30px] -translate-x-1/2 place-items-start justify-center rounded-full border border-cyan-50/25 pt-[9px] sm:bottom-9"
        href="#main-content"
      >
        <span className="h-2 w-[3px] animate-[scroll-pulse_1.6s_ease-in-out_infinite] rounded-full bg-cyan-300 motion-reduce:animate-none" />
      </a>
    </section>
  );
}