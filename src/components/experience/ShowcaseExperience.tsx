"use client";

import { useRef } from "react";
import { ShowcaseFooter } from "./chrome/ShowcaseFooter";
import { StickyBottomBar } from "./chrome/StickyBottomBar";
import { heroAssets } from "@/data/assets";
import { useCountdown } from "./hooks/useCountdown";
import { useDockMode } from "./hooks/useDockMode";
import { useExperienceMotion } from "./hooks/useExperienceMotion";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { AwardsSection } from "./sections/AwardsSection";
import { EventHighlightsSection } from "./sections/EventHighlightsSection";
import { EventJourneySection } from "./sections/EventJourneySection";
import { EventOverviewVideoSection } from "./sections/EventOverviewVideoSection";
import { FounderMessageSection } from "./sections/FounderMessageSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { PartnersSection } from "./sections/PartnersSection";
import { RegistrationSection } from "./sections/RegistrationSection";
import { TimelineSection } from "./sections/TimelineSection";

export function ShowcaseExperience() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const dockMode = useDockMode();
  const countdown = useCountdown("2026-08-01T17:00:00+08:00");

  useExperienceMotion({
    reducedMotion,
    rootRef
  });

  return (
    <main className="showcase-root" ref={rootRef}>
      <StickyBottomBar mode={dockMode} />
      <div className="opening-video-shell">
        <div className="opening-video-bg" aria-hidden="true">
          <video className="video-backdrop-blur" autoPlay loop muted playsInline preload="metadata">
            <source src={heroAssets.backgroundVideo.src} type="video/mp4" />
          </video>
          <video className="video-backdrop-contain" autoPlay loop muted playsInline preload="metadata">
            <source src={heroAssets.backgroundVideo.src} type="video/mp4" />
          </video>
        </div>
        <HeroSection countdown={countdown} />
        <EventOverviewVideoSection />
      </div>
      <FounderMessageSection />
      <TimelineSection />
      <EventHighlightsSection />
      <EventJourneySection />
      <AwardsSection />
      <RegistrationSection />
      <GallerySection />
      <PartnersSection />
      <ShowcaseFooter />
    </main>
  );
}
