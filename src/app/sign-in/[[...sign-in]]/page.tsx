import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function SignInPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-[radial-gradient(ellipse_at_50%_44%,rgba(0,200,232,0.1),transparent_45%),#050708] px-5 pb-12 pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:100%_44px] [mask-image:linear-gradient(to_bottom,transparent,#000_24%,#000_76%,transparent)]" />
      <Link className="absolute left-5 top-7 z-[1] inline-flex items-center gap-2 text-xs text-slate-300 transition hover:text-cyan-200 sm:left-[5vw]" href="/">
        <span aria-hidden="true" className="text-cyan-300">←</span> Back to portfolio
      </Link>
      <div className="relative z-[1] max-w-[420px] text-center">
        <p className="mb-3 text-[9px] font-bold tracking-[0.14em] text-cyan-300">MEMBER ACCESS</p>
        <h1 className="text-[32px] font-semibold text-slate-50 sm:text-5xl">Welcome back.</h1>
        <p className="mt-3 text-sm text-slate-300">Sign in to continue to your account.</p>
      </div>
      <Suspense fallback={<div className="relative z-[1] grid min-h-[300px] place-items-center text-[13px] text-slate-300">Loading sign-in form…</div>}>
        <SignIn appearance={clerkAppearance} />
      </Suspense>
    </main>
  );
}
