import { BadgeCheck, Gift } from "lucide-react";
import { awardCategories } from "@/data";
import { SafeIcon } from "../ui/SafeIcon";
export function AwardsSection() {
  return (
    <section className="site-section awards-section">
      <div className="section-inner awards-grid">
        <div className="section-heading is-left" data-animate="text">
          <p>Recognition stage</p>
          <h2>Excellence Award 2026</h2>
          <span>Gala dinner, global networking, award plaques, lucky draw, photo session, and closing.</span>
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
        <div className="lucky-draw-card" data-animate="card">
          <SafeIcon aria-hidden="true" icon={Gift} />
          <div>
            <strong>Lucky Draw</strong>
            <p>Exclusive sponsored products worth up to USD 10,000.</p>
          </div>
          <span>Award and group photography slots are ready for official media.</span>
        </div>
      </div>
    </section>
  );
}
