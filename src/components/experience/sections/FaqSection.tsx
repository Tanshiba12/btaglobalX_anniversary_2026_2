import { ChevronDown } from "lucide-react";
import { eventDetails, faqs } from "@/data";
import { SafeIcon } from "../ui/SafeIcon";
export function FaqSection() {
  return (
    <section className="site-section faq-section" id="faq">
      <div className="section-inner faq-grid">
        <aside className="faq-card" data-animate="card">
          <h2>FAQ</h2>
          <div />
          <p>Do you have another question?</p>
          <a className="dark-pill" href={`mailto:${eventDetails.email}`}>
            Contact us
          </a>
        </aside>
        <div className="faq-list" data-stagger>
          {faqs.map((item, index) => (
            <details data-stagger-item key={item.question} open={index === 0}>
              <summary>
                {item.question}
                <SafeIcon aria-hidden="true" icon={ChevronDown} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
