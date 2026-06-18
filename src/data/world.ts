import { brandAssets, founderAssets, sceneAssets, sponsorAssets } from "./assets";
import { journeyActs } from "./journey";
import { panelTopics, speakerScenes } from "./speakers";
import type { ScrollChapter, WorldScene } from "@/types/content";

const speakerActorPositions: Array<[number, number, number]> = [
  [-3.2, 0.8, -2.2],
  [-1.9, 0.65, -4.2],
  [-0.4, 0.7, -5.7],
  [1.15, 0.65, -4.8],
  [2.65, 0.65, -3.2],
  [3.65, 0.65, -1.7],
  [1.85, 0.65, 0.2]
];

export const worldScenes: WorldScene[] = [
  {
    accent: "#fdd142",
    anchorId: "world-arrival",
    camera: { position: [0, 2.2, 9.8], target: [0, 0.75, -2.2] },
    copy: "The anniversary opens as a venue path, not a page stack: every scroll movement shifts the lights, the stage, and the next thing the guest discovers.",
    environment: "arrival",
    hotspots: [
      { label: "Arrival", position: [-2.8, 0.12, -1.3] },
      { label: "Forum", position: [-0.75, 0.12, -3.2] },
      { label: "Gala", position: [2.4, 0.12, -4.6] }
    ],
    id: "arrival-world",
    image: sceneAssets.arrival.src,
    kicker: "Arrival World",
    title: "A living anniversary stage"
  },
  {
    accent: "#0f7c63",
    anchorId: "world-founder",
    actors: [
      {
        id: "founder-portrait",
        image: founderAssets.sangeetaBiswas.src,
        label: "H.E. Amb. Dr. Sangeeta Biswas",
        position: [-2.65, 1.05, -2.8],
        role: "founder"
      }
    ],
    camera: { position: [-5.4, 2.6, 5.8], target: [-1.6, 1.05, -2.6] },
    copy: "The founder message arrives like a warm stage address, bringing the portrait, purpose, and invitation closer to the audience.",
    environment: "founder",
    id: "founder-chamber",
    image: founderAssets.sangeetaBiswas.src,
    kicker: "Founder Chamber",
    title: "Legacy begins as a voice"
  },
  {
    accent: "#7c1428",
    anchorId: "world-journey",
    actors: sponsorAssets.slice(0, 8).map((sponsor, index) => ({
      id: `sponsor-${sponsor.id}`,
      image: sponsor.src,
      label: sponsor.name,
      position: [index % 2 === 0 ? -3.8 : 3.8, 1.22, -2.4 - index * 0.72],
      role: "sponsor" as const
    })),
    camera: { position: [-6.2, 2.1, 3.5], target: [2.1, 0.72, -5.8] },
    copy: "The camera arcs through sponsor logos, forum cues, market lights, media moments, runway lines, and the gala hall instead of dropping down a ladder of cards.",
    environment: "journey",
    hotspots: journeyActs.slice(2, 8).map((act, index) => ({
      label: act.title,
      position: [-2.8 + index * 1.1, 0.12, -3 - index * 0.55]
    })),
    id: "journey-tunnel",
    image: sceneAssets.runway.src,
    kicker: "Event Journey",
    title: "Move through the venue"
  },
  {
    accent: "#0f7c63",
    anchorId: "world-forum",
    actors: speakerScenes.map((speaker, index) => ({
      id: `speaker-${speaker.name.toLowerCase().replaceAll(" ", "-")}`,
      image: speaker.image,
      label: speaker.name,
      position: speakerActorPositions[index],
      role: "speaker" as const
    })),
    camera: { position: [5.2, 2.45, 4.4], target: [0.45, 0.9, -3.2] },
    copy: "Seven speakers resolve one by one inside the same theatre space while the background color, quote rhythm, and portrait depth shift with the topic.",
    environment: "forum",
    id: "forum-theatre",
    image: sceneAssets.forum.src,
    kicker: "Speaker Board",
    title: "Seven voices, one moving forum"
  },
  {
    accent: "#c69b2a",
    anchorId: "world-timeline",
    camera: { position: [5.7, 2.0, -0.8], target: [-2.6, 0.7, -5.2] },
    copy: "The day schedule becomes a glowing floor path with stops for forum, bazaar, media reveal, cultural stage, gala dinner, awards, and closing photography.",
    environment: "map",
    hotspots: journeyActs.slice(3).map((act, index) => ({
      label: act.title,
      position: [-3.6 + index * 0.9, 0.1, -2.4 - Math.sin(index) * 0.8]
    })),
    id: "timeline-map",
    image: sceneAssets.venue.src,
    kicker: "Timeline Map",
    title: "The night becomes a route"
  },
  {
    accent: "#fdd142",
    anchorId: "world-register",
    camera: { position: [0.8, 2.8, -7.4], target: [0.2, 0.72, -1.2] },
    copy: "Registration packages sit inside the awards hall as access passes, not detached pricing blocks. The user can still jump straight to contact and registration actions.",
    environment: "gala",
    id: "registration-hall",
    image: sceneAssets.gala.src,
    kicker: "Registration",
    title: "Choose your access pass"
  },
  {
    accent: "#7c1428",
    anchorId: "world-finale",
    camera: { position: [-3.2, 2.4, -6.4], target: [2.4, 0.85, -2.2] },
    copy: "Awards, gallery, venue, partners, and FAQ close the experience with less clutter and a stronger final memory.",
    environment: "finale",
    id: "finale-gallery",
    image: sceneAssets.finale.src,
    kicker: "Finale",
    title: "Leave through the gala lights"
  }
];

export const scrollChapters: ScrollChapter[] = [
  {
    anchorId: worldScenes[0].anchorId,
    copy: worldScenes[0].copy,
    id: worldScenes[0].id,
    meta: "Environment 01 / Arrival map",
    number: "01",
    title: worldScenes[0].title
  },
  {
    anchorId: worldScenes[1].anchorId,
    copy: worldScenes[1].copy,
    id: worldScenes[1].id,
    meta: "Environment 02 / Founder message",
    number: "02",
    title: worldScenes[1].title
  },
  {
    anchorId: worldScenes[2].anchorId,
    copy: worldScenes[2].copy,
    id: worldScenes[2].id,
    meta: "Environment 03 / Venue arc",
    number: "03",
    title: worldScenes[2].title
  },
  {
    anchorId: worldScenes[3].anchorId,
    copy: `${worldScenes[3].copy} Current lead topic: ${panelTopics[0]}`,
    id: worldScenes[3].id,
    meta: "Environment 04 / Speaker theatre",
    number: "04",
    title: worldScenes[3].title
  },
  {
    anchorId: worldScenes[4].anchorId,
    copy: worldScenes[4].copy,
    id: worldScenes[4].id,
    meta: "Environment 05 / Program path",
    number: "05",
    title: worldScenes[4].title
  },
  {
    anchorId: worldScenes[5].anchorId,
    copy: worldScenes[5].copy,
    ctaHref: `mailto:btaglobalxevents2026@gmail.com`,
    ctaLabel: "Request registration",
    id: worldScenes[5].id,
    meta: "Environment 06 / Access passes",
    number: "06",
    title: worldScenes[5].title
  },
  {
    anchorId: worldScenes[6].anchorId,
    copy: worldScenes[6].copy,
    ctaHref: "#location",
    ctaLabel: "View venue",
    id: worldScenes[6].id,
    meta: "Environment 07 / Closing memory",
    number: "07",
    title: worldScenes[6].title
  }
];

export const worldSceneCount = worldScenes.length;
