import type { Metadata } from "next";
import PlatformPage from "@/components/sections/platform-page";
import { platformPages } from "@/data/platform-pages";

export const metadata: Metadata = { title: "About — SLMN", description: platformPages.about.description };

export default function AboutPage() {
  return <PlatformPage page={platformPages.about} />;
}
