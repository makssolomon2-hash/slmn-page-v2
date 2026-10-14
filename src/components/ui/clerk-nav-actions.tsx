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
    <div className={mobile ? "mobile-auth-navigation" : "auth-navigation"}>
      <Show when="signed-out">
        <Link className="auth-link" href="/sign-in">
          Sign in
        </Link>
        <Link className="auth-link auth-link-primary" href="/sign-up">
          Create account
        </Link>
      </Show>
      <Show when="signed-in">
        <div className="auth-account">
          {mobile && <span className="auth-account-label">Your account</span>}
          <UserButton appearance={clerkUserButtonAppearance} />
        </div>
      </Show>
    </div>
  );
}
