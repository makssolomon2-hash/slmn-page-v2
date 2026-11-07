"use client";

import { Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { clerkUserButtonAppearance } from "@/lib/clerk-appearance";

type ClerkNavActionsProps = {
  mobile?: boolean;
};

export default function ClerkNavActions({
  mobile = false,
}: ClerkNavActionsProps) {
  return (
    <div
      className={
        mobile
          ? "mt-1 grid gap-1 border-t border-white/10 pt-2"
          : "flex items-center gap-2"
      }
    >
      <Show when="signed-out">
        <Link
          className={`inline-flex min-h-9 items-center justify-center rounded-full px-3 text-[11px] text-slate-300 transition hover:text-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${mobile ? "min-h-[42px] justify-start rounded-md px-3 text-[13px]" : ""}`}
          href="/sign-in"
        >
          Sign in
        </Link>
        <Link
          className={`inline-flex min-h-9 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.08] px-3 text-[11px] text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-300/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${mobile ? "min-h-[42px] rounded-md text-[13px]" : ""}`}
          href="/sign-up"
        >
          Create account
        </Link>
      </Show>
      <Show when="signed-in">
        <div className={`flex items-center ${mobile ? "min-h-[46px] justify-between px-3 text-[13px] text-slate-200" : ""}`}>
          {mobile && <span>Your account</span>}
          <UserButton appearance={clerkUserButtonAppearance} />
        </div>
      </Show>
    </div>
  );
}
