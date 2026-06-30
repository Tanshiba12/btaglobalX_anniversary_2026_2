import type { RegistrationPackage } from "@/types/content";

const sharedAccess = [
  "Access to Anniversary Ceremony & Gala Dinner",
  "Exclusive networking opportunity with international delegates, leading changemakers, and professionals",
  "Access to Forum, Panel Discussion & Speaker sessions",
  "Access to Bazaar & Wellness Fair",
  "Access to Sustainable Creative Art Exhibition",
  "Access to Heritage Fashion Show 2026",
  "Red Carpet interview bites and media visibility",
  "Lucky Draw eligibility"
];

export const registrationPackages: RegistrationPackage[] = [
  {
    id: "general",
    name: "General Entry Registration",
    tier: "General",
    accent: "Entry",
    summary: "Single entry pass with access to the full event journey.",
    benefits: ["Single entry pass", ...sharedAccess]
  },
  {
    id: "signature",
    name: "The Signature Package",
    tier: "Signature",
    accent: "10 pax",
    summary: "Premium table access for 10 people with networking and ceremony access.",
    benefits: ["Entry pass for 10 people, per table 10 pax", ...sharedAccess]
  },
  {
    id: "silver",
    name: "Excellence Award Silver",
    tier: "Silver",
    accent: "Award",
    summary: "Nominee package with digital promotion and full event access.",
    benefits: [
      "Nominee placement, subject to jury evaluation for winners",
      "Complimentary event entry included",
      "Access to BTA GLOBAL 360 Synergy Package, dedicated digital promotion",
      ...sharedAccess
    ]
  },
  {
    id: "gold",
    name: "Excellence Award Gold",
    tier: "Gold",
    accent: "Elite",
    summary: "Award nominee access with premium partner benefits and media visibility.",
    benefits: [
      "Nominee placement, subject to jury evaluation for winners",
      "Complimentary event entry included",
      "Special 2026 partner benefit for BTA Lifetime Elite Members with ISEIGUR, T&C apply",
      "Upcoming BTA GLOBALx events/programs member privilege for 1 year, T&C apply",
      "Dedicated media profile opportunity for selected nominees, T&C apply",
      "Access to BTA GLOBAL 360 Synergy Package, dedicated digital promotion",
      ...sharedAccess
    ]
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
