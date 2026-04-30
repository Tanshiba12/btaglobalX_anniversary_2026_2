"use client";

import clsx from "clsx";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  MousePointer2,
  Phone,
  RefreshCw,
  Sparkles,
  Ticket,
  Volume2,
  VolumeX
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  acts,
  assetFallback,
  awardCategories,
  eventDetails,
  galleryPhotoAssets,
  highlights,
  itinerary,
  objectAssets,
  panelTopics,
  partnerLogoAssets,
  passAssets,
  partners,
  registrationPackages,
  runwayLookAssets,
  speakerPortraits,
  speakers
} from "@/data";
import type { ActConfig, DetailPayload, MotionRecipe } from "@/types/content";
import { ActVisual } from "./ActVisual";
import { DetailModal } from "./DetailModal";

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
};

type LenisConstructor = new (options: Record<string, unknown>) => LenisInstance;
type GsapApi = typeof import("gsap").gsap;
type GsapTimeline = ReturnType<GsapApi["timeline"]>;

export function CinematicExperience() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [detail, setDetail] = useState<DetailPayload | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeActId, setActiveActId] = useState(acts[0]?.id ?? "hero");
  const [actProgress, setActProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!rootRef.current || reducedMotion) {
      return;
    }

    let cancelled = false;
    let rafId = 0;
    let lenis: LenisInstance | null = null;
    let cleanupGsap: (() => void) | null = null;

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
      lenis = new Lenis({
        lerp: 0.075,
        smoothWheel: true,
        wheelMultiplier: 0.9
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".block-act").forEach((act) => {
          const actId = act.id;
          const recipe = act.dataset.recipe as MotionRecipe;
          const content = act.querySelector<HTMLElement>("[data-act-content]");
          const asset = act.querySelector<HTMLElement>("[data-act-asset]");
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: act,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.85,
              onEnter: () => setActiveActId(actId),
              onEnterBack: () => setActiveActId(actId),
              onUpdate: (self) => {
                const nextProgress = Math.round(self.progress * 100);
                setActProgress((current) =>
                  current[actId] === nextProgress ? current : { ...current, [actId]: nextProgress }
                );
              }
            }
          });

          if (asset) {
            timeline.to(asset, { scale: 1.08, rotate: 0, ease: "none" }, 0);
          }

          if (content) {
            timeline.fromTo(content, { y: 40 }, { y: -28, ease: "none" }, 0);
          }

          applyMotionRecipe(gsap, timeline, act, recipe);
        });
      }, rootRef);

      cleanupGsap = () => {
        context.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    loadMotion();

    return () => {
      cancelled = true;
      cleanupGsap?.();
      lenis?.destroy();
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  const activeAct = useMemo(
    () => acts.find((act) => act.id === activeActId) ?? acts[0],
    [activeActId]
  );
  const openDetail = (payload: DetailPayload) => setDetail(payload);

  return (
    <main
      className={clsx("block-experience", reducedMotion && "is-reduced")}
      data-active-palette={activeAct?.palette}
      ref={rootRef}
    >
      <div className="fixed-controls" aria-label="Experience controls">
        <a className="register-shortcut" href="#schedule-access">
          <Ticket aria-hidden="true" />
          Register
        </a>
        <button className="icon-button" type="button" onClick={() => setSoundOn((value) => !value)}>
          {soundOn ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
          <span className="sr-only">{soundOn ? "Turn sound off" : "Turn sound on"}</span>
        </button>
        <button className="icon-button" type="button" onClick={() => setReducedMotion((value) => !value)}>
          <MousePointer2 aria-hidden="true" />
          <span className="sr-only">{reducedMotion ? "Use full motion" : "Use reduced motion"}</span>
        </button>
      </div>

      {acts.map((act) => (
        <ActSection act={act} key={act.id} openDetail={openDetail} />
      ))}

      <BottomSlotTimeline
        activeActId={activeActId}
        progress={actProgress}
        reducedMotion={reducedMotion}
      />

      <DetailModal detail={detail} onClose={() => setDetail(null)} />
    </main>
  );
}

function applyMotionRecipe(
  gsap: GsapApi,
  timeline: GsapTimeline,
  act: HTMLElement,
  recipe: MotionRecipe
) {
  const select = <T extends HTMLElement>(selector: string) => act.querySelectorAll<T>(selector);

  if (recipe === "heroLabels") {
    const heroClusterX = window.innerWidth < 700 ? "18vw" : "31vw";
    const heroTopY = window.innerWidth < 700 ? "18vh" : "20vh";
    const heroBottomY = window.innerWidth < 700 ? "-24vh" : "-23vh";

    timeline.to(select("[data-hero-main]"), { x: "-128vw", ease: "none" }, 0.12);
    timeline.to(
      select("[data-hero-image]"),
      {
        x: (index: number) => (index % 2 === 0 ? heroClusterX : `-${heroClusterX}`),
        y: (index: number) => (index < 2 ? heroTopY : heroBottomY),
        rotate: 0,
        scale: 1.1,
        ease: "none"
      },
      0.34
    );
    timeline.to(select("[data-hero-orbit]"), { scale: 1.02, y: 0, ease: "none" }, 0.52);
    timeline.to(select("[data-hero-image]"), { scale: 1.28, ease: "none" }, 0.62);
    timeline.to(select("[data-hero-bottom]"), { y: "86vh", ease: "none" }, 0.82);
    timeline.to(select("[data-hero-partner]"), { y: "58vh", ease: "none" }, 0.82);

    timeline.fromTo(
      select("[data-hero-wipe]"),
      { scale: 1 },
      { scale: 46, ease: "power2.inOut" },
      0.82
    );
    return;
  }

  if (recipe === "mapStickers") {
    timeline.fromTo(
      select("[data-map-poster]"),
      { y: 70, scale: 0.94, rotate: 3, autoAlpha: 0 },
      { y: 0, scale: 1, rotate: -2, autoAlpha: 1, ease: "none" },
      0.08
    );
    timeline.to(select("[data-map-headline]"), { x: "-9vw", y: "38vh", scale: 0.72, autoAlpha: 0.32, ease: "none" }, 0.2);
    timeline.to(select("[data-map-poster]"), { x: "-36vw", y: "5vh", scale: 0.55, rotate: -7, ease: "none" }, 0.24);
    timeline.fromTo(
      select("[data-map-lane]"),
      { x: "70vw", autoAlpha: 0 },
      { x: 0, autoAlpha: 1, stagger: 0.08, ease: "none" },
      0.38
    );
    timeline.to(
      select("[data-map-track]"),
      { x: "-74vw", ease: "none" },
      0.58
    );
    timeline.fromTo(
      select("[data-map-sticker]"),
      { y: 46, rotate: -5, autoAlpha: 0 },
      { y: 0, rotate: 0, autoAlpha: 1, stagger: 0.02, ease: "none" },
      0.5
    );
    timeline.fromTo(
      select("[data-map-bridge]"),
      { scale: 0.88, x: "10vw" },
      { scale: 18, x: 0, ease: "none" },
      0.88
    );
    return;
  }

  if (recipe === "forumBubbles") {
    timeline.fromTo(
      select("[data-microphone]"),
      { y: "42vh", scaleY: 0.4, autoAlpha: 0 },
      { y: 0, scaleY: 1, autoAlpha: 1, ease: "none" },
      0.04
    );
    timeline.fromTo(
      select("[data-forum-moderator]"),
      { scale: 0.72, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, ease: "none" },
      0.08
    );
    timeline.fromTo(
      select("[data-panelist-portrait]"),
      { y: 90, scale: 0.82, autoAlpha: 0 },
      { y: 0, scale: 1, autoAlpha: 1, stagger: 0.065, ease: "none" },
      0.22
    );
    timeline.fromTo(
      select("[data-topic-bubble]"),
      { y: "34vh", scale: 0.78, autoAlpha: 0 },
      { y: 0, scale: 1, autoAlpha: 1, stagger: 0.045, ease: "none" },
      0.48
    );
    timeline.fromTo(
      select("[data-speech-board]"),
      { scale: 0.64, y: 70, autoAlpha: 0 },
      { scale: 1, y: 0, autoAlpha: 1, ease: "none" },
      0.7
    );
    timeline.fromTo(
      select("[data-forum-wipe]"),
      { scale: 0.7 },
      { scale: 18, ease: "none" },
      0.86
    );
    return;
  }

  if (recipe === "marketFrames") {
    timeline.fromTo(
      select("[data-awning]"),
      { y: "-28vh", rotateX: -82, autoAlpha: 0 },
      { y: 0, rotateX: 0, autoAlpha: 1, stagger: 0.05, ease: "none" },
      0.05
    );
    timeline.fromTo(
      select("[data-market-aisle]"),
      { scaleY: 0 },
      { scaleY: 1, ease: "none" },
      0.14
    );
    timeline.fromTo(
      select("[data-booth-block]"),
      { x: (index: number) => (index % 2 === 0 ? "-22vw" : "22vw"), y: 60, autoAlpha: 0 },
      { x: 0, y: 0, autoAlpha: 1, stagger: 0.055, ease: "none" },
      0.18
    );
    timeline.fromTo(
      select("[data-market-frame]"),
      { scale: 0.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, stagger: 0.055, ease: "none" },
      0.34
    );
    timeline.to(select("[data-market-badge]"), { scale: 1.22, rotate: -8, ease: "none" }, 0.66);
    timeline.to(select("[data-feature-panel]"), { scale: 1.24, x: "-8vw", y: "-4vh", ease: "none" }, 0.68);
    timeline.fromTo(
      select("[data-market-tear]"),
      { scale: 0.72 },
      { scale: 18, ease: "none" },
      0.86
    );
    return;
  }

  if (recipe === "premierePages") {
    timeline.fromTo(select("[data-premiere-cover]"), { y: 90, rotate: -7, autoAlpha: 0 }, { y: 0, rotate: -3, autoAlpha: 1, ease: "none" }, 0.02);
    timeline.to(select("[data-premiere-cover]"), { x: "-13vw", rotateY: -24, scale: 0.92, ease: "none" }, 0.18);
    timeline.fromTo(select("[data-premiere-page='left']"), { rotateY: 74, x: -40, autoAlpha: 0 }, { rotateY: 0, x: 0, autoAlpha: 1, ease: "none" }, 0.2);
    timeline.fromTo(select("[data-premiere-page='right']"), { rotateY: -74, x: 40, autoAlpha: 0 }, { rotateY: 0, x: 0, autoAlpha: 1, ease: "none" }, 0.28);
    timeline.fromTo(select("[data-premiere-callout]"), { y: 70, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05, ease: "none" }, 0.42);
    timeline.fromTo(select("[data-premiere-partner]"), { scale: 0.62, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.045, ease: "none" }, 0.6);
    timeline.fromTo(select("[data-premiere-flash]"), { scale: 0.05, rotate: -12 }, { scale: 23, rotate: 0, ease: "none" }, 0.8);
    return;
  }

  if (recipe === "runwayFold") {
    timeline.fromTo(select("[data-interview-clip]"), { x: "-12vw", y: 36, autoAlpha: 0, rotate: -3 }, { x: 0, y: 0, autoAlpha: 1, rotate: 0, stagger: 0.055, ease: "none" }, 0.18);
    timeline.to(select("[data-press-wall]"), { rotateX: 42, y: "-10vh", autoAlpha: 0.78, ease: "none" }, 0.42);
    timeline.fromTo(select("[data-pattern-strip]"), { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.055, ease: "none" }, 0.48);
    timeline.fromTo(select("[data-runway-look]"), { y: "46vh", scale: 0.72, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, stagger: 0.055, ease: "none" }, 0.66);
    timeline.fromTo(select("[data-runway-dim]"), { scaleY: 0 }, { scaleY: 1, ease: "none" }, 0.9);
    return;
  }

  if (recipe === "awardsStage") {
    timeline.fromTo(select("[data-table-node]"), { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.035, ease: "none" }, 0.02);
    timeline.fromTo(select("[data-network-line]"), { scaleX: 0 }, { scaleX: 1, stagger: 0.035, ease: "none" }, 0.18);
    timeline.fromTo(select("[data-trophy-rise]"), { y: "42vh", scale: 0.7, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, ease: "none" }, 0.36);
    timeline.fromTo(select("[data-award-plaque]"), { x: 80, rotate: 10, autoAlpha: 0 }, { x: 0, rotate: 0, autoAlpha: 1, stagger: 0.055, ease: "none" }, 0.66);
    timeline.fromTo(select("[data-prize-capsule]"), { y: -80, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05, ease: "none" }, 0.76);
    timeline.fromTo(select("[data-awards-base]"), { scaleY: 0 }, { scaleY: 1, ease: "none" }, 0.88);
    return;
  }

  if (recipe === "accessDesk") {
    timeline.fromTo(select("[data-access-line]"), { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0.02);
    timeline.fromTo(select("[data-time-paper]"), { y: 80, rotate: -5, autoAlpha: 0 }, { y: 0, rotate: 0, autoAlpha: 1, stagger: 0.055, ease: "none" }, 0.16);
    timeline.fromTo(select("[data-pass-drawer]"), { x: "42vw" }, { x: 0, ease: "none" }, 0.3);
    timeline.fromTo(select("[data-access-pass]"), { x: 110, y: 40, rotate: 14, autoAlpha: 0 }, { x: 0, y: 0, rotate: 0, autoAlpha: 1, stagger: 0.04, ease: "none" }, 0.38);
    timeline.fromTo(select("[data-benefit-stamp]"), { scale: 0.72, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.045, ease: "none" }, 0.56);
    timeline.fromTo(select("[data-register-stamp]"), { scale: 2.2, rotate: -18, autoAlpha: 0 }, { scale: 1, rotate: -8, autoAlpha: 1, ease: "none" }, 0.75);
    timeline.to(select("[data-access-scatter]"), {
      x: (index: number) => (index % 2 === 0 ? -90 : 80),
      y: -70,
      rotate: (index: number) => (index % 2 === 0 ? -8 : 9),
      ease: "none"
    }, 0.88);
    timeline.fromTo(select("[data-access-wipe]"), { scale: 0.6 }, { scale: 22, ease: "none" }, 0.92);
    return;
  }

  timeline.fromTo(select("[data-gallery-tile]"), { y: 110, rotate: 12, autoAlpha: 0 }, { y: 0, rotate: 0, autoAlpha: 1, stagger: 0.045, ease: "none" }, 0.04);
  timeline.fromTo(select("[data-contact-label]"), { y: -80, rotate: -6, autoAlpha: 0 }, { y: 0, rotate: 0, autoAlpha: 1, stagger: 0.05, ease: "none" }, 0.34);
  timeline.fromTo(select("[data-final-sticker]"), { scale: 0.62, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.045, ease: "none" }, 0.56);
  timeline.to(select("[data-gallery-tile]"), { x: 0, y: 0, scale: 0.18, rotate: 0, autoAlpha: 0.35, stagger: 0.025, ease: "none" }, 0.76);
  timeline.to(select("[data-contact-label]"), { y: 60, scale: 0.3, autoAlpha: 0, stagger: 0.02, ease: "none" }, 0.78);
  timeline.fromTo(select("[data-finale-stamp]"), { scale: 0.65, rotate: -18 }, { scale: 1.6, rotate: 0, ease: "none" }, 0.82);
}

function BottomSlotTimeline({
  activeActId,
  progress,
  reducedMotion
}: {
  activeActId: string;
  progress: Record<string, number>;
  reducedMotion: boolean;
}) {
  const jumpToAct = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start"
    });
  };

  return (
    <nav className="slot-timeline" aria-label="Section timeline">
      {acts.map((act) => (
        <button
          className={clsx("slot-item", activeActId === act.id && "is-active")}
          key={act.id}
          onClick={() => jumpToAct(act.id)}
          style={{ "--slot-progress": `${progress[act.id] ?? 0}%` } as CSSProperties}
          type="button"
        >
          <span className="slot-fill" />
          <em>{act.slotLabel}</em>
        </button>
      ))}
    </nav>
  );
}

