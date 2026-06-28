import { journeyActs } from "./journey";
import type { ScrollChapter, WorldScene } from "@/types/content";

export const worldScenes: WorldScene[] = [
  {
    accent: "#fdd142",
    anchorId: "world-arrival",
    camera: { position: [0, 2.2, 9.8], target: [0, 0.75, -2.2] },
    copy: "Guests arrive to a guided anniversary world: reception lights, sponsor presence, and the first sense that the evening has been carefully staged.",
    environment: "arrival",
    hotspots: [
      { label: "Arrival", position: [-2.8, 0.12, -1.3] },
      { label: "Forum", position: [-0.75, 0.12, -3.2] },
      { label: "Gala", position: [2.4, 0.12, -4.6] }
    ],
    id: "arrival-world",
    kicker: "Arrival",
    title: "Step into the gala atmosphere"
  },
  {
    accent: "#0f7c63",
    anchorId: "world-founder",
    camera: { position: [-5.4, 2.6, 5.8], target: [-1.6, 1.05, -2.6] },
    copy: "The founder's welcome brings the purpose of the anniversary forward: recognition, connection, and a celebration shaped by real contribution.",
    environment: "founder",
    id: "founder-chamber",
    kicker: "Founder Welcome",
    title: "A message with meaning"
  },
  {
    accent: "#7c1428",
    anchorId: "world-journey",
    camera: { position: [-6.2, 2.1, 3.5], target: [2.1, 0.72, -5.8] },
    copy: "The programme opens as a walk through the venue: forum cues, wellness moments, media lights, runway energy, and the awards hall pulling guests forward.",
    environment: "journey",
    hotspots: journeyActs.slice(2, 8).map((act, index) => ({
      label: act.title,
      position: [-2.8 + index * 1.1, 0.12, -3 - index * 0.55]
    })),
    id: "journey-tunnel",
    kicker: "Event Journey",
    title: "Follow the anniversary route"
  },
  {
    accent: "#0f7c63",
    anchorId: "world-forum",
    camera: { position: [5.2, 2.45, 4.4], target: [0.45, 0.9, -3.2] },
    copy: "The forum scene shifts into a focused theatre: lights narrow, the floor path slows, and the programme moves into its most reflective moment.",
    environment: "forum",
    id: "forum-theatre",
    kicker: "Forum Spotlight",
    title: "The forum takes focus"
  },
  {
    accent: "#c69b2a",
    anchorId: "world-timeline",
    camera: { position: [5.7, 2.0, -0.8], target: [-2.6, 0.7, -5.2] },
    copy: "The day flows from welcome and forum into wellness, media, red carpet, gala dinner, awards, and the final memories guests carry home.",
    environment: "map",
    hotspots: journeyActs.slice(3).map((act, index) => ({
      label: act.title,
      position: [-3.6 + index * 0.9, 0.1, -2.4 - Math.sin(index) * 0.8]
    })),
    id: "timeline-map",
    kicker: "Programme Flow",
    title: "A celebration with rhythm"
  },
  {
    accent: "#fdd142",
    anchorId: "world-register",
    camera: { position: [0.8, 2.8, -7.4], target: [0.2, 0.72, -1.2] },
    copy: "Registration is presented as a clear guest pathway, helping attendees choose their access and step into the right part of the anniversary experience.",
    environment: "gala",
    id: "registration-hall",
    kicker: "Guest Access",
    title: "Choose your place at the gala"
  },
  {
    accent: "#7c1428",
    anchorId: "world-finale",
    camera: { position: [-3.2, 2.4, -6.4], target: [2.4, 0.85, -2.2] },
    copy: "The closing scene gathers the awards, partner presence, venue details, and guest memories into one polished final impression.",
    environment: "finale",
    id: "finale-gallery",
    kicker: "Finale",
    title: "Carry the evening forward"
  }
];

export const scrollChapters: ScrollChapter[] = [
  {
    anchorId: worldScenes[0].anchorId,
    copy: worldScenes[0].copy,
    id: worldScenes[0].id,
    meta: "Scene 01 / Arrival",
    number: "01",
    title: worldScenes[0].title
  },
  {
    anchorId: worldScenes[1].anchorId,
    copy: worldScenes[1].copy,
    id: worldScenes[1].id,
    meta: "Scene 02 / Founder welcome",
    number: "02",
    title: worldScenes[1].title
  },
  {
    anchorId: worldScenes[2].anchorId,
    copy: worldScenes[2].copy,
    id: worldScenes[2].id,
    meta: "Scene 03 / Guided programme",
    number: "03",
    title: worldScenes[2].title
  },
  {
    anchorId: worldScenes[3].anchorId,
    copy: worldScenes[3].copy,
    id: worldScenes[3].id,
    meta: "Scene 04 / Forum spotlight",
    number: "04",
    title: worldScenes[3].title
  },
  {
    anchorId: worldScenes[4].anchorId,
    copy: worldScenes[4].copy,
    id: worldScenes[4].id,
    meta: "Scene 05 / Programme rhythm",
    number: "05",
    title: worldScenes[4].title
  },
  {
    anchorId: worldScenes[5].anchorId,
    copy: worldScenes[5].copy,
    id: worldScenes[5].id,
    meta: "Scene 06 / Guest access",
    number: "06",
    title: worldScenes[5].title
  },
  {
    anchorId: worldScenes[6].anchorId,
    copy: worldScenes[6].copy,
    id: worldScenes[6].id,
    meta: "Scene 07 / Closing memory",
    number: "07",
    title: worldScenes[6].title
  }
];

export const worldSceneCount = worldScenes.length;
