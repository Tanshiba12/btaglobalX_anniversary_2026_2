import Image from "next/image";
import { partners } from "@/data";
import { sponsorAssets } from "@/data/assets";
export function PartnersSection() {
  return (
    <section className="site-section partners-section">
      <div className="section-inner">
        <div className="section-heading" data-animate="text">
          <p>Powered by</p>
          <h2>The alliance behind the night</h2>
        </div>
        <div className="partner-logo-wall" data-stagger aria-label="Official sponsor and partner logos">
          {sponsorAssets.map((partner) => (
            <article data-stagger-item key={partner.id}>
              <Image alt={`${partner.name} logo`} height={96} src={partner.src} unoptimized width={220} />
              <strong>{partner.name}</strong>
            </article>
          ))}
        </div>
        <div className="partner-badges" data-stagger>
          {partners.map((partner) => (
            <span data-stagger-item key={partner.name}>
              <em>{partner.role}</em>
              <strong>{partner.name}</strong>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
