import Image from "next/image";
import { Gem } from "lucide-react";
import { fashionRounds, galleryImages } from "../config/experienceContent";
import { SafeIcon } from "../ui/SafeIcon";
export function CultureFashionSection() {
  return (
    <section className="site-section culture-fashion-section">
      <div className="section-inner culture-grid">
        <div className="culture-media" data-animate="image">
          <Image alt={galleryImages[1].alt} fill sizes="(max-width: 900px) 100vw, 48vw" src={galleryImages[1].src} />
        </div>
        <div className="culture-copy" data-animate="text">
          <p className="eyebrow">A Tapestry of Southeast Asia</p>
          <h2>Culture moves into legacy and luxury</h2>
          <p>
            The performance segment celebrates Southeast Asian heritage through music, dance,
            costume, rhythm, and storytelling before the site transitions into contemporary
            heritage fashion.
          </p>
          <div className="fashion-rounds" data-stagger>
            {fashionRounds.map((round) => (
              <span data-stagger-item key={round}>
                <SafeIcon aria-hidden="true" icon={Gem} />
                {round}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
