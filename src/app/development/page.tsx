import type { Metadata } from "next";
import PlatformPage from "@/components/sections/platform-page";
import { platformPages } from "@/data/platform-pages";

export const metadata: Metadata = { title: "Development — SLMN", description: platformPages.development.description };

export default function DevelopmentPage() {
  return <PlatformPage page={platformPages.development} showProjects />;
}
