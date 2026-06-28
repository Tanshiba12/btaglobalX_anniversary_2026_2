import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
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
      <div className="hero-star-field hero-star-field-one" aria-hidden="true" />
      <div className="hero-star-field hero-star-field-two" aria-hidden="true" />
      <div className="hero-star-stream" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-event-lockup">
          <div className="hero-brand-logo">
            <Image
              alt="BTA GlobalX"
              height={112}
              src={brandAssets.logo.src}
              unoptimized
              width={112}
            />
          </div>
          <p className="hero-presents" data-hero-chip>
            Presents
          </p>
          <h1 data-hero-title>
            <span className="hero-title-line hero-title-main">Anniversary Gala Night</span>
            <span className="hero-title-line hero-title-awards">Excellence Award 2026</span>
          </h1>
          <p className="hero-tagline" data-hero-chip>
            Celebrating impact . honoring excellence . inspiring change
          </p>
        </div>

        <div className="hero-countdown-card" aria-label="Countdown to event" data-hero-chip>
          <div className="hero-countdown-topline">
            <strong>Opening in</strong>
            <SafeIcon aria-hidden="true" icon={ArrowUpRight} />
          </div>
          <div className="hero-countdown-units">
            {countdown.map((unit, index) => (
              <span key={unit.label} style={{ "--unit-index": index } as CSSProperties}>
                <strong>{unit.value}</strong>
                <em>{unit.label === "Min" ? "minutes" : unit.label.toLowerCase()}</em>
              </span>
            ))}
          </div>
          <p className="hero-countdown-place">
            <span>{eventDetails.date}</span>
            <span>Johor Bahru</span>
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
                  <Image
                    alt={`${logo.name} logo`}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    height={86}
                    loading={index < 3 ? "eager" : "lazy"}
                    src={logo.src}
                    unoptimized
                    width={220}
                  />
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
