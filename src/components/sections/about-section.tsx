import SectionHeading from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const worlds = [
  {
    number: "01 / DEVELOPMENT",
    title: "Interfaces with intention.",
    description:
      "I care about clean architecture, reusable components, accessibility, and the small interactions that make a product feel considered.",
    link: "#development",
    linkLabel: "Selected projects",
  },
  {
    number: "02 / MUSIC",
    title: "Curiosity in every frequency.",
    description:
      "Electronic music production and DJ culture are an ongoing creative practice. Find my music and DJ sets on SoundCloud.",
    link: "#music",
    linkLabel: "Enter the music space",
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
      <div className="grid overflow-hidden rounded-xl border border-white/10 bg-black/70 md:grid-cols-2">
        {worlds.map((world) => (
          <article
            className="min-h-[270px] border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:first:border-r sm:p-9"
            data-reveal
            key={world.number}
          >
            <span className="text-[9px] tracking-[0.13em] text-slate-400">{world.number}</span>
            <h3 className="mt-10 text-[clamp(1.4rem,2.8vw,1.95rem)] font-semibold text-slate-50">{world.title}</h3>
            <p className="mt-3 max-w-[490px] text-[13px] leading-7 text-slate-400">{world.description}</p>
            <a className={cn(buttonVariants({ variant: "link" }), "mt-6 gap-2 text-xs font-semibold text-white")} href={world.link}>
              {world.linkLabel} <ArrowIcon />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}