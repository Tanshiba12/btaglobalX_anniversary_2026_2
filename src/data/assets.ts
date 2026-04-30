import type { GeneratedAsset } from "@/types/content";

export const assetFallback = "/assets/objects/placeholders/image-fallback.svg";

export const assetPlaceholders = {
  logo: "/assets/brand/bta-logo.gif",
  stamp: "/assets/objects/stamps/00-rsvp-stamp-seal.svg",
  hero: "/assets/acts/01-hero-invitation/01-hero-invitation-card-front.webp",
  stickers: "/assets/objects/stickers/02-highlight-sticker-set.svg",
  trophy: "/assets/objects/trophy/excellence-trophy-cutout.svg",
  magazine: "/assets/objects/magazine/tycoon-global-cover-mockup.svg",
  passes: "/assets/objects/passes/08-access-pass-templates.svg",
  gallery: "/assets/gallery/photos/"
};

export const speakerPortraits: Record<string, string> = {
  "Prof. Dr. Mike Chan": "/assets/people/speakers/prof-dr-mike-chan.webp",
  "Dr. Way Sun": "/assets/people/speakers/dr-way-sun.webp",
  "Dr. Sangeeta Biswas": "/assets/people/speakers/dr-sangeeta-biswas.webp",
  "Amelia Saleha": "/assets/people/speakers/amelia-saleha.webp",
  "Dato Sri Dr. Fams": "/assets/people/speakers/dato-sri-dr-fams.webp",
  "Rendi Tan Ravi": "/assets/people/speakers/rendi-tan-ravi.webp",
  "Dr. Elle Quan": "/assets/people/speakers/dr-elle-quan.webp"
};

export const objectAssets = {
  microphone: "/assets/objects/press/microphone-cutout.svg",
  forumSpotlights: "/assets/objects/light/spotlight-cones.svg",
  forumBubbles: "/assets/objects/speech-bubbles/forum-topic-bubbles.svg",
  marketAwnings: "/assets/objects/booths/market-awning-set.svg",
  marketFloor: "/assets/objects/booths/top-down-booth-blocks.svg",
  sustainableBadge: "/assets/objects/stamps/sustainable-art-badge.svg",
  paperTear: "/assets/textures/paper/paper-tear-edge.svg",
  magazineCover: "/assets/objects/magazine/tycoon-global-cover-mockup.svg",
  magazineSpread: "/assets/objects/magazine/open-page-spread.svg",
  editorSpeech: "/assets/objects/magazine/editor-speech-card.svg",
  flashBurst: "/assets/objects/press/camera-flash-burst.svg",
  redCarpet: "/assets/objects/press/red-carpet-diagonal.svg",
  pressWall: "/assets/objects/press/press-wall-blocks.svg",
  interviewClips: "/assets/objects/press/interview-clipping-set.svg",
  culturePatterns: "/assets/objects/patterns/southeast-asia-pattern-strips.svg",
  trophy: "/assets/objects/trophy/excellence-trophy-cutout.svg",
  tableMap: "/assets/objects/tables/gala-table-top-icons.svg",
  luckyCapsules: "/assets/objects/prizes/lucky-draw-capsules.svg",
  goldLights: "/assets/objects/light/gold-stage-light-cones.svg",
  schedulePapers: "/assets/objects/paper/schedule-paper-stack.svg",
  registerStamp: "/assets/objects/stamps/register-stamp.svg",
  deskGrid: "/assets/textures/paper/desk-grid-paper.svg",
  tape: "/assets/objects/gallery-tiles/black-tape-strips.svg",
  contactTags: "/assets/objects/contact/contact-label-tags.svg",
  finalStamp: "/assets/objects/stamps/final-rsvp-stamp.svg"
};

export const runwayLookAssets = [
  "/assets/objects/runway/heritage-look-placeholder-01.svg",
  "/assets/objects/runway/heritage-look-placeholder-02.svg",
  "/assets/objects/runway/heritage-look-placeholder-03.svg",
  "/assets/objects/runway/heritage-look-placeholder-04.svg"
];

