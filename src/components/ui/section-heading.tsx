import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  children,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-10 ${className}`}
      data-reveal
    >
      <div>
        <p className="text-[9px] font-bold tracking-[0.14em] text-cyan-300">{eyebrow}</p>
        <h2 className="mt-4 text-[42px] font-semibold leading-[1.02] text-slate-50 sm:text-[54px] lg:text-[76px]">
          {children}
        </h2>
      </div>
      {description && (
        <p className="max-w-[390px] text-[13px] leading-7 text-slate-400 md:mb-1 md:text-sm">
          {description}
        </p>
      )}
    </div>
  );
}