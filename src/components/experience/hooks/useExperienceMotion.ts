"use client";

import { type RefObject, useEffect } from "react";

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
  off: (event: "scroll", callback: () => void) => void;
  on: (event: "scroll", callback: () => void) => void;
  resize: () => void;
};

type LenisConstructor = new (options: Record<string, unknown>) => LenisInstance;

type UseExperienceMotionOptions = {
  reducedMotion: boolean;
  rootRef: RefObject<HTMLElement | null>;
};

export function useExperienceMotion({ rootRef, reducedMotion }: UseExperienceMotionOptions) {
  useEffect(() => {
    const supportsCinematicMotion = window.matchMedia("(min-width: 901px) and (hover: hover) and (pointer: fine)").matches;

    if (!rootRef.current || reducedMotion || !supportsCinematicMotion) {
      return;
    }

    let cancelled = false;
    let rafId = 0;
    let lenis: LenisInstance | null = null;
    let cleanup: (() => void) | null = null;

    async function loadMotion() {
      const [{ gsap }, { ScrollTrigger }, lenisModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis")
      ]);

      if (cancelled || !rootRef.current) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      gsap.config({ nullTargetWarn: false });
      const Lenis = lenisModule.default as LenisConstructor;
      lenis = new Lenis({ lerp: 0.08, smoothWheel: true, wheelMultiplier: 0.86 });
      const updateScrollTrigger = () => ScrollTrigger.update();
      const resizeLenis = () => lenis?.resize();
      lenis.on("scroll", updateScrollTrigger);
      ScrollTrigger.addEventListener("refresh", resizeLenis);

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };
      rafId = window.requestAnimationFrame(raf);

      const context = gsap.context(() => {
        gsap.fromTo(
          ".opening-video-bg video",
          { y: -22, scale: 1.035 },
          {
            y: 24,
            scale: 1.035,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-section",
              start: "top top",
              end: "bottom top",
              scrub: true
            }
          }
        );

        gsap.fromTo(
          ".sticky-header-logo",
          { scale: 1.16, y: 0 },
          {
            opacity: 0.9,
            scale: 0.72,
            y: -4,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-section",
              start: "top top",
              end: "55% top",
              scrub: true
            }
          }
        );

        gsap.fromTo(
          "[data-hero-title]",
          { autoAlpha: 0, filter: "blur(10px)", y: 34 },
          {
            autoAlpha: 1,
            clearProps: "filter",
            delay: 0.12,
            duration: 0.86,
            ease: "power4.out",
            filter: "blur(0px)",
            y: 0
          }
        );

        gsap.fromTo(
          "[data-hero-chip]",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, delay: 0.36, duration: 0.62, ease: "power3.out", stagger: 0.07, y: 0 }
        );

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".opening-video-shell",
              start: "top top",
              end: "bottom bottom",
              scrub: true
            }
          })
          .to(
            ".hero-content",
            {
              autoAlpha: 0,
              ease: "power2.out",
              scale: 0.97,
              y: -56
            },
            0.18
          )
          .fromTo(
            ".overview-video-grid",
            { autoAlpha: 0, y: 64 },
            {
              autoAlpha: 1,
              ease: "power2.out",
              y: 0
            },
            0.36
          );

        gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((element) => {
          const type = element.dataset.animate;
          const y = type === "image" ? 44 : 28;
          const scale = type === "card" || type === "image" ? 0.97 : 1;

          gsap.fromTo(
            element,
            { autoAlpha: 0, y, scale },
            {
              autoAlpha: 1,
              duration: 0.68,
              ease: "power3.out",
              scale: 1,
              scrollTrigger: {
                trigger: element,
                start: "top 84%"
              },
              y: 0
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((container) => {
          const children = container.querySelectorAll("[data-stagger-item]");
          gsap.fromTo(
            children,
            { autoAlpha: 0, y: 18 },
            {
              autoAlpha: 1,
              duration: 0.54,
              ease: "power3.out",
              stagger: 0.045,
              scrollTrigger: {
                trigger: container,
                start: "top 84%"
              },
              y: 0
            }
          );
        });

        gsap.to(".gallery-item:nth-child(odd)", {
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          },
          y: -24
        });

        gsap.to(".gallery-item:nth-child(even)", {
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          },
          y: 18
        });

        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }, rootRef);

      cleanup = () => {
        context.revert();
        lenis?.off("scroll", updateScrollTrigger);
        ScrollTrigger.removeEventListener("refresh", resizeLenis);
      };
    }

    loadMotion().catch(() => {
      // Content stays visible when optional motion cannot initialise.
    });

    return () => {
      cancelled = true;
      cleanup?.();
      lenis?.destroy();
      window.cancelAnimationFrame(rafId);
    };
  }, [reducedMotion, rootRef]);
}
