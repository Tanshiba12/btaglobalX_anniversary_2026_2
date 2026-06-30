export type ImageAsset = {
  alt: string;
  id: string;
  src: string;
  source?: "official" | "temporary";
};

export type VideoAsset = {
  id: string;
  label: string;
  src: string;
  kind?: "background" | "embed" | "direct";
};

export type SponsorAsset = {
  id: string;
  name: string;
  src: string;
};

export const brandAssets = {
  logo: {
    alt: "BTA GlobalX",
    id: "bta-globalx-logo",
    src: "/assets/brand/bta-logo.gif"
  },
  venue: {
    alt: "Hotel Sheraton Johor Bahru venue",
    id: "sheraton-johor-bahru",
    src: "/assets/brand/venue.jpeg"
  }
} as const satisfies Record<string, ImageAsset>;

export const heroAssets = {
  backgroundVideo: {
    id: "particle-star-background",
    kind: "background",
    label: "Particle star hero background",
    src: "/assets/hero/particle-star-background.mp4"
  }
} as const satisfies Record<string, VideoAsset>;

export const eventVideoAssets = {
  official: {
    id: "bta-official-video",
    kind: "embed",
    label: "BTA Official Video",
    src: ""
  },
  teaser: {
    id: "bta-event-teaser-video",
    kind: "embed",
    label: "Event Teaser Video",
    src: ""
  }
} as const satisfies Record<string, VideoAsset>;

export const sponsorAssets: readonly SponsorAsset[] = [
  { id: "ayu-herba", name: "Ayu Herba", src: "/assets/partners/Ayu-Herba-logo-1160x400-1.png" },
  { id: "bta-globalx", name: "BTA GlobalX", src: "/assets/partners/BTA GLOBAL X.png" },
  { id: "bta-productions", name: "BTA Productions", src: "/assets/partners/BTA PRODUCTION_bgr.jpg.png" },
  { id: "btv-international", name: "BTV International", src: "/assets/partners/BTV International.png" },
  { id: "european-wellness", name: "European Wellness", src: "/assets/partners/european wellness.webp" },
  { id: "iseigur", name: "ISEIGUR", src: "/assets/partners/ISEIGUR logo.png" },
  { id: "shindo", name: "Shindo", src: "/assets/partners/shindo.png" }
] as const satisfies readonly SponsorAsset[];

export const generatedAssets = {
  overviewStageOrbit: {
    alt: "Cinematic black and gold gala stage with orbit-like stage architecture",
    id: "overview-stage-orbit",
    source: "official",
    src: "/assets/generated/overview-stage-orbit.png"
  },
  journeyArrivalRegistration: {
    alt: "Luxury event arrival and registration foyer with golden ballroom entrance",
    id: "journey-arrival-registration",
    source: "official",
    src: "/assets/generated/journey-arrival-registration.png"
  },
  journeyLifeManagementForum: {
    alt: "Premium life management forum stage with panel seating and warm gold lighting",
    id: "journey-life-management-forum",
    source: "official",
    src: "/assets/generated/journey-life-management-forum.png"
  },
  journeyWellnessMarket: {
    alt: "Luxury wellness market and creative exhibition corridor inside a hotel ballroom",
    id: "journey-wellness-market",
    source: "official",
    src: "/assets/generated/journey-wellness-market.png"
  },
  journeyMediaPremiere: {
    alt: "Premium media premiere reveal stage with red carpet and camera flashes",
    id: "journey-media-premiere",
    source: "official",
    src: "/assets/generated/journey-media-premiere.png"
  },
  journeyRedCarpetRunway: {
    alt: "Elegant red carpet and heritage runway stage with gold lights and maroon curtains",
    id: "journey-red-carpet-runway",
    source: "official",
    src: "/assets/generated/journey-red-carpet-runway.png"
  },
  journeyGalaAwards: {
    alt: "Prestigious gala awards ballroom stage with black, gold, and maroon lighting",
    id: "journey-gala-awards",
    source: "official",
    src: "/assets/generated/journey-gala-awards.png"
  },
  forumAmbientWellnessScenes: {
    alt: "Abstract premium wellness forum stage with gold, maroon, and emerald lighting",
    id: "forum-ambient-wellness-scenes",
    source: "official",
    src: "/assets/generated/forum-ambient-wellness-scenes.png"
  }
} as const satisfies Record<string, ImageAsset>;

