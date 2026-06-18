"use client";

import { type RefObject, useEffect } from "react";
import { registrationSlides, timelineBeats } from "../config/experienceContent";

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
};

type LenisConstructor = new (options: Record<string, unknown>) => LenisInstance;

type UseExperienceMotionOptions = {
  reducedMotion: boolean;
  rootRef: RefObject<HTMLElement | null>;
  setActiveSpeaker: (index: number) => void;
  setActiveTimeline: (index: number) => void;
  setActiveWorldChapter: (index: number) => void;
  setWorldProgress: (progress: number) => void;
  worldChapterCount: number;
};

export function useExperienceMotion({
  rootRef,
  reducedMotion,
  setActiveSpeaker,
  setActiveTimeline,
  setActiveWorldChapter,
  setWorldProgress,
  worldChapterCount
}: UseExperienceMotionOptions) {
  useEffect(() => {
    if (!rootRef.current || reducedMotion) {
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

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };
      rafId = window.requestAnimationFrame(raf);

      const manualCleanups: Array<() => void> = [];

      const context = gsap.context(() => {
        gsap.fromTo(
          ".hero-media video",
          { y: -32, scale: 1.04 },
          {
            y: 32,
            scale: 1.04,
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
          "[data-hero-title]",
          { autoAlpha: 0, filter: "blur(12px)", y: 46 },
          {
            autoAlpha: 1,
            clearProps: "clipPath,filter",
            duration: 0.95,
            ease: "power4.out",
            filter: "blur(0px)",
            y: 0,
            delay: 0.15
          }
        );

        gsap.fromTo(
          "[data-hero-chip]",
          { autoAlpha: 0, y: 34 },
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08, delay: 0.45 }
        );

        gsap.fromTo(
          ".sticky-header-logo",
          { scale: 1.34, y: 18 },
          {
            scale: 0.74,
            y: -10,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-section",
              start: "top top",
              end: "45% top",
              scrub: true
            }
          }
        );

        gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((element) => {
          const type = element.dataset.animate;
          const y = type === "image" ? 54 : 34;
          const scale = type === "card" || type === "image" ? 0.96 : 1;

          gsap.fromTo(
            element,
            { autoAlpha: 0, y, scale },
            {
              autoAlpha: 1,
              duration: 0.74,
              ease: "power3.out",
              y: 0,
              scale: 1,
              scrollTrigger: {
                trigger: element,
                start: "top 84%"
              }
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((container) => {
          const children = container.querySelectorAll("[data-stagger-item]");
          gsap.fromTo(
            children,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              duration: 0.58,
              ease: "power3.out",
              stagger: 0.055,
              y: 0,
              scrollTrigger: {
                trigger: container,
                start: "top 82%"
              }
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-cinema-scene]").forEach((scene) => {
          const revealItems = scene.querySelectorAll("[data-scene-reveal]");
          const sceneImage = scene.querySelector("img");

          if (revealItems.length) {
            gsap.fromTo(
              revealItems,
              { autoAlpha: 0, filter: "blur(14px)", y: 46 },
              {
                autoAlpha: 1,
                duration: 0.82,
                ease: "power3.out",
                filter: "blur(0px)",
                stagger: 0.08,
                y: 0,
                scrollTrigger: {
                  trigger: scene,
                  start: "top 72%"
                }
              }
            );
          }

          if (sceneImage) {
            gsap.fromTo(
              sceneImage,
              { scale: 1.08 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: scene,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
                }
              }
            );
          }
        });

        const journeySection = document.querySelector<HTMLElement>(".event-journey-section");
        const journeyStage = document.querySelector<HTMLElement>("[data-journey-stage]");
        const journeyFlow = document.querySelector<HTMLElement>("[data-journey-flow]");
        const journeyLiquid = document.querySelector<HTMLElement>(".event-journey-liquid");
        const journeyDots = Array.from(document.querySelectorAll<HTMLElement>(".event-journey-dots span"));
        if (
          journeySection &&
          journeyStage &&
          journeyFlow &&
          window.matchMedia("(min-width: 901px)").matches
        ) {
          const getJourneyTravel = () => Math.max(0, journeyFlow.scrollWidth - journeyStage.clientWidth);
          const setJourneyState = (progress: number) => {
            const bounded = Math.min(1, Math.max(0, progress));
            const activeIndex = Math.min(journeyDots.length - 1, Math.round(bounded * Math.max(0, journeyDots.length - 1)));
            gsap.set(journeyFlow, {
              x: -getJourneyTravel() * bounded,
              rotateZ: Math.sin(bounded * Math.PI * 2) * 0.35
            });
            if (journeyLiquid) {
              gsap.set(journeyLiquid, {
                xPercent: -50 + Math.sin(bounded * Math.PI * 2) * 28,
                yPercent: -50 + Math.cos(bounded * Math.PI * 2) * 14,
                scale: 1 + Math.sin(bounded * Math.PI) * 0.22
              });
            }
            journeyDots.forEach((dot, index) => {
              dot.dataset.active = index === activeIndex ? "true" : "false";
            });
          };

          ScrollTrigger.create({
            anticipatePin: 1,
            end: () => `+=${window.innerHeight * 5.6}`,
            invalidateOnRefresh: true,
            onRefresh: (self) => setJourneyState(self.progress),
            onUpdate: (self) => setJourneyState(self.progress),
            pin: journeyStage,
            pinSpacing: true,
            scrub: 0.75,
            start: "top top",
            trigger: journeySection
          });
        }

        const worldScroll = document.querySelector<HTMLElement>("[data-world-scroll]");
        if (worldScroll) {
          let currentChapter = -1;
          let currentSpeaker = -1;

          ScrollTrigger.create({
            end: "bottom bottom",
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = Math.min(1, Math.max(0, self.progress));
              const sceneFloat = progress * Math.max(1, worldChapterCount - 1);
              const nextChapter = Math.min(worldChapterCount - 1, Math.round(sceneFloat));
              const forumLocal = Math.min(1, Math.max(0, sceneFloat - 3));
              const nextSpeaker = Math.min(6, Math.max(0, Math.floor(forumLocal * 7)));

              setWorldProgress(progress);
              if (nextChapter !== currentChapter) {
                currentChapter = nextChapter;
                setActiveWorldChapter(nextChapter);
              }
              if (nextSpeaker !== currentSpeaker) {
                currentSpeaker = nextSpeaker;
                setActiveSpeaker(nextSpeaker);
              }
            },
            scrub: true,
            start: "top top",
            trigger: worldScroll
          });
        }

        const timelineViewport = document.querySelector<HTMLElement>(".timeline-viewport");
        const timelineTrack = document.querySelector<HTMLElement>(".timeline-track");
        const timelineProgress = document.querySelector<HTMLElement>(".timeline-progress-fill");
        if (timelineViewport && timelineTrack) {
          let currentTimeline = -1;
          const getTimelineTravel = () => Math.max(0, timelineTrack.scrollWidth - timelineViewport.clientWidth);
          const getTimelineSceneProgress = (progress: number) =>
            Math.min(1, Math.max(0, progress));
          const updateTimelineState = (progress: number) => {
            const boundedProgress = getTimelineSceneProgress(progress);
            const nextTimeline = Math.min(
              timelineBeats.length - 1,
              Math.round(boundedProgress * (timelineBeats.length - 1))
            );
            gsap.set(timelineTrack, { x: -getTimelineTravel() * boundedProgress });
            timelineProgress?.style.setProperty("transform", `scaleX(${boundedProgress})`);
            if (nextTimeline !== currentTimeline) {
              currentTimeline = nextTimeline;
              setActiveTimeline(nextTimeline);
            }
          };

          if (window.matchMedia("(min-width: 901px)").matches) {
            const timelineSection = document.querySelector<HTMLElement>(".timeline-section");
            ScrollTrigger.create({
              anticipatePin: 1,
              end: () => `+=${window.innerHeight * Math.max(1, timelineBeats.length - 1)}`,
              invalidateOnRefresh: true,
              onRefresh: (self) => updateTimelineState(self.progress),
              onUpdate: (self) => updateTimelineState(self.progress),
              pin: true,
              pinSpacing: true,
              scrub: true,
              start: "top top",
              trigger: timelineSection ?? ".timeline-section"
            });
          } else {
            const onTimelineScroll = () => {
              const distance = Math.max(1, timelineViewport.scrollWidth - timelineViewport.clientWidth);
              updateTimelineState(timelineViewport.scrollLeft / distance);
            };
            timelineViewport.addEventListener("scroll", onTimelineScroll, { passive: true });
            onTimelineScroll();
            manualCleanups.push(() => timelineViewport.removeEventListener("scroll", onTimelineScroll));
          }
        }

        const registrationSection = document.querySelector<HTMLElement>(".registration-section");
        const registrationViewport = document.querySelector<HTMLElement>(".registration-slide-viewport");
        const registrationTrack = document.querySelector<HTMLElement>(".registration-slide-track");
        const registrationProgress = document.querySelector<HTMLElement>(".registration-progress-fill");
        if (registrationSection && registrationViewport && registrationTrack) {
          const getRegistrationTravel = () =>
            Math.max(0, registrationTrack.scrollWidth - registrationViewport.clientWidth);
          const getRegistrationProgress = (progress: number) =>
            Math.min(1, Math.max(0, progress * (registrationSlides.length / (registrationSlides.length - 1))));
          const updateRegistrationState = (progress: number) => {
            const boundedProgress = getRegistrationProgress(progress);
            gsap.set(registrationTrack, { x: -getRegistrationTravel() * boundedProgress });
            registrationProgress?.style.setProperty("transform", `scaleX(${boundedProgress})`);
          };

          if (window.matchMedia("(min-width: 901px)").matches) {
            ScrollTrigger.create({
              anticipatePin: 1,
              end: () => `+=${window.innerHeight * registrationSlides.length}`,
              invalidateOnRefresh: true,
              onRefresh: (self) => updateRegistrationState(self.progress),
              onUpdate: (self) => updateRegistrationState(self.progress),
              pin: true,
              pinSpacing: true,
              scrub: true,
              start: "top top",
              trigger: registrationSection
            });
          } else {
            const onRegistrationScroll = () => {
              const distance = Math.max(1, registrationViewport.scrollWidth - registrationViewport.clientWidth);
              updateRegistrationState(registrationViewport.scrollLeft / distance);
            };
            registrationViewport.addEventListener("scroll", onRegistrationScroll, { passive: true });
            onRegistrationScroll();
            manualCleanups.push(() => registrationViewport.removeEventListener("scroll", onRegistrationScroll));
          }
        }

        gsap.to(".gallery-tile:nth-child(odd)", {
          y: -36,
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        gsap.to(".gallery-tile:nth-child(even)", {
          y: 28,
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        // Refresh ScrollTrigger after all sections are set up with a small delay
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }, rootRef);

      cleanup = () => {
        manualCleanups.forEach((manualCleanup) => manualCleanup());
        context.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    loadMotion();

    return () => {
      cancelled = true;
      cleanup?.();
      lenis?.destroy();
      window.cancelAnimationFrame(rafId);
    };
  }, [
    reducedMotion,
    rootRef,
    setActiveSpeaker,
    setActiveTimeline,
    setActiveWorldChapter,
    setWorldProgress,
    worldChapterCount
  ]);
}
