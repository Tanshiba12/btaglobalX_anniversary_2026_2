import { Camera, Sparkles, Trophy } from "lucide-react";
import { eventVideoAssets } from "@/data/assets";
import { SafeIcon } from "../ui/SafeIcon";
import { VideoFrame } from "../ui/VideoFrame";

const highlightPlaceholders = [
  {
    icon: Sparkles,
    title: "Festive Programme",
    body: "The full event highlight guideline will be added in the next update."
  },
  {
    icon: Camera,
    title: "Media Moments",
    body: "The teaser area is ready for the official event video URL."
  },
  {
    icon: Trophy,
    title: "Recognition Energy",
    body: "Award, gala, culture, and sponsor highlight copy can be dropped in cleanly."
  }
];

export function EventHighlightsSection() {
  return (
    <section className="site-section event-highlights-section">
      <div className="section-inner event-highlights-layout">
        <div className="section-heading is-left" data-animate="text">
          <p>Event Highlights</p>
          <h2>Highlights guideline placeholder</h2>
          <span>
            This section is prepared for the next update package while the event teaser video
            remains ready for a URL source.
          </span>
        </div>

        <VideoFrame
          body="The event teaser video URL will be connected here when the official source link is provided."
          ctaLabel="Open teaser"
          title="Event Teaser Video"
          video={eventVideoAssets.teaser}
        />

        <div className="highlight-placeholder-grid" data-stagger>
          {highlightPlaceholders.map((item) => {
            const Icon = item.icon;
            return (
              <article data-stagger-item key={item.title}>
                <SafeIcon aria-hidden="true" icon={Icon} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
