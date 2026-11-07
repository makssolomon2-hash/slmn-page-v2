import { cn } from "@/lib/utils";

export default function BrandLink({ href, className }: { href: string; className?: string }) {
  return (
    <a aria-label="SLMN, back to home" className={cn("brand-link inline-flex items-center gap-2.5", className)} href={href}>
      <span className="brand-wordmark">SLMN<span aria-hidden="true">.</span></span>
      <span aria-hidden="true" className="brand-index">DIGITAL<br />&amp; SOUND</span>
    </a>
  );
}
