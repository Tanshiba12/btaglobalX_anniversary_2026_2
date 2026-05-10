"use client";

import clsx from "clsx";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Camera,
  ChevronDown,
  Clock3,
  Crown,
  Facebook,
  Gem,
  Gift,
  Globe2,
  Handshake,
  Instagram,
  Mail,
  MapPin,
  Medal,
  MessageCircle,
  Mic2,
  Music2,
  Palette,
  Phone,
  Play,
  Sparkles,
  Ticket,
  Trophy,
  Users,
  Youtube
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { type ComponentProps, type CSSProperties, useEffect, useRef, useState } from "react";
import {
  awardCategories,
  eventDetails,
  faqs,
  highlights,
  itinerary,
  panelTopics,
  partners,
  registrationPackages,
  speakers
} from "@/data";
import { journeyActs } from "@/data/journey";

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
};

type LenisConstructor = new (options: Record<string, unknown>) => LenisInstance;
type SafeIconProps = ComponentProps<LucideIcon> & {
  icon: LucideIcon;
};

type HighlightLane = {
  title: string;
  copy: string;
  ids: string[];
};

type ScenarioCard = {
  body: string;
  label: string;
  title: string;
};

type ScenarioScene = {
  accent: string;
  anchorAliases?: string[];
  anchorId: string;
  body: string;
  detailCards: ScenarioCard[];
  eyebrow: string;
  highlights: string[];
  id: string;
  icon: LucideIcon;
  image: string;
  tone: "map" | "blue" | "market" | "red" | "runway";
  title: string;
};

type TimelineBeat = {
  activities: string[];
  index: number;
  label: string;
  scene: string;
  time: string;
  title: string;
};

const galleryImages = [
  "/assets/gallery/bta-awards-2025.jpg",
  "/assets/gallery/bta-awards-2025-2.jpg",
  "/assets/gallery/bta-awards-2025-3.jpg",
  "/assets/gallery/bta-commitment.jpg"
];

const heroSlides = [
  { alt: "BTA GlobalX awards ceremony audience", image: galleryImages[0] },
  { alt: "BTA GlobalX red carpet and gala moment", image: galleryImages[1] },
  { alt: "BTA GlobalX cultural performance and celebration", image: galleryImages[2] },
  { alt: "BTA GlobalX commitment and networking moment", image: galleryImages[3] }
];

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#program", label: "Program" },
  { href: "#timeline", label: "Timeline" },
  { href: "#register", label: "Register" },
  { href: "#location", label: "Location" }
];

const socialLinks = [
  { href: "#facebook", icon: Facebook, label: "Facebook" },
  { href: "#youtube", icon: Youtube, label: "YouTube" },
  { href: "#instagram", icon: Instagram, label: "Instagram" }
];

const whatsappLink = "#whatsapp";

const overviewParagraphs = [
  "An anniversary built as a living stage: wellness insight, cultural expression, media visibility, strategic alliance, gala networking, and public recognition moving through one day.",
  "The experience is designed for guests, nominees, partners, sponsors, artists, speakers, and changemakers who need more than attendance. They need a room where their story is seen clearly.",
  "From the forum opening to the award finale, every movement connects back to one promise: purpose meets recognition, and excellence finds its stage."
];

const founderMessageParagraphs = [
  "BTA GlobalX began as a spark of an idea fueled by late nights, deep conversations, and a desire to build more than a network: a purpose-driven ecosystem where people, passion, and impact align.",
  "Supporting entrepreneurs across Asia, the Middle East, and Europe, I witnessed firsthand how powerful transformation happens when driven individuals unite with purpose. That is how BTA GlobalX was born: a platform where your network becomes your catalyst for change.",
  "Since then, we have grown not just in size, but in intention and impact. We have built trusted relationships, fostered meaningful partnerships, and cultivated a culture of Givers Get, where success is shared and purpose comes first.",
  "To my team, the quiet warriors behind the scenes, the dreamers who dared, and the doers who delivered: you are the soul of BTA GlobalX. To every partner who trusted us and every member who showed up with open minds and open hearts, thank you for believing in this vision.",
  "The future holds deeper learning, stronger alliances, and bold innovation. We are not just building a brand. We are shaping a legacy of excellence with impact.",
  `Join us on ${eventDetails.date} at ${eventDetails.venue} for an inspiring and memorable day of networking, recognition, wellness, cultural celebration, and meaningful connection as we celebrate the Excellence Awards.`
];

const packageTierIcons: Record<string, LucideIcon> = {
  General: Ticket,
  Signature: Users,
  Silver: Medal,
  Gold: Crown,
  Platinum: Gem
};

