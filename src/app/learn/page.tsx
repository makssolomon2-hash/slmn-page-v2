import type { Metadata } from "next";
import PlatformPage from "@/components/sections/platform-page";
import { platformPages } from "@/data/platform-pages";

export const metadata: Metadata = { title: "Learn — SLMN", description: platformPages.learn.description };

export default function LearnPage() {
  return <PlatformPage page={platformPages.learn} />;
}
