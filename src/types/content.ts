import type { LucideIcon } from "lucide-react";

export type EventPartner = {
  role: string;
  name: string;
};

export type Highlight = {
  id: string;
  title: string;
  description: string;
  actId: string;
  icon: LucideIcon;
};

export type Speaker = {
  name: string;
  role: "Keynote Speaker / Panel Discussion Moderator" | "Panelist";
  focus: string;
};

export type AwardCategory = {
  title: string;
  description: string;
};

export type ItinerarySegment = {
  time: string;
  title: string;
  scene: string;
  activities: string[];
};

export type RegistrationPackage = {
  id: string;
  name: string;
  tier: "General" | "Signature" | "Silver" | "Gold" | "Platinum";
  price: string;
  accent: string;
  summary: string;
  benefits: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type JourneyAct = {
  id: string;
  number: number; // 1-10
  title: string;
  subtitle: string;
  description: string;
  highlights: Array<{
    id: string;
    label: string;
    icon: LucideIcon;
  }>;
  subSections: Array<{
    id: string;
    label: string;
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  image: string; // Path to media asset
  mediaType?: "video" | "image" | "animation";
};

export type ActPair = [number, number];