const highlightLanes: HighlightLane[] = [
  {
    title: "Learn",
    copy: "Forum, speakers, panel discussion, and practical mind-life management.",
    ids: ["forum", "speakers"]
  },
  {
    title: "Explore",
    copy: "Bazaar, wellness fair, sustainable art, and creative entrepreneurship.",
    ids: ["bazaar", "art"]
  },
  {
    title: "Be Seen",
    copy: "Magazine launch, strategic alliance, red carpet, interviews, and media exposure.",
    ids: ["magazine", "alliance", "red-carpet"]
  },
  {
    title: "Celebrate",
    copy: "Culture, fashion, gala dinner, awards, lucky draw, ceremony, and gallery.",
    ids: ["culture", "fashion", "dinner", "awards", "lucky-draw", "anniversary", "gallery"]
  }
];

const fashionRounds = [
  "Art & Luxury",
  "Artisanal Heritage",
  "Global Sophistication",
  "The Power Aesthetic",
  "Inner & Outer Radiance",
  "Beautiful Life Naturally",
  "Nature Meets Couture",
  "Sensory Elegance"
];

const scenarioScenes: ScenarioScene[] = [
  {
    accent: "#fdd142",
    anchorId: "program-map",
    body: "The day is mapped as a sequence of scenes: guests learn, explore, become visible, and then celebrate. Every highlight has a role in the larger gala journey.",
    detailCards: highlightLanes.map((lane) => ({
      body: lane.copy,
      label: `${lane.ids.length} signals`,
      title: lane.title
    })),
    eyebrow: "Act 01",
    highlights: highlights.map((highlight) => highlight.id),
    icon: Sparkles,
    id: "map",
    image: galleryImages[0],
    title: "What happens here",
    tone: "map"
  },
  {
    accent: "#46d8ff",
    anchorId: "forum",
    body: "The first deep act opens with Life Management and Mental Well-being Forum 2026, led by Prof. Dr. Mike Chan and an expert panel exploring practical balance, beauty, wellness, youth science, mental health, yoga, and integrated living.",
    detailCards: [
      {
        body: `${speakers[0]?.name ?? "Prof. Dr. Mike Chan"} anchors the keynote and moderates the panel discussion.`,
        label: "Keynote",
        title: "Moderator-led forum"
      },
      {
        body: speakers
          .slice(1)
          .map((speaker) => speaker.name)
          .join(", "),
        label: "Panelists",
        title: "Expert board"
      },
      {
        body: `${panelTopics.length} practical topics across Shindo, Ayurveda, stem cells, mental health, yoga, holistic wellness, and integrated living.`,
        label: "Topics",
        title: "Mind and life prompts"
      }
    ],
    eyebrow: "Act 02",
    highlights: ["forum", "speakers"],
    icon: Mic2,
    id: "mind-life",
    image: "/assets/generated/acts/03-forum-lab.svg",
    title: "Mind & Life Lab",
    tone: "blue"
  },
  {
    accent: "#ffca3a",
    anchorId: "creative-market",
    body: "The venue shifts into a high-impact gallery and market floor, connecting sustainable creative art, wellness products, artist visibility, entrepreneurship, and global responsibility.",
    detailCards: [
      {
        body: "Curated artist spotlights and sustainability recognition give underrepresented creators a proper global stage.",
        label: "Art",
        title: "The Global Stage"
      },
      {
        body: "Bazaar and wellness fair blocks make products, initiatives, and founders easy to discover.",
        label: "Market",
        title: "Wellness fair"
      },
      {
        body: "Physical and digital visibility extend the work beyond the room and into a wider network.",
        label: "Hybrid",
        title: "Networking hub"
      }
    ],
    eyebrow: "Act 03",
    highlights: ["bazaar", "art"],
    icon: Palette,
    id: "creative-market",
    image: "/assets/generated/acts/04-creative-market.svg",
    title: "Creative Market",
    tone: "market"
  },
  {
    accent: "#ff4ea3",
    anchorId: "premiere",
    body: "The Tycoon Global Magazine Special Edition featuring BTA GlobalX becomes the editorial reveal: cover unveiling, editor speech, media networking, flash-mob energy, and strategic alliance visibility.",
    detailCards: [
      {
        body: "The Grand Reveal and Cover Unveiling create a media-led center point for the event.",
        label: "Magazine",
        title: "Cover moment"
      },
      {
        body: "Editor speech and partner badges connect BTA GlobalX, Ayu Herba, BTA Productions, Tycoon Global, and ISEIGUR.",
        label: "Alliance",
        title: "Strategic reveal"
      },
      {
        body: "Camera flashes, guest cards, and networking convert the launch into shareable visibility.",
        label: "Media",
        title: "Flash-mob network"
      }
    ],
    eyebrow: "Act 04",
    highlights: ["magazine", "alliance"],
    icon: BookOpen,
    id: "premiere",
    image: "/assets/generated/acts/05-premiere-magazine.svg",
    title: "THE PREMIERE",
    tone: "red"
  },
  {
    accent: "#fdd142",
    anchorAliases: ["gala-awards"],
    anchorId: "red-carpet-runway",
    body: "The finale rolls through red carpet interviews, Southeast Asian music and dance, contemporary heritage fashion, gala dinner, awards, lucky draw, and the closing photo session.",
    detailCards: [
      {
        body: "Arrival energy, media bites, and flash moments set up visible recognition before the room moves inward.",
        label: "Arrival",
        title: "Red carpet"
      },
      {
        body: `Culture moves into runway through ${fashionRounds.slice(0, 4).join(", ")} and more.`,
        label: "Runway",
        title: "Legacy & Luxury"
      },
      {
        body: "Gala dinner, global networking, Excellence Award 2026, sponsored lucky draw, and closing photography complete the night.",
        label: "Finale",
        title: "Awards stage"
      }
    ],
    eyebrow: "Act 05",
    highlights: ["red-carpet", "culture", "fashion", "dinner", "awards", "lucky-draw"],
    icon: Trophy,
    id: "red-carpet-gala",
    image: "/assets/generated/acts/07-gala-awards.svg",
    title: "Red Carpet to Gala",
    tone: "runway"
  }
];

