import { ChevronDown } from "lucide-react";
import { eventVideoAssets } from "@/data/assets";
import { VideoFrame } from "../ui/VideoFrame";
import { SafeIcon } from "../ui/SafeIcon";

const overviewParagraphs = [
  "Every great movement begins not with a grand announcement, but with a quiet vision: a belief that the world can be shaped differently.",
  "For Dr. Sangeeta Biswas, that vision took root long before BTA GlobalX was born. As Founder & Managing Director of Ayu Herba Pte Ltd, established in Singapore in 2009, with over 32 years of experience, she spent years building something most organisations only speak of: trust. Real, earned, cross-cultural trust. And from that foundation, deeply anchored in the values of Singapore and Malaysia, a larger vision began to take shape.",
  "In 2023, she gave that vision a name: BTA GlobalX. The organisation was never just a company. It was a declaration that collaboration could outpace competition, that purpose could precede profit, and that a unified global network was not idealism, but infrastructure.",
  "Its mission, Dream Beyond Borders, is matched by an equally resolute philosophy: Build Trust, Build Together. Threaded through everything is a guiding principle that sets the culture apart: Givers Get. Those who give generously of their knowledge, networks, and spirit are, in the end, the ones who rise the furthest.",
  "In three years, what began as a bold idea has grown into a living ecosystem. Today, BTA GlobalX unites over 1,000 professionals and entrepreneurs from more than 30 countries, spanning mental health advocates, beauty and wellness experts, life-management coaches, creative artists, fashion pioneers, business leaders, and IT innovators.",
  "This year, the biggest celebration of BTA GlobalX, BTA GlobalX Anniversary Gala Night & Excellence Award 2026, is happening on 1st August 2026. Achievement is celebrated, cultures converge, and the world's most inspiring stories take center stage.",
  "At its heart, this gala exists to inspire. It shines a light on changemakers, visionaries, and quiet heroes reshaping industries and transforming lives. It is a space where impactful contributions are recognized, cross-industry conversations spark new ideas, and doors open to growth, collaboration, and lasting partnerships.",
  "It is not merely an event. It is a reckoning with what has been built and a collective breath before the next chapter begins. Three years ago, a founder dared to dream beyond borders. Today, thousands across the globe are living proof that she was right to do so. This is that story, and the best chapters are still ahead."
];

export function EventOverviewVideoSection() {
  const [leadParagraph, ...extraParagraphs] = overviewParagraphs;

  return (
    <section className="site-section overview-video-section video-backed-section" id="overview">
      <div className="section-inner overview-video-grid">
        <div className="overview-video-copy" data-animate="text">
          <p className="eyebrow">Event Overview</p>
          <h2>Three Years. One Vision. Beyond the Borders.</h2>
          <VideoFrame
            body="The official BTA video URL will be connected here when the source link is provided."
            title="BTA Official Video"
            variant="bare"
            video={eventVideoAssets.official}
          />
          <div className="overview-story">
            <p>{leadParagraph}</p>
            <details>
              <summary>
                <span>Read more</span>
                <SafeIcon aria-hidden="true" icon={ChevronDown} />
              </summary>
              <div className="overview-story-more">
                {extraParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
