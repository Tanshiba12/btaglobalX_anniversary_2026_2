import {
  BookOpen,
  Crown,
  Gem,
  Medal,
  Mic2,
  Palette,
  Sparkles,
  Ticket,
  Trophy,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  eventDetails,
  highlights,
  itinerary,
  panelTopics,
  registrationPackages,
  speakers
} from "@/data";
import { galleryAssets, sceneAssets } from "@/data/assets";

export type HighlightLane = {
  title: string;
  copy: string;
  ids: string[];
};

export type ScenarioCard = {
  body: string;
  label: string;
  title: string;
};

export type ScenarioScene = {
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

export type TimelineBeat = {
  activities: string[];
  index: number;
  label: string;
  scene: string;
  time: string;
  title: string;
};

export const galleryImages = galleryAssets.previousEvents;
export const overviewParagraphs = [
  "BTA GlobalX celebrates its anniversary at Sheraton Johor Bahru through a full-day programme of insight, wellness discovery, media visibility, culture, gala dinner, and awards recognition.",
  "Guests, nominees, partners, sponsors, speakers, and changemakers move through one connected celebration where every moment has a clear purpose: meet the right people, experience meaningful ideas, and honour excellence together.",
  "From the welcome reception to the final award photographs, the day is shaped to feel joyful, premium, and easy to follow."
];

export const founderMessageParagraphs = [
  "BTA GlobalX was built from a simple belief: meaningful success becomes stronger when people meet with purpose, generosity, and the courage to support one another.",
  "Across our journey, we have seen entrepreneurs, wellness leaders, artists, partners, and changemakers grow faster when they are welcomed into the right circle of trust and opportunity.",
  "This anniversary is our invitation to celebrate that circle. It brings together collaboration, culture, recognition, and the people who continue to turn vision into impact.",
  `On ${eventDetails.date}, we gather at ${eventDetails.venue} to honour excellence, welcome new partnerships, and create a memory worthy of the community behind it.`
];

export const packageTierIcons: Record<string, LucideIcon> = {
  General: Ticket,
  Signature: Users,
  Silver: Medal,
  Gold: Crown,
  Platinum: Gem
};

export const highlightLanes: HighlightLane[] = [
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
    title: "Visibility",
    copy: "Magazine launch, strategic alliance, red carpet, interviews, and media exposure.",
    ids: ["magazine", "alliance", "red-carpet"]
  },
  {
    title: "Awards Night",
    copy: "Culture, fashion, gala dinner, awards, lucky draw, ceremony, and gallery.",
    ids: ["culture", "fashion", "dinner", "awards", "lucky-draw", "anniversary", "gallery"]
  }
];

export const fashionRounds = [
  "Art & Luxury",
  "Artisanal Heritage",
  "Global Sophistication",
  "The Power Aesthetic",
  "Inner & Outer Radiance",
  "Beautiful Life Naturally",
  "Nature Meets Couture",
  "Sensory Elegance"
];

