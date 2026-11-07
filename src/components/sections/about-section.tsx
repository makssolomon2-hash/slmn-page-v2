import SectionHeading from "@/components/ui/section-heading";
import { ArrowIcon } from "@/components/ui/icons";

const worlds = [
  {
    number: "01 / DEVELOPMENT",
    title: "Interfaces with intention.",
    description:
      "I care about clean architecture, reusable components, accessibility, and the small interactions that make a product feel considered.",
    link: "#development",
    linkLabel: "Selected projects",
    accent: false,
  },
  {
    number: "02 / MUSIC",
    title: "Curiosity in every frequency.",
    description:
      "Electronic music production and DJ culture are an ongoing creative practice. Tracks, mixes, and performance details will be added when they’re ready.",
    link: "#music",
    linkLabel: "Enter the music space",
    accent: true,
  },
];

export default function AboutSection() {
  return (
    <section className="mx-auto w-[calc(100%-48px)] max-w-[1160px] border-t border-white/10 py-24 sm:py-32" id="journey">
      <SectionHeading
        description="Self-taught and based in Poznań, Poland. I’ve been building web and mobile experiences for five years, with a recent focus on React and Next.js."
        eyebrow="A LITTLE ABOUT ME"
      >
        Two creative worlds.
        <br />
        <span className="text-cyan-300">One curious mind.</span>
      </SectionHeading>
      <div className="grid gap-4 md:grid-cols-2">
        {worlds.map((world) => (
          <article
            className={`min-h-[270px] rounded-[9px] border border-cyan-100/15 p-6 shadow-[inset_0_1px_rgba(255,255,255,0.07),0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:p-9 ${world.accent ? "bg-[linear-gradient(145deg,rgba(0,200,232,0.08),rgba(255,255,255,0.025)_48%,rgba(5,15,18,0.18))]" : "bg-[linear-gradient(145deg,rgba(204,242,248,0.075),rgba(255,255,255,0.02)_46%,rgba(5,15,18,0.18))]"}`}
            data-reveal
            key={world.number}
          >
            <span className="text-[9px] tracking-[0.13em] text-slate-400">{world.number}</span>
            <h3 className="mt-10 text-[clamp(1.4rem,2.8vw,1.95rem)] font-semibold text-slate-50">{world.title}</h3>
            <p className="mt-3 max-w-[490px] text-[13px] leading-7 text-slate-400">{world.description}</p>
            <a className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-cyan-300 transition hover:text-cyan-200" href={world.link}>
              {world.linkLabel} <ArrowIcon />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}