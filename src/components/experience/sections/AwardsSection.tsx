import { ArrowRight, BadgeCheck } from "lucide-react";
import { awardCategories } from "@/data";
import { SafeIcon } from "../ui/SafeIcon";

export function AwardsSection() {
  return (
    <section className="site-section awards-section">
      <div className="section-inner awards-layout">
        <div className="awards-callout" data-animate="card">
          <p className="eyebrow">Nomination is open</p>
          <h2>Excellence Award 2026</h2>
          <p>
            Nominate outstanding leaders, entrepreneurs, humanitarians, and changemakers whose
            work deserves to be honoured on the anniversary stage.
          </p>
          <a href="#register">
            Start nomination
            <SafeIcon aria-hidden="true" icon={ArrowRight} />
          </a>
        </div>

        <div className="award-card-grid" data-stagger>
          {awardCategories.map((award) => (
            <article data-stagger-item key={award.title}>
              <SafeIcon aria-hidden="true" icon={BadgeCheck} />
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
