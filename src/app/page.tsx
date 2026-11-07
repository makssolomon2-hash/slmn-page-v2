import MotionEnhancer from "@/components/layout/motion-enhancer";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import HomeHero from "@/components/sections/home-hero";
import LearningSection from "@/components/sections/learning-section";
import MusicSection from "@/components/sections/music-section";
import OpeningIntro from "@/components/sections/opening-intro";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import HeroWorld from "@/components/ui/hero-world";

export default function Home() {
  return (
    <>
      <MotionEnhancer />
      <div className="site-shell" id="top">
        <a
          className="fixed left-3 top-3 z-30 -translate-y-[150%] rounded-md bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 focus:translate-y-0 focus:outline-2 focus:outline-offset-4 focus:outline-cyan-300"
          href="#main-content"
        >
          Skip to content
        </a>
        <HeroWorld intro />
        <OpeningIntro />
        <SiteHeader />
        <main id="main-content">
          <HomeHero />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <MusicSection />
          <LearningSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