function useCountdown(targetIso: string) {
  const [remaining, setRemaining] = useState(getInitialCountdownUnits);

  useEffect(() => {
    const initialTimeout = window.setTimeout(() => setRemaining(getCountdownUnits(targetIso)), 0);
    const interval = window.setInterval(() => setRemaining(getCountdownUnits(targetIso)), 1000);
    return () => {
      window.clearTimeout(initialTimeout);
      window.clearInterval(interval);
    };
  }, [targetIso]);

  return remaining;
}

function getInitialCountdownUnits() {
  return [
    { label: "Days", value: "--" },
    { label: "Hours", value: "--" },
    { label: "Min", value: "--" },
    { label: "Sec", value: "--" }
  ];
}

function getCountdownUnits(targetIso: string) {
  const distance = Math.max(0, new Date(targetIso).getTime() - Date.now());
  const days = Math.floor(distance / 86_400_000);
  const hours = Math.floor((distance % 86_400_000) / 3_600_000);
  const minutes = Math.floor((distance % 3_600_000) / 60_000);
  const seconds = Math.floor((distance % 60_000) / 1000);

  return [
    { label: "Days", value: String(days).padStart(2, "0") },
    { label: "Hours", value: String(hours).padStart(2, "0") },
    { label: "Min", value: String(minutes).padStart(2, "0") },
    { label: "Sec", value: String(seconds).padStart(2, "0") }
  ];
}

