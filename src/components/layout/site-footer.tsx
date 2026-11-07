import { ArrowIcon, SocialIcon } from "@/components/ui/icons";

const footerLinks = [
  { label: "Development", href: "#development" },
  { label: "Music", href: "#music" },
  { label: "Studio & tools", href: "#studio" },
  { label: "Learn / Video", href: "#learn" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/55 backdrop-blur-xl" data-site-footer>
      <div
        className="mx-auto grid w-[calc(100%-48px)] max-w-[1160px] grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:gap-32 lg:py-14"
        data-footer-main
      >
        <div className="sm:col-span-2 lg:col-span-1">
          <a aria-label="Back to the top" className="inline-flex items-center gap-2" href="#top">
            <span className="text-lg font-extrabold tracking-[0.14em] text-cyan-300">M</span>
            <span className="text-xs font-semibold tracking-[0.12em] text-slate-100">MAKS SOLOMON</span>
          </a>
          <p className="mt-5 text-xs text-slate-400">Interfaces by day. Frequencies after hours.</p>
          <a
            className="mt-3 inline-flex items-center gap-2 text-xs text-slate-200 transition hover:text-cyan-200"
            href="mailto:maks.solomon2@gmail.com"
          >
            maks.solomon2@gmail.com <ArrowIcon diagonal className="size-[13px]" />
          </a>
        </div>

        <div className="grid content-start gap-3">
          <span className="mb-1 text-[8px] tracking-[0.14em] text-slate-500">EXPLORE</span>
          {footerLinks.map((link) => (
            <a className="text-[11px] text-slate-300 transition hover:text-cyan-200" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="grid content-start gap-3">
          <span className="mb-1 text-[8px] tracking-[0.14em] text-slate-500">ELSEWHERE</span>
          <a
            className="inline-flex items-center gap-2 text-[11px] text-slate-300 transition hover:text-cyan-200"
            href="https://github.com/makssolomon2-hash"
            rel="noreferrer"
            target="_blank"
          >
            <span className="size-[15px]"><SocialIcon kind="github" /></span>
            GitHub <ArrowIcon diagonal className="size-[13px]" />
          </a>
          <a
            className="inline-flex items-center gap-2 text-[11px] text-slate-300 transition hover:text-cyan-200"
            href="https://discord.com"
            rel="noreferrer"
            target="_blank"
          >
            <span className="size-[15px]"><SocialIcon kind="discord" /></span>
            Discord <ArrowIcon diagonal className="size-[13px]" />
          </a>
        </div>
      </div>

      <div className="mx-auto flex min-h-14 w-[calc(100%-48px)] max-w-[1160px] flex-wrap items-center justify-between gap-3 border-t border-white/10 py-4 text-[8px] tracking-[0.1em] text-slate-500">
        <span>© 2026 MAKS SOLOMON</span>
        <span className="max-sm:hidden">MADE WITH INTENTION / POZNAŃ, PL</span>
        <a className="text-slate-300 transition hover:text-cyan-300" href="#top">BACK TO THE TOP ↑</a>
      </div>
    </footer>
  );
}