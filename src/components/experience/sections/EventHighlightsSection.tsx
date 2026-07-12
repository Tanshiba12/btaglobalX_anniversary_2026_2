import {
  BadgeCheck,
  Camera,
  Gem,
  Gift,
  Mic2,
  Music2,
  Palette,
  Sparkles,
  Trophy
} from "lucide-react";
import { eventVideoAssets } from "@/data/assets";
import { SafeIcon } from "../ui/SafeIcon";
import { VideoFrame } from "../ui/VideoFrame";

const highlightPlaceholders = [
  {
    icon: Camera,
    title: "Red Carpet & Exclusive Interviews",
    body: "Opening arrivals and media moments"
  },
  {
    icon: Sparkles,
    title: "Bazaar & Wellness Fair",
    body: "Wellness discoveries and connections"
  },
  {
    icon: Palette,
    title: "Sustainable Creative Art Exhibition",
    body: "Ideas, artistry, and sustainable expression"
  },
  {
    icon: Mic2,
    title: "Mental Health & Life Management Seminar 2026",
    body: "Panel discussion: The Mind & Life Management"
  },
  {
    icon: BadgeCheck,
    title: "Anniversary Ceremony & Gala Dinner",
    body: "An evening of celebration and hospitality"
  },
  {
    icon: Gift,
    title: "Lucky Draw",
    body: "Celebration prizes and surprises"
  },
  {
    icon: Music2,
    title: "Intercultural Music & Dance",
    body: "A shared rhythm across cultures"
  },
  {
    icon: Gem,
    title: "Heritage Fashion Show 2026",
    body: "A contemporary presentation of heritage"
  },
  {
    icon: Trophy,
    title: "Excellence Award 2026",
    body: "Recognising outstanding achievement"
  }
];

export function EventHighlightsSection() {
  return (
    <section className="site-section event-highlights-section">
      <div className="section-inner event-highlights-layout">
        <div className="section-heading is-left" data-animate="text">
          <p>Event Highlights</p>
          <h2>Nine moments shaping the celebration</h2>
          <span>
            From red carpet visibility and wellness discovery to seminar insight, gala hospitality,
            cultural performance, heritage fashion, and the Excellence Award stage.
          </span>
        </div>

        <VideoFrame
          body="The event teaser video URL will be connected here when the official source link is provided."
          ctaLabel="Open teaser"
          title="Event Teaser Video"
          variant="bare"
          video={eventVideoAssets.teaser}
        />

        <div className="highlight-placeholder-grid" data-stagger>
          {highlightPlaceholders.map((item, index) => {
            const Icon = item.icon;
            return (
              <article data-stagger-item key={item.title}>
                <span className="highlight-sequence" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <SafeIcon aria-hidden="true" icon={Icon} />
                <p>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
