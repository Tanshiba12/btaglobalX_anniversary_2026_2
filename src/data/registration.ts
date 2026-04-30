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
    price: "SGD 88",
    accent: "Entry",
    summary: "Single entry pass with access to the full event journey.",
    benefits: ["Single entry pass", ...sharedAccess]
  },
  {
    id: "signature",
    name: "The Signature Package",
    tier: "Signature",
    price: "SGD 1000",
    accent: "10 pax",
    summary: "Premium table access for 10 people with networking and ceremony access.",
    benefits: ["Entry pass for 10 people, per table 10 pax", ...sharedAccess]
  },
  {
    id: "silver",
    name: "Excellence Award Silver",
    tier: "Silver",
    price: "SGD 388",
    accent: "Award",
    summary: "Nominee package with digital promotion and full event access.",
    benefits: [
      "Nominee placement, subject to jury evaluation for winners",
      "Free entry ticket, worth SGD 88",
      "Access to BTA GLOBAL 360 Synergy Package, dedicated digital promotion",
      ...sharedAccess
    ]
  },
  {
    id: "gold",
    name: "Excellence Award Gold",
    tier: "Gold",
    price: "SGD 1500",
    accent: "Elite",
    summary: "Award nominee access with ISEIGUR offer and Tycoon Global profile benefit.",
    benefits: [
      "Nominee placement, subject to jury evaluation for winners",
      "Free entry ticket, worth SGD 88",
      "Special offer 2026 for BTA Lifetime Elite Members: ISEIGUR handcrafted leather bag worth SGD 1000 and unlimited lifetime exchange facility, T&C apply",
      "Upcoming BTA GLOBALx events/programs entry fee 20% discount for 1 year, BTA elite members only, T&C apply",
      "Dedicated profile in the TYCOON GLOBAL magazine special edition featuring BTA Global, T&C apply",
      "Access to BTA GLOBAL 360 Synergy Package, dedicated digital promotion",
      ...sharedAccess
    ]
  },
  {
    id: "platinum",
    name: "Excellence Award Platinum",
    tier: "Platinum",
    price: "SGD 2500",
    accent: "Media",
    summary: "Highest media package with full-page profile, brand ad, podcast, and promotion.",
    benefits: [
      "Nominee placement, subject to jury evaluation for winners",
      "Free entry ticket, worth SGD 88",
      "Dedicated full-page profile in the TYCOON GLOBAL magazine special edition featuring BTA Global",
      "Full-page commercial brand advertisement in the TYCOON GLOBAL magazine special edition featuring BTA Global",
      "Dedicated podcast and international promotion by TYCOON GLOBAL",
      "Access to BTA GLOBAL 360 Synergy Package, dedicated digital promotion",
      ...sharedAccess
    ]
  }
];
