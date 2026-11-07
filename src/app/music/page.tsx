import type { Metadata } from "next";
import PlatformPage from "@/components/sections/platform-page";
import { platformPages } from "@/data/platform-pages";

export const metadata: Metadata = { title: "Music — SLMN", description: platformPages.music.description };

export default function MusicPage() {
  return <PlatformPage page={platformPages.music} showSoundcloud />;
}
