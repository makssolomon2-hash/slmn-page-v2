import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function SignInPage() {
  return (
    <main className="auth-page">
      <Link className="auth-back-link" href="/">
        <span aria-hidden="true">←</span> Back to portfolio
      </Link>
      <div className="auth-page-heading">
        <p className="eyebrow">MEMBER ACCESS</p>
        <h1>Welcome back.</h1>
        <p>Sign in to continue to your account.</p>
      </div>
      <Suspense fallback={<div className="auth-loading">Loading sign-in form…</div>}>
        <SignIn appearance={clerkAppearance} />
      </Suspense>
    </main>
  );
}
