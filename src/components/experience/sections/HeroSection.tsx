import type { CSSProperties } from "react";
import Image from "next/image";
import { CalendarDays, Clock3, MapPin, MousePointer2, Sparkles } from "lucide-react";
import { eventDetails } from "@/data";
import { brandAssets, heroAssets, sponsorAssets } from "@/data/assets";
import type { CountdownUnit } from "../hooks/useCountdown";
import { SafeIcon } from "../ui/SafeIcon";
export function HeroSection({
  countdown
}: {
  countdown: CountdownUnit[];
}) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-media">
        <video aria-hidden="true" autoPlay loop muted playsInline preload="metadata">
          <source src={heroAssets.backgroundVideo.src} type="video/mp4" />
        </video>
        <Image
          alt=""
          className="hero-venue-image"
          fill
          priority
          sizes="100vw"
          src={brandAssets.venue.src}
        />
      </div>
      <div className="hero-scrim" />
      <div className="hero-light-beam" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-event-lockup">
          <p className="hero-presents" data-hero-chip>
            Presents
          </p>
          <h1 data-hero-title>
            <span className="hero-title-line hero-title-main">Anniversary Gala Night</span>
            <span className="hero-title-line hero-title-awards">Excellence Award 2026</span>
          </h1>
          <p className="hero-tagline" data-hero-chip>
            A joyful evening of wellness, culture, partnership, and recognition at Sheraton Johor Bahru.
          </p>
        </div>

        <div className="hero-countdown-card" aria-label="Countdown to event" data-hero-chip>
          <div className="hero-timepiece" aria-hidden="true">
            <span className="hero-timepiece-ring hero-timepiece-ring-one" />
            <span className="hero-timepiece-ring hero-timepiece-ring-two" />
            <span className="hero-timepiece-ring hero-timepiece-ring-three" />
            <span className="hero-timepiece-hand" />
            <span className="hero-timepiece-core">
              <SafeIcon aria-hidden="true" icon={Sparkles} />
              Live countdown
            </span>
          </div>
          <div className="hero-countdown-units">
            {countdown.map((unit, index) => (
              <span
                key={unit.label}
                style={{ "--unit-index": index } as CSSProperties}
              >
                <strong>{unit.value}</strong>
                <em>{unit.label === "Min" ? "Minutes" : unit.label}</em>
              </span>
            ))}
          </div>
          <p className="hero-countdown-caption">
            <SafeIcon aria-hidden="true" icon={MousePointer2} />
            Touch the timer. The celebration is getting closer.
          </p>
        </div>

        <div className="hero-event-meta" data-hero-chip>
          <div className="hero-meta-row hero-meta-primary">
            <span>
              <SafeIcon aria-hidden="true" icon={CalendarDays} />
              Saturday, {eventDetails.date}
            </span>
            <span>
              <SafeIcon aria-hidden="true" icon={Clock3} />
              MYT {eventDetails.time}
            </span>
          </div>
          <a className="hero-meta-location" href="#location">
            <SafeIcon aria-hidden="true" icon={MapPin} />
            {eventDetails.venue}
          </a>
        </div>

        <div className="hero-sponsor-strip" aria-label="Event sponsors and partners" data-hero-chip>
          <span className="hero-sponsor-label">Our Event Sponsors &amp; Partners</span>
          <div className="hero-sponsor-orbit">
            <div className="hero-sponsor-wheel">
              {sponsorAssets.map((logo, index) => (
                <span
                  className="hero-sponsor-item"
                  key={logo.id}
                  style={{ "--sponsor-index": index } as CSSProperties}
                  tabIndex={0}
                >
                  <Image alt={`${logo.name} logo`} height={86} priority src={logo.src} unoptimized width={220} />
                  <span className="hero-sponsor-fallback">{logo.name}</span>
                </span>
              ))}
            </div>
            <span className="hero-sponsor-orbit-core">8 partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}
