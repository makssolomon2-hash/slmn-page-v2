"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLink from "@/components/ui/brand-link";
import { Button, buttonVariants } from "@/components/ui/button";
import ClerkNavActions from "@/components/ui/clerk-nav-actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SocialIcon } from "@/components/ui/icons";
import { navigationItems, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="fixed inset-x-0 top-3 z-30 mx-auto grid min-h-[64px] w-[calc(100%-24px)] max-w-[1160px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 rounded-xl border border-white/10 bg-[#080808]/90 px-4 shadow-[0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl min-[1081px]:w-[min(1160px,calc(100%-36px))] min-[1081px]:gap-7"
      data-menu-open={menuOpen}
      data-site-header
    >
      <BrandLink href="/" />

      <nav aria-label="Main navigation" className="flex items-center justify-center gap-1 max-[1080px]:hidden">
        {navigationItems.map((item) => (
          <Link
            aria-current={pathname === item.href ? "page" : undefined}
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "relative px-3 text-[11px] after:absolute after:inset-x-3 after:bottom-0 after:h-px after:scale-x-0 after:bg-cyan-300 after:transition-transform hover:after:scale-x-100 aria-[current=page]:text-white aria-[current=page]:after:scale-x-100")}
            data-magnetic-link
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-self-end gap-2 max-[1080px]:hidden">
        {socialLinks.map((social) => (
          <Button asChild key={social.kind} size="icon" variant="ghost">
            <a aria-label={social.label} data-magnetic-link href={social.href} rel="noreferrer" target="_blank" title={social.label}>
              <span className="size-4"><SocialIcon kind={social.kind} /></span>
            </a>
          </Button>
        ))}
        <ClerkNavActions />
      </div>

      <div className="hidden justify-self-end max-[1080px]:block">
        <DropdownMenu modal={false} onOpenChange={setMenuOpen} open={menuOpen}>
          <DropdownMenuTrigger asChild>
            <Button aria-label="Open navigation menu" className="gap-3" variant="outline">
              Menu <span aria-hidden="true" className="text-base leading-none">{menuOpen ? "×" : "≡"}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[min(320px,calc(100vw-24px))]" data-mobile-nav>
            <DropdownMenuLabel className="px-3 py-2 text-[10px] tracking-[0.14em] text-slate-500">EXPLORE</DropdownMenuLabel>
            {navigationItems.map((item) => (
              <DropdownMenuItem asChild key={item.href}>
                <Link aria-current={pathname === item.href ? "page" : undefined} className={pathname === item.href ? "text-white" : undefined} href={item.href}>
                  {item.label === "Work" ? "Development" : item.label}
                  {pathname === item.href && <span className="ml-auto text-[10px] text-cyan-300">CURRENT</span>}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            {socialLinks.map((social) => (
              <DropdownMenuItem asChild key={social.kind}>
                <a href={social.href} rel="noreferrer" target="_blank">
                  <span className="size-4"><SocialIcon kind={social.kind} /></span>
                  {social.label}<span aria-hidden="true" className="ml-auto">↗</span>
                </a>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <ClerkNavActions mobile />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
