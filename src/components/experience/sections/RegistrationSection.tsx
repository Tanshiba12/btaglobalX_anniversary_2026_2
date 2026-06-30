import { ArrowRight, Ticket } from "lucide-react";
import { eventDetails, registrationPackages } from "@/data";
import { packageTierIcons } from "../config/experienceContent";
import { SafeIcon } from "../ui/SafeIcon";

export function RegistrationSection() {
  return (
    <section className="site-section registration-section" id="register">
      <div className="section-inner registration-layout">
        <div className="section-heading is-left" data-animate="text">
          <p>Registration</p>
          <h2>Choose your event category</h2>
          <span>
            Registration forms will be connected to each category once the Google Drive links are
            provided. Each category shows the access details guests need before choosing a form.
          </span>
        </div>

        <div className="registration-category-grid" data-stagger>
          {registrationPackages.map((pkg) => {
            const PackageIcon = packageTierIcons[pkg.tier] ?? Ticket;

            return (
              <article className={`registration-category-card tier-${pkg.tier.toLowerCase()}`} data-stagger-item key={pkg.id}>
                <div className="registration-category-top">
                  <SafeIcon aria-hidden="true" icon={PackageIcon} />
                  <span>{pkg.tier}</span>
                </div>
                <h3>{pkg.name}</h3>
                <p>{pkg.summary}</p>
                <ul>
                  {pkg.benefits.slice(0, 6).map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
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
