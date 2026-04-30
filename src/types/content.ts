import type { LucideIcon } from "lucide-react";

export type ActPalette =
  | "invitation"
  | "map"
  | "forum"
  | "market"
  | "premiere"
  | "runway"
  | "awards"
  | "desk"
  | "finale";

export type ActMotif =
  | "invitation"
  | "stickers"
  | "speech-board"
  | "market-grid"
  | "magazine"
  | "press-runway"
  | "trophy-stage"
  | "access-desk"
  | "scrapbook";

export type ActMotion =
  | "label-drop"
  | "sticker-stack"
  | "card-flip"
  | "paper-tear"
  | "page-hinge"
  | "flash-fold"
  | "plaque-stamp"
  | "ticket-compare"
  | "scrapbook-snap";

export type ActLayout =
  | "hero-invitation"
  | "event-sticker-map"
  | "forum-lab-board"
  | "creative-market-wall"
  | "premiere-editorial"
  | "red-carpet-runway"
  | "gala-awards-stage"
  | "schedule-access-desk"
  | "gallery-finale-loop";

export type MotionRecipe =
  | "heroLabels"
  | "mapStickers"
  | "forumBubbles"
  | "marketFrames"
  | "premierePages"
  | "runwayFold"
  | "awardsStage"
  | "accessDesk"
  | "finaleScrapbook";

export type DetailPayload = {
  title: string;
  eyebrow?: string;
  body: string;
  items?: string[];
};

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

export type ActConfig = {
  id: string;
  number: string;
  label: string;
  slotLabel: string;
  title: string;
  kicker: string;
  body: string;
  palette: ActPalette;
  motif: ActMotif;
  motion: ActMotion;
  layout: ActLayout;
  motionRecipe: MotionRecipe;
  height: number;
  durationWeight: number;
  timelineBeats: string[];
  transitionShape: string;
  objects: string[];
  clickTargets: string[];
  assetPromptIds: string[];
  primaryAsset: string;
  contentPriority: "story" | "speakers" | "media" | "conversion" | "proof";
  cta?: string;
};

export type GeneratedAsset = {
  id: string;
  actId: string;
  label: string;
  path: string;
  prompt: string;
};