function ActSection({
  act,
  openDetail
}: {
  act: ActConfig;
  openDetail: (payload: DetailPayload) => void;
}) {
  if (act.layout === "hero-invitation") {
    return <HeroActSection act={act} openDetail={openDetail} />;
  }

  if (act.layout === "event-sticker-map") {
    return <EventMapActSection act={act} openDetail={openDetail} />;
  }

  if (act.layout === "forum-lab-board") {
    return <ForumActSection act={act} openDetail={openDetail} />;
  }

  if (act.layout === "creative-market-wall") {
    return <CreativeMarketActSection act={act} openDetail={openDetail} />;
  }

  if (act.layout === "premiere-editorial") {
    return <PremiereActSection act={act} openDetail={openDetail} />;
  }

  if (act.layout === "red-carpet-runway") {
    return <RunwayActSection act={act} openDetail={openDetail} />;
  }

  if (act.layout === "gala-awards-stage") {
    return <AwardsActSection act={act} openDetail={openDetail} />;
  }

  if (act.layout === "schedule-access-desk") {
    return <AccessDeskActSection act={act} openDetail={openDetail} />;
  }

  if (act.layout === "gallery-finale-loop") {
    return <FinaleActSection act={act} openDetail={openDetail} />;
  }

  return (
    <section
      className={clsx("block-act", `palette-${act.palette}`, `layout-${act.layout}`)}
      data-recipe={act.motionRecipe}
      id={act.id}
      style={{ "--act-height": `${act.height}vh`, "--act-weight": act.durationWeight } as CSSProperties}
    >
      <div className="act-pin">
        <ActVisual act={act} />
        <article className="act-content" data-act-content>
          <p className="eyebrow">{act.label}</p>
          <h2>{act.title}</h2>
          <p className="act-kicker">{act.kicker}</p>
          <p className="act-body">{act.body}</p>
          <ActBody act={act} openDetail={openDetail} />
        </article>
      </div>
    </section>
  );
}

const heroImageSlots = [
  { label: "Previous Gallery 01", caption: "Replace with last-year arrival photo" },
  { label: "Previous Gallery 02", caption: "Replace with award or stage memory" },
  { label: "Event Detail", caption: "1 Aug 2026 - Sheraton Johor Bahru" },
  { label: "Guest Moment", caption: "Replace with red-carpet or audience photo" }
];

