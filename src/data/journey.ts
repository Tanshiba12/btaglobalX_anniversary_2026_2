import {
  Brain,
  Camera,
  Gift,
  Handshake,
  HeartPulse,
  Music2,
  Palette,
  Shirt,
  Sparkles,
  Store,
  Trophy
} from "lucide-react";
import type { ActPair, JourneyAct } from "@/types/content";

const eventRouteImageBase = "/assets/Event%20route%20images";

export const journeyActs: JourneyAct[] = [
  {
    id: "inter-cultural-music-dance",
    number: 1,
    title: "Inter-Cultural Music & Dance 2026",
    subtitle: "Tapestry of Southeast Asia",
    description:
      "This segment celebrates the vibrant pulse of Southeast Asian heritage through a curated showcase of traditional music and dance. By spotlighting the region's diverse cultural presentations, the performance transforms the stage into a living gallery of ancestral history.",
    detailSections: [
      {
        id: "cultural-showcasing",
        title: "Cultural Showcasing",
        body: [
          "Experience the intricate artistry of Southeast Asia, from the hypnotic resonance of percussion ensembles to the storytelling grace of classical dance."
        ]
      },
      {
        id: "preserving-heritage",
        title: "Preserving Heritage",
        body: [
          "Every rhythmic beat and hand-woven costume serves as a tribute to the region's enduring legacy, fostering cross-cultural understanding through the universal language of the arts."
        ]
      }
    ],
    highlights: [
      { id: "cultural-showcase", label: "Cultural Showcasing", icon: Music2 },
      { id: "heritage", label: "Preserving Heritage", icon: Sparkles },
      { id: "southeast-asia", label: "Southeast Asian artistry", icon: Handshake }
    ],
    subSections: [],
    image: `${eventRouteImageBase}/IMD.jpeg`,
    mediaType: "image",
    tone: "runway"
  },
  {
    id: "sustainable-creative-art-exhibition",
    number: 2,
    title: "Sustainable Creative Art Exhibition 2026",
    subtitle: "The Global Stage",
    description:
      "This segment serves as the heartbeat of the event, transforming the venue into a high-impact gallery. It is designed to move beyond traditional aesthetics, focusing on art that tells a story of preservation, innovation, and global responsibility. The primary goal is to elevate artists who are often underrepresented, giving them the tools and the stage to influence a worldwide audience.",
    detailSections: [
      {
        id: "formal-recognition",
        title: "Formal Recognition",
        body: ["Curated \"Artist Spotlights\" and award categories for sustainability and creative excellence."]
      },
      {
        id: "networking-hub",
        title: "Networking Hub",
        body: ["Access to a hybrid platform (physical and digital) ensures their work is seen internationally."]
      }
    ],
    highlights: [
      { id: "global-stage", label: "The Global Stage", icon: Palette },
      { id: "recognition", label: "Formal Recognition", icon: Trophy },
      { id: "networking", label: "Networking Hub", icon: Handshake }
    ],
    subSections: [],
    image: `${eventRouteImageBase}/SCAE%202026.png`,
    mediaType: "image",
    tone: "market"
  },
  {
    id: "mental-health-life-management",
    number: 3,
    title: "Mental Health & Life Management Seminar 2026",
    subtitle: "Panel Discussion: \"The Mind and Life Management\"",
    description:
      "An insightful and empowering seminar focused on understanding the connection between mental well-being, emotional balance, and effective life management. The session will feature an engaging panel discussion with experts and thought leaders who will share practical knowledge, personal insights, and strategies to help individuals navigate challenges, build resilience, and create a healthier, more balanced lifestyle.",
    detailSections: [
      {
        id: "key-discussion-points",
        title: "Key Discussion Points",
        items: [
          "Understanding the importance of mental health in personal and professional life",
          "The connection between mindset, emotions, and overall life quality",
          "Effective strategies for managing stress, pressure, and daily challenges",
          "Building emotional resilience and developing a positive mindset",
          "Balancing career, relationships, personal growth, and well-being",
          "Practical approaches to improving self-awareness and decision-making",
          "Creating sustainable habits for a healthier and more fulfilling life",
          "Encouraging open conversations and reducing stigma around mental health awareness"
        ]
      }
    ],
    highlights: [
      { id: "mental-health", label: "Mental well-being", icon: Brain },
      { id: "resilience", label: "Build resilience", icon: HeartPulse },
      { id: "life-management", label: "Life management", icon: Sparkles }
    ],
    subSections: [],
    image: `${eventRouteImageBase}/MENTAL%20HEALTH%20logo.png`,
    mediaType: "image",
    tone: "forum"
  },
  {
    id: "anniversary-gala-highlights-lucky-draw",
    number: 4,
    title: "Anniversary Gala Highlights & Lucky Draw",
    subtitle: "Grand gala dinner and sponsored lucky draw",
    description:
      "Experience the glamour and excitement of the BTA GLOBALX Anniversary Celebration through an exclusive grand gala dinner and an exciting lucky draw session with exclusive sponsored Products (worth upto USD 10,000). This segment captures memorable moments with distinguished guests, awardees, speakers, and attendees while celebrating achievements, connections, and the spirit of excellence.",
    detailSections: [
      {
        id: "key-highlights",
        title: "Key Highlights",
        items: [
          "Celebration of the BTA GLOBALX 3 Year Anniversary milestone",
          "Grand gala dinner experience with elegant dining and networking",
          "Memorable moments from the evening's celebrations and photo sessions",
          "Exciting lucky draw session with special prizes",
          "Capturing stories, achievements, and unforgettable experiences of the event",
          "Showcasing the spirit of connection, recognition, and celebration"
        ]
      }
    ],
    highlights: [
      { id: "anniversary", label: "3 Year Anniversary", icon: Sparkles },
      { id: "dinner", label: "Grand gala dinner", icon: Gift },
      { id: "lucky-draw", label: "Lucky draw prizes", icon: Trophy }
    ],
    subSections: [],
    image: `${eventRouteImageBase}/lucky%20draw.jpeg`,
    mediaType: "image",
    tone: "gala"
  },
  {
    id: "heritage-fashion-show",
    number: 5,
    title: "Heritage Fashion Show 2026",
    subtitle: "Contemporary Heritage",
    description:
      "The Heritage Fashion Show is structured to tell a story of \"Contemporary Heritage.\" Each segment is designed to highlight how cultural designer attires, luxury goods, and wellness products integrate into a sophisticated lifestyle.",
    detailSections: [
      {
        id: "round-1",
        title: "ROUND-1",
        items: [
          "Global Sophistication",
          "Inner & Outer Radiance",
          "Beautiful Life Naturally",
          "Nature Meets Couture",
          "Sensory Elegance"
        ]
      },
      {
        id: "round-3",
        title: "ROUND-3",
        items: [
          "The interaction of Art & Luxury",
          "Artisanal Heritage",
          "The Power Aesthetic",
          "Cross-cultural harmony"
        ]
      }
    ],
    highlights: [
      { id: "heritage", label: "Contemporary Heritage", icon: Shirt },
      { id: "luxury", label: "Luxury lifestyle", icon: Sparkles },
      { id: "culture", label: "Cross-cultural harmony", icon: Handshake }
    ],
    subSections: [],
    image: `${eventRouteImageBase}/HFS%202026.png`,
    mediaType: "image",
    tone: "runway"
  },
  {
    id: "excellence-award",
    number: 6,
    title: "Excellence Award 2026",
    subtitle: "International recognition initiative by BTA GLOBALx",
    description:
      "The BTA GLOBALx Excellence Awards 2026 is a distinguished international recognition initiative by BTA GLOBALx, created to celebrate individuals and organizations whose dedication, innovation, leadership, and service have made a meaningful impact on their industries, communities, and society. More than an awards program, it is a platform that honors purpose, inspires progress, and amplifies the stories of those who are shaping a better future.",
    detailSections: [
      {
        id: "award-purpose",
        title: "Award Purpose",
        body: [
          "Every achievement has a story - a story of perseverance, resilience, vision, and commitment. Through the BTA GLOBALx Excellence Awards, these stories are brought to the global stage, providing deserving individuals with the recognition they have earned and the opportunity to inspire others across borders. By highlighting real-life journeys of excellence, the awards encourage future leaders, entrepreneurs, professionals, and changemakers to pursue their goals with confidence and purpose.",
          "Recognition is more than receiving a trophy; it is an affirmation of the positive impact that one person or organization can make. It validates years of hard work, dedication, and sacrifice while strengthening credibility, enhancing professional reputation, and opening doors to new opportunities, partnerships, and collaborations. The BTA GLOBALx Excellence Awards aim to ensure that remarkable contributions do not go unnoticed but instead become a source of inspiration for communities and future generations.",
          "Aligned with BTA GLOBALx's vision of fostering global collaboration and empowering individuals to achieve sustainable success, this awards program serves as a bridge that connects outstanding people from diverse industries, cultures, and countries. It promotes the exchange of ideas, celebrates excellence without boundaries, and builds a network of leaders who are committed to creating positive and lasting change.",
          "At its core, the BTA GLOBALx Excellence Awards reflect the belief that recognizing excellence creates a ripple effect. When exceptional individuals are acknowledged, their stories inspire others to dream bigger, lead with integrity, innovate boldly, and contribute meaningfully to society. By celebrating achievement, BTA GLOBALx seeks to cultivate a culture where excellence is valued, leadership is encouraged, and positive impact is multiplied across communities and nations.",
          "The BTA GLOBALx Excellence Awards 2026 is therefore not only a celebration of accomplishments but also a commitment to empowering people, elevating inspiring voices, and creating a global community where excellence is recognized, shared, and passed on to inspire generations to come."
        ]
      }
    ],
    highlights: [
      { id: "recognition", label: "International recognition", icon: Trophy },
      { id: "impact", label: "Meaningful impact", icon: Sparkles },
      { id: "global", label: "Global collaboration", icon: Handshake }
    ],
    subSections: [],
    image: `${eventRouteImageBase}/excellence%20award.jpeg`,
    mediaType: "image",
    tone: "gala"
  },
  {
    id: "bazaar-wellness-fair",
    number: 7,
    title: "Bazaar & Wellness Fair",
    subtitle: "Innovation, wellness, and lifestyle marketplace",
    description:
      "Discover a vibrant marketplace where innovation, wellness, and lifestyle come together. The Bazaar & Wellness Fair showcases a diverse range of products, services, and brands, offering attendees the opportunity to explore health, beauty, nutrition, fashion, artisan goods, and holistic wellness solutions while connecting directly with exhibitors and entrepreneurs.",
    detailSections: [
      {
        id: "key-highlights",
        title: "Key Highlights",
        items: [
          "Exhibition booths featuring wellness, lifestyle, and business brands",
          "Health, beauty, nutrition, and holistic wellness products",
          "Local entrepreneurs, SMEs, and artisan marketplace",
          "Product demonstrations and exclusive promotional offers",
          "Networking opportunities with exhibitors and business owners",
          "Interactive experiences, sampling, and wellness consultations",
          "Supporting innovation, entrepreneurship, and healthy living",
          "A unique shopping and discovery experience for all attendees"
        ]
      }
    ],
    highlights: [
      { id: "marketplace", label: "Wellness marketplace", icon: Store },
      { id: "brands", label: "Lifestyle brands", icon: Sparkles },
      { id: "entrepreneurs", label: "Entrepreneur network", icon: Handshake }
    ],
    subSections: [],
    image: `${eventRouteImageBase}/BAZAAR.png`,
    mediaType: "image",
    tone: "market"
  },
  {
    id: "red-carpet-exclusives",
    number: 8,
    title: "Red Carpet Exclusives",
    subtitle: "Grand arrivals, media interviews, and spotlight moments",
    description:
      "Step into the spotlight as distinguished guests, award nominees, speakers, VIPs, and industry leaders make their grand arrival at the BTA GLOBALX Anniversary Gala Night & Excellence Award 2026. This exclusive red carpet experience captures elegant entrances, professional photography, and engaging media interviews, celebrating the remarkable individuals who make the event truly exceptional.",
    detailSections: [
      {
        id: "key-highlights",
        title: "Key Highlights",
        items: [
          "Grand arrivals of VIPs, dignitaries, speakers, and award nominees",
          "Exclusive media interviews and photo opportunities",
          "Red carpet photography and videography coverage",
          "Guest introductions and spotlight moments",
          "Networking with industry leaders and distinguished attendees",
          "Memorable highlights from the evening's most prestigious arrivals",
          "Capturing the elegance, prestige, and excitement of the celebration"
        ]
      }
    ],
    highlights: [
      { id: "arrivals", label: "Grand arrivals", icon: Camera },
      { id: "interviews", label: "Media interviews", icon: Sparkles },
      { id: "spotlight", label: "Spotlight moments", icon: Trophy }
    ],
    subSections: [],
    image: `${eventRouteImageBase}/redcarpet.png`,
    mediaType: "image",
    tone: "media"
  }
];

export const actPairs: ActPair[] = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7]
];
