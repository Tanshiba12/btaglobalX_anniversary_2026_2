import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
            Nominate Yourself
            <SafeIcon aria-hidden="true" icon={ArrowRight} />
          </a>
        </div>

        <div className="award-card-grid" data-stagger>
          {awardCategories.map((award) => (
            <article data-stagger-item key={award.title}>
              <Image
                alt={`${award.title} logo`}
                className="award-category-logo"
                height={96}
                src={award.logo}
                unoptimized
                width={96}
              />
              <h3>{award.title}</h3>
              <p>{award.description}</p>
              <div className="award-nominee-block">
                <strong>Who Can Be Nominated</strong>
                <ul>
                  {award.nomineeTypes.map((nominee) => (
                    <li key={nominee}>{nominee}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