const eventMapLanes = [
  {
    title: "Learn",
    copy: "Forum, speakers, and practical life-management ideas.",
    ids: ["forum", "speakers"]
  },
  {
    title: "Explore",
    copy: "Art, wellness, bazaar booths, and sustainable stories.",
    ids: ["bazaar", "art"]
  },
  {
    title: "Be Seen",
    copy: "Magazine premiere, media partners, and red-carpet visibility.",
    ids: ["magazine", "alliance", "red-carpet"]
  },
  {
    title: "Celebrate",
    copy: "Culture, runway, dinner, awards, and lucky draw.",
    ids: ["culture", "fashion", "dinner", "awards", "lucky-draw"]
  }
];

const marketFrames = [
  { title: "Sustainable Art", caption: "Gallery image slot" },
  { title: "Creative Makers", caption: "Artist booth slot" },
  { title: "Wellness Products", caption: "Product image slot" },
  { title: "Global Stage", caption: "Recognition image slot" },
  { title: "Bazaar Detail", caption: "Vendor display slot" }
];

const marketBooths = [
  "Artist spotlight",
  "Wellness fair",
  "Product discovery",
  "Sustainable story"
];

const premiereCallouts = [
  {
    title: "Cover Unveiling",
    body: "THE PREMIERE introduces Tycoon Global Magazine Special Edition featuring BTA GLOBALX."
  },
  {
    title: "Editor's Speech",
    body: "A focused editorial moment for the magazine story, alliance positioning, and media energy."
  },
  {
    title: "Media Flash-Mob",
    body: "Short visibility bites connect red carpet, partner coverage, and international promotion."
  }
];

const runwayInterviewClips = ["Arrival Flash", "Interview Bite", "VIP Press Note"];
const runwayPatterns = ["Southeast Asia", "Music & Dance", "Legacy", "Luxury"];
const runwayLooks = [
  "Heritage Look",
  "Artisanal Craft",
  "Global Sophistication",
  "Nature Couture"
];

const awardTableNodes = [
  "Delegates",
  "Changemakers",
  "Professionals",
  "Global partners",
  "Table of 10",
  "Media guests",
  "Award nominees"
];

const finalGalleryTiles = ["Ceremony", "Red Carpet", "Performances", "Awards", "Networking", "Fashion"];

