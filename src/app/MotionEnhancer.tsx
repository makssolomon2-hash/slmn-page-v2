"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionEnhancer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const motion = gsap.matchMedia();
      const header = document.querySelector<HTMLElement>(".site-header");

      motion.add("(prefers-reduced-motion: reduce)", () => {
        const triggers: ScrollTrigger[] = [];
        if (header) {
          gsap.set(header, { autoAlpha: 1 });
          header.classList.add("is-visible");
        }
        gsap.set("#main-hero [data-hero-enter]", {
          autoAlpha: 1,
          y: 0,
          filter: "none",
        });
        const background = document.querySelector(".hero-world-background");
        if (background) {
          triggers.push(
            ScrollTrigger.create({
              trigger: "#opening",
              start: "bottom top",
              toggleClass: {
                targets: background,
                className: "is-softened",
              },
            }),
            ScrollTrigger.create({
              trigger: "#main-hero",
              start: "bottom top",
              toggleClass: { targets: background, className: "is-out" },
            }),
          );
        }
        return () => triggers.forEach((trigger) => trigger.kill());
      });

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const cleanups: (() => void)[] = [];
        const heroItems = "#main-hero [data-hero-enter]";
        gsap.set(heroItems, {
          y: 38,
          autoAlpha: 0,
          filter: "blur(6px)",
        });

        if (header) {
          const navTimeline = gsap
            .timeline({ paused: true, defaults: { ease: "power3.out" } })
            .fromTo(
              header,
              {
                autoAlpha: 0,
                scale: 0.97,
                y: -12,
              },
              {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.55,
                ease: "power3.out",
                onStart: () => header.classList.add("is-visible"),
              },
            )
            .from(
              ".site-header .brand",
              {
                x: -12,
                autoAlpha: 0,
                duration: 0.32,
                ease: "power2.out",
              },
              "-=0.28",
            )
            .from(
              "[data-nav-item]",
              {
                y: 9,
                autoAlpha: 0,
                duration: 0.28,
                stagger: 0.045,
                ease: "power2.out",
              },
              "-=0.34",
            )
            .from(
              ".header-utilities > *",
              {
                y: 7,
                autoAlpha: 0,
                duration: 0.28,
                stagger: 0.07,
                ease: "power2.out",
              },
              "-=0.22",
            );

          const navEntrance = window.setTimeout(() => navTimeline.play(), 2050);
          cleanups.push(() => {
            window.clearTimeout(navEntrance);
            navTimeline.kill();
          });
        }

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
        }, 2200);
        cleanups.push(() => window.clearTimeout(heroEntrance));

        gsap.fromTo(
          ".hero-world-background",
          { filter: "blur(0px)", opacity: 1, scale: 1 },
          {
            filter: "blur(10px)",
            opacity: 0.62,
            scale: 1.04,
            ease: "none",
            scrollTrigger: {
              trigger: "#opening",
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );

        gsap.to(".hero-world-background", {
          filter: "blur(14px)",
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#main-hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.9,
          },
        });

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
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        gsap.from(".footer-main", {
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".site-footer",
            start: "top 90%",
            once: true,
          },
        });

        gsap.utils
          .toArray<HTMLAnchorElement>("[data-nav-target]")
          .forEach((link) => {
            const target = link.dataset.navTarget;
            const section = target ? document.querySelector(target) : null;
            if (!section) return;
            ScrollTrigger.create({
              trigger: section,
              start: "top 45%",
              end: "bottom 45%",
              onToggle: (trigger) =>
                link.classList.toggle("is-active", trigger.isActive),
            });
          });

        const magneticLinks = gsap.utils.toArray<HTMLElement>(
          ".desktop-nav a, .header-socials .social-link",
        );
        magneticLinks.forEach((link) => {
          const xTo = gsap.quickTo(link, "x", {
            duration: 0.32,
            ease: "power3.out",
          });
          const yTo = gsap.quickTo(link, "y", {
            duration: 0.32,
            ease: "power3.out",
          });
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

        const mobileMenu = document.querySelector<HTMLDetailsElement>(".mobile-menu");
        if (mobileMenu) {
          const animateMenu = () => {
            if (!mobileMenu.open) return;
            gsap.fromTo(
              ".mobile-nav a",
              { y: 8, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.28,
                stagger: 0.035,
                ease: "power2.out",
              },
            );
          };
          mobileMenu.addEventListener("toggle", animateMenu);
          cleanups.push(() =>
            mobileMenu.removeEventListener("toggle", animateMenu),
          );
        }

        return () => cleanups.forEach((cleanup) => cleanup());
      });

      return () => motion.revert();
    });

    return () => context.revert();
  }, []);

  return null;
}
