import Image from "next/image";
import { founderAssets } from "@/data/assets";
import { founderMessageParagraphs } from "../config/experienceContent";
export function FounderMessageSection() {
  return (
    <section className="site-section founder-message-section">
      <div className="section-inner founder-message-grid">
        <div className="founder-portrait-card" data-animate="image">
          <div className="founder-portrait-frame">
            <Image
              alt={founderAssets.sangeetaBiswas.alt}
              fill
              priority={false}
              sizes="(max-width: 900px) 92vw, 34vw"
              src={founderAssets.sangeetaBiswas.src}
            />
            <span aria-hidden="true">Founder</span>
          </div>
          <p>H.E. Amb. Dr. Sangeeta Biswas. M.D.</p>
        </div>
        <div className="founder-copy" data-stagger>
          <p className="eyebrow" data-stagger-item>
            Founder&apos;s Message
          </p>
          <h2 data-stagger-item>Celebrating 3 Years of BTA GlobalX Anniversary</h2>
          <div className="founder-message-body">
            {founderMessageParagraphs.map((paragraph) => (
              <p data-stagger-item key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="founder-signature" data-stagger-item>
            <span>With gratitude,</span>
            <strong>H.E. Amb. Dr. Sangeeta Biswas. M.D.</strong>
            <p>Founder of Ayu Herba and BTA GlobalX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