function HeroActSection({
  act,
  openDetail
}: {
  act: ActConfig;
  openDetail: (payload: DetailPayload) => void;
}) {
  const countdown = useCountdown("2026-08-01T15:00:00+08:00");

  return (
    <section
      className={clsx("block-act", `palette-${act.palette}`, `layout-${act.layout}`)}
      data-recipe={act.motionRecipe}
      id={act.id}
      style={{ "--act-height": `${act.height}vh`, "--act-weight": act.durationWeight } as CSSProperties}
    >
      <div className="act-pin hero-pin">
        <div className="hero-logo-container">
          <Image
            alt="BTA GlobalX"
            height={120}
            src="/assets/brand/bta-logo.gif"
            unoptimized
            width={120}
          />
        </div>
        <div className="hero-stage">
          <article className="hero-copy-stack" data-hero-copy>
            <div className="hero-main-lockup" data-hero-main>
              <p className="eyebrow" data-hero-title>
                {act.label}
              </p>
              <h1 className="hero-title">
                <span className="hero-title-bta" data-hero-title>BTA</span>
                <span className="hero-title-replace" data-hero-replace-text data-hero-title>
                  <span className="hero-title-global">GlobalX</span>
                  <span className="hero-title-edition">3rd Anniversary &amp; Excellence Awards 2026</span>
                </span>
              </h1>
            </div>
            <div className="hero-image-runway" data-hero-orbit aria-label="Previous event preview images">
              {heroImageSlots.map((slot, index) => (
                <ImagePlaceholder
                  caption={slot.caption}
                  className={clsx("hero-image-card", `hero-card-${index + 1}`)}
                  key={slot.label}
                  label={slot.label}
                  motion="hero-image"
                />
              ))}
            </div>
            <div className="hero-bottom-lockup" data-hero-bottom>
              <p className="hero-lede" data-hero-title>
                {eventDetails.invitation}
              </p>
              <div className="hero-countdown" aria-label="Countdown to event">
                {countdown.map((unit) => (
                  <span key={unit.label}>
                    <strong>{unit.value}</strong>
                    <em>{unit.label}</em>
                  </span>
                ))}
              </div>
              <div className="hero-meta-grid">
                <span data-hero-meta>
                  <CalendarDays aria-hidden="true" />
                  {eventDetails.date}
                </span>
                <span data-hero-meta>
                  <Clock3 aria-hidden="true" />
                  {eventDetails.time}
                </span>
                <span data-hero-meta>
                  <MapPin aria-hidden="true" />
                  {eventDetails.venue}
                </span>
              </div>
              <div className="hero-ticket-row" data-hero-ticket>
                <a className="ticket-button hero-ticket" href="#schedule-access">
                  <span className="hero-ticket-wipe" data-hero-wipe aria-hidden="true" />
                  <span className="hero-ticket-content">
                    Register Now
                    <ArrowRight aria-hidden="true" />
                  </span>
                </a>
                <button
                  className="label-button hero-contact"
                  type="button"
                  onClick={() =>
                    openDetail({
                      eyebrow: "Contact",
                      title: "Talk to BTA GLOBALx",
                      body: "Use the final contact act or the register shortcut to reserve your spot.",
                      items: [eventDetails.email, ...eventDetails.phones, eventDetails.social]
                    })
                  }
                >
                  Contact
                </button>
              </div>
            </div>
          </article>
          <div className="hero-partner-marquee" aria-label="Event partners">
            {partners.map((partner) => (
              <button
                data-hero-partner
                key={partner.name}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: partner.role,
                    title: partner.name,
                    body: "Official brand artwork can replace this printed label once final assets are supplied."
                  })
                }
              >
                <span>{partner.role}</span>
                {partner.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventMapActSection({
  act,
  openDetail
}: {
  act: ActConfig;
  openDetail: (payload: DetailPayload) => void;
}) {
  return (
    <section
      className={clsx("block-act", `palette-${act.palette}`, `layout-${act.layout}`)}
      data-recipe={act.motionRecipe}
      id={act.id}
      style={{ "--act-height": `${act.height}vh`, "--act-weight": act.durationWeight } as CSSProperties}
    >
      <div className="act-pin map-pin">
        <div className="event-map-stage">
          <article className="map-copy-panel">
            <p className="eyebrow" data-map-headline>
              {act.label}
            </p>
            <h2 data-map-headline>What happens here?</h2>
            <p data-map-headline>
              A full-day celebration sorted into four clear movements: learn, explore, be seen, and celebrate.
            </p>
          </article>
          <ImagePlaceholder
            caption="Hero poster image slot for forum, culture, media, and awards."
            className="map-poster-placeholder"
            label="Event Day Poster"
            motion="map-poster"
          />
          <div className="map-lane-track" data-map-track>
            {eventMapLanes.map((lane, index) => (
              <section
                className={clsx("map-lane-rail", `map-lane-${index + 1}`)}
                data-map-lane
                key={lane.title}
              >
                <div className="map-lane-label">
                  <span>0{index + 1}</span>
                  <h3>{lane.title}</h3>
                  <p>{lane.copy}</p>
                </div>
                <div className="map-highlight-strip">
                  {highlights
                    .filter((highlight) => lane.ids.includes(highlight.id))
                    .map((highlight) => {
                      const Icon = highlight.icon;
                      return (
                        <button
                          className="map-highlight-card"
                          data-map-sticker
                          key={highlight.id}
                          type="button"
                          onClick={() =>
                            openDetail({
                              eyebrow: lane.title,
                              title: highlight.title,
                              body: highlight.description,
                              items: [`Related act: ${highlight.actId}`]
                            })
                          }
                        >
                          <Icon aria-hidden="true" />
                          <strong>{highlight.title}</strong>
                        </button>
                      );
                    })}
                </div>
              </section>
            ))}
          </div>
          <div className="map-forum-bridge" data-map-bridge>
            <span>Forum</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForumActSection({
  act,
  openDetail
}: {
  act: ActConfig;
  openDetail: (payload: DetailPayload) => void;
}) {
  const moderator = speakers[0];
  const panelists = speakers.slice(1);

  return (
    <section
      className={clsx("block-act", `palette-${act.palette}`, `layout-${act.layout}`)}
      data-recipe={act.motionRecipe}
      id={act.id}
      style={{ "--act-height": `${act.height}vh`, "--act-weight": act.durationWeight } as CSSProperties}
    >
      <div className="act-pin forum-pin">
        <div className="forum-stage">
          <article className="forum-copy-panel" data-forum-copy>
            <p className="eyebrow">{act.label}</p>
            <h2>Mind & Life Lab</h2>
            <p>{act.kicker}</p>
            <span>Live panel stage for keynote, moderator, panelists, and audience questions.</span>
          </article>
          <button
            className="forum-moderator-card"
            data-forum-moderator
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: moderator.role,
                title: moderator.name,
                body: moderator.focus
              })
            }
          >
            <div className="forum-moderator-media">
              <AssetImage alt={moderator.name} src={speakerPortraits[moderator.name]} />
              <span className="forum-microphone-asset" data-microphone>
                <AssetImage alt="" src={objectAssets.microphone} width={420} height={900} />
              </span>
            </div>
            <strong>{moderator.name}</strong>
            <em>{moderator.role}</em>
          </button>
          <div className="panelist-spotlight-grid">
            {panelists.map((speaker, index) => (
              <button
                className={clsx("panelist-portrait", `panelist-portrait-${index + 1}`)}
                data-panelist-portrait
                key={speaker.name}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: speaker.role,
                    title: speaker.name,
                    body: speaker.focus
                  })
                }
              >
                <div className="mini-speaker-window">
                  <AssetImage alt={speaker.name} src={speakerPortraits[speaker.name]} width={720} height={900} />
                </div>
                <strong>{speaker.name}</strong>
                <em>{speaker.role}</em>
              </button>
            ))}
          </div>
          <div className="forum-topic-deck">
            {panelTopics.slice(0, 5).map((topic) => (
              <button
                data-topic-bubble
                key={topic}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Panel topic",
                    title: topic.split(":")[0],
                    body: topic
                  })
                }
              >
                {topic.split(":")[0]}
              </button>
            ))}
          </div>
          <button
            className="forum-speech-board"
            data-speech-board
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Panel topic",
                title: "Integrated Living",
                body: "Traditional wisdom and modern science meet inside the Life Management & Mental Well-being Forum."
              })
            }
          >
            <span className="forum-topic-transition" data-forum-wipe aria-hidden="true" />
            <span className="forum-speech-label">
              Integrated Living
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function CreativeMarketActSection({
  act,
  openDetail
}: {
  act: ActConfig;
  openDetail: (payload: DetailPayload) => void;
}) {
  return (
    <section
      className={clsx("block-act", `palette-${act.palette}`, `layout-${act.layout}`)}
      data-recipe={act.motionRecipe}
      id={act.id}
      style={{ "--act-height": `${act.height}vh`, "--act-weight": act.durationWeight } as CSSProperties}
    >
      <div className="act-pin market-pin">
        <div className="market-stage">
          <article className="market-copy-panel" data-market-copy>
            <p className="eyebrow">{act.label}</p>
            <h2>Creative Market</h2>
            <p>{act.kicker}</p>
          </article>
          <div className="market-awning-row">
            {["Art", "Wellness", "Bazaar", "Impact"].map((awning) => (
              <span data-awning key={awning}>
                {awning}
              </span>
            ))}
          </div>
          <div className="market-aisle" data-market-aisle />
          <div className="market-booth-floor">
            {marketBooths.map((booth, index) => (
              <button
                className={clsx("market-booth-block", `market-booth-${index + 1}`)}
                data-booth-block
                key={booth}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Bazaar & Wellness Fair",
                    title: booth,
                    body: "A dedicated booth-style content slot for wellness products, creative entrepreneurship, and event discovery."
                  })
                }
              >
                {booth}
              </button>
            ))}
          </div>
          <div className="market-frame-cluster">
            {marketFrames.slice(0, 4).map((frame, index) => (
              <button
                className={clsx("market-photo-frame", `market-frame-${index + 1}`)}
                data-market-frame
                key={frame.title}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Sustainable Creative Art Exhibition",
                    title: frame.title,
                    body: "Replace this slot with a real Freepik/client image for the art, wellness, bazaar, or sustainable story moment."
                  })
                }
              >
                <div className="market-photo-window">
                  <span />
                  <span />
                  <span />
                </div>
                <strong>{frame.title}</strong>
                <em>{frame.caption}</em>
              </button>
            ))}
          </div>
          <button
            className="market-feature-panel"
            data-feature-panel
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Creative impact",
                title: "High-impact global-stage gallery",
                body: "The market act gives artists, wellness products, and sustainable initiatives a premium visible stage before the magazine premiere."
              })
            }
          >
            <span className="market-feature-transition" data-market-tear aria-hidden="true" />
            <span className="market-feature-copy">Featured sustainable gallery panel</span>
          </button>
          <button
            className="market-impact-badge"
            data-market-badge
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Creative impact",
                title: "Sustainable Creative Art Exhibition",
                body: "A stamp-style badge for the high-impact global-stage gallery."
              })
            }
          >
            Sustainable Art
          </button>
        </div>
      </div>
    </section>
  );
}

