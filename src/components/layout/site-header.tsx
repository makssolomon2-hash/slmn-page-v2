import ClerkNavActions from "@/components/ui/clerk-nav-actions";
import { SocialIcon } from "@/components/ui/icons";
import { navigationItems, socialLinks } from "@/data/portfolio";

const headerLinkClass =
  "relative py-2 text-[11px] text-slate-300 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

export default function SiteHeader() {
  return (
    <header
      className="fixed inset-x-0 top-4 z-20 mx-auto grid min-h-[68px] w-[calc(100%-24px)] max-w-[1160px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 rounded-[18px] border border-white/15 bg-[linear-gradient(125deg,rgba(17,25,30,0.78),rgba(7,12,15,0.72)_52%,rgba(0,30,38,0.76))] px-4 py-2 shadow-[0_18px_54px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.13)] backdrop-blur-2xl min-[1081px]:w-[min(1160px,calc(100%-36px))] min-[1081px]:gap-7"
      data-site-header
    >
      <a
        aria-label="Maks Solomon home"
        className="flex items-center gap-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        href="#top"
      >
        <span className="text-[19px] font-extrabold tracking-[0.16em] text-cyan-300">MS</span>
        <span className="text-[10px] font-semibold tracking-[0.12em] text-slate-100 min-[1081px]:text-xs">
          MAKS SOLOMON
        </span>
      </a>

      <nav
        aria-label="Main navigation"
        className="flex items-center justify-center gap-3 max-[1080px]:hidden min-[1081px]:gap-6"
      >
        {navigationItems.map((item) => (
          <a
            className={`${headerLinkClass} after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-cyan-300 after:transition-transform after:duration-200 hover:after:origin-left hover:after:scale-x-100 [&.is-active]:text-cyan-200 [&.is-active]:after:scale-x-100`}
            data-magnetic-link
            data-nav-target={item.href}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center justify-self-end gap-3 max-[1080px]:hidden">
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <a
              aria-label={social.label}
              className="grid size-9 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.08] hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              data-magnetic-link
              href={social.href}
              key={social.kind}
              rel="noreferrer"
              target="_blank"
              title={social.label}
            >
              <span className="size-4">
                <SocialIcon kind={social.kind} />
              </span>
            </a>
          ))}
        </div>
        <ClerkNavActions />
      </div>

      <details className="group relative hidden justify-self-end max-[1080px]:block" data-mobile-menu>
        <summary className="flex min-h-10 cursor-pointer list-none items-center gap-3 text-xs text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden">
          Menu
          <span aria-hidden="true" className="grid w-[18px] gap-[5px]">
            <span className="h-px bg-cyan-300 transition-transform group-open:translate-y-[3px] group-open:rotate-45" />
            <span className="ml-auto h-px w-3 bg-cyan-300 transition-all group-open:w-[18px] group-open:-translate-y-[3px] group-open:-rotate-45" />
          </span>
        </summary>
        <nav
          aria-label="Mobile navigation"
          className="absolute right-0 top-[calc(100%+14px)] z-10 grid w-[min(320px,calc(100vw-40px))] gap-1 rounded-xl border border-white/15 bg-[linear-gradient(145deg,rgba(15,22,27,0.94),rgba(7,12,15,0.92))] p-2 shadow-[0_20px_48px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          data-mobile-nav
        >
          {navigationItems.map((item) => (
            <a
              className="flex min-h-[42px] items-center rounded-md px-3 text-[13px] text-slate-200 transition hover:bg-cyan-300/[0.08] hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-cyan-300"
              href={item.href}
              key={item.href}
            >
              {item.label === "Work" ? "Development" : item.label}
            </a>
          ))}
          {socialLinks.map((social) => (
            <a
              className="flex min-h-[42px] items-center gap-2 rounded-md px-3 text-[13px] text-slate-300 hover:bg-cyan-300/[0.08] hover:text-cyan-200"
              href={social.href}
              key={social.kind}
              rel="noreferrer"
              target="_blank"
            >
              <span className="size-4"><SocialIcon kind={social.kind} /></span>
              {social.label}
              <span aria-hidden="true" className="ml-auto">↗</span>
            </a>
          ))}
          <ClerkNavActions mobile />
        </nav>
      </details>
    </header>
  );
}