const eventHighlightScene = scenarioScenes[0];
const journeyScenes = scenarioScenes.slice(1);
const journeyScenePages = journeyScenes.reduce<ScenarioScene[][]>((pages, scene, index) => {
  if (index % 2 === 0) {
    pages.push([scene]);
  } else {
    pages[pages.length - 1]?.push(scene);
  }
  return pages;
}, []);
const journeyDetailIcons = [ArrowRight, Ticket, Users, Trophy];

const timelineBeats: TimelineBeat[] = itinerary.map((segment, index) => ({
  activities: segment.activities,
  index,
  label: String(index + 1).padStart(2, "0"),
  scene: segment.scene,
  time: segment.time,
  title: segment.title
}));

const galleryTiles = [
  { title: "Ceremony", image: galleryImages[0] },
  { title: "Red Carpet", image: galleryImages[1] },
  { title: "Performances", image: galleryImages[2] },
  { title: "Awards", image: galleryImages[0] },
  { title: "Networking", image: galleryImages[3] },
  { title: "Fashion", image: galleryImages[2] }
];

const registrationSlides = [
  {
    id: "general",
    eyebrow: "Slide 01",
    title: "General",
    summary: "Entry and table access for guests joining the full event journey.",
    packages: registrationPackages.filter((pkg) => ["general", "signature"].includes(pkg.id))
  },
  {
    id: "nominee",
    eyebrow: "Slide 02",
    title: "Nominee",
    summary: "Award nominee packages with profile, media, and recognition benefits.",
    packages: registrationPackages.filter((pkg) => ["silver", "gold", "platinum"].includes(pkg.id))
  }
];

function SafeIcon({ icon: Icon, ...props }: SafeIconProps) {
  return <Icon {...props} suppressHydrationWarning />;
}

