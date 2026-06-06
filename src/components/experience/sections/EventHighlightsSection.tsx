import Image from "next/image";
import { highlights } from "@/data";
import { eventHighlightScene, highlightLanes } from "../config/experienceContent";
import { SafeIcon } from "../ui/SafeIcon";

const journeyAnchorByActId: Record<string, string> = {
  forum: "forum",
  "gallery-finale": "gallery-finale",
  premiere: "journey-premiere-magazine"
};

function getHighlightHref(actId: string) {
  return `#${journeyAnchorByActId[actId] ?? `journey-${actId}`}`;
}

export function EventHighlightsSection() {
  return (
    <section className="site-section event-highlights-section">
      <div className="section-inner event-highlights-grid">
        <div className="event-highlights-copy" data-animate="text">
          <p className="eyebrow">Event highlights</p>
          <SafeIcon aria-hidden="true" icon={eventHighlightScene.icon} />
          <h2>{eventHighlightScene.title}</h2>
          <p>{eventHighlightScene.body}</p>
        </div>
        <div className="event-highlights-visual" data-animate="image">
          <Image alt="BTA GlobalX event highlight moment" fill sizes="(max-width: 900px) 100vw, 44vw" src={eventHighlightScene.image} />
        </div>
        <div className="highlight-lane-grid" data-stagger>
          {highlightLanes.map((lane) => {
            const laneHighlights = lane.ids
              .map((id) => highlights.find((highlight) => highlight.id === id))
              .filter(Boolean);

            return (
              <article data-stagger-item key={lane.title}>
                <span>{String(lane.ids.length).padStart(2, "0")} signals</span>
                <h3>{lane.title}</h3>
                <p>{lane.copy}</p>
                <div>
                  {laneHighlights.map((item) => {
                    if (!item) {
                      return null;
                    }
                    const HighlightIcon = item.icon;
                    return (
                      <a href={getHighlightHref(item.actId)} key={item.id}>
                        <SafeIcon aria-hidden="true" icon={HighlightIcon} />
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