export const founderAssets = {
  sangeetaBiswas: {
    alt: "H.E. Amb. Dr. Sangeeta Biswas, founder of Ayu Herba and BTA GlobalX",
    id: "sangeeta-biswas-founder",
    source: "official",
    src: "/assets/founder/Dr-Sangeeta-Biswas.webp"
  }
} as const satisfies Record<string, ImageAsset>;

export const speakerAssets = {
  mikeChan: {
    alt: "Prof. Dr. Mike Chan",
    id: "mike-chan",
    source: "official",
    src: "/assets/speakers/MIKE.jpg"
  },
  waySun: {
    alt: "Dr. Way Sun",
    id: "way-sun",
    source: "official",
    src: "/assets/speakers/Dr. WAY SUN.jpg"
  },
  sangeetaBiswas: {
    alt: "Dr. Sangeeta Biswas",
    id: "sangeeta-biswas-speaker",
    source: "official",
    src: "/assets/speakers/Dr-Sangeeta-Biswas.webp"
  },
  elleQuan: {
    alt: "Dr. Elle Quan",
    id: "elle-quan",
    source: "official",
    src: "/assets/speakers/Elle Quan.png"
  }
} as const satisfies Record<string, ImageAsset>;

export const galleryAssets = {
  previousEvents: [
    {
      alt: "BTA GlobalX awards ceremony moment",
      id: "bta-awards-2025-ceremony",
      src: "/assets/gallery/previous-events/bta-awards-2025.jpg"
    },
    {
      alt: "BTA GlobalX red carpet and performance moment",
      id: "bta-awards-2025-red-carpet",
      src: "/assets/gallery/previous-events/bta-awards-2025-2.jpg"
    },
    {
      alt: "BTA GlobalX gala performance moment",
      id: "bta-awards-2025-performance",
      src: "/assets/gallery/previous-events/bta-awards-2025-3.jpg"
    },
    {
      alt: "BTA GlobalX commitment and networking moment",
      id: "bta-commitment",
      src: "/assets/gallery/previous-events/bta-commitment.jpg"
    }
  ]
} as const satisfies Record<string, readonly ImageAsset[]>;

export const sceneAssets = {
  arrival: {
    alt: "Hotel Sheraton Johor Bahru event arrival setting",
    id: "scene-arrival",
    source: "official",
    src: brandAssets.venue.src
  },
  venue: {
    alt: "Hotel Sheraton Johor Bahru venue exterior",
    id: "scene-venue",
    source: "official",
    src: brandAssets.venue.src
  },
  forum: {
    alt: "BTA GlobalX community and networking moment",
    id: "scene-forum",
    source: "official",
    src: galleryAssets.previousEvents[3].src
  },
  market: {
    alt: "BTA GlobalX gala performance and exhibition atmosphere",
    id: "scene-market",
    source: "official",
    src: galleryAssets.previousEvents[2].src
  },
  media: {
    alt: "BTA GlobalX red carpet and media moment",
    id: "scene-media",
    source: "official",
    src: galleryAssets.previousEvents[1].src
  },
  runway: {
    alt: "BTA GlobalX cultural stage and performance moment",
    id: "scene-runway",
    source: "official",
    src: galleryAssets.previousEvents[2].src
  },
  gala: {
    alt: "BTA GlobalX awards ceremony moment",
    id: "scene-gala",
    source: "official",
    src: galleryAssets.previousEvents[0].src
  },
  access: {
    alt: "Hotel Sheraton Johor Bahru guest arrival setting",
    id: "scene-access",
    source: "official",
    src: brandAssets.venue.src
  },
  finale: {
    alt: "BTA GlobalX closing celebration and gala performance",
    id: "scene-finale",
    source: "official",
    src: galleryAssets.previousEvents[2].src
  }
} as const satisfies Record<string, ImageAsset>;
