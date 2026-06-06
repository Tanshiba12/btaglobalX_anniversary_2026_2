import Image from "next/image";
import { journeyActs } from "@/data/journey";
import { SafeIcon } from "../ui/SafeIcon";

export function EventJourneySection() {
  const leadAct = journeyActs[0];
  const routeActs = journeyActs.slice(1);

  return (
    <section className="event-journey-section" id="event-journey">
      <div className="section-inner event-journey-theatre">
        <div className="event-journey-cinema-intro" data-animate="text">
          <p className="eyebrow">Event Journey</p>
          <h2>Ten scenes. One anniversary night.</h2>
          <span>
            The program moves like a venue path: arrival, forum, wellness market, media reveal,
            runway, gala, awards, and closing memory.
          </span>
        </div>

        <nav className="event-journey-rail" aria-label="Event journey scenes">
          {journeyActs.map((act) => (
            <a href={`#journey-${act.id}`} key={act.id}>
              {String(act.number).padStart(2, "0")}
            </a>
          ))}
        </nav>

        {leadAct && (
          <article className={`event-journey-feature tone-${leadAct.tone ?? "arrival"}`} data-cinema-scene id={`journey-${leadAct.id}`}>
            <div className="event-journey-feature-media" aria-hidden="true">
              <Image alt="" fill sizes="(max-width: 900px) 100vw, 58vw" src={leadAct.image} />
            </div>
            <div className="event-journey-feature-copy">
              <span data-scene-reveal>Act {String(leadAct.number).padStart(2, "0")}</span>
              <h3 data-scene-reveal>{leadAct.title}</h3>
              <p data-scene-reveal>{leadAct.description}</p>
              <SceneTags highlights={leadAct.highlights} />
            </div>
          </article>
        )}

        <div className="event-journey-cinema-stack" aria-label="Program scene route">
          {routeActs.map((act) => (
            <article className={`event-journey-cinema-card tone-${act.tone ?? "arrival"}`} data-cinema-scene id={`journey-${act.id}`} key={act.id}>
              <div className="event-journey-scene-media" aria-hidden="true">
                <Image alt="" fill sizes="(max-width: 900px) 92vw, 26vw" src={act.image} />
              </div>
              <div className="event-journey-scene-copy">
                <span data-scene-reveal>Act {String(act.number).padStart(2, "0")}</span>
                <h3 data-scene-reveal>{act.title}</h3>
                <p data-scene-reveal>{act.description}</p>
                <SceneTags highlights={act.highlights} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SceneTags({ highlights }: { highlights: (typeof journeyActs)[number]["highlights"] }) {
  return (
    <div className="event-journey-scene-tags" data-scene-reveal>
      {highlights.map((highlight) => {
        const Icon = highlight.icon;
        return (
          <span key={highlight.id}>
            <SafeIcon aria-hidden="true" icon={Icon} />
            {highlight.label}
          </span>
        );
      })}
    </div>
  );
}