function PremiereActSection({
  act,
  openDetail
}: {
  act: ActConfig;
  openDetail: (payload: DetailPayload) => void;
}) {
  return (
    <section
      className={clsx("block-act", `palette-${act.palette}`, `layout-${act.layout}`)}
      data-recipe={act.motionRecipe}
      id={act.id}
      style={{ "--act-height": `${act.height}vh`, "--act-weight": act.durationWeight } as CSSProperties}
    >
      <div className="act-pin premiere-pin">
        <div className="premiere-stage">
          <article className="premiere-copy">
            <p className="eyebrow">{act.label}</p>
            <h2>THE PREMIERE</h2>
            <p>{act.kicker}</p>
          </article>
          <button
            className="premiere-cover"
            data-premiere-cover
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Magazine launch",
                title: "Tycoon Global Magazine Special Edition",
                body: "The cover mockup will be replaced with the final Tycoon Global/BTA GLOBALX magazine artwork."
              })
            }
          >
            <span className="premiere-flash-wipe" data-premiere-flash aria-hidden="true" />
            <span>THE</span>
            <strong>PREMIERE</strong>
            <em>BTA GLOBALX x TYCOON GLOBAL</em>
          </button>
          <div className="premiere-spread" aria-label="Magazine spread">
            <section data-premiere-page="left">
              <span>Cover story</span>
              <strong>BTA GLOBALX</strong>
              <em>Special edition feature page</em>
            </section>
            <section data-premiere-page="right">
              <span>Alliance desk</span>
              <strong>Media Visibility</strong>
              <em>Podcast, magazine, and international promotion</em>
            </section>
          </div>
          <div className="premiere-callout-stack">
            {premiereCallouts.map((callout) => (
              <button
                data-premiere-callout
                key={callout.title}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Magazine launch",
                    title: callout.title,
                    body: callout.body
                  })
                }
              >
                {callout.title}
              </button>
            ))}
          </div>
          <div className="premiere-partner-orbit">
            {partners.map((partner) => (
              <button
                data-premiere-partner
                key={partner.name}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: partner.role,
                    title: partner.name,
                    body: "Partner badge node. Replace with final official logo artwork when supplied."
                  })
                }
              >
                <span>{partner.role}</span>
                {partner.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RunwayActSection({
  act,
  openDetail
}: {
  act: ActConfig;
  openDetail: (payload: DetailPayload) => void;
}) {
  return (
    <section
      className={clsx("block-act", `palette-${act.palette}`, `layout-${act.layout}`)}
      data-recipe={act.motionRecipe}
      id={act.id}
      style={{ "--act-height": `${act.height}vh`, "--act-weight": act.durationWeight } as CSSProperties}
    >
      <div className="act-pin runway-pin">
        <div className="runway-stage-edge" data-runway-dim />
        <div className="runway-stage-anti">
          <article className="runway-copy">
            <p className="eyebrow">{act.label}</p>
            <h2>Red Carpet to Runway</h2>
            <p>{act.kicker}</p>
          </article>
          <div className="press-wall-fold" data-press-wall>
            <AssetImage alt="Press wall placeholder" src={objectAssets.pressWall} width={1500} height={900} />
          </div>
          <div className="interview-clips">
            {runwayInterviewClips.map((clip) => (
              <button
                data-interview-clip
                key={clip}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Red Carpet & Exclusive Interviews",
                    title: clip,
                    body: "Replace this clipping with short red carpet photo/video content once supplied."
                  })
                }
              >
                {clip}
              </button>
            ))}
          </div>
          <div className="culture-pattern-stage">
            {runwayPatterns.map((pattern) => (
              <button
                data-pattern-strip
                key={pattern}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Inter-cultural Music & Dance",
                    title: pattern,
                    body: "A Tapestry of Southeast Asia expressed through rhythm, costume, and cultural pattern."
                  })
                }
              >
                {pattern}
              </button>
            ))}
          </div>
          <div className="runway-look-line">
            {runwayLooks.map((look, index) => (
              <button
                data-runway-look
                key={look}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Heritage Fashion Show",
                    title: look,
                    body: "A Fusion of Legacy & Luxury. Replace this look slot with real fashion/runway imagery later."
                  })
                }
              >
                <span>
                  <AssetImage
                    alt={look}
                    src={runwayLookAssets[index % runwayLookAssets.length]}
                    width={700}
                    height={1000}
                  />
                </span>
                <strong>{look}</strong>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardsActSection({
  act,
  openDetail
}: {
  act: ActConfig;
  openDetail: (payload: DetailPayload) => void;
}) {
  return (
    <section
      className={clsx("block-act", `palette-${act.palette}`, `layout-${act.layout}`)}
      data-recipe={act.motionRecipe}
      id={act.id}
      style={{ "--act-height": `${act.height}vh`, "--act-weight": act.durationWeight } as CSSProperties}
    >
      <div className="act-pin awards-pin">
        <div className="awards-access-base" data-awards-base />
        <div className="awards-stage-anti">
          <article className="awards-copy">
            <p className="eyebrow">{act.label}</p>
            <h2>Gala + Awards</h2>
            <p>{act.kicker}</p>
          </article>
          <AssetImage alt="" className="table-map-asset" src={objectAssets.tableMap} width={900} height={900} />
          <div className="table-orbit-map">
            {awardTableNodes.map((node, index) => (
              <button
                data-table-node
                key={node}
                style={{ "--node-index": index } as CSSProperties}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Gala Dinner & Global Networking",
                    title: node,
                    body: "Dinner seating becomes a visual network map for international delegates and event partners."
                  })
                }
              >
                {node}
              </button>
            ))}
            {Array.from({ length: 7 }).map((_, index) => (
              <span data-network-line key={`network-line-${index + 1}`} />
            ))}
          </div>
          <button
            className="trophy-rise"
            data-trophy-rise
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Excellence Award 2026",
                title: "Award Stage",
                body: "The trophy object rises as the recognition climax of the gala."
              })
            }
          >
            <AssetImage alt="Excellence trophy" src={objectAssets.trophy} width={900} height={1100} />
          </button>
          <div className="award-plaque-stack">
            {awardCategories.map((award, index) => (
              <button
                data-award-plaque
                key={award.title}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Award category",
                    title: award.title,
                    body: award.description,
                    items: ["Silver: SGD 388", "Gold: SGD 1500", "Platinum: SGD 2500"]
                  })
                }
              >
                <AssetImage
                  alt=""
                  className="award-plaque-asset"
                  src={
                    index % 3 === 0
                      ? "/assets/objects/plaques/award-plaque-silver.svg"
                      : index % 3 === 1
                        ? "/assets/objects/plaques/award-plaque-gold.svg"
                        : "/assets/objects/plaques/award-plaque-platinum.svg"
                  }
                  width={900}
                  height={520}
                />
                {award.title}
              </button>
            ))}
          </div>
          <AssetImage alt="" className="prize-capsule-asset" src={objectAssets.luckyCapsules} width={1100} height={520} />
          <div className="prize-capsule-bank">
            {["Lucky Draw", "Sponsored Products", "USD 10,000"].map((capsule) => (
              <button
                data-prize-capsule
                key={capsule}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Lucky Draw",
                    title: capsule,
                    body: "Exclusive sponsored products worth up to USD 10,000."
                  })
                }
              >
                {capsule}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessDeskActSection({
  act,
  openDetail
}: {
  act: ActConfig;
  openDetail: (payload: DetailPayload) => void;
}) {
  const benefitLabels = ["Red carpet media", "Speaker sessions", "BTA GLOBAL 360", "Magazine profile"];

  return (
    <section
      className={clsx("block-act", `palette-${act.palette}`, `layout-${act.layout}`)}
      data-recipe={act.motionRecipe}
      id={act.id}
      style={{ "--act-height": `${act.height}vh`, "--act-weight": act.durationWeight } as CSSProperties}
    >
      <div className="act-pin access-pin">
        <div className="access-stage">
          <AssetImage alt="" className="desk-grid-asset" src={objectAssets.deskGrid} width={1600} height={1000} />
          <article className="access-copy">
            <p className="eyebrow">{act.label}</p>
            <h2>Schedule + Access Desk</h2>
            <p>{act.kicker}</p>
          </article>
          <div className="access-timeline-line" data-access-line />
          <div className="schedule-paper-stack">
            {itinerary.map((segment) => (
              <button
                data-access-scatter
                data-time-paper
                key={segment.time}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: segment.title,
                    title: segment.time,
                    body: segment.scene,
                    items: segment.activities
                  })
                }
              >
                <span>{segment.time}</span>
                <strong>{segment.title}</strong>
                <em>{segment.scene}</em>
              </button>
            ))}
          </div>
          <div className="pass-drawer" data-pass-drawer>
            {registrationPackages.map((ticket) => (
              <button
                className={clsx("desk-access-pass", `tier-${ticket.tier.toLowerCase()}`)}
                data-access-pass
                data-access-scatter
                key={ticket.id}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: ticket.tier,
                    title: `${ticket.name} - ${ticket.price}`,
                    body: ticket.summary,
                    items: ticket.benefits
                  })
                }
              >
                <AssetImage
                  alt=""
                  className="pass-template-asset"
                  src={passAssets[ticket.tier]}
                  width={520}
                  height={760}
                />
                <span>{ticket.accent}</span>
                <strong>{ticket.name}</strong>
                <em>{ticket.price}</em>
              </button>
            ))}
          </div>
          <div className="benefit-stamp-row">
            {benefitLabels.map((label) => (
              <span data-benefit-stamp key={label}>
                {label}
              </span>
            ))}
          </div>
          <a className="register-stamp-slam" data-register-stamp href="#schedule-access">
            <span className="access-stamp-wipe" data-access-wipe aria-hidden="true" />
            <AssetImage alt="" src={objectAssets.registerStamp} width={760} height={760} />
            <span className="access-stamp-label">Reserve</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FinaleActSection({
  act,
  openDetail
}: {
  act: ActConfig;
  openDetail: (payload: DetailPayload) => void;
}) {
  return (
    <section
      className={clsx("block-act", `palette-${act.palette}`, `layout-${act.layout}`)}
      data-recipe={act.motionRecipe}
      id={act.id}
      style={{ "--act-height": `${act.height}vh`, "--act-weight": act.durationWeight } as CSSProperties}
    >
      <div className="act-pin finale-pin">
        <div className="finale-stage">
          <AssetImage alt="" className="scrapbook-tape-asset" src={objectAssets.tape} width={900} height={420} />
          <AssetImage alt="" className="contact-tags-asset" src={objectAssets.contactTags} width={1000} height={720} />
          <article className="finale-copy">
            <p className="eyebrow">{act.label}</p>
            <h2>Gallery + Finale Loop</h2>
            <p>{act.kicker}</p>
          </article>
          <div className="scrapbook-wall">
            {finalGalleryTiles.map((item, index) => (
              <button
                className={clsx("scrapbook-tile", `scrapbook-tile-${index + 1}`)}
                data-gallery-tile
                key={item}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Gallery placeholder",
                    title: item,
                    body: "Real previous photos and videos will replace this scrapbook tile."
                  })
                }
              >
                <AssetImage
                  alt={item}
                  className="scrapbook-photo-asset"
                  src={galleryPhotoAssets[index % galleryPhotoAssets.length]}
                  width={1200}
                  height={900}
                />
                {item}
              </button>
            ))}
          </div>
          <div className="finale-contact-tags">
            <p data-contact-label>{eventDetails.invitation}</p>
            <a data-contact-label href={`mailto:${eventDetails.email}`}>
              <Mail aria-hidden="true" />
              {eventDetails.email}
            </a>
            {eventDetails.phones.map((phone) => (
              <a data-contact-label href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>
                <Phone aria-hidden="true" />
                {phone}
              </a>
            ))}
          </div>
          <div className="final-sticker-row">
            {["Lucky Draw", eventDetails.social, "Thank You"].map((sticker) => (
              <button
                data-final-sticker
                key={sticker}
                type="button"
                onClick={() =>
                  openDetail({
                    eyebrow: "Finale",
                    title: sticker,
                    body: "Closing memory sticker for gallery, gratitude, and the loop back to RSVP."
                  })
                }
              >
                {sticker}
              </button>
            ))}
          </div>
          <button
            className="finale-loop-stamp"
            data-finale-stamp
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Final stamp",
                title: "See you at the gala",
                body: "The final RSVP mark collapses back to the opening so the scroll story can restart.",
                items: [eventDetails.social]
              })
            }
          >
            <AssetImage alt="" src={objectAssets.finalStamp} width={760} height={760} />
            RSVP
          </button>
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholder({
  caption,
  className,
  label,
  motion
}: {
  caption?: string;
  className?: string;
  label: string;
  motion?: "hero-image" | "map-poster";
}) {
  const motionAttrs =
    motion === "hero-image"
      ? { "data-hero-image": true }
      : motion === "map-poster"
        ? { "data-map-poster": true }
        : {};

  return (
    <div className={clsx("image-placeholder", className)} {...motionAttrs}>
      <div className="image-placeholder-window">
        <span />
        <span />
        <span />
      </div>
      <strong>{label}</strong>
      {caption ? <em>{caption}</em> : null}
    </div>
  );
}

