import type { CSSProperties } from "react";
import type { ArchivePost } from "@/data/archive";

type ProjectArtworkProps = {
  cover: ArchivePost["cover"];
  title: string;
};

export default function ProjectArtwork({ cover, title }: ProjectArtworkProps) {
  return (
    <div
      aria-label={`${title} visual preview`}
      className="relative mt-10 grid min-h-[300px] place-items-center overflow-hidden rounded-lg border border-white/10 bg-black sm:mt-14 sm:min-h-[480px]"
      role="img"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(156,227,239,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(156,227,239,0.035)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:radial-gradient(ellipse_at_center,#000_15%,transparent_80%)]" />
      <div className="absolute size-[55%] rounded-full bg-cyan-400/[0.09] blur-[65px]" />
      <div className="relative w-[88%] overflow-hidden rounded-lg border border-cyan-50/20 bg-[rgba(5,10,13,0.84)] shadow-[0_25px_90px_rgba(0,0,0,0.46),0_0_70px_rgba(0,182,216,0.08)] sm:w-[76%]">
        <div className="flex h-9 items-center gap-[5px] border-b border-white/[0.08] px-3">
          <span className="size-[6px] rounded-full bg-cyan-50/35" />
          <span className="size-[6px] rounded-full bg-cyan-50/35" />
          <span className="size-[6px] rounded-full bg-cyan-50/35" />
          <span className="ml-auto text-[7px] tracking-[0.12em] text-cyan-50/50">PROJECT PREVIEW</span>
        </div>
        <div className="relative grid min-h-[220px] place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,173,213,0.09),transparent_55%)] sm:min-h-[360px]">
          {cover === "signal" ? (
            <div aria-hidden="true" className="flex h-[120px] w-[82%] items-center justify-center gap-[3px] sm:w-[70%] sm:gap-1">
              {Array.from({ length: 48 }, (_, index) => (
                <span
                  className="h-[var(--bar)] w-[2px] rounded-full bg-[linear-gradient(180deg,rgba(168,245,255,0.95),rgba(0,166,205,0.22))] shadow-[0_0_16px_rgba(0,200,232,0.34)]"
                  key={index}
                  style={{ "--bar": `${16 + ((index * 37) % 74)}%` } as CSSProperties}
                />
              ))}
            </div>
          ) : cover === "moon" || cover === "orbit" ? (
            <div aria-hidden="true" className="relative grid aspect-square w-[min(44vw,250px)] place-items-center">
              <span className="absolute h-[37%] w-full rotate-[-28deg] rounded-[50%] border border-cyan-200/40" />
              <span className="absolute h-[37%] w-full rotate-[34deg] rounded-[50%] border border-cyan-200/40" />
              <span className="absolute h-full w-[72%] rotate-[48deg] rounded-[50%] border border-cyan-200/40" />
              <i className="size-[26%] rounded-full bg-[radial-gradient(circle_at_36%_34%,#dafbff,#44cce3_38%,#0a3a50_78%)] shadow-[0_0_48px_rgba(0,196,232,0.36)]" />
            </div>
          ) : cover === "grid" ? (
            <div aria-hidden="true" className="grid w-3/4 grid-cols-4 gap-2">
              {Array.from({ length: 12 }, (_, index) => (
                <span
                  className={`min-h-10 rounded border border-cyan-100/15 ${index % 3 === 0 ? "bg-[linear-gradient(145deg,rgba(0,184,218,0.25),rgba(12,23,29,0.3))]" : "bg-[linear-gradient(145deg,rgba(46,106,123,0.21),rgba(12,23,29,0.42))]"}`}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <div aria-hidden="true" className="grid h-[150px] w-[70%] grid-cols-[1.2fr_0.8fr] grid-rows-2 gap-3 sm:h-[250px]">
              <span className="row-span-2 rounded border border-cyan-100/15 bg-[radial-gradient(ellipse_at_40%_45%,rgba(0,200,232,0.23),transparent_58%),rgba(10,17,21,0.65)]" />
              <span className="rounded border border-cyan-100/15 bg-[linear-gradient(145deg,rgba(0,184,218,0.19),rgba(12,23,29,0.5))]" />
              <span className="rounded border border-cyan-100/15 bg-[linear-gradient(145deg,rgba(0,184,218,0.19),rgba(12,23,29,0.5))]" />
            </div>
          )}
          <p className="absolute inset-x-4 bottom-3 m-0 text-[8px] tracking-[0.12em] text-cyan-50/60">{title}</p>
        </div>
      </div>
      <span className="absolute bottom-3 right-3 text-right text-[7px] tracking-[0.1em] text-cyan-50/50 sm:bottom-4 sm:right-4">
        VISUAL STUDY / REPLACE WITH PROJECT SCREENSHOT
      </span>
    </div>
  );
}