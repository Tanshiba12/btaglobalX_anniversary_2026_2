import Image from "next/image";
import { journeyActs } from "@/data/journey";
import { SafeIcon } from "../ui/SafeIcon";

export function EventJourneySection() {
  return (
    <section className="site-section event-journey-section" id="event-journey">
      <div className="section-inner event-route-layout">
        <div className="section-heading is-left" data-animate="text">
          <p>Event Route</p>
          <h2>Six experiences shaping the celebration</h2>
          <span>
            A simple path through culture, creativity, wellbeing, gala hospitality, heritage
            fashion, and public recognition.
          </span>
        </div>

        <div className="event-route-grid" data-stagger>
          {journeyActs.map((item) => {
            const Icon = item.highlights[0]?.icon;
            return (
              <article className={`event-route-card tone-${item.tone ?? "gala"}`} data-stagger-item key={item.id}>
                <div className="event-route-media">
                  <Image alt="" fill sizes="(max-width: 900px) 92vw, 28vw" src={item.image} />
                  <span>{String(item.number).padStart(2, "0")}</span>
                </div>
                <div className="event-route-copy">
                  {Icon ? <SafeIcon aria-hidden="true" icon={Icon} /> : null}
                  <h3>{item.title}</h3>
                  <strong>{item.subtitle}</strong>
                  <p>{item.description}</p>
                  <ul>
                    {item.highlights.map((highlight) => {
                      const HighlightIcon = highlight.icon;
                      return (
                        <li key={highlight.id}>
                          <SafeIcon aria-hidden="true" icon={HighlightIcon} />
                          {highlight.label}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
