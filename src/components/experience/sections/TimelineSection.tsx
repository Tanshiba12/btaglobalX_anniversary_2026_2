import clsx from "clsx";
import { eventDetails } from "@/data";
import { timelineBeats } from "../config/experienceContent";
export function TimelineSection({ activeIndex }: { activeIndex: number }) {
  const activeBeat = timelineBeats[activeIndex] ?? timelineBeats[0];

  return (
    <section className="site-section timeline-section" id="timeline">
      <div className="section-inner timeline-pin">
        <div className="timeline-header" data-animate="text">
          <div className="section-heading is-left">
            <p>Event timeline</p>
            <h2>Event Day Timeline</h2>
            <span>{eventDetails.time}</span>
          </div>
          <div className="timeline-current" aria-live="polite">
            <span>Current segment</span>
            <strong>{activeBeat.time}</strong>
            <p>{activeBeat.scene}</p>
          </div>
        </div>
        <div className="timeline-progress" aria-hidden="true">
          <span className="timeline-progress-fill" />
        </div>
        <div className="timeline-viewport" aria-label="Event day timeline slides">
          <div className="timeline-track">
            {timelineBeats.map((beat, index) => (
              <article className={clsx("timeline-segment", activeIndex === index && "is-active")} key={beat.time}>
                <div className="timeline-marker">
                  <span>{beat.label}</span>
                </div>
                <div className="timeline-card">
                  <p>{beat.time}</p>
                  <h3>{beat.title}</h3>
                  <strong>{beat.scene}</strong>
                  <ul>
                    {beat.activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