export const scenarioScenes: ScenarioScene[] = [
  {
    accent: "#fdd142",
    anchorId: "program-map",
    body: "The day is designed as a clear event route: guests arrive, learn, discover, become visible, and then celebrate inside one connected experience.",
    detailCards: highlightLanes.map((lane) => ({
      body: lane.copy,
      label: `${lane.ids.length} signals`,
      title: lane.title
    })),
    eyebrow: "Programme map",
    highlights: highlights.map((highlight) => highlight.id),
    icon: Sparkles,
    id: "map",
    image: sceneAssets.venue.src,
    title: "Why the day matters",
    tone: "map"
  },
  {
    accent: "#0f7c63",
    anchorId: "forum",
    body: "The forum opens the day with practical leadership around life management, mental well-being, beauty, regenerative science, yoga, and integrated living.",
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
    eyebrow: "Forum",
    highlights: ["forum", "speakers"],
    icon: Mic2,
    id: "mind-life",
    image: sceneAssets.forum.src,
    title: "Mind & Life Forum",
    tone: "blue"
  },
  {
    accent: "#ffca3a",
    anchorId: "creative-market",
    body: "The venue shifts into a curated discovery floor where wellness products, sustainable creative art, and purposeful entrepreneurship become visible.",
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
        body: "Physical and digital visibility extend the work beyond the event and into a wider network.",
        label: "Hybrid",
        title: "Networking hub"
      }
    ],
    eyebrow: "Wellness Market",
    highlights: ["bazaar", "art"],
    icon: Palette,
    id: "creative-market",
    image: sceneAssets.market.src,
    title: "Curated Discovery",
    tone: "market"
  },
  {
    accent: "#7c1428",
    anchorId: "premiere",
    body: "The media premiere gives the event a shareable centrepiece: editorial visibility, partner recognition, flash moments, and strategic alliance energy.",
    detailCards: [
      {
        body: "The Grand Reveal and Cover Unveiling create a media-led center point for the event.",
        label: "Magazine",
        title: "Cover moment"
      },
      {
        body: "Editor speech and partner badges connect BTA GlobalX, Ayu Herba, BTA Productions, BTV International, and ISEIGUR.",
        label: "Alliance",
        title: "Strategic reveal"
      },
      {
        body: "Camera flashes, guest cards, and networking convert the launch into shareable visibility.",
        label: "Media",
        title: "Flash-mob network"
      }
    ],
    eyebrow: "Media Premiere",
    highlights: ["magazine", "alliance"],
    icon: BookOpen,
    id: "premiere",
    image: sceneAssets.media.src,
    title: "The Premiere",
    tone: "red"
  },
  {
    accent: "#fdd142",
    anchorAliases: ["gala-awards"],
    anchorId: "red-carpet-runway",
    body: "The evening moves through red carpet interviews, cultural performance, heritage fashion, gala dinner, awards, lucky draw, and the closing photo session.",
    detailCards: [
      {
        body: "Arrival energy, media bites, and flash moments set up visible recognition before the gala begins.",
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
    eyebrow: "Gala Route",
    highlights: ["red-carpet", "culture", "fashion", "dinner", "awards", "lucky-draw"],
    icon: Trophy,
    id: "red-carpet-gala",
    image: sceneAssets.gala.src,
    title: "Red Carpet to Awards",
    tone: "runway"
  }
];

export const eventHighlightScene = scenarioScenes[0];
export const timelineBeats: TimelineBeat[] = itinerary.map((segment, index) => ({
  activities: segment.activities,
  index,
  label: String(index + 1).padStart(2, "0"),
  scene: segment.scene,
  time: segment.time,
  title: segment.title
}));

export const galleryTiles = [
  {
    title: "Ceremony",
    image: {
      alt: "BTA GlobalX anniversary ceremony moment",
      id: "gallery-anniversary-ceremony",
      src: "/assets/gallery/previous-events/Our%202nd%20Year%20Anniversary%20Celebration/BTA%20Global-10.jpg"
    }
  },
  {
    title: "Red Carpet",
    image: {
      alt: "BTA GlobalX red carpet interview moment",
      id: "gallery-red-carpet-interview",
      src: "/assets/gallery/previous-events/Red%20Carpet%20Interviews/BTA%20Global-1280.jpg"
    }
  },
  {
    title: "Performances",
    image: {
      alt: "BTA GlobalX grand finale performance moment",
      id: "gallery-grand-finale-performance",
      src: "/assets/gallery/previous-events/KWC%20Grand%20Finale%202025/BTA%20Global-780.jpg"
    }
  },
  {
    title: "Awards",
    image: {
      alt: "BTA GlobalX awardee celebration moment",
      id: "gallery-awardee-celebration",
      src: "/assets/gallery/previous-events/Awardees/BTA%20Global-1110.jpg"
    }
  },
  {
    title: "Networking",
    image: {
      alt: "BTA GlobalX seminar and panel discussion moment",
      id: "gallery-seminar-panel",
      src: "/assets/gallery/previous-events/Seminar%20%26%20Panel%20Discussion/BTA%20Global-399.jpg"
    }
  },
  {
    title: "Fashion",
    image: {
      alt: "BTA GlobalX walk of excellence moment",
      id: "gallery-walk-of-excellence",
      src: "/assets/gallery/previous-events/walk%20of%20excellence/BTA%20Global-961.jpg"
    }
  }
];

export const registrationSlides = [
  {
    id: "general",
    eyebrow: "Guest Access",
    title: "Guest Passes",
    summary: "Entry and table access for guests joining the full event journey.",
    packages: registrationPackages.filter((pkg) => ["general", "signature"].includes(pkg.id))
  },
  {
    id: "nominee",
    eyebrow: "Recognition Access",
    title: "Nominee Packages",
    summary: "Award nominee packages with profile, media, and recognition benefits.",
    packages: registrationPackages.filter((pkg) => ["silver", "gold", "platinum"].includes(pkg.id))
  }
];
