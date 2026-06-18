"use client";

import clsx from "clsx";
import { useState } from "react";
import { ArrowRight, ChevronDown, Ticket } from "lucide-react";
import { eventDetails } from "@/data";
import { packageTierIcons, registrationSlides } from "../config/experienceContent";
import { SafeIcon } from "../ui/SafeIcon";
export function RegistrationSection({ reducedMotion }: { reducedMotion: boolean }) {
  const [visiblePrices, setVisiblePrices] = useState<Record<string, boolean>>({});

  const togglePrice = (id: string) => {
    setVisiblePrices((current) => ({ ...current, [id]: !current[id] }));
  };

  return (
    <section className={clsx("site-section registration-section", reducedMotion && "is-reduced")} id="register">
      <div className="section-inner registration-pin">
        <div className="registration-hero" data-animate="card">
          <div>
            <p className="eyebrow">Registration</p>
            <h2>Choose the pass that fits your place in the celebration.</h2>
          </div>
          <a className="dark-pill" href={`mailto:${eventDetails.email}`}>
            Contact registration
            <SafeIcon aria-hidden="true" icon={ArrowRight} />
          </a>
        </div>
        <div className="registration-progress" aria-hidden="true">
          <span className="registration-progress-fill" />
        </div>
        <div className="registration-slide-viewport" aria-label="Registration package slides">
          <div className="registration-slide-track">
            {registrationSlides.map((slide) => (
              <article className="registration-slide" key={slide.id}>
                <div className="registration-slide-heading">
                  <span>{slide.eyebrow}</span>
                  <h3>{slide.title}</h3>
                  <p>{slide.summary}</p>
                </div>
                <div className={clsx("package-grid", `package-grid-${slide.id}`)} data-stagger>
                  {slide.packages.map((pkg) => {
                    const PackageIcon = packageTierIcons[pkg.tier] ?? Ticket;
                    const priceVisible = Boolean(visiblePrices[pkg.id]);

                    return (
                      <article
                        className={clsx("package-card", `tier-${pkg.tier.toLowerCase()}`, priceVisible && "is-price-visible")}
                        data-stagger-item
                        key={pkg.id}
                      >
                        <div className="package-icon-row">
                          <SafeIcon aria-hidden="true" icon={PackageIcon} />
                          <span>{pkg.tier}</span>
                        </div>
                        <h4>{pkg.name}</h4>
                        <p>{pkg.summary}</p>
                        <button
                          aria-expanded={priceVisible}
                          className="price-toggle"
                          type="button"
                          onClick={() => togglePrice(pkg.id)}
                        >
                          {priceVisible ? "Hide price" : "Reveal price"}
                          <SafeIcon aria-hidden="true" icon={ChevronDown} />
                        </button>
                        <div className="package-price-slot" aria-hidden={!priceVisible}>
                          <strong>{pkg.price}</strong>
                        </div>
                        <details>
                          <summary>
                            Key benefits
                            <SafeIcon aria-hidden="true" icon={ChevronDown} />
                          </summary>
                          <ul>
                            {pkg.benefits.map((benefit) => (
                              <li key={benefit}>{benefit}</li>
                            ))}
                          </ul>
                        </details>
                      </article>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
