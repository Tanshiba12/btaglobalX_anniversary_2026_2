import Image from "next/image";
import { journeyActs } from "@/data/journey";
import { heroAssets } from "@/data/assets";
import { SafeIcon } from "../ui/SafeIcon";
import { DeferredBackgroundVideo } from "../ui/DeferredBackgroundVideo";

export function EventJourneySection() {
  return (
    <section className="site-section event-journey-section" id="event-journey">
      <DeferredBackgroundVideo src={heroAssets.backgroundVideo.src} />
      <div className="section-inner event-route-layout">
        <div className="section-heading is-left" data-animate="text">
          <p>Event Route</p>
          <h2>Eight experiences shaping the celebration</h2>
          <span>
            A polished route through culture, creativity, wellbeing, gala hospitality, heritage
            fashion, awards, marketplace discovery, and red carpet visibility.
          </span>
        </div>

        <div className="event-route-grid" data-stagger>
          {journeyActs.map((item) => {
            const Icon = item.highlights[0]?.icon;
            return (
              <article className={`event-route-card tone-${item.tone ?? "gala"}`} data-stagger-item key={item.id}>
                <div className="event-route-media">
                  <Image
                    alt={`${item.title} logo`}
                    fill
                    sizes="(max-width: 720px) 88vw, (max-width: 1100px) 42vw, 22vw"
                    src={item.image}
                  />
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
                  {item.detailSections?.length ? (
                    <div className="event-route-details">
                      {item.detailSections.map((section) => (
                        <details key={section.id}>
                          <summary>
                            <span>{section.title}</span>
                            <small>View details</small>
                          </summary>
                          {section.body?.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                          {section.items?.length ? (
                            <ul>
                              {section.items.map((detail) => (
                                <li key={detail}>{detail}</li>
                              ))}
                            </ul>
                          ) : null}
                        </details>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
