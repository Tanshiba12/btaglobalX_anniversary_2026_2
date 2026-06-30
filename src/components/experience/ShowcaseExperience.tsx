"use client";

import { useRef } from "react";
import { ShowcaseFooter } from "./chrome/ShowcaseFooter";
import { StickyBottomBar } from "./chrome/StickyBottomBar";
import { StickyHeader } from "./chrome/StickyHeader";
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
      <StickyHeader />
      <StickyBottomBar mode={dockMode} />
      <HeroSection countdown={countdown} />
      <EventOverviewVideoSection />
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
