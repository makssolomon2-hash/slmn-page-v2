"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function MotionEnhancer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const motion = gsap.matchMedia();
      const header = document.querySelector<HTMLElement>("[data-site-header]");

      motion.add("(prefers-reduced-motion: reduce)", () => {
        if (header) gsap.set(header, { autoAlpha: 1, yPercent: 0 });
        gsap.set("[data-hero-enter]", { autoAlpha: 1, y: 0, filter: "none" });
      });

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const cleanups: (() => void)[] = [];
        const heroItems = "[data-hero-enter]";
        const lenis = new Lenis({ anchors: true, lerp: 0.1 });
        let headerHidden = window.scrollY >= 80;

        if (header) {
          gsap.set(header, {
            autoAlpha: headerHidden ? 0 : 1,
            yPercent: headerHidden ? -140 : 0,
          });
        }

        const setHeaderVisible = (visible: boolean) => {
          if (
            !header ||
            header.querySelector<HTMLDetailsElement>("[data-mobile-menu]")?.open
          ) {
            return;
          }

          const shouldHide = !visible;
          if (shouldHide === headerHidden) return;
          headerHidden = shouldHide;
          gsap.to(header, {
            autoAlpha: visible ? 1 : 0,
            yPercent: visible ? 0 : -140,
            duration: visible ? 0.35 : 0.3,
            ease: visible ? "power3.out" : "power2.in",
            overwrite: "auto",
          });
        };

        const updateScroll = (instance: Lenis) => {
          ScrollTrigger.update();
          setHeaderVisible(instance.scroll < 80);
        };
        const raf = (time: number) => lenis.raf(time * 1000);
        lenis.on("scroll", updateScroll);
        gsap.ticker.add(raf);
        cleanups.push(() => {
          gsap.ticker.remove(raf);
          lenis.off("scroll", updateScroll);
          lenis.destroy();
        });

        gsap.set(heroItems, { y: 38, autoAlpha: 0, filter: "blur(6px)" });
        const heroEntrance = window.setTimeout(() => {
          gsap.to(heroItems, {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.78,
            stagger: 0.12,
            ease: "power3.out",
            overwrite: "auto",
          });
        }, 2750);
        cleanups.push(() => window.clearTimeout(heroEntrance));

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(
            element,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.72,
              ease: "power2.out",
              immediateRender: false,
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            },
          );
        });

        gsap.from("[data-footer-main]", {
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-site-footer]",
            start: "top 90%",
            once: true,
          },
        });

        gsap.utils.toArray<HTMLAnchorElement>("[data-nav-target]").forEach((link) => {
          const target = link.dataset.navTarget;
          const section = target ? document.querySelector(target) : null;
          if (!section) return;
          ScrollTrigger.create({
            trigger: section,
            start: "top 45%",
            end: "bottom 45%",
            onToggle: (trigger) => link.classList.toggle("is-active", trigger.isActive),
          });
        });

        const magneticLinks = gsap.utils.toArray<HTMLElement>("[data-magnetic-link]");
        magneticLinks.forEach((link) => {
          const xTo = gsap.quickTo(link, "x", { duration: 0.32, ease: "power3.out" });
          const yTo = gsap.quickTo(link, "y", { duration: 0.32, ease: "power3.out" });
          const move = (event: PointerEvent) => {
            const bounds = link.getBoundingClientRect();
            xTo((event.clientX - bounds.left - bounds.width / 2) * 0.12);
            yTo((event.clientY - bounds.top - bounds.height / 2) * 0.18);
          };
          const reset = () => {
            xTo(0);
            yTo(0);
          };
          link.addEventListener("pointermove", move);
          link.addEventListener("pointerleave", reset);
          cleanups.push(() => {
            link.removeEventListener("pointermove", move);
            link.removeEventListener("pointerleave", reset);
            gsap.killTweensOf(link);
          });
        });

        const mobileMenu = document.querySelector<HTMLDetailsElement>("[data-mobile-menu]");
        if (mobileMenu) {
          const animateMenu = () => {
            if (!mobileMenu.open) return;
            gsap.fromTo(
              "[data-mobile-nav] a",
              { y: 8, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.28, stagger: 0.035, ease: "power2.out" },
            );
          };
          mobileMenu.addEventListener("toggle", animateMenu);
          cleanups.push(() => mobileMenu.removeEventListener("toggle", animateMenu));
        }

        return () => cleanups.forEach((cleanup) => cleanup());
      });

      return () => motion.revert();
    });

    return () => context.revert();
  }, []);

  return null;
}