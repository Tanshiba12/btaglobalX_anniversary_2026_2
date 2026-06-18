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
  "Mastering Life Through Shindo: practical balance, clarity, and purpose for modern leaders.",
  "Ayurveda & Inner Radiance: beauty, wellness, and emotional steadiness as daily practice.",
  "The Science of Youth: cognitive vitality, regenerative insight, and aesthetic longevity.",
  "Breaking the Silence: mental health awareness, honest challenges, and workable solutions.",
  "Mind Over Matter: yoga, meditation, and discipline as tools for mental wellness.",
  "Modern Holistic Living: simplicity, fitness, immunity, and digital detox for sustainable energy.",
  "Integrated Living: traditional wisdom and modern science for a healthier mind and life."
];

const speakerAccents = ["#fdd142", "#8f1d2c", "#0f7c63", "#b9822c", "#f5f0e6", "#7c2336", "#d7b46a"];

const speakerSceneImages = [
  sceneAssets.forum.src,
  sceneAssets.venue.src,
  sceneAssets.gala.src,
  sceneAssets.market.src,
  sceneAssets.venue.src,
  sceneAssets.runway.src,
  sceneAssets.media.src
];

export const speakerScenes = speakers.map((speaker, index) => {
  const hasPortrait = Boolean(speaker.image);

  return {
    ...speaker,
    accent: speakerAccents[index] ?? "#fdd142",
    number: String(index + 1).padStart(2, "0"),
    portraitStatus: hasPortrait ? "official" : "pending",
    portraitNote: hasPortrait ? "Official portrait loaded" : `Photo will be added: ${speaker.name}`,
    sceneImage: speakerSceneImages[index] ?? sceneAssets.venue.src,
    source: hasPortrait ? "official" : "temporary-slot",
    topic: panelTopics[index],
    vibe: [
      "Keynote direction",
      "Wellness science",
      "Global wellbeing",
      "Beauty and balance",
      "Professional growth",
      "Purpose discipline",
      "Emotional health"
    ][index]
  };
});
