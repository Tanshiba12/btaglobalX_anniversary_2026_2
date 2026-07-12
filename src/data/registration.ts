import type { RegistrationPackage } from "@/types/content";

const sharedAccess = [
  "Access to Anniversary Ceremony & Gala Dinner",
  "Exclusive networking opportunity with international delegates, leading changemakers, and professionals",
  "Access to Panel Discussion & Speaker sessions",
  "Access to Bazaar & Wellness Fair",
  "Access to Sustainable Creative Art Exhibition",
  "Access to Heritage Fashion Show 2026",
  "Red Carpet Interview bites and media visibility",
  "Lucky Draw Eligibility"
];

export const registrationPackages: RegistrationPackage[] = [
  {
    id: "general",
    name: "General Entry Registration",
    tier: "General",
    accent: "Entry",
    price: "SGD 100",
    summary: "Single entry pass with access to the full event journey.",
    benefits: ["Single Entry Pass", ...sharedAccess],
    formUrl: "https://forms.gle/drQund5EEWH6qaQXA"
  },
  {
    id: "signature",
    name: "The Signature Package",
    tier: "Signature",
    accent: "10 pax",
    price: "SGD 1000",
    summary: "Premium table access for 10 people with networking and ceremony access.",
    benefits: ["Entry Pass for 10 people, per table 10 pax", ...sharedAccess],
    formUrl: "https://forms.gle/FKGPdZUG36d8joDFA"
  },
  {
    id: "silver",
    name: "Excellence Award Silver",
    tier: "Silver",
    accent: "Award",
    price: "SGD 588",
    summary: "Nominee package with digital promotion and full event access.",
    benefits: [
      "Nominee placement, subject to jury evaluation for winners",
      "Single Entry Pass",
      "Dedicated before and after event digital promotion",
      ...sharedAccess
    ],
    formUrl: "https://forms.gle/jMJEjvnW9hMfL9fG9"
  },
  {
    id: "gold",
    name: "Excellence Award Gold",
    tier: "Gold",
    accent: "Elite",
    price: "SGD 1500",
    summary: "Award nominee access with premium partner benefits and media visibility.",
    benefits: [
      "Nominee placement, subject to jury evaluation for winners",
      "Single Entry Pass",
      "SPECIAL OFFER 2026 for BTA Lifetime Elite Members: International Brand ISEIGUR handcrafted leather bag worth SGD 1000, unlimited lifetime exchange facility, T&C apply",
      "Upcoming BTA GlobalX Events/Programs entry fee 20% discount for 1 year, BTA elite members only, T&C apply",
      "Dedicated before and after event digital promotion",
      ...sharedAccess
    ],
    formUrl: "https://forms.gle/rkN9HtmuQbC87hw68"
  },
  {
    id: "platinum",
    name: "Excellence Award Platinum",
    tier: "Platinum",
    accent: "Media",
    summary: "Highest media package with full-page profile, brand ad, podcast, and promotion.",
    benefits: [
      "Nominee placement, subject to jury evaluation for winners",
      "Complimentary event entry included",
      "Dedicated full-page profile opportunity in the official event media coverage",
      "Commercial brand advertisement opportunity in the official event media coverage",
      "Dedicated podcast and international promotion opportunity",
      "Access to BTA GLOBAL 360 Synergy Package, dedicated digital promotion",
      ...sharedAccess
    ]
  }
];