export const passAssets: Record<string, string> = {
  General: "/assets/objects/passes/general-pass-template.svg",
  Signature: "/assets/objects/passes/signature-pass-template.svg",
  Silver: "/assets/objects/passes/silver-pass-template.svg",
  Gold: "/assets/objects/passes/gold-pass-template.svg",
  Platinum: "/assets/objects/passes/platinum-pass-template.svg"
};

export const galleryPhotoAssets = [
  "/assets/gallery/photos/previous-ceremony-01.webp",
  "/assets/gallery/photos/previous-red-carpet-01.webp",
  "/assets/gallery/photos/previous-performance-01.webp",
  "/assets/gallery/photos/previous-awards-01.webp",
  "/assets/gallery/photos/previous-networking-01.webp",
  "/assets/gallery/photos/previous-fashion-01.webp"
];

export const partnerLogoAssets: Record<string, string> = {
  "BTA GLOBALX": "/assets/brand/bta-logo.gif",
  "AYU HERBA PTE LTD": "/assets/brand/ayu-herba.svg",
  "BTA PRODUCTIONS & TYCOON GLOBAL": "/assets/brand/tycoon-global.svg",
  ISEIGUR: "/assets/brand/iseigur.svg"
};

export const generatedAssets: GeneratedAsset[] = [
  {
    id: "01-hero-invitation",
    actId: "hero",
    label: "Hero invitation composition",
    path: "/assets/generated/acts/01-hero-invitation.svg",
    prompt:
      "premium playful editorial gala invitation card, solid black cream and golden yellow, ticket notches, bold shapes, no logos"
  },
  {
    id: "02-event-map",
    actId: "event-map",
    label: "Event map sticker board",
    path: "/assets/generated/acts/02-event-map.svg",
    prompt:
      "premium playful event highlight sticker board, solid colors, thick black outlines, award wellness art media fashion icons, no text"
  },
  {
    id: "03-forum-lab",
    actId: "forum",
    label: "Forum speech board",
    path: "/assets/generated/acts/03-forum-lab.svg",
    prompt:
      "premium wellness forum board with speaker tokens and speech bubbles, solid blue mint cream black, no logos"
  },
  {
    id: "04-creative-market",
    actId: "creative-market",
    label: "Creative market wall",
    path: "/assets/generated/acts/04-creative-market.svg",
    prompt:
      "premium playful sustainable art and wellness bazaar wall, solid coral yellow violet mint, art frames and booth blocks, no text"
  },
  {
    id: "05-premiere-magazine",
    actId: "premiere",
    label: "THE PREMIERE magazine spread",
    path: "/assets/generated/acts/05-premiere-magazine.svg",
    prompt:
      "premium editorial magazine launch spread, solid red green blue cream black, page hinge, media flash shapes, no readable text"
  },
  {
    id: "06-red-carpet-runway",
    actId: "red-carpet-runway",
    label: "Red carpet to runway fold",
    path: "/assets/generated/acts/06-red-carpet-runway.svg",
    prompt:
      "premium playful red carpet and heritage runway vector, press wall microphone cultural pattern runway cards, solid colors, no logos"
  },
  {
    id: "07-gala-awards",
    actId: "gala-awards",
    label: "Gala awards stage",
    path: "/assets/generated/acts/07-gala-awards.svg",
    prompt:
      "premium awards gala vector kit with dinner tables trophy plaques and prize capsules, solid black cream yellow gold, no text"
  },
  {
    id: "08-schedule-access",
    actId: "schedule-access",
    label: "Schedule and access desk",
    path: "/assets/generated/acts/08-schedule-access.svg",
    prompt:
      "premium event access desk vector with timeline board and five ticket passes, solid cream black yellow silver gold platinum, no logos"
  },
  {
    id: "09-gallery-finale",
    actId: "gallery-finale",
    label: "Gallery finale scrapbook",
    path: "/assets/generated/acts/09-gallery-finale.svg",
    prompt:
      "premium playful event scrapbook wall with photo frames contact labels and final stamp, solid cream black yellow red blue, no text"
  }
];

export const assetStatus = [
  "Official logos pending",
  "Speaker portraits pending",
  "Previous gallery media pending",
  "CSS/SVG block-color placeholders active for prototype",
  "Freepik vector/cutout assets can replace placeholders later"
];
