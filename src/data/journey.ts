import {
    Calendar,
    CheckCircle,
    FileText,
    Gift,
    Globe2,
    Handshake,
    Images,
    Lightbulb,
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
        id: "loader-rsvp",
        number: 1,
        title: "Loader & RSVP",
        subtitle: "Your Gateway to the Journey",
        description:
            "Begin your experience with a seamless entry. Register your attendance, confirm your participation, and prepare to embark on a transformative event journey.",
        highlights: [
            {
                id: "registration",
                label: "Quick Registration",
                icon: FileText
            },
            {
                id: "confirmation",
                label: "Instant Confirmation",
                icon: CheckCircle
            },
            {
                id: "access",
                label: "Event Access",
                icon: Zap
            }
        ],
        subSections: [
            {
                id: "rsvp-form",
                label: "RSVP Form",
                title: "Secure Your Spot",
                description:
                    "Complete your registration with our streamlined RSVP system. Provide your details and receive instant confirmation.",
                icon: FileText
            },
            {
                id: "welcome",
                label: "Welcome",
                title: "Welcome Message",
                description:
                    "Receive a personalized welcome message and event overview tailored to your registration tier.",
                icon: Sparkles
            }
        ],
        image: sceneAssets.arrival.src,
        mediaType: "image",
        tone: "arrival"
    },
    {
        id: "hero-invitation",
        number: 2,
        title: "Hero Invitation",
        subtitle: "The Grand Welcome",
        description:
            "Experience the grandeur of our event through an immersive hero section. Discover the vision, mission, and transformative impact of BTA GLOBALX Anniversary 2026.",
        highlights: [
            {
                id: "vision",
                label: "Event Vision",
                icon: Lightbulb
            },
            {
                id: "impact",
                label: "Global Impact",
                icon: Globe2
            },
            {
                id: "invitation",
                label: "Personal Invitation",
                icon: Users
            }
        ],
        subSections: [
            {
                id: "event-overview",
                label: "Overview",
                title: "Event Overview",
                description:
                    "Explore the comprehensive vision behind BTA GLOBALX Anniversary 2026 and its commitment to excellence, innovation, and global collaboration.",
                icon: Globe2
            },
            {
                id: "keynote-preview",
                label: "Keynote",
                title: "Keynote Preview",
                description:
                    "Get a glimpse of the thought leadership moments and expert insights that await you at the forum.",
                icon: Mic2
            }
        ],
        image: sceneAssets.arrival.src,
        mediaType: "image",
        tone: "arrival"
    },
    {
        id: "event-map",
        number: 3,
        title: "Event Map",
        subtitle: "Navigate Your Experience",
        description:
            "Explore the event venue with our interactive map. Discover all zones, activities, and key locations to plan your journey through the celebration.",
        highlights: [
            {
                id: "venue-layout",
                label: "Venue Layout",
                icon: MapPin
            },
            {
                id: "activity-zones",
                label: "Activity Zones",
                icon: Zap
            },
            {
                id: "navigation",
                label: "Easy Navigation",
                icon: CheckCircle
            }
        ],
        subSections: [
            {
                id: "interactive-map",
                label: "Map",
                title: "Interactive Venue Map",
                description:
                    "Navigate through the event space with our detailed interactive map showing all key areas, stages, and facilities.",
                icon: MapPin
            },
            {
                id: "schedule-zones",
                label: "Zones",
                title: "Activity Zones",
                description:
                    "Discover the different zones including the forum area, creative market, red carpet runway, and gala hall.",
                icon: Calendar
            }
        ],
        image: sceneAssets.venue.src,
        mediaType: "image",
        tone: "venue"
    },
    {
        id: "forum-lab",
        number: 4,
        title: "Forum Lab",
        subtitle: "Life Management & Mental Well-being",
        description:
            "Engage with thought leaders and experts in our comprehensive forum. Explore life management strategies, mental well-being practices, and transformative insights.",
        highlights: [
            {
                id: "keynote-speakers",
                label: "Keynote Speakers",
                icon: Mic2
            },
            {
                id: "panel-discussion",
                label: "Panel Discussion",
                icon: Users
            },
            {
                id: "insights",
                label: "Practical Insights",
                icon: Lightbulb
            }
        ],
        subSections: [
            {
                id: "speakers",
                label: "Speakers",
                title: "Expert Speakers",
                description:
                    "Hear from Prof. Dr. Mike Chan and distinguished panelists sharing expertise in mental health, life management, and personal development.",
                icon: Mic2
            },
            {
                id: "topics",
                label: "Topics",
                title: "Discussion Topics",
                description:
                    "Explore critical topics including stress management, work-life balance, mindfulness practices, and sustainable living strategies.",
                icon: Lightbulb
            }
        ],
        image: sceneAssets.forum.src,
        mediaType: "image",
        tone: "forum"
    },
    {
        id: "creative-market",
        number: 5,
        title: "Creative Market",
        subtitle: "Bazaar & Wellness Fair",
        description:
            "Immerse yourself in a vibrant marketplace celebrating creativity, wellness, and sustainable entrepreneurship. Discover unique products, art exhibitions, and innovative solutions.",
        highlights: [
            {
                id: "bazaar",
                label: "Premium Bazaar",
                icon: Sparkles
            },
            {
                id: "art-exhibition",
                label: "Art Exhibition",
                icon: Palette
            },
            {
                id: "wellness",
                label: "Wellness Products",
                icon: Gift
            }
        ],
        subSections: [
            {
                id: "vendors",
                label: "Vendors",
                title: "Creative Vendors",
                description:
                    "Meet innovative entrepreneurs showcasing wellness products, sustainable crafts, and creative solutions for modern living.",
                icon: Sparkles
            },
            {
                id: "art-gallery",
                label: "Gallery",
                title: "Sustainable Art Gallery",
                description:
                    "Experience a curated exhibition of sustainable creative art focused on preservation, innovation, and global responsibility.",
                icon: Palette
            }
        ],
        image: sceneAssets.market.src,
        mediaType: "image",
        tone: "market"
    },
    {
        id: "premiere-magazine",
        number: 6,
        title: "Premiere Magazine",
        subtitle: "THE PREMIERE Special Edition",
        description:
            "Witness the unveiling of Tycoon Global Magazine's special edition featuring BTA GLOBALX. Discover strategic alliances, partner spotlights, and the ecosystem of excellence.",
        highlights: [
            {
                id: "magazine-launch",
                label: "Magazine Launch",
                icon: FileText
            },
            {
                id: "strategic-alliance",
                label: "Strategic Alliance",
                icon: Handshake
            },
            {
                id: "partner-showcase",
                label: "Partner Showcase",
                icon: Globe2
            }
        ],
        subSections: [
            {
                id: "magazine-reveal",
                label: "Reveal",
                title: "Magazine Reveal",
                description:
                    "Experience the premiere of THE PREMIERE magazine special edition, showcasing stories of excellence, innovation, and global impact.",
                icon: FileText
            },
            {
                id: "partnerships",
                label: "Partnerships",
                title: "Strategic Partnerships",
                description:
                    "Discover the network of sponsors, media partners, and supporting organizations driving the BTA GLOBALX ecosystem.",
                icon: Handshake
            }
        ],
        image: sceneAssets.media.src,
        mediaType: "image",
        tone: "media"
    },
    {
        id: "red-carpet-runway",
        number: 7,
        title: "Red Carpet Runway",
        subtitle: "Culture, Fashion & Performance",
        description:
            "Step into the spotlight with exclusive red carpet moments, intercultural performances, and a heritage fashion show celebrating Southeast Asian legacy and luxury.",
        highlights: [
            {
                id: "red-carpet",
                label: "Red Carpet",
                icon: Video
            },
            {
                id: "cultural-performance",
                label: "Cultural Performance",
                icon: Music2
            },
            {
                id: "fashion-show",
                label: "Fashion Show",
                icon: Sparkles
            }
        ],
        subSections: [
            {
                id: "interviews",
                label: "Interviews",
                title: "Exclusive Interviews",
                description:
                    "Capture VIP arrival moments, media interviews, and behind-the-scenes glimpses of the red carpet experience.",
                icon: Video
            },
            {
                id: "performances",
                label: "Performances",
                title: "Cultural Performances",
                description:
                    "Experience a tapestry of Southeast Asian culture through traditional music, dance, and ancestral storytelling.",
                icon: Music2
            },
            {
                id: "fashion",
                label: "Fashion",
                title: "Heritage Fashion Show",
                description:
                    "Witness a fusion of legacy and luxury through contemporary heritage runway showcasing traditional and modern designs.",
                icon: Sparkles
            }
        ],
        image: sceneAssets.runway.src,
        mediaType: "image",
        tone: "runway"
    },
    {
        id: "gala-awards",
        number: 8,
        title: "Gala Awards",
        subtitle: "Excellence & Recognition",
        description:
            "Celebrate excellence at our prestigious gala dinner. Network with global leaders, witness award ceremonies, and honor outstanding achievements in various categories.",
        highlights: [
            {
                id: "gala-dinner",
                label: "Gala Dinner",
                icon: Globe2
            },
            {
                id: "awards-ceremony",
                label: "Awards Ceremony",
                icon: Trophy
            },
            {
                id: "networking",
                label: "Global Networking",
                icon: Users
            }
        ],
        subSections: [
            {
                id: "dinner",
                label: "Dinner",
                title: "Premium Gala Dinner",
                description:
                    "Enjoy an exquisite dining experience while networking with international delegates, changemakers, and industry professionals.",
                icon: Globe2
            },
            {
                id: "awards",
                label: "Awards",
                title: "Excellence Awards 2026",
                description:
                    "Recognize lifetime excellence, humanitarian impact, entrepreneurship, women empowerment, and outstanding contributions to society.",
                icon: Trophy
            }
        ],
        image: sceneAssets.gala.src,
        mediaType: "image",
        tone: "gala"
    },
    {
        id: "schedule-access",
        number: 9,
        title: "Schedule & Access",
        subtitle: "Your Event Timeline",
        description:
            "Access your personalized event schedule, registration tier benefits, and exclusive access passes. Plan your journey through the celebration with detailed timing and activity information.",
        highlights: [
            {
                id: "schedule",
                label: "Event Schedule",
                icon: Calendar
            },
            {
                id: "access-pass",
                label: "Access Pass",
                icon: CheckCircle
            },
            {
                id: "tier-benefits",
                label: "Tier Benefits",
                icon: Gift
            }
        ],
        subSections: [
            {
                id: "itinerary",
                label: "Itinerary",
                title: "Detailed Itinerary",
                description:
                    "View the complete event timeline from 8:00 AM to 11:00 PM, including all activities, performances, and ceremonies.",
                icon: Calendar
            },
            {
                id: "passes",
                label: "Passes",
                title: "Access Passes",
                description:
                    "Discover your registration tier benefits including General, Signature, Silver, Gold, and Platinum access levels.",
                icon: CheckCircle
            }
        ],
        image: sceneAssets.access.src,
        mediaType: "image",
        tone: "access"
    },
    {
        id: "gallery-finale",
        number: 10,
        title: "Gallery Finale",
        subtitle: "Memories & Celebration",
        description:
            "Relive the magic through our comprehensive gallery. Explore photos, videos, and highlights from previous events. Participate in the lucky draw and anniversary ceremony.",
        highlights: [
            {
                id: "photo-gallery",
                label: "Photo Gallery",
                icon: Images
            },
            {
                id: "lucky-draw",
                label: "Lucky Draw",
                icon: Gift
            },
            {
                id: "anniversary",
                label: "Anniversary Ceremony",
                icon: Sparkles
            }
        ],
        subSections: [
            {
                id: "gallery",
                label: "Gallery",
                title: "Event Gallery",
                description:
                    "Browse through a curated collection of photos and videos capturing the essence of previous BTA GLOBALX celebrations.",
                icon: Images
            },
            {
                id: "draw",
                label: "Draw",
                title: "Lucky Draw",
                description:
                    "Participate in our exclusive lucky draw featuring sponsored products worth up to USD 10,000.",
                icon: Gift
            },
            {
                id: "closing",
                label: "Closing",
                title: "Anniversary Ceremony",
                description:
                    "Join us for the ceremonial closing, expressing gratitude and celebrating the journey together.",
                icon: Sparkles
            }
        ],
        image: sceneAssets.finale.src,
        mediaType: "image",
        tone: "finale"
    }
];

export const actPairs: ActPair[] = [
    [0, 1], // ACT 1 & ACT 2
    [2, 3], // ACT 3 & ACT 4
    [4, 5], // ACT 5 & ACT 6
    [6, 7], // ACT 7 & ACT 8
    [8, 9] // ACT 9 & ACT 10
];
