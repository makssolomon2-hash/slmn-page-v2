import type { Metadata } from "next";
import PlatformPage from "@/components/sections/platform-page";
import { platformPages } from "@/data/platform-pages";

export const metadata: Metadata = { title: "Studio — SLMN", description: platformPages.studio.description };

export default function StudioPage() {
  return <PlatformPage page={platformPages.studio} />;
}