export function ShowcaseExperience() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderStep, setLoaderStep] = useState(0);
  const [dockAttached, setDockAttached] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const countdown = useCountdown("2026-08-01T15:00:00+08:00");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      const quickTimer = window.setTimeout(() => setLoaderVisible(false), 650);
      return () => window.clearTimeout(quickTimer);
    }

    const stepTimers = [
      window.setTimeout(() => setLoaderStep(1), 720),
      window.setTimeout(() => setLoaderStep(2), 1450),
      window.setTimeout(() => setLoaderStep(3), 2180),
      window.setTimeout(() => setLoaderVisible(false), 2850)
    ];

    return () => stepTimers.forEach((timer) => window.clearTimeout(timer));
  }, [reducedMotion]);

  useEffect(() => {
    const dockSentinel = document.querySelector<HTMLElement>(".footer-dock-sentinel");
    if (!dockSentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setDockAttached(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.01
      }
    );

    observer.observe(dockSentinel);
    return () => observer.disconnect();
  }, []);

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
          ".hero-media img",
          { y: -42, scale: 1.1 },
          {
            y: 44,
            scale: 1.02,
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
  }, [reducedMotion]);

  return (
    <main className="showcase-root" ref={rootRef}>
      <StickyHeader />
      <StickyBottomBar docked={dockAttached} />
      <HeroSection countdown={countdown} />
      <OverviewSection />
      <FounderMessageSection />
      <EventHighlightsSection />
      <TimelineSection activeIndex={activeTimeline} />
      <EventJourneySection />
      <ForumDeepDiveSection />
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

function StickyHeader() {
  return (
    <header className="sticky-header" aria-label="BTA GlobalX">
      <a className="sticky-header-logo" href="#top" aria-label="BTA GlobalX home">
        <Image alt="" height={72} src="/assets/brand/bta-logo.gif" unoptimized width={72} />
      </a>
    </header>
  );
}

function StickyBottomBar({ docked }: { docked: boolean }) {
  return (
    <nav className={clsx("sticky-bottom-bar", docked && "is-docked")} aria-label="Sticky page actions">
      <DockControls />
    </nav>
  );
}

function DockControls() {
  return (
    <div className="dock-controls">
      <div className="dock-capsule dock-capsule-social">
        <span>Get social</span>
        <div className="dock-reveal" aria-label="Social links">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a href={item.href} key={item.label} aria-label={item.label}>
                <SafeIcon aria-hidden="true" icon={Icon} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="dock-nav" aria-label="Page sections">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>

      <div className="dock-capsule dock-capsule-contact">
        <div className="dock-reveal" aria-label="Contact links">
          <a href={whatsappLink} aria-label="WhatsApp">
            <SafeIcon aria-hidden="true" icon={MessageCircle} />
          </a>
        </div>
        <span>Get In touch</span>
      </div>
    </div>
  );
}

function Loader({
  onSkip,
  step,
  visible
}: {
  onSkip: () => void;
  step: number;
  visible: boolean;
}) {
  const lines = ["RSVP received", "Gala night loading", eventDetails.date, eventDetails.venue];

  return (
    <div className={clsx("showcase-loader", !visible && "is-hidden")} aria-hidden={!visible}>
      <div className="loader-mark">
        <Image alt="" height={88} src="/assets/brand/bta-logo.gif" unoptimized width={88} />
      </div>
      <div className="loader-copy" aria-live="polite">
        <p>{lines[Math.min(step, lines.length - 1)]}</p>
        <strong>BTA GlobalX</strong>
        <span>{step < 2 ? "Anniversary Gala Night" : "Excellence Awards 2026"}</span>
      </div>
      <div className="loader-steps" aria-label="Loading progress">
        {lines.map((line, index) => (
          <span className={clsx(index <= step && "is-active")} key={line} />
        ))}
      </div>
      <button type="button" onClick={onSkip}>
        Skip intro
      </button>
    </div>
  );
}

function HeroSection({
  countdown
}: {
  countdown: Array<{ label: string; value: string }>;
}) {
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const loopVideoRef = useRef<HTMLVideoElement>(null);
  const [showLoop, setShowLoop] = useState(false);

  useEffect(() => {
    const mainVideo = mainVideoRef.current;
    if (!mainVideo) return;

    const handleMainVideoEnd = () => {
      setShowLoop(true);
      if (loopVideoRef.current) {
        loopVideoRef.current.play();
      }
    };

    mainVideo.addEventListener('ended', handleMainVideoEnd);
    return () => mainVideo.removeEventListener('ended', handleMainVideoEnd);
  }, []);

  return (
    <section className="hero-section" id="top">
      <div className="hero-media">
        <video
          ref={mainVideoRef}
          autoPlay
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: showLoop ? 0 : 1,
            transition: 'opacity 0.5s ease'
          }}
        >
          <source src="/assets/video/hero-main.mp4" type="video/mp4" />
        </video>
        <video
          ref={loopVideoRef}
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: showLoop ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
        >
          <source src="/assets/video/loop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-scrim" />

      <div className="hero-content">
        <div className="hero-title-wrap">
          <p className="hero-kicker" data-hero-chip>
            Anniversary Gala Night / Excellence Award 2026
          </p>
          <h1 data-hero-title>
            <span className="hero-title-line hero-title-main">BTA 3RD ANNIVERSARY</span>
            <span className="hero-title-and">AND</span>
            <span className="hero-title-line hero-title-awards">EXCELLENCE AWARDS 2026</span>
          </h1>
        </div>

        <div className="hero-bottom">
          <div className="countdown-panel" aria-label="Countdown to event" data-hero-chip>
            {countdown.map((unit) => (
              <span key={unit.label}>
                <strong>{unit.value}</strong>
                <em>{unit.label}</em>
              </span>
            ))}
          </div>
          <a className="event-chip" data-hero-chip href="#location">
            <SafeIcon aria-hidden="true" icon={MapPin} />
            <span>
              <strong>{eventDetails.venue}</strong>
              <em>
                <SafeIcon aria-hidden="true" icon={CalendarDays} />
                {eventDetails.date}
              </em>
              <em>
                <SafeIcon aria-hidden="true" icon={Clock3} />
                {eventDetails.time}
              </em>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="site-section overview-section" id="overview">
      <div className="section-inner overview-grid">
        <div className="section-heading is-left" data-animate="text">
          <p>Event overview</p>
          <h2>Where purpose meets recognition</h2>
        </div>
        <div className="overview-copy" data-stagger>
          {overviewParagraphs.map((paragraph) => (
            <p data-stagger-item key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="overview-stat-card" data-animate="card">
          <strong>14</strong>
          <span>core highlights across one continuous landing page</span>
        </div>
      </div>
    </section>
  );
}

function FounderMessageSection() {
  return (
    <section className="site-section founder-message-section">
      <div className="section-inner founder-message-grid">
        <div className="founder-portrait-card" data-animate="image">
          <div className="founder-portrait-placeholder" aria-label="Founder portrait placeholder">
            <span>H.E.</span>
            <strong>SB</strong>
          </div>
          <p>Image placeholder</p>
        </div>
        <div className="founder-copy" data-stagger>
          <p className="eyebrow" data-stagger-item>
            Founder&apos;s Message
          </p>
          <h2 data-stagger-item>Celebrating 3 Years of BTA GlobalX Anniversary</h2>
          <div className="founder-message-body">
            {founderMessageParagraphs.map((paragraph) => (
              <p data-stagger-item key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="founder-signature" data-stagger-item>
            <span>With gratitude,</span>
            <strong>H.E. Amb. Dr. Sangeeta Biswas. M.D.</strong>
            <p>Founder of Ayu Herba and BTA GlobalX</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventHighlightsSection() {
  return (
    <section className="site-section event-highlights-section">
      <div className="section-inner event-highlights-grid">
        <div className="event-highlights-copy" data-animate="text">
          <p className="eyebrow">Event highlights</p>
          <SafeIcon aria-hidden="true" icon={eventHighlightScene.icon} />
          <h2>{eventHighlightScene.title}</h2>
          <p>{eventHighlightScene.body}</p>
        </div>
        <div className="event-highlights-visual" data-animate="image">
          <Image alt="BTA GlobalX event highlight moment" fill sizes="(max-width: 900px) 100vw, 44vw" src={eventHighlightScene.image} />
        </div>
        <div className="highlight-lane-grid" data-stagger>
          {highlightLanes.map((lane) => {
            const laneHighlights = lane.ids
              .map((id) => highlights.find((highlight) => highlight.id === id))
              .filter(Boolean);

            return (
              <article data-stagger-item key={lane.title}>
                <span>{String(lane.ids.length).padStart(2, "0")} signals</span>
                <h3>{lane.title}</h3>
                <p>{lane.copy}</p>
                <div>
                  {laneHighlights.map((item) => {
                    if (!item) {
                      return null;
                    }
                    const HighlightIcon = item.icon;
                    return (
                      <a href={`#${item.actId}`} key={item.id}>
                        <SafeIcon aria-hidden="true" icon={HighlightIcon} />
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ForumDeepDiveSection() {
  const moderator = speakers[0];
  const panelists = speakers.slice(1);

  return (
    <section className="site-section forum-deep-section">
      <div className="section-inner">
        <div className="section-heading is-left" data-animate="text">
          <p>Speakers + topics</p>
          <h2>The mind and life management board</h2>
        </div>
        <div className="forum-board">
          <article className="moderator-card" data-animate="card">
            <span>Keynote Speaker / Moderator</span>
            <strong>{moderator.name}</strong>
            <p>{moderator.focus}</p>
          </article>
          <div className="speaker-grid" data-stagger>
            {panelists.map((speaker) => (
              <article data-stagger-item key={speaker.name}>
                <span>{getInitials(speaker.name)}</span>
                <strong>{speaker.name}</strong>
                <p>{speaker.focus}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="topic-grid" data-stagger>
          {panelTopics.map((topic, index) => (
            <article data-stagger-item key={topic}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{topic}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CultureFashionSection() {
  return (
    <section className="site-section culture-fashion-section">
      <div className="section-inner culture-grid">
        <div className="culture-media" data-animate="image">
          <Image alt="BTA GlobalX performance moment" fill sizes="(max-width: 900px) 100vw, 48vw" src="/assets/gallery/bta-awards-2025-2.jpg" />
        </div>
        <div className="culture-copy" data-animate="text">
          <p className="eyebrow">A Tapestry of Southeast Asia</p>
          <h2>Culture moves into legacy and luxury</h2>
          <p>
            The performance segment celebrates Southeast Asian heritage through music, dance,
            costume, rhythm, and storytelling before the site transitions into contemporary
            heritage fashion.
          </p>
          <div className="fashion-rounds" data-stagger>
            {fashionRounds.map((round) => (
              <span data-stagger-item key={round}>
                <SafeIcon aria-hidden="true" icon={Gem} />
                {round}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="site-section awards-section">
      <div className="section-inner awards-grid">
        <div className="section-heading is-left" data-animate="text">
          <p>Recognition stage</p>
          <h2>Excellence Award 2026</h2>
          <span>Gala dinner, global networking, award plaques, lucky draw, photo session, and closing.</span>
        </div>
        <div className="award-card-grid" data-stagger>
          {awardCategories.map((award) => (
            <article data-stagger-item key={award.title}>
              <SafeIcon aria-hidden="true" icon={BadgeCheck} />
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </article>
          ))}
        </div>
        <div className="lucky-draw-card" data-animate="card">
          <SafeIcon aria-hidden="true" icon={Gift} />
          <strong>Lucky Draw</strong>
          <p>Exclusive sponsored products worth up to USD 10,000.</p>
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ activeIndex }: { activeIndex: number }) {
  const activeBeat = timelineBeats[activeIndex] ?? timelineBeats[0];

  return (
    <section className="site-section timeline-section" id="timeline">
      <div className="section-inner timeline-pin">
        <div className="timeline-header" data-animate="text">
          <div className="section-heading is-left">
            <p>Event timeline</p>
            <h2>Event Day Timeline</h2>
            <span>{eventDetails.time}</span>
          </div>
          <div className="timeline-current" aria-live="polite">
            <span>Current segment</span>
            <strong>{activeBeat.time}</strong>
            <p>{activeBeat.scene}</p>
          </div>
        </div>
        <div className="timeline-progress" aria-hidden="true">
          <span className="timeline-progress-fill" />
        </div>
        <div className="timeline-viewport" aria-label="Event day timeline slides">
          <div className="timeline-track">
            {timelineBeats.map((beat, index) => (
              <article className={clsx("timeline-segment", activeIndex === index && "is-active")} key={beat.time}>
                <div className="timeline-marker">
                  <span>{beat.label}</span>
                </div>
                <div className="timeline-card">
                  <p>{beat.time}</p>
                  <h3>{beat.title}</h3>
                  <strong>{beat.scene}</strong>
                  <ul>
                    {beat.activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const leftActs = journeyActs.filter((_, i) => i % 2 === 0);
  const rightActs = journeyActs.filter((_, i) => i % 2 === 1);

  const currentLeft = journeyActs[activeIndex * 2];
  const currentRight = journeyActs[activeIndex * 2 + 1];

  // Safety check: if currentRight is undefined, return null
  if (!currentLeft || !currentRight) {
    return null;
  }

  useEffect(() => {
    // Remove pinning - use click-based navigation only for smooth page flow
    return;
  }, [activeIndex]);

  // Animate content when activeIndex changes
  useEffect(() => {
    if (!isTransitioning) return;

    const animateContent = async () => {
      try {
        const { gsap } = await import('gsap');

        // Animate ACT buttons elevation
        gsap.fromTo(
          '.event-journey-act-btn.is-active',
          { y: 0, scale: 1, boxShadow: '0 0 0 rgba(253, 209, 66, 0)' },
          {
            y: -8,
            scale: 1.05,
            boxShadow: '0 8px 24px rgba(253, 209, 66, 0.4)',
            duration: 0.8,
            ease: 'power2.out',
          }
        );

        // Animate panels sliding from top
        gsap.fromTo(
          '.event-journey-panel',
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            stagger: 0.15,
          }
        );

        // Animate left video from left
        gsap.fromTo(
          '.event-journey-video:first-child',
          { x: -120, opacity: 0, scale: 0.9 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
          }
        );

        // Animate right video from right
        gsap.fromTo(
          '.event-journey-video:last-child',
          { x: 120, opacity: 0, scale: 0.9 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
          }
        );

        setTimeout(() => setIsTransitioning(false), 1000);
      } catch (err) {
        console.error('Animation failed:', err);
        setIsTransitioning(false);
      }
    };

    animateContent();
  }, [activeIndex, isTransitioning]);

  return (
    <section ref={sectionRef} className="event-journey-section" id="event-journey">
      {/* Progress Bar */}
      <div className="event-journey-progress-bar" aria-label="Event journey progress">
        <div className="event-journey-progress-track">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={clsx(
                'event-journey-progress-segment',
                index <= activeIndex && 'is-active'
              )}
            />
          ))}
        </div>
      </div>

      <div className="event-journey-header">
        <p className="eyebrow">Event Journey</p>
        <h2>From Forum to Gala Stage</h2>
        <span>Scroll through 5 act pairs as the anniversary day builds toward recognition.</span>
      </div>

      <div className="event-journey-grid">
        {/* Left Acts */}
        <div className="event-journey-acts">
          {leftActs.map((act, i) => (
            <button
              key={act.id}
              className={clsx('event-journey-act-btn', i === activeIndex && 'is-active')}
              onClick={() => setActiveIndex(i)}
            >
              ACT {act.number}
            </button>
          ))}
        </div>

        {/* Left Panel */}
        <div className="event-journey-panel">
          <div className="event-journey-panel-header">
            <h3>{currentLeft.title}</h3>
          </div>
          <p className="event-journey-panel-text">{currentLeft.description}</p>
          <div className="event-journey-icons">
            {currentLeft.highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.id} className="event-journey-icon">
                  <SafeIcon aria-hidden="true" icon={Icon} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel */}
        <div className="event-journey-panel">
          <div className="event-journey-panel-header">
            <h3>{currentRight.title}</h3>
          </div>
          <p className="event-journey-panel-text">{currentRight.description}</p>
          <div className="event-journey-icons">
            {currentRight.highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.id} className="event-journey-icon">
                  <SafeIcon aria-hidden="true" icon={Icon} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Acts */}
        <div className="event-journey-acts">
          {rightActs.map((act, i) => (
            <button
              key={act.id}
              className={clsx('event-journey-act-btn', i === activeIndex && 'is-active')}
              onClick={() => setActiveIndex(i)}
            >
              ACT {act.number}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Videos - Full Width */}
      <div className="event-journey-videos">
        <div className="event-journey-video">
          <Image
            src={currentLeft.image}
            alt={currentLeft.title}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="event-journey-video">
          <Image
            src={currentRight.image}
            alt={currentRight.title}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

function RegistrationSection({ reducedMotion }: { reducedMotion: boolean }) {
  const [visiblePrices, setVisiblePrices] = useState<Record<string, boolean>>({});

  const togglePrice = (id: string) => {
    setVisiblePrices((current) => ({ ...current, [id]: !current[id] }));
  };

  return (
    <section className={clsx("site-section registration-section", reducedMotion && "is-reduced")} id="register">
      <div className="section-inner registration-pin">
        <div className="registration-hero" data-animate="card">
          <div>
            <p className="eyebrow">Registration</p>
            <h2>Choose the pass that matches your role in the room.</h2>
          </div>
          <a className="dark-pill" href={`mailto:${eventDetails.email}`}>
            Contact registration
            <SafeIcon aria-hidden="true" icon={ArrowRight} />
          </a>
        </div>
        <div className="registration-progress" aria-hidden="true">
          <span className="registration-progress-fill" />
        </div>
        <div className="registration-slide-viewport" aria-label="Registration package slides">
          <div className="registration-slide-track">
            {registrationSlides.map((slide) => (
              <article className="registration-slide" key={slide.id}>
                <div className="registration-slide-heading">
                  <span>{slide.eyebrow}</span>
                  <h3>{slide.title}</h3>
                  <p>{slide.summary}</p>
                </div>
                <div className={clsx("package-grid", `package-grid-${slide.id}`)} data-stagger>
                  {slide.packages.map((pkg) => {
                    const PackageIcon = packageTierIcons[pkg.tier] ?? Ticket;
                    const priceVisible = Boolean(visiblePrices[pkg.id]);

                    return (
                      <article
                        className={clsx("package-card", `tier-${pkg.tier.toLowerCase()}`, priceVisible && "is-price-visible")}
                        data-stagger-item
                        key={pkg.id}
                      >
                        <div className="package-icon-row">
                          <SafeIcon aria-hidden="true" icon={PackageIcon} />
                          <span>{pkg.tier}</span>
                        </div>
                        <h4>{pkg.name}</h4>
                        <p>{pkg.summary}</p>
                        <button
                          aria-expanded={priceVisible}
                          className="price-toggle"
                          type="button"
                          onClick={() => togglePrice(pkg.id)}
                        >
                          {priceVisible ? "Hide price" : "Reveal price"}
                          <SafeIcon aria-hidden="true" icon={ChevronDown} />
                        </button>
                        <div className="package-price-slot" aria-hidden={!priceVisible}>
                          <strong>{pkg.price}</strong>
                        </div>
                        <details>
                          <summary>
                            Key benefits
                            <SafeIcon aria-hidden="true" icon={ChevronDown} />
                          </summary>
                          <ul>
                            {pkg.benefits.map((benefit) => (
                              <li key={benefit}>{benefit}</li>
                            ))}
                          </ul>
                        </details>
                      </article>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="site-section gallery-section" id="gallery-finale">
      <div className="section-inner">
        <div className="section-heading is-left" data-animate="text">
          <p>Our previous gallery</p>
          <h2>Proof, memory, and momentum</h2>
        </div>
        <div className="gallery-wall" data-stagger>
          {galleryTiles.map((tile) => (
            <article className="gallery-tile" data-stagger-item key={tile.title}>
              <Image alt={tile.title} fill sizes="(max-width: 900px) 50vw, 260px" src={tile.image} />
              <span>{tile.title}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eventDetails.venue)}`;

  return (
    <section className="site-section location-section" id="location">
      <div className="section-inner location-card" data-animate="card">
        <div className="location-copy">
          <p className="eyebrow">Location</p>
          <SafeIcon aria-hidden="true" icon={MapPin} />
          <h2>{eventDetails.date}</h2>
          <span>{eventDetails.venue}</span>
          <a className="light-pill" href={mapUrl} rel="noreferrer" target="_blank">
            Open map
            <SafeIcon aria-hidden="true" icon={ArrowRight} />
          </a>
        </div>
        <div className="location-image">
          <Image alt="Hotel Sheraton Johor Bahru venue" fill sizes="(max-width: 900px) 100vw, 50vw" src="/assets/brand/venue.jpeg" />
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="site-section partners-section">
      <div className="section-inner">
        <div className="section-heading" data-animate="text">
          <p>Powered by</p>
          <h2>Our partners</h2>
        </div>
        <div className="partner-badges" data-stagger>
          {partners.map((partner) => (
            <span data-stagger-item key={partner.name}>
              <em>{partner.role}</em>
              <strong>{partner.name}</strong>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="site-section faq-section" id="faq">
      <div className="section-inner faq-grid">
        <aside className="faq-card" data-animate="card">
          <h2>FAQ</h2>
          <div />
          <p>Do you have another question?</p>
          <a className="dark-pill" href={`mailto:${eventDetails.email}`}>
            Contact us
          </a>
        </aside>
        <div className="faq-list" data-stagger>
          {faqs.map((item, index) => (
            <details data-stagger-item key={item.question} open={index === 0}>
              <summary>
                {item.question}
                <SafeIcon aria-hidden="true" icon={ChevronDown} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseFooter() {
  return (
    <footer className="showcase-footer" data-animate="card">
      <div className="footer-dock-sentinel" aria-hidden="true" />
      <div className="footer-dock" aria-label="Footer page actions">
        <DockControls />
      </div>
      <div className="section-inner footer-grid">
        <div className="footer-left">
          <h2>Maximizing global recognition, media visibility, and legacy.</h2>
          <div className="footer-card">
            <strong>Become a partner</strong>
            <span>Interested in sponsoring or supporting BTA GlobalX?</span>
            <a className="dark-pill" href={`mailto:${eventDetails.email}`}>
              Contact us
            </a>
          </div>
          <p className="footer-brand">BTA GLOBALX</p>
        </div>
        <div className="footer-right">
          <span>For help</span>
          <a href={`mailto:${eventDetails.email}`}>
            <SafeIcon aria-hidden="true" icon={Mail} />
            {eventDetails.email}
          </a>
          <span>For calls</span>
          {eventDetails.phones.map((phone) => (
            <a href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>
              <SafeIcon aria-hidden="true" icon={Phone} />
              {phone}
            </a>
          ))}
          <p>{eventDetails.date}</p>
          <p>{eventDetails.venue}</p>
          <div className="footer-buttons">
            <a className="outline-pill" href="#register">
              Register
            </a>
            <a className="light-pill" href="#program">
              Explore
              <SafeIcon aria-hidden="true" icon={Play} />
            </a>
          </div>
          <div className="social-row" aria-label="Social links">
            {["ig", "x", "yt", "tk", "in"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function useCountdown(targetIso: string) {
  const [mounted, setMounted] = useState(false);
  const [remaining, setRemaining] = useState(() => getCountdownUnits(targetIso));

  useEffect(() => {
    setMounted(true);
    setRemaining(getCountdownUnits(targetIso));
    const interval = window.setInterval(() => setRemaining(getCountdownUnits(targetIso)), 1000);
    return () => window.clearInterval(interval);
  }, [targetIso]);

  if (!mounted) {
    return [
      { label: "Days", value: "00" },
      { label: "Hours", value: "00" },
      { label: "Min", value: "00" }
    ];
  }

  return remaining;
}

function getCountdownUnits(targetIso: string) {
  const distance = Math.max(0, new Date(targetIso).getTime() - Date.now());
  const days = Math.floor(distance / 86_400_000);
  const hours = Math.floor((distance % 86_400_000) / 3_600_000);
  const minutes = Math.floor((distance % 3_600_000) / 60_000);

  return [
    { label: "Days", value: String(days).padStart(2, "0") },
    { label: "Hours", value: String(hours).padStart(2, "0") },
    { label: "Min", value: String(minutes).padStart(2, "0") }
  ];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((part) => !["Dr.", "Prof.", "Dato", "Sri", "H.E.", "Amb."].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
