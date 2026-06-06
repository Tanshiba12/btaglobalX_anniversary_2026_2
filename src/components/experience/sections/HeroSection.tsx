import Image from "next/image";
import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { eventDetails } from "@/data";
import { heroAssets, sponsorAssets } from "@/data/assets";
import type { CountdownUnit } from "../hooks/useCountdown";
import { SafeIcon } from "../ui/SafeIcon";
export function HeroSection({
  countdown
}: {
  countdown: CountdownUnit[];
}) {
  const sponsorLoop = [...sponsorAssets, ...sponsorAssets, ...sponsorAssets];

  return (
    <section className="hero-section" id="top">
      <div className="hero-media">
        <video aria-hidden="true" autoPlay loop muted playsInline preload="metadata">
          <source src={heroAssets.backgroundVideo.src} type="video/mp4" />
        </video>
      </div>
      <div className="hero-scrim" />

      <div className="hero-content">
        <div className="hero-countdown-card" aria-label="Countdown to event" data-hero-chip>
          <div className="hero-countdown-topline">
            <span>Opening in</span>
            <SafeIcon aria-hidden="true" icon={ArrowRight} />
          </div>
          <div className="hero-countdown-units">
            {countdown.map((unit, index) => (
              <span key={unit.label}>
                <strong>{unit.value}</strong>
                <em>{unit.label === "Min" ? "Minutes" : unit.label}</em>
                {index < countdown.length - 1 && <b aria-hidden="true">:</b>}
              </span>
            ))}
          </div>
          <p className="hero-countdown-caption">1 August 2026 . Johor Bahru</p>
        </div>

        <div className="hero-event-lockup">
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
          <div className="hero-sponsor-window">
            <div className="hero-sponsor-marquee">
              {sponsorLoop.map((logo, index) => (
                <span className="hero-sponsor-item" key={`${logo.id}-${index}`} tabIndex={0}>
                  <Image alt={`${logo.name} logo`} height={62} src={logo.src} unoptimized width={170} />
                  <span className="hero-sponsor-fallback">{logo.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
