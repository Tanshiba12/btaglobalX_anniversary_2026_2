import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { eventDetails } from "@/data";
import { brandAssets } from "@/data/assets";
import { SafeIcon } from "../ui/SafeIcon";
export function LocationSection() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eventDetails.venue)}`;

  return (
    <section className="site-section location-section" id="location">
      <div className="section-inner location-card" data-animate="card">
        <div className="location-copy">
          <p className="eyebrow">Location</p>
          <SafeIcon aria-hidden="true" icon={MapPin} />
          <h2>{eventDetails.date}</h2>
          <span>{eventDetails.venue}</span>
          <a className="light-pill" href={mapUrl} rel="noreferrer" target="_blank">
            Open map
            <SafeIcon aria-hidden="true" icon={ArrowRight} />
          </a>
        </div>
        <div className="location-image">
          <Image alt={brandAssets.venue.alt} fill sizes="(max-width: 900px) 100vw, 50vw" src={brandAssets.venue.src} />
        </div>
      </div>
    </section>
  );
}
