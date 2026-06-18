import Image from "next/image";
import { journeyActs } from "@/data/journey";
import { SafeIcon } from "../ui/SafeIcon";

export function EventJourneySection() {
  return (
    <section className="event-journey-section" id="event-journey">
      <div className="section-inner event-journey-theatre">
        <div className="event-journey-cinema-intro" data-animate="text">
          <p className="eyebrow">Programme Route</p>
          <h2>From welcome reception to awards night, the day keeps moving.</h2>
          <span>
            A guided celebration at Sheraton Johor Bahru: arrive, learn, discover, step into
            the spotlight, dine together, and honour excellence.
          </span>
        </div>

        <div className="event-journey-stage" data-journey-stage>
          <div className="event-journey-liquid" aria-hidden="true" />
          <div className="event-journey-cinema-stack" aria-label="Program scene route" data-journey-flow>
            {journeyActs.map((scene, index) => (
              <article
                className={`event-journey-cinema-card tone-${scene.tone ?? "arrival"}`}
                data-cinema-scene
                id={`journey-${scene.id}`}
                key={scene.id}
              >
                <div className="event-journey-scene-media" aria-hidden="true">
                  <Image
                    alt=""
                    fill
                    loading={index <= 4 ? "eager" : "lazy"}
                    sizes="(max-width: 900px) 100vw, 62vw"
                    src={scene.image}
                  />
                </div>
                <div className="event-journey-scene-copy">
                  <span data-scene-reveal>{String(scene.number).padStart(2, "0")} / Event Moment</span>
                  <h3 data-scene-reveal>{scene.title}</h3>
                  <strong data-scene-reveal>{scene.subtitle}</strong>
                  <p data-scene-reveal>{scene.description}</p>
                  <SceneTags highlights={scene.highlights} />
                </div>
                <div className="event-journey-subroute" data-scene-reveal>
                  {scene.subSections.map((subSection) => {
                    const Icon = subSection.icon;

                    return (
                      <div key={subSection.id}>
                        <SafeIcon aria-hidden="true" icon={Icon} />
                        <span>{subSection.label}</span>
                        <strong>{subSection.title}</strong>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
          <div className="event-journey-dots" aria-hidden="true">
            {journeyActs.map((scene) => (
              <span key={scene.id}>{String(scene.number).padStart(2, "0")}</span>
            ))}
          </div>
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
