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
    label: "Particle star hero background",
    src: "/assets/hero/particle-star-background.mp4"
  }
} as const satisfies Record<string, VideoAsset>;

export const sponsorAssets: readonly SponsorAsset[] = [
  { id: "ayu-herba", name: "Ayu Herba", src: "/assets/partners/ayuherba logo.jpeg" },
  { id: "bta-productions", name: "BTA Productions", src: "/assets/partners/BTA PRODUCTION.jpg" },
  { id: "btv-international", name: "BTV International", src: "/assets/partners/BTV.jpeg" },
  { id: "european-wellness", name: "European Wellness", src: "/assets/partners/european wellness.webp" },
  { id: "iseigur", name: "ISEIGUR", src: "/assets/partners/ISEIGUR logo.png" },
  { id: "tycoon-global", name: "Tycoon Global", src: "/assets/partners/TYCOON GLOBAL.jpg" },
  { id: "shindo", name: "Shindo", src: "/assets/partners/SHINDO.jpg" },
  { id: "bta-globalx", name: "BTA GlobalX", src: "/assets/partners/bta globalx logo.jpg" }
] as const satisfies readonly SponsorAsset[];

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
    alt: "BTA GlobalX ceremony atmosphere with guests and stage lighting",
    id: "scene-arrival",
    source: "official",
    src: galleryAssets.previousEvents[0].src
  },
  venue: {
    alt: "Hotel Sheraton Johor Bahru venue exterior",
    id: "scene-venue",
    source: "official",
    src: brandAssets.venue.src
  },
  forum: {
    alt: "BTA GlobalX speaker and audience moment",
    id: "scene-forum",
    source: "official",
    src: galleryAssets.previousEvents[3].src
  },
  market: {
    alt: "BTA GlobalX networking and exhibition atmosphere",
    id: "scene-market",
    source: "official",
    src: galleryAssets.previousEvents[1].src
  },
  media: {
    alt: "BTA GlobalX red carpet and media moment",
    id: "scene-media",
    source: "official",
    src: galleryAssets.previousEvents[1].src
  },
  runway: {
    alt: "BTA GlobalX performance and fashion stage moment",
    id: "scene-runway",
    source: "official",
    src: galleryAssets.previousEvents[2].src
  },
  gala: {
    alt: "BTA GlobalX awards stage and gala moment",
    id: "scene-gala",
    source: "official",
    src: galleryAssets.previousEvents[0].src
  },
  access: {
    alt: "BTA GlobalX venue arrival and schedule setting",
    id: "scene-access",
    source: "official",
    src: brandAssets.venue.src
  },
  finale: {
    alt: "BTA GlobalX celebration finale and networking moment",
    id: "scene-finale",
    source: "official",
    src: galleryAssets.previousEvents[2].src
  }
} as const satisfies Record<string, ImageAsset>;
