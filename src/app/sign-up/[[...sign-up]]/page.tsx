import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function SignUpPage() {
  return (
    <main className="auth-page">
      <Link className="auth-back-link" href="/">
        <span aria-hidden="true">←</span> Back to portfolio
      </Link>
      <div className="auth-page-heading">
        <p className="eyebrow">JOIN THE STUDIO</p>
        <h1>Create your account.</h1>
        <p>Set up an account to join the community.</p>
      </div>
      <Suspense fallback={<div className="auth-loading">Loading sign-up form…</div>}>
        <SignUp appearance={clerkAppearance} />
      </Suspense>
    </main>
  );
}
