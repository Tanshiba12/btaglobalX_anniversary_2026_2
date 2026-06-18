import Image from "next/image";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { eventDetails } from "@/data";
import { founderAssets } from "@/data/assets";
import { founderMessageParagraphs } from "../config/experienceContent";
import { SafeIcon } from "../ui/SafeIcon";

export function FounderMessageSection() {
  return (
    <section className="site-section founder-message-section">
      <div className="section-inner founder-message-grid">
        <div className="founder-portrait-card" data-animate="image">
          <span className="founder-light-ring" aria-hidden="true" />
          <div className="founder-portrait-frame">
            <Image
              alt={founderAssets.sangeetaBiswas.alt}
              fill
              priority={false}
              sizes="(max-width: 900px) 92vw, 36vw"
              src={founderAssets.sangeetaBiswas.src}
            />
          </div>
          <div className="founder-portrait-caption">
            <span>Founder&apos;s Invitation</span>
            <strong>H.E. Amb. Dr. Sangeeta Biswas, M.D.</strong>
            <p>Founder, Ayu Herba and BTA GlobalX</p>
          </div>
        </div>

        <div className="founder-copy" data-stagger>
          <p className="eyebrow" data-stagger-item>
            Founder&apos;s Message
          </p>
          <h2 data-stagger-item>An invitation to celebrate people building better futures.</h2>
          <div className="founder-message-body">
            {founderMessageParagraphs.map((paragraph) => (
              <p data-stagger-item key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="founder-event-cues" data-stagger-item>
            <span>
              <SafeIcon aria-hidden="true" icon={CalendarDays} />
              Anniversary celebration on {eventDetails.date}
            </span>
            <span>
              <SafeIcon aria-hidden="true" icon={MapPin} />
              {eventDetails.venue}
            </span>
            <span>
              <SafeIcon aria-hidden="true" icon={Sparkles} />
              Wellness, culture, partnership, and awards
            </span>
          </div>
          <div className="founder-signature" data-stagger-item>
            <span>With gratitude,</span>
            <strong>H.E. Amb. Dr. Sangeeta Biswas, M.D.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
