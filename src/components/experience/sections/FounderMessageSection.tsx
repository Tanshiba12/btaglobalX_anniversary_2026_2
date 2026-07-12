import Image from "next/image";
import { founderAssets } from "@/data/assets";

const founderMessage =
  "As we proudly celebrate the 3rd Anniversary of BTA GlobalX on 1 August 2026 in Johor Bahru, Malaysia, I extend my heartfelt gratitude to every member, partner, entrepreneur, leader, and supporter who has been part of this remarkable journey. What began as a vision to connect businesses, empower entrepreneurs, and build meaningful global collaborations has grown into a thriving international community driven by innovation, excellence, and shared success. Over the past three years, BTA GlobalX has become a platform where ideas flourish, achievements are celebrated, and opportunities transcend borders. This anniversary is more than a celebration of our milestones-it is a celebration of the people whose dedication, resilience, and passion continue to inspire positive change. Through the BTA GlobalX Anniversary Gala Night & Excellence Award 2026, we proudly recognize outstanding individuals and organizations whose contributions are making a lasting impact in their industries and communities.";

export function FounderMessageSection() {
  return (
    <section className="site-section founder-message-section">
      <div className="section-inner founder-message-grid">
        <div className="founder-section-heading" data-animate="text">
          <h2>FOUNDER&apos;S MESSAGE</h2>
        </div>

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
            <strong>Dr. Sangeeta Biswas</strong>
            <p>
              Founder &amp; Managing Director, Atu Herba<sup>tm</sup> Pte Ltd and BTA GlobalX<sup>tm</sup>
            </p>
          </div>
        </div>

        <div className="founder-copy" data-animate="text">
          <p className="founder-message-paragraph">{founderMessage}</p>
        </div>
      </div>
    </section>
  );
}
