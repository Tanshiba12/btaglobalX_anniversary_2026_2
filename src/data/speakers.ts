import type { Speaker } from "@/types/content";
import { sceneAssets, speakerAssets } from "./assets";

export const speakers: Speaker[] = [
  {
    name: "Prof. Dr. Mike Chan",
    role: "Keynote Speaker / Panel Discussion Moderator",
    focus: "Panel discussion leadership, keynote direction, and holistic life management framing.",
    image: speakerAssets.mikeChan.src,
    imageAlt: speakerAssets.mikeChan.alt
  },
  {
    name: "Dr. Way Sun",
    role: "Panelist",
    focus: "Wellness, science, and mind-life management perspective.",
    image: speakerAssets.waySun.src,
    imageAlt: speakerAssets.waySun.alt
  },
  {
    name: "Dr. Sangeeta Biswas",
    role: "Panelist",
    focus: "Global leadership and holistic wellbeing perspective.",
    image: speakerAssets.sangeetaBiswas.src,
    imageAlt: speakerAssets.sangeetaBiswas.alt
  },
  {
    name: "Amelia Saleha",
    role: "Panelist",
    focus: "Beauty, wellness, emotional balance, and modern lifestyle insight."
  },
  {
    name: "Dato Sri Dr. Fams",
    role: "Panelist",
    focus: "Professional development and cross-sector contribution."
  },
  {
    name: "Rendi Tan Ravi",
    role: "Panelist",
    focus: "Purpose, discipline, and personal balance."
  },
  {
    name: "Dr. Elle Quan",
    role: "Panelist",
    focus: "Wellbeing, emotional health, and sustainable personal growth.",
    image: speakerAssets.elleQuan.src,
    imageAlt: speakerAssets.elleQuan.alt
  }
];

export const panelTopics = [
  "Mastering Life Through Shindo: a holistic approach to personal balance and purpose.",
  "Ayurveda & Inner Radiance: beauty, wellness, and emotional balance.",
  "The Science of Youth: stem cells for cognitive vitality and aesthetic longevity.",
  "Breaking the Silence: mental health awareness, challenges, and solutions.",
  "Mind Over Matter: yoga and meditation in mental wellness.",
  "Embracing Holistic Wellness in Modern Lifestyle: self-discovery, simplicity, sustainable well-being, fitness, immunity, and digital detox.",
  "Integrated Living: traditional wisdom and modern science for a healthier mind and life."
];

export const speakerScenes = speakers.map((speaker, index) => ({
  ...speaker,
  accent: ["#fdd142", "#46d8ff", "#ff4ea3", "#f6d7a7", "#dce9f6", "#b7f2d0", "#fdd142"][index],
  number: String(index + 1).padStart(2, "0"),
  sceneImage: [
    sceneAssets.forum.src,
    sceneAssets.access.src,
    sceneAssets.gala.src,
    sceneAssets.market.src,
    sceneAssets.venue.src,
    sceneAssets.runway.src,
    sceneAssets.finale.src
  ][index],
  source: speaker.image ? "official" : "temporary-slot",
  topic: panelTopics[index]
}));
