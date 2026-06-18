import clsx from "clsx";
import type { CSSProperties } from "react";
import { CalendarDays, MapPin, Ticket } from "lucide-react";
import { eventDetails, scrollChapters, speakerScenes, sponsorAssets } from "@/data";
import { SafeIcon } from "../ui/SafeIcon";

type WorldStorySectionProps = {
  activeIndex: number;
  activeSpeaker: number;
  progress: number;
  reducedMotion: boolean;
};

type WorldScrollStyle = CSSProperties & {
  "--world-chapter-count": number;
  "--world-progress": number;
};

type WorldAnchorStyle = CSSProperties & {
  "--anchor-top": string;
};

export function WorldStorySection({ activeIndex, activeSpeaker, progress, reducedMotion }: WorldStorySectionProps) {
  const anchorCount = Math.max(1, scrollChapters.length - 1);

  return (
    <section
      className={clsx("world-scroll", reducedMotion && "is-reduced")}
      data-world-scroll
      style={{ "--world-progress": progress, "--world-chapter-count": scrollChapters.length } as WorldScrollStyle}
    >
      <div className="world-stage">
        <div className="world-stage-shell">
          <div className="world-progress-rail" aria-hidden="true">
            <span style={{ transform: `scaleY(${Math.max(0.03, progress)})` }} />
          </div>
          <div className="world-compass" aria-label="Experience scenes">
            {scrollChapters.map((chapter, index) => (
              <a className={clsx(index === activeIndex && "is-active")} href={`#${chapter.anchorId}`} key={chapter.id}>
                {chapter.number}
              </a>
            ))}
          </div>
          <div className="world-panel-stack">
            {scrollChapters.map((chapter, index) => (
              <article className={clsx("world-panel", index === activeIndex && "is-active")} key={chapter.id}>
                <span className="world-panel-number">{chapter.number}</span>
                <p className="world-panel-meta">{chapter.meta}</p>
                <h2>{chapter.title}</h2>
                <p>{chapter.copy}</p>
                {chapter.id === "journey-tunnel" && <JourneyMiniMap />}
                {chapter.id === "forum-theatre" && <SpeakerFocus activeSpeaker={activeSpeaker} />}
                {chapter.id === "registration-hall" && <RegistrationActions />}
                {chapter.id === "finale-gallery" && <FinaleActions />}
                {chapter.ctaHref && chapter.ctaLabel && (
                  <a className="world-action-link" href={chapter.ctaHref}>
                    {chapter.ctaLabel}
                  </a>
                )}
              </article>
            ))}
          </div>
          <div className="world-status-card" aria-live="polite">
            <span>{scrollChapters[activeIndex]?.number ?? "01"} / {String(scrollChapters.length).padStart(2, "0")}</span>
            <strong>{scrollChapters[activeIndex]?.title}</strong>
          </div>
        </div>
      </div>
      <div className="world-anchor-track" aria-hidden="true">
        {scrollChapters.map((chapter, index) => (
          <div
            className="world-anchor-marker"
            id={chapter.anchorId}
            key={chapter.id}
            style={{ "--anchor-top": `${(index / anchorCount) * 100}%` } as WorldAnchorStyle}
          />
        ))}
      </div>
    </section>
  );
}

function JourneyMiniMap() {
  const stops = ["Arrival", "Forum", "Market", "Media", "Runway", "Gala", "Finale"];

  return (
    <div className="world-mini-map" aria-label="Event journey scene path">
      {stops.map((stop, index) => (
        <span key={stop}>
          <em>{String(index + 1).padStart(2, "0")}</em>
          {stop}
        </span>
      ))}
    </div>
  );
}

function SpeakerFocus({ activeSpeaker }: { activeSpeaker: number }) {
  const speaker = speakerScenes[activeSpeaker] ?? speakerScenes[0];

  return (
    <div className="world-speaker-focus">
      <span>{speaker.number}</span>
      <strong>{speaker.name}</strong>
      <p>{speaker.topic}</p>
      <small>{speaker.source === "official" ? "Official portrait in scene" : `Photo will be added: ${speaker.name}`}</small>
    </div>
  );
}

function RegistrationActions() {
  return (
    <div className="world-action-grid">
      <a href="#timeline">
        <SafeIcon aria-hidden="true" icon={CalendarDays} />
        Full itinerary
      </a>
      <a href={`mailto:${eventDetails.email}`}>
        <SafeIcon aria-hidden="true" icon={Ticket} />
        Register interest
      </a>
    </div>
  );
}

function FinaleActions() {
  return (
    <div className="world-action-grid">
      <a href="#location">
        <SafeIcon aria-hidden="true" icon={MapPin} />
        {eventDetails.venue}
      </a>
      <span>{sponsorAssets.length} official partner logos loaded</span>
    </div>
  );
}
