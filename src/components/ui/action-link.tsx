import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/icons";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  diagonal?: boolean;
};

const variants = {
  primary: "border-cyan-400 bg-cyan-400 text-slate-950 hover:bg-cyan-300",
  secondary:
    "border-white/20 bg-white/[0.025] text-slate-100 hover:border-cyan-300/50 hover:bg-cyan-300/[0.07]",
};

export default function ActionLink({
  href,
  children,
  variant = "primary",
  diagonal = false,
}: ActionLinkProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-[5px] border px-5 text-xs font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${variants[variant]}`}
      href={href}
    >
      {children}
      <ArrowIcon diagonal={diagonal} />
    </a>
  );
}