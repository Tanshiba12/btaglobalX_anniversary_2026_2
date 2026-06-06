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
  "An anniversary built as a living stage: wellness insight, cultural expression, media visibility, strategic alliance, gala networking, and public recognition moving through one day.",
  "The experience is designed for guests, nominees, partners, sponsors, artists, speakers, and changemakers who need more than attendance. They need a room where their story is seen clearly.",
  "From the forum opening to the award finale, every movement connects back to one promise: purpose meets recognition, and excellence finds its stage."
];

export const founderMessageParagraphs = [
  "BTA GlobalX began as a spark of an idea fueled by late nights, deep conversations, and a desire to build more than a network: a purpose-driven ecosystem where people, passion, and impact align.",
  "Supporting entrepreneurs across Asia, the Middle East, and Europe, I witnessed firsthand how powerful transformation happens when driven individuals unite with purpose. That is how BTA GlobalX was born: a platform where your network becomes your catalyst for change.",
  "Since then, we have grown not just in size, but in intention and impact. We have built trusted relationships, fostered meaningful partnerships, and cultivated a culture of Givers Get, where success is shared and purpose comes first.",
  "To my team, the quiet warriors behind the scenes, the dreamers who dared, and the doers who delivered: you are the soul of BTA GlobalX. To every partner who trusted us and every member who showed up with open minds and open hearts, thank you for believing in this vision.",
  "The future holds deeper learning, stronger alliances, and bold innovation. We are not just building a brand. We are shaping a legacy of excellence with impact.",
  `Join us on ${eventDetails.date} at ${eventDetails.venue} for an inspiring and memorable day of networking, recognition, wellness, cultural celebration, and meaningful connection as we celebrate the Excellence Awards.`
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
    image: galleryImages[0].src,
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
    image: sceneAssets.forum.src,
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
    image: sceneAssets.market.src,
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
    image: sceneAssets.media.src,
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
    image: sceneAssets.gala.src,
    title: "Red Carpet to Gala",
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
  { title: "Ceremony", image: galleryImages[0] },
  { title: "Red Carpet", image: galleryImages[1] },
  { title: "Performances", image: galleryImages[2] },
  { title: "Awards", image: galleryImages[0] },
  { title: "Networking", image: galleryImages[3] },
  { title: "Fashion", image: galleryImages[2] }
];

export const registrationSlides = [
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
