import { ArrowRight, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { eventDetails } from "@/data";
import { eventVideoAssets, heroAssets } from "@/data/assets";
import { SafeIcon } from "../ui/SafeIcon";
import { VideoFrame } from "../ui/VideoFrame";

const overviewHighlights = [
  "A full evening celebration at Hotel Sheraton Johor Bahru",
  "Wellness, culture, creative expression, gala dinner, and awards in one route",
  "A clear guest journey for partners, nominees, sponsors, media guests, and delegates"
];

export function EventOverviewVideoSection() {
  return (
    <section className="site-section overview-video-section video-backed-section" id="overview">
      <div className="section-video-bg" aria-hidden="true">
        <video autoPlay loop muted playsInline preload="metadata">
          <source src={heroAssets.backgroundVideo.src} type="video/mp4" />
        </video>
      </div>
      <div className="section-video-shade" aria-hidden="true" />

      <div className="section-inner overview-video-grid">
        <div className="overview-video-copy" data-animate="text">
          <p className="eyebrow">Event Overview</p>
          <h2>BTA GlobalX Anniversary &amp; Excellence Awards 2026</h2>
          <p>
            A premium anniversary celebration designed for people who value meaningful
            connection, cultural warmth, wellness insight, and public recognition. Guests move
            through a polished evening of seminar moments, creative showcases, music, fashion,
            dinner, lucky draw, and the Excellence Award ceremony.
          </p>
          <div className="overview-video-cues" data-stagger>
            <span data-stagger-item>
              <SafeIcon aria-hidden="true" icon={CalendarDays} />
              {eventDetails.date}
            </span>
            <span data-stagger-item>
              <SafeIcon aria-hidden="true" icon={MapPin} />
              {eventDetails.venue}
            </span>
            <span data-stagger-item>
              <SafeIcon aria-hidden="true" icon={Sparkles} />
              MYT {eventDetails.time}
            </span>
          </div>
          <ul className="overview-highlight-list" data-stagger>
            {overviewHighlights.map((item) => (
              <li data-stagger-item key={item}>
                <SafeIcon aria-hidden="true" icon={ArrowRight} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <VideoFrame
          body="The official BTA video URL will be connected here when the source link is provided."
          title="BTA Official Video"
          video={eventVideoAssets.official}
        />
      </div>
    </section>
  );
}
