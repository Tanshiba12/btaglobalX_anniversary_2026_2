import {
  Calendar,
  CheckCircle,
  FileText,
  Gift,
  Globe2,
  Handshake,
  Images,
  MapPin,
  Mic2,
  Music2,
  Palette,
  Sparkles,
  Trophy,
  Users,
  Video,
  Zap
} from "lucide-react";
import { sceneAssets } from "@/data/assets";
import type { ActPair, JourneyAct } from "@/types/content";

export const journeyActs: JourneyAct[] = [
  {
    id: "arrival-registration",
    number: 1,
    title: "Welcome Reception",
    subtitle: "Arrive ready for a celebration",
    description:
      "Guests are welcomed at Sheraton Johor Bahru with clear registration, warm host guidance, and the first photography moments of the anniversary day.",
    highlights: [
      { id: "registration", label: "Guest check-in", icon: FileText },
      { id: "confirmation", label: "Welcome host", icon: CheckCircle },
      { id: "venue-entry", label: "Sheraton arrival", icon: Zap }
    ],
    subSections: [
      {
        id: "guest-arrival",
        label: "First impression",
        title: "A warm opening",
        description: "The event begins with a calm welcome desk, visible hosts, and a venue atmosphere that feels prepared.",
        icon: MapPin
      },
      {
        id: "access-pass",
        label: "Guest flow",
        title: "Easy movement",
        description: "Guests know where to go next, who to meet, and how the programme will unfold.",
        icon: CheckCircle
      }
    ],
    image: sceneAssets.arrival.src,
    mediaType: "image",
    tone: "arrival"
  },
  {
    id: "life-management-forum",
    number: 2,
    title: "Mind & Life Forum",
    subtitle: "Ideas for wellbeing, leadership, and modern living",
    description:
      "The afternoon gathers respected voices around practical wellbeing, regenerative science, inner balance, beauty, discipline, and meaningful lifestyle change.",
    highlights: [
      { id: "keynote", label: "Keynote direction", icon: Mic2 },
      { id: "panel", label: "Panel exchange", icon: Users },
      { id: "insights", label: "Practical insight", icon: Sparkles }
    ],
    subSections: [
      {
        id: "speaker-board",
        label: "Speaker board",
        title: "Seven perspectives",
        description: "Each speaker brings one clear point of view, giving guests ideas they can carry beyond the event.",
        icon: Mic2
      },
      {
        id: "forum-topics",
        label: "Forum themes",
        title: "Practical inspiration",
        description: "Shindo, Ayurveda, regenerative science, mental health, meditation, and integrated living.",
        icon: Sparkles
      }
    ],
    image: sceneAssets.forum.src,
    mediaType: "image",
    tone: "forum"
  },
  {
    id: "wellness-market",
    number: 3,
    title: "Wellness & Art Discovery",
    subtitle: "Meet the brands, makers, and ideas behind the celebration",
    description:
      "The guest journey opens into a curated discovery floor where wellness brands, creative products, sustainable art, and new partnerships can be experienced up close.",
    highlights: [
      { id: "bazaar", label: "Premium bazaar", icon: Sparkles },
      { id: "art-exhibition", label: "Creative art", icon: Palette },
      { id: "wellness", label: "Wellness fair", icon: Gift }
    ],
    subSections: [
      {
        id: "vendors",
        label: "Brand discovery",
        title: "Meet the makers",
        description: "Guests meet founders, products, and ideas that fit the wellness and lifestyle conversation.",
        icon: Sparkles
      },
      {
        id: "art-gallery",
        label: "Creative showcase",
        title: "Art with purpose",
        description: "A softer cultural layer gives the day texture beyond the stage.",
        icon: Palette
      }
    ],
    image: sceneAssets.market.src,
    mediaType: "image",
    tone: "market"
  },
  {
    id: "media-premiere",
    number: 4,
    title: "Magazine & Alliance Premiere",
    subtitle: "A public moment for partners, media, and shared ambition",
    description:
      "The celebration turns editorial with the magazine reveal, partner presence, media networking, and alliance moments designed for visibility and momentum.",
    highlights: [
      { id: "magazine-launch", label: "Magazine reveal", icon: FileText },
      { id: "strategic-alliance", label: "Alliance moment", icon: Handshake },
      { id: "partner-showcase", label: "Media visibility", icon: Globe2 }
    ],
    subSections: [
      {
        id: "magazine-reveal",
        label: "Editorial reveal",
        title: "The cover moment",
        description: "The editorial moment gives partners and guests a visible reason to gather around the story.",
        icon: FileText
      },
      {
        id: "partnerships",
        label: "Alliance",
        title: "Partners on stage",
        description: "Sponsors, media partners, and supporting organisations become part of the celebration narrative.",
        icon: Handshake
      }
    ],
    image: sceneAssets.media.src,
    mediaType: "image",
    tone: "media"
  },
  {
    id: "red-carpet-runway",
    number: 5,
    title: "Red Carpet Showcase",
    subtitle: "Culture, fashion, interviews, and arrival energy",
    description:
      "The evening becomes visible through red carpet arrivals, interview moments, cultural performance, heritage fashion, and the joyful energy of guests entering the spotlight.",
    highlights: [
      { id: "red-carpet", label: "Red carpet", icon: Video },
      { id: "performance", label: "Cultural stage", icon: Music2 },
      { id: "fashion-show", label: "Heritage runway", icon: Sparkles }
    ],
    subSections: [
      {
        id: "interviews",
        label: "Media",
        title: "Arrival stories",
        description: "VIP arrivals and interview moments make the celebration feel alive before the gala begins.",
        icon: Video
      },
      {
        id: "fashion",
        label: "Culture",
        title: "Heritage in motion",
        description: "Cultural expression and contemporary style move together on stage.",
        icon: Music2
      }
    ],
    image: sceneAssets.runway.src,
    mediaType: "image",
    tone: "runway"
  },
  {
    id: "gala-awards",
    number: 6,
    title: "Gala Dinner & Awards",
    subtitle: "Recognition, dinner, and meaningful connection",
    description:
      "The formal evening brings nominees, partners, leaders, and changemakers together for dinner, recognition, awards, and conversations that can continue after the event.",
    highlights: [
      { id: "gala-dinner", label: "Gala dinner", icon: Globe2 },
      { id: "awards-ceremony", label: "Excellence Awards", icon: Trophy },
      { id: "networking", label: "Global networking", icon: Users }
    ],
    subSections: [
      {
        id: "dinner",
        label: "Dinner",
        title: "Shared table",
        description: "Dining, networking, and ceremony flow together so guests can celebrate and connect with ease.",
        icon: Globe2
      },
      {
        id: "awards",
        label: "Awards",
        title: "Honour with impact",
        description: "The Excellence Awards become the emotional centre of the anniversary night.",
        icon: Trophy
      }
    ],
    image: sceneAssets.gala.src,
    mediaType: "image",
    tone: "gala"
  },
  {
    id: "closing-memory",
    number: 7,
    title: "Finale & Shared Memory",
    subtitle: "Lucky draw, gratitude, photography, and farewell energy",
    description:
      "The celebration closes with sponsored draw moments, anniversary gratitude, final photography, and the kind of shared memory guests can proudly revisit.",
    highlights: [
      { id: "schedule", label: "Closing cue", icon: Calendar },
      { id: "lucky-draw", label: "Lucky draw", icon: Gift },
      { id: "gallery", label: "Final gallery", icon: Images }
    ],
    subSections: [
      {
        id: "draw",
        label: "Draw",
        title: "One last spark",
        description: "Sponsored prize moments keep the energy warm through the close.",
        icon: Gift
      },
      {
        id: "photos",
        label: "Memory",
        title: "The proof of the day",
        description: "Closing photography turns attendance into a visible memory for guests and partners.",
        icon: Images
      }
    ],
    image: sceneAssets.finale.src,
    mediaType: "image",
    tone: "finale"
  }
];

export const actPairs: ActPair[] = [
  [0, 1],
  [2, 3],
  [4, 5]
];
