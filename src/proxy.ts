import { clerkMiddleware } from "@clerk/nextjs/server";

const publicRoutePrefixes = ["/projects", "/sign-in", "/sign-up"];

export default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl;
  const isPublicRoute =
    pathname === "/" ||
    publicRoutePrefixes.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    );

  if (!isPublicRoute) await auth.protect();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
