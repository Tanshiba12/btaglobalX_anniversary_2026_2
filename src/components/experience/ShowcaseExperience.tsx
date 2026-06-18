"use client";

import { useRef, useState } from "react";
import { ShowcaseFooter } from "./chrome/ShowcaseFooter";
import { StickyBottomBar } from "./chrome/StickyBottomBar";
import { StickyHeader } from "./chrome/StickyHeader";
import { ExperienceWorld } from "./world/ExperienceWorld";
import { useCountdown } from "./hooks/useCountdown";
import { useDockMode } from "./hooks/useDockMode";
import { useExperienceMotion } from "./hooks/useExperienceMotion";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { AwardsSection } from "./sections/AwardsSection";
import { CultureFashionSection } from "./sections/CultureFashionSection";
import { EventHighlightsSection } from "./sections/EventHighlightsSection";
import { EventJourneySection } from "./sections/EventJourneySection";
import { FaqSection } from "./sections/FaqSection";
import { ForumDeepDiveSection } from "./sections/ForumDeepDiveSection";
import { FounderMessageSection } from "./sections/FounderMessageSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { LocationSection } from "./sections/LocationSection";
import { OverviewSection } from "./sections/OverviewSection";
import { PartnersSection } from "./sections/PartnersSection";
import { RegistrationSection } from "./sections/RegistrationSection";
import { TimelineSection } from "./sections/TimelineSection";
import { WorldStorySection } from "./sections/WorldStorySection";
import { worldSceneCount } from "@/data";

export function ShowcaseExperience() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const dockMode = useDockMode();
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [worldProgress, setWorldProgress] = useState(0);
  const [activeWorldChapter, setActiveWorldChapter] = useState(0);
  const [activeSpeaker, setActiveSpeaker] = useState(0);
  const countdown = useCountdown("2026-08-01T15:00:00+08:00");

  useExperienceMotion({
    reducedMotion,
    rootRef,
    setActiveSpeaker,
    setActiveTimeline,
    setActiveWorldChapter,
    setWorldProgress,
    worldChapterCount: worldSceneCount
  });

  return (
    <main className="showcase-root" ref={rootRef}>
      <ExperienceWorld activeSpeaker={activeSpeaker} progress={worldProgress} reducedMotion={reducedMotion} />
      <StickyHeader />
      <StickyBottomBar mode={dockMode} />
      <HeroSection countdown={countdown} />
      <WorldStorySection
        activeIndex={activeWorldChapter}
        activeSpeaker={activeSpeaker}
        progress={worldProgress}
        reducedMotion={reducedMotion}
      />
      <OverviewSection />
      <FounderMessageSection />
      <EventJourneySection />
      <ForumDeepDiveSection />
      <EventHighlightsSection />
      <TimelineSection activeIndex={activeTimeline} />
      <CultureFashionSection />
      <AwardsSection />
      <RegistrationSection reducedMotion={reducedMotion} />
      <GallerySection />
      <LocationSection />
      <PartnersSection />
      <FaqSection />
      <ShowcaseFooter />
    </main>
  );
}
