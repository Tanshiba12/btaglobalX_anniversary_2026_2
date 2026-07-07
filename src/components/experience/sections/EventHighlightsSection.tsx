import {
  BadgeCheck,
  Camera,
  Gem,
  Gift,
  Handshake,
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
    icon: Mic2,
    title: "Panel Discussion",
    body: "The Mind & Life Management"
  },
  {
    icon: Camera,
    title: "Red Carpet",
    body: "Exclusive Interviews"
  },
  {
    icon: Sparkles,
    title: "Bazaar",
    body: "Wellness Fair"
  },
  {
    icon: Palette,
    title: "Sustainable Creative",
    body: "Art Exhibition"
  },
  {
    icon: Gift,
    title: "Lucky Draw",
    body: "Sponsored celebration prizes"
  },
  {
    icon: BadgeCheck,
    title: "Anniversary Ceremony",
    body: "Gala Dinner"
  },
  {
    icon: Handshake,
    title: "Unveil Strategic",
    body: "Alliance"
  },
  {
    icon: Music2,
    title: "Intercultural",
    body: "Music & Dance"
  },
  {
    icon: Gem,
    title: "Heritage",
    body: "Fashion Show"
  },
  {
    icon: Trophy,
    title: "Excellence Award",
    body: "2026"
  }
];

export function EventHighlightsSection() {
  return (
    <section className="site-section event-highlights-section">
      <div className="section-inner event-highlights-layout">
        <div className="section-heading is-left" data-animate="text">
          <p>Event Highlights</p>
          <h2>Ten moments shaping the celebration</h2>
          <span>
            From mind and life management to red carpet visibility, wellness discovery,
            strategic alliance, cultural performance, and the Excellence Award stage.
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
          {highlightPlaceholders.map((item) => {
            const Icon = item.icon;
            return (
              <article data-stagger-item key={item.title}>
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
