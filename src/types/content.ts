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
  image?: string;
  imageAlt?: string;
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
  accent: string;
  summary: string;
  benefits: string[];
  formUrl?: string;
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
  tone?: "arrival" | "venue" | "forum" | "market" | "media" | "runway" | "gala" | "access" | "finale";
};

export type ActPair = [number, number];

export type Vector3Tuple = [number, number, number];

export type CameraKeyframe = {
  position: Vector3Tuple;
  target: Vector3Tuple;
};

export type SceneActor = {
  id: string;
  image?: string;
  label: string;
  position: Vector3Tuple;
  role: "founder" | "speaker" | "guest" | "sponsor";
};

export type SceneHotspot = {
  label: string;
  position: Vector3Tuple;
};

export type WorldScene = {
  accent: string;
  anchorId: string;
  camera: CameraKeyframe;
  copy: string;
  environment: "arrival" | "map" | "founder" | "journey" | "forum" | "gala" | "finale";
  id: string;
  image?: string;
  kicker: string;
  title: string;
  actors?: SceneActor[];
  hotspots?: SceneHotspot[];
};

export type ScrollChapter = {
  anchorId: string;
  copy: string;
  ctaHref?: string;
  ctaLabel?: string;
  id: string;
  meta: string;
  number: string;
  title: string;
};
