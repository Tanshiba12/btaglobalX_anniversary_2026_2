import Image from "next/image";
import { CalendarCheck2, Clapperboard, Gem, MapPinned } from "lucide-react";
import { brandAssets } from "@/data/assets";
import { overviewParagraphs } from "../config/experienceContent";
import { SafeIcon } from "../ui/SafeIcon";

export function OverviewSection() {
  const routeMoments = [
    {
      body: "Registration, welcome photography, and clear guest direction set the pace from the first arrival.",
      icon: CalendarCheck2,
      number: "01",
      title: "Welcome"
    },
    {
      body: "Forum voices, wellness brands, creative art, and media moments make the afternoon useful and memorable.",
      icon: Clapperboard,
      number: "02",
      title: "Experience"
    },
    {
      body: "Dinner, red carpet energy, awards recognition, and closing photographs give the night its emotional finish.",
      icon: Gem,
      number: "03",
      title: "Honour"
    }
  ];

  return (
    <section className="site-section overview-section" id="overview">
      <div className="section-inner overview-grid">
        <div className="section-heading is-left" data-animate="text">
          <p>Why this day matters</p>
          <h2>A full-day celebration at Sheraton Johor Bahru</h2>
        </div>
        <div className="overview-copy" data-stagger>
          {overviewParagraphs.map((paragraph) => (
            <p data-stagger-item key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="overview-stage" data-animate="image" aria-label="Event experience path">
          <Image
            alt={brandAssets.venue.alt}
            fill
            sizes="(max-width: 900px) 92vw, 42vw"
            src={brandAssets.venue.src}
          />
          <div className="overview-venue-marker">
            <SafeIcon aria-hidden="true" icon={MapPinned} />
            <span>Sheraton Johor Bahru</span>
            <strong>1 August 2026</strong>
          </div>
          <div className="overview-route" data-stagger>
            {routeMoments.map((moment) => {
              const Icon = moment.icon;

              return (
                <article key={moment.title} data-stagger-item>
                  <span>{moment.number}</span>
                  <SafeIcon aria-hidden="true" icon={Icon} />
                  <strong>{moment.title}</strong>
                  <p>{moment.body}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="overview-promise" data-animate="card">
          <span>Designed for guests, partners, and nominees</span>
          <p>
            The website should feel like the event itself: clear, warm, premium, easy to enter,
            and alive with movement from the first screen onward.
          </p>
        </div>
      </div>
    </section>
  );
}
