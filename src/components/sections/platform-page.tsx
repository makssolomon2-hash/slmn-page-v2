import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import Image from "next/image";
import MotionEnhancer from "@/components/layout/motion-enhancer";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import ActionLink from "@/components/ui/action-link";
import HeroWorld from "@/components/ui/hero-world";
import SoundCloudLinks from "@/components/ui/soundcloud-links";
import SoundCloudPlayers from "@/components/ui/soundcloud-players";
import { ArrowIcon } from "@/components/ui/icons";
import { featuredProjects } from "@/data/portfolio";
import type { PlatformPage as PlatformPageData } from "@/data/platform-pages";

type PlatformPageProps = { page: PlatformPageData; showProjects?: boolean; showSoundcloud?: boolean };

export default function PlatformPage(props: PlatformPageProps) {
  return (
    <Suspense fallback={<div className="grid min-h-screen place-items-center bg-black text-sm text-slate-400">Checking your account…</div>}>
      <ProtectedPlatformPage {...props} />
    </Suspense>
  );
}

async function ProtectedPlatformPage({ page, showProjects = false, showSoundcloud = false }: PlatformPageProps) {
  await auth.protect();

  return (
    <>
      <MotionEnhancer />
      <div className="site-shell min-h-screen" id="top">
        <HeroWorld dimmed />
        <a className="fixed left-3 top-3 z-50 -translate-y-[150%] rounded-md bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 focus:translate-y-0 focus:outline-2 focus:outline-offset-4 focus:outline-cyan-300" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main className="mx-auto w-[calc(100%-48px)] max-w-[1160px] pb-24 pt-36 sm:pb-32 sm:pt-44" id="main-content">
          <div className="border-b border-white/10 pb-16 sm:pb-24">
            <p className="text-[10px] font-bold tracking-[0.16em] text-cyan-300">{page.number} / {page.label}</p>
            <h1 className="mt-6 max-w-[950px] text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.98] tracking-[-0.05em] text-white">
              {page.title}<br /><span className="text-cyan-300">{page.highlight}</span>
            </h1>
            <div className="mt-8 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
              <p className="max-w-[510px] text-sm leading-7 text-slate-400 sm:text-base">{page.description}</p>
              <span className="text-[9px] tracking-[0.14em] text-slate-500">SLMN / {page.label}</span>
            </div>
          </div>

          {showSoundcloud && (
            <section aria-labelledby="soundcloud-title" className="border-b border-white/10 py-16 sm:py-20">
              <p className="text-[9px] font-bold tracking-[0.14em] text-cyan-300">LISTEN ON SOUNDCLOUD</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl" id="soundcloud-title">Music I make. Sets I play.</h2>
              <p className="mb-6 mt-4 max-w-[540px] text-sm leading-7 text-slate-400">Visit my SoundCloud profiles for music and DJ sets. Nothing plays automatically here.</p>
              <SoundCloudLinks />
              <SoundCloudPlayers />
            </section>
          )}

          <section aria-labelledby="explore-title" className="py-16 sm:py-24">
            <div className="mb-8 flex items-end justify-between gap-5">
              <div>
                <p className="text-[9px] font-bold tracking-[0.14em] text-cyan-300">A SPACE TO GROW</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl" id="explore-title">What belongs here.</h2>
              </div>
              <span className="hidden text-[9px] tracking-[0.12em] text-slate-500 sm:block">FRONTEND PREVIEW / {page.number}</span>
            </div>
            <div className="grid overflow-hidden rounded-xl border border-white/10 bg-[#080808] md:grid-cols-3">
              {page.sections.map((section, index) => (
                <article className="min-h-[205px] border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-8" key={section.title}>
                  <span className="text-[9px] tracking-[0.12em] text-slate-500">{String(index + 1).padStart(2, "0")} / PREVIEW</span>
                  <h3 className="mt-10 text-lg font-semibold text-white">{section.title}</h3>
                  <p className="mt-3 max-w-[300px] text-xs leading-6 text-slate-400">{section.description}</p>
                </article>
              ))}
            </div>
            {page.label === "VIDEO" && (
              <p className="mt-5 text-xs leading-6 text-slate-400">No videos are available yet. Uploads and sharing are not enabled.</p>
            )}
          </section>

          {showProjects && (
            <section aria-labelledby="selected-work-title" className="border-t border-white/10 pb-16 pt-16 sm:pb-24 sm:pt-24">
              <p className="text-[9px] font-bold tracking-[0.14em] text-cyan-300">SELECTED WORK</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl" id="selected-work-title">Projects to explore.</h2>
              <div className="mt-8 border-t border-white/10">
                {featuredProjects.map((project) => (
                  <Link className="group flex items-center justify-between gap-5 border-b border-white/10 py-5 transition-colors hover:bg-white/[0.03]" href={`/projects/${project.slug}`} key={project.slug}>
                    <span className="flex min-w-0 items-center gap-4 sm:gap-6">
                      <span aria-hidden="true" className="relative block aspect-[1.85] w-24 shrink-0 overflow-hidden rounded-md border border-white/10 bg-white/[0.03] sm:w-40">
                        {project.screenshot && (
                          <Image alt="" className="object-cover object-top transition duration-500 group-hover:scale-[1.03]" fill sizes="(max-width: 639px) 96px, 160px" src={project.screenshot.src} />
                        )}
                      </span>
                      <span><span className="mr-4 text-[10px] text-cyan-300">{project.number}</span><span className="text-sm font-semibold text-white sm:text-base">{project.title}</span></span>
                    </span>
                    <ArrowIcon diagonal className="size-4 shrink-0 text-slate-400 transition-colors group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-10">
            <ActionLink diagonal href={page.action.href}>{page.action.label}</ActionLink>
            <Link className="px-2 py-3 text-xs text-slate-400 transition hover:text-white" href="/">Back to home</Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
