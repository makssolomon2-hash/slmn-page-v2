import SectionHeading from "@/components/ui/section-heading";
import SignalOrb from "@/components/ui/signal-orb";
import SoundCloudLinks from "@/components/ui/soundcloud-links";
import SoundCloudPlayers from "@/components/ui/soundcloud-players";

export default function MusicSection() {
  return (
    <section className="mx-auto w-[calc(100%-48px)] max-w-[1160px] py-24 sm:py-32" id="music">
      <SectionHeading
        description="Electronic music and DJ sets live alongside the work I make for the screen."
        eyebrow="03 / MUSIC &amp; DJ CULTURE"
      >
        Outside the
        <br />
        <span className="text-cyan-300">browser.</span>
      </SectionHeading>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-black/75 p-6 backdrop-blur-xl sm:p-12" data-reveal>
        <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(180px,280px)] sm:gap-10">
          <div>
            <p className="text-[9px] font-bold tracking-[0.14em] text-cyan-300">LISTEN ON SOUNDCLOUD</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-50 sm:text-2xl">Music I make. Sets I play.</h3>
            <p className="mb-6 mt-2 max-w-[440px] text-xs leading-6 text-slate-400">Explore my music and DJ sets on my SoundCloud profiles. Nothing plays automatically here.</p>
            <SoundCloudLinks />
          </div>
          <SignalOrb />
        </div>
        <SoundCloudPlayers />
      </div>
    </section>
  );
}