function AssetImage({
  alt,
  className,
  fallback = assetFallback,
  height = 900,
  src,
  width = 1200
}: {
  alt: string;
  className?: string;
  fallback?: string;
  height?: number;
  src: string;
  width?: number;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      alt={alt}
      className={className}
      height={height}
      onError={() => {
        if (currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
      src={currentSrc}
      unoptimized
      width={width}
    />
  );
}

function ActBody({
  act,
  openDetail
}: {
  act: ActConfig;
  openDetail: (payload: DetailPayload) => void;
}) {
  if (act.layout === "premiere-editorial") {
    return <PremiereBody openDetail={openDetail} />;
  }
  if (act.layout === "red-carpet-runway") {
    return <RunwayBody openDetail={openDetail} />;
  }
  if (act.layout === "gala-awards-stage") {
    return <AwardsBody openDetail={openDetail} />;
  }
  if (act.layout === "schedule-access-desk") {
    return <ScheduleAccessBody openDetail={openDetail} />;
  }
  return <FinaleBody openDetail={openDetail} />;
}

function PremiereBody({ openDetail }: { openDetail: (payload: DetailPayload) => void }) {
  const beats = ["Cover Unveiling", "Editor's Speech", "Media Flash-Mob", "Partner Badges"];

  return (
    <div className="premiere-layout">
      <div className="magazine-console">
        <section data-mag-page="left">
          <span>THE</span>
          <strong>PREMIERE</strong>
          <em>Cover unveiling</em>
        </section>
        <section data-mag-page="right">
          <span>TYCOON GLOBAL</span>
          <strong>BTA GLOBALX</strong>
          <em>Special edition</em>
        </section>
      </div>
      <div className="premiere-badges">
        {beats.map((beat) => (
          <button
            data-premiere-badge
            key={beat}
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Magazine launch",
                title: beat,
                body: "A custom editorial beat for the magazine reveal, partner story, and media visibility sequence."
              })
            }
          >
            {beat}
          </button>
        ))}
      </div>
      <div className="partner-constellation">
        {partners.map((partner) => (
          <button
            key={partner.name}
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: partner.role,
                title: partner.name,
                body: "This badge becomes an official logo node when final assets are added."
              })
            }
          >
            {partner.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function RunwayBody({ openDetail }: { openDetail: (payload: DetailPayload) => void }) {
  const cards = [
    "Red Carpet Interviews",
    "A Tapestry of Southeast Asia",
    "A Fusion of Legacy & Luxury",
    "Art & Luxury",
    "Artisanal Heritage",
    "Global Sophistication",
    "Inner & Outer Radiance",
    "Nature Meets Couture"
  ];

  return (
    <div className="runway-layout">
      <div className="press-strip">
        {["Arrival Flash", "Interview Bites", "Press Wall"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Red Carpet & Exclusive Interviews",
                title: item,
                body: "A future media slot for photos, short video, and red carpet interview moments."
              })
            }
          >
            {item}
          </button>
        ))}
      </div>
      <div className="runway-card-track">
        {cards.map((card) => (
          <button
            data-look-card
            key={card}
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Culture and runway",
                title: card,
                body: "This card carries either the red carpet, cultural performance, or contemporary heritage fashion story."
              })
            }
          >
            {card}
          </button>
        ))}
      </div>
    </div>
  );
}

