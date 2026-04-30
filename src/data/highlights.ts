import {
  BadgeCheck,
  BookOpen,
  Camera,
  Gem,
  Gift,
  Globe2,
  Handshake,
  Images,
  Mic2,
  Music2,
  Palette,
  Sparkles,
  Trophy,
  Users
} from "lucide-react";
import type { Highlight } from "@/types/content";

export const highlights: Highlight[] = [
  {
    id: "forum",
    title: "Life Management & Mental Well-being Forum 2026",
    description: "Speakers, panel discussion, and practical mind and life management insights.",
    actId: "forum",
    icon: Mic2
  },
  {
    id: "speakers",
    title: "Speakers' Speech",
    description: "Thought leadership moments anchored by Prof. Dr. Mike Chan and expert panelists.",
    actId: "forum",
    icon: Users
  },
  {
    id: "bazaar",
    title: "Bazaar & Wellness Fair",
    description: "A premium fair experience for wellness products and creative entrepreneurship.",
    actId: "creative-market",
    icon: Sparkles
  },
  {
    id: "art",
    title: "Sustainable Creative Art Exhibition",
    description: "A high-impact gallery for preservation, innovation, and global responsibility.",
    actId: "creative-market",
    icon: Palette
  },
  {
    id: "magazine",
    title: "THE PREMIERE",
    description: "Tycoon Global Magazine Special Edition featuring BTA GLOBALX.",
    actId: "premiere",
    icon: BookOpen
  },
  {
    id: "alliance",
    title: "Unveil Strategic Alliance",
    description: "Sponsor, media partner, and supporting partner badges reveal the growth ecosystem.",
    actId: "premiere",
    icon: Handshake
  },
  {
    id: "red-carpet",
    title: "Red Carpet & Exclusive Interviews",
    description: "Interview bites, media visibility, flashes, and VIP arrival energy.",
    actId: "red-carpet-runway",
    icon: Camera
  },
  {
    id: "culture",
    title: "Inter-cultural Music & Dance",
    description: "A Tapestry of Southeast Asia through rhythm, costume, and ancestral storytelling.",
    actId: "red-carpet-runway",
    icon: Music2
  },
  {
    id: "fashion",
    title: "Heritage Fashion Show",
    description: "A Fusion of Legacy & Luxury across contemporary heritage runway rounds.",
    actId: "red-carpet-runway",
    icon: Gem
  },
  {
    id: "dinner",
    title: "Gala Dinner & Global Networking",
    description: "Premium networking with international delegates, changemakers, and professionals.",
    actId: "gala-awards",
    icon: Globe2
  },
  {
    id: "awards",
    title: "Excellence Award 2026",
    description: "Recognition for lifetime excellence, humanitarian impact, entrepreneurship, and women empowerment.",
    actId: "gala-awards",
    icon: Trophy
  },
  {
    id: "gallery",
    title: "Our Previous Gallery",
    description: "A future archive for previous photos, videos, red carpet, performances, and awards.",
    actId: "gallery-finale",
    icon: Images
  },
  {
    id: "lucky-draw",
    title: "Lucky Draw",
    description: "Exclusive sponsored products worth up to USD 10,000.",
    actId: "gallery-finale",
    icon: Gift
  },
  {
    id: "anniversary",
    title: "Anniversary Ceremony",
    description: "A ceremonial closing loop for gratitude, contact, and registration.",
    actId: "gallery-finale",
    icon: BadgeCheck
  }
];
