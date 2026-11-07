import { ArrowIcon, SocialIcon } from "@/components/ui/icons";
import BrandLink from "@/components/ui/brand-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { soundcloudProfiles } from "@/data/portfolio";

const footerLinks = [
  { label: "Development", href: "/development" },
  { label: "Music", href: "/music" },
  { label: "Studio & tools", href: "/studio" },
  { label: "Learn", href: "/learn" },
  { label: "Video", href: "/video" },
  { label: "About", href: "/about" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black backdrop-blur-xl" data-site-footer>
      <div
        className="mx-auto grid w-[calc(100%-48px)] max-w-[1160px] grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:gap-32 lg:py-14"
        data-footer-main
      >
        <div className="sm:col-span-2 lg:col-span-1">
          <BrandLink href="/" />
          <p className="mt-5 text-xs text-slate-400">Interfaces by day. Frequencies after hours.</p>
          <a
            className={cn(buttonVariants({ variant: "link" }), "mt-3 gap-2 text-xs")}
            href="mailto:maks.solomon2@gmail.com"
          >
            maks.solomon2@gmail.com <ArrowIcon diagonal className="size-[13px]" />
          </a>
        </div>

        <div className="grid content-start gap-3">
          <span className="mb-1 text-[8px] tracking-[0.14em] text-slate-500">EXPLORE</span>
          {footerLinks.map((link) => (
            <Link className={cn(buttonVariants({ variant: "link" }), "justify-start text-[11px]")} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="grid content-start gap-3">
          <span className="mb-1 text-[8px] tracking-[0.14em] text-slate-500">ELSEWHERE</span>
          <a
            className={cn(buttonVariants({ variant: "link" }), "justify-start gap-2 text-[11px]")}
            href="https://github.com/makssolomon2-hash"
            rel="noreferrer"
            target="_blank"
          >
            <span className="size-[15px]"><SocialIcon kind="github" /></span>
            GitHub <ArrowIcon diagonal className="size-[13px]" />
          </a>
          <a
            className={cn(buttonVariants({ variant: "link" }), "justify-start gap-2 text-[11px]")}
            href="https://discord.com"
            rel="noreferrer"
            target="_blank"
          >
            <span className="size-[15px]"><SocialIcon kind="discord" /></span>
            Discord <ArrowIcon diagonal className="size-[13px]" />
          </a>
          {soundcloudProfiles.map((profile) => (
            <a
              className={cn(buttonVariants({ variant: "link" }), "justify-start gap-2 text-[11px]")}
              href={profile.href}
              key={profile.href}
              rel="noreferrer"
              target="_blank"
            >
              <span className="size-[15px]"><SocialIcon kind="soundcloud" /></span>
              {profile.label} <ArrowIcon diagonal className="size-[13px]" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto flex min-h-14 w-[calc(100%-48px)] max-w-[1160px] flex-wrap items-center justify-between gap-3 border-t border-white/10 py-4 text-[8px] tracking-[0.1em] text-slate-500">
        <span>© 2026 MAKS SOLOMON</span>
        <span className="max-sm:hidden">MADE WITH INTENTION / POZNAŃ, PL</span>
        <a className={cn(buttonVariants({ variant: "link" }), "text-[8px] tracking-[0.1em]")} href="#top">BACK TO THE TOP ↑</a>
      </div>
    </footer>
  );
}