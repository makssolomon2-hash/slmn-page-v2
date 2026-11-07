"use client";

import { Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { clerkUserButtonAppearance } from "@/lib/clerk-appearance";
import { cn } from "@/lib/utils";

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
        {mobile ? (
          <>
            <DropdownMenuItem asChild><Link href="/sign-in">Sign in</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/sign-up">Create account</Link></DropdownMenuItem>
          </>
        ) : (
          <>
            <Link className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-[11px]")} href="/sign-in">Sign in</Link>
            <Link className={cn(buttonVariants({ variant: "outline", size: "sm" }), "text-[11px]")} href="/sign-up">Create account</Link>
          </>
        )}
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