function AwardsBody({ openDetail }: { openDetail: (payload: DetailPayload) => void }) {
  return (
    <div className="awards-layout">
      <div className="table-map">
        {["Delegates", "Changemakers", "Professionals", "Global partners", "Table of 10"].map((node) => (
          <button
            data-table-node
            key={node}
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Gala Dinner & Global Networking",
                title: node,
                body: "Dinner seating becomes a visual network map for international delegates and event partners."
              })
            }
          >
            {node}
          </button>
        ))}
      </div>
      <div className="award-plaque-wall">
        {awardCategories.map((award) => (
          <button
            data-award-plaque
            key={award.title}
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Award category",
                title: award.title,
                body: award.description,
                items: ["Silver: SGD 388", "Gold: SGD 1500", "Platinum: SGD 2500"]
              })
            }
          >
            <BadgeCheck aria-hidden="true" />
            {award.title}
          </button>
        ))}
      </div>
    </div>
  );
}

function ScheduleAccessBody({ openDetail }: { openDetail: (payload: DetailPayload) => void }) {
  return (
    <div className="access-layout">
      <div className="itinerary-desk">
        {itinerary.map((segment) => (
          <button
            data-time-block
            key={segment.time}
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: segment.title,
                title: segment.time,
                body: segment.scene,
                items: segment.activities
              })
            }
          >
            <span>{segment.time}</span>
            <strong>{segment.title}</strong>
            <em>{segment.scene}</em>
          </button>
        ))}
      </div>
      <div className="access-pass-board">
        {registrationPackages.map((ticket) => (
          <button
            className={clsx("access-pass", `tier-${ticket.tier.toLowerCase()}`)}
            data-access-pass
            key={ticket.id}
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: ticket.tier,
                title: `${ticket.name} - ${ticket.price}`,
                body: ticket.summary,
                items: ticket.benefits
              })
            }
          >
            <span>{ticket.accent}</span>
            <strong>{ticket.name}</strong>
            <em>{ticket.price}</em>
          </button>
        ))}
      </div>
    </div>
  );
}

function FinaleBody({ openDetail }: { openDetail: (payload: DetailPayload) => void }) {
  return (
    <div className="finale-layout">
      <div className="scrapbook-grid">
        {["Ceremony", "Red Carpet", "Performances", "Awards", "Networking", "Fashion"].map((item) => (
          <button
            data-gallery-tile
            key={item}
            type="button"
            onClick={() =>
              openDetail({
                eyebrow: "Gallery placeholder",
                title: item,
                body: "Real previous photos and videos will replace this scrapbook tile."
              })
            }
          >
            <Sparkles aria-hidden="true" />
            {item}
          </button>
        ))}
      </div>
      <div className="contact-label-stack">
        <p>{eventDetails.invitation}</p>
        <a href={`mailto:${eventDetails.email}`}>
          <Mail aria-hidden="true" />
          {eventDetails.email}
        </a>
        {eventDetails.phones.map((phone) => (
          <a href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>
            <Phone aria-hidden="true" />
            {phone}
          </a>
        ))}
        <button
          className="label-button"
          type="button"
          onClick={() =>
            openDetail({
              eyebrow: "Final stamp",
              title: "See you at the gala",
              body: "The final RSVP mark collapses back to the opening so the scroll story can restart.",
              items: [eventDetails.social]
            })
          }
        >
          <RefreshCw aria-hidden="true" />
          Restart
        </button>
      </div>
    </div>
  );
}
