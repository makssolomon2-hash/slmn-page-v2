import type { Metadata } from "next";
import PlatformPage from "@/components/sections/platform-page";
import { platformPages } from "@/data/platform-pages";

export const metadata: Metadata = { title: "Video — SLMN", description: platformPages.video.description };

export default function VideoPage() {
  return <PlatformPage page={platformPages.video} />;
}
