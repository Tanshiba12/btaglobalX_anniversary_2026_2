import { ArrowRight, ChevronDown, Ticket } from "lucide-react";
import { eventDetails, registrationPackages } from "@/data";
import { heroAssets } from "@/data/assets";
import { packageTierIcons } from "../config/experienceContent";
import { SafeIcon } from "../ui/SafeIcon";
import { DeferredBackgroundVideo } from "../ui/DeferredBackgroundVideo";

const visibleBenefitCount = 4;

export function RegistrationSection() {
  return (
    <section className="site-section registration-section" id="register">
      <DeferredBackgroundVideo src={heroAssets.backgroundVideo.src} />
      <div className="section-inner registration-layout">
        <div className="section-heading is-left" data-animate="text">
          <p>Registration</p>
          <h2>CHOOSE YOUR REGISTRATION PACKAGE</h2>
          <span>
            Choose guest access or award nomination access. Each category shows inclusions and the
            registration form link where available.
          </span>
        </div>

        <div className="registration-category-grid" data-stagger>
          {registrationPackages.filter((pkg) => pkg.id !== "platinum").map((pkg) => {
            const PackageIcon = packageTierIcons[pkg.tier] ?? Ticket;
            const visibleBenefits = pkg.benefits.slice(0, visibleBenefitCount);
            const hiddenBenefits = pkg.benefits.slice(visibleBenefitCount);

            return (
              <article className={`registration-category-card tier-${pkg.tier.toLowerCase()}`} data-stagger-item key={pkg.id}>
                <div className="registration-category-content">
                  <div className="registration-category-top">
                    <SafeIcon aria-hidden="true" icon={PackageIcon} />
                    <span>{pkg.tier}</span>
                  </div>
                  <h3>{pkg.name}</h3>
                  <p>{pkg.summary}</p>
                  <ul>
                    {visibleBenefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                  {hiddenBenefits.length > 0 ? (
                    <details className="registration-benefit-details">
                      <summary>
                        <span>View more</span>
                        <SafeIcon aria-hidden="true" icon={ChevronDown} />
                      </summary>
                      <ul>
                        {hiddenBenefits.map((benefit) => (
                          <li key={benefit}>{benefit}</li>
                        ))}
                      </ul>
                    </details>
                  ) : null}
                </div>
                {pkg.formUrl ? (
                  <a className="registration-form-link" href={pkg.formUrl} rel="noreferrer" target="_blank">
                    Open registration form
                    <SafeIcon aria-hidden="true" icon={ArrowRight} />
                  </a>
                ) : (
                  <span className="registration-form-link is-pending">Google Drive form link pending</span>
                )}
              </article>
            );
          })}
        </div>

        <p className="registration-note" data-animate="text">
          Need help before the forms are connected? Email {eventDetails.email}.
        </p>
      </div>
    </section>
  );
}
