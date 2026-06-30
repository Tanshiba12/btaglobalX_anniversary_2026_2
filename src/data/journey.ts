import {
  Brain,
  Gift,
  Music2,
  Palette,
  Sparkles,
  Trophy
} from "lucide-react";
import { sceneAssets } from "@/data/assets";
import type { ActPair, JourneyAct } from "@/types/content";

export const journeyActs: JourneyAct[] = [
  {
    id: "intercultural-music-dance",
    number: 1,
    title: "Intercultural Music & Dance 2026",
    subtitle: "A joyful cultural opening for the evening",
    description:
      "A celebration of rhythm, heritage, and shared identity that brings guests into the gala atmosphere with warmth and movement.",
    highlights: [
      { id: "music", label: "Live cultural rhythm", icon: Music2 },
      { id: "dance", label: "Stage performance", icon: Sparkles },
      { id: "welcome", label: "Guest energy", icon: Gift }
    ],
    subSections: [
      {
        id: "cultural-welcome",
        label: "Highlight",
        title: "Culture in motion",
        description: "Music and dance set a festive tone before the formal recognition moments begin.",
        icon: Music2
      }
    ],
    image: sceneAssets.runway.src,
    mediaType: "image",
    tone: "runway"
  },
  {
    id: "sustainable-creative-art",
    number: 2,
    title: "Sustainable Creative Art Exhibition 2026",
    subtitle: "Purposeful creativity with a global stage",
    description:
      "Artists and creative changemakers receive a refined showcase where sustainability, beauty, and cultural expression can be seen clearly.",
    highlights: [
      { id: "art", label: "Creative exhibition", icon: Palette },
      { id: "sustainability", label: "Purpose-led work", icon: Sparkles },
      { id: "visibility", label: "Guest discovery", icon: Trophy }
    ],
    subSections: [
      {
        id: "art-exhibition",
        label: "Highlight",
        title: "Creative presence",
        description: "A curated exhibition gives guests a meaningful visual pause within the event route.",
        icon: Palette
      }
    ],
    image: sceneAssets.market.src,
    mediaType: "image",
    tone: "market"
  },
  {
    id: "mental-health-life-management",
    number: 3,
    title: "Mental Health & Life Management Seminar 2026",
    subtitle: "Practical wellbeing for modern leadership",
    description:
      "A thoughtful seminar moment around wellbeing, balance, personal growth, and the emotional strength behind sustainable success.",
    highlights: [
      { id: "seminar", label: "Wellbeing seminar", icon: Brain },
      { id: "discussion", label: "Life management", icon: Sparkles },
      { id: "insight", label: "Practical insight", icon: Trophy }
    ],
    subSections: [
      {
        id: "life-management",
        label: "Highlight",
        title: "Mind and life balance",
        description: "Guests leave with a clearer connection between inner balance and public excellence.",
        icon: Brain
      }
    ],
    image: sceneAssets.forum.src,
    mediaType: "image",
    tone: "forum"
  },
  {
    id: "gala-dinner-lucky-draw",
    number: 4,
    title: "Gala Dinner & Lucky Draw",
    subtitle: "Connection, celebration, and shared excitement",
    description:
      "The dinner brings guests, partners, nominees, and leaders together with premium hospitality and a lively sponsored lucky draw.",
    highlights: [
      { id: "dinner", label: "Gala dinner", icon: Gift },
      { id: "draw", label: "Lucky draw", icon: Sparkles },
      { id: "network", label: "Guest connection", icon: Trophy }
    ],
    subSections: [
      {
        id: "gala-dinner",
        label: "Highlight",
        title: "A shared table",
        description: "Dinner and networking become the social centre of the anniversary night.",
        icon: Gift
      }
    ],
    image: sceneAssets.gala.src,
    mediaType: "image",
    tone: "gala"
  },
  {
    id: "heritage-fashion-show",
    number: 5,
    title: "Heritage Fashion Show 2026",
    subtitle: "Legacy and elegance on the runway",
    description:
      "A refined fashion presentation celebrates heritage through styling, presence, and stage movement designed for media-ready moments.",
    highlights: [
      { id: "heritage", label: "Heritage runway", icon: Sparkles },
      { id: "fashion", label: "Elegant styling", icon: Trophy },
      { id: "media", label: "Photo moments", icon: Gift }
    ],
    subSections: [
      {
        id: "fashion-show",
        label: "Highlight",
        title: "Heritage in motion",
        description: "The runway adds beauty, cultural pride, and visual memory to the gala.",
        icon: Sparkles
      }
    ],
    image: sceneAssets.runway.src,
    mediaType: "image",
    tone: "runway"
  },
  {
    id: "excellence-award",
    number: 6,
    title: "Excellence Award 2026",
    subtitle: "Recognition for people creating meaningful impact",
    description:
      "The award ceremony honours leaders, entrepreneurs, humanitarians, and changemakers whose work deserves a visible stage.",
    highlights: [
      { id: "award", label: "Recognition", icon: Trophy },
      { id: "nominees", label: "Nominee spotlight", icon: Sparkles },
      { id: "legacy", label: "Closing memory", icon: Gift }
    ],
    subSections: [
      {
        id: "award-stage",
        label: "Highlight",
        title: "Honour with presence",
        description: "Recognition closes the night with gratitude, applause, and official photography.",
        icon: Trophy
      }
    ],
    image: sceneAssets.gala.src,
    mediaType: "image",
    tone: "gala"
  }
];

export const actPairs: ActPair[] = [
  [0, 1],
  [2, 3],
  [4, 5]
];
