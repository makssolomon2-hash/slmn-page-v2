import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  diagonal?: boolean;
};

export default function ActionLink({
  href,
  children,
  variant = "primary",
  diagonal = false,
}: ActionLinkProps) {
  return (
    <a
      className={cn(buttonVariants({ variant: variant === "primary" ? "default" : "outline", size: "lg" }), "gap-3 font-semibold", variant === "secondary" && "border-cyan-300/60 bg-cyan-300/[0.08] !text-cyan-200 hover:border-cyan-300 hover:bg-cyan-300/[0.15]")}
      href={href}
    >
      {children}
      <ArrowIcon diagonal={diagonal} />
    </a>
  );
}