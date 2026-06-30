import { Mail, MapPin, Phone, Play } from "lucide-react";
import { eventDetails } from "@/data";
import { SafeIcon } from "../ui/SafeIcon";
export function ShowcaseFooter() {
  return (
    <footer className="showcase-footer" data-animate="card" id="contact">
      <div className="footer-dock-sentinel" aria-hidden="true" />
      <div className="section-inner footer-grid">
        <div className="footer-left">
          <p className="eyebrow">Location &amp; Contact</p>
          <h2>BTA GlobalX Anniversary &amp; Excellence Awards 2026</h2>
          <div className="footer-card">
            <strong>Hotel Sheraton Johor Bahru, Malaysia</strong>
            <span>
              <SafeIcon aria-hidden="true" icon={MapPin} />
              {eventDetails.date} - MYT {eventDetails.time}
            </span>
            <a className="dark-pill" href={`mailto:${eventDetails.email}`}>
              Contact us
            </a>
          </div>
          <p className="footer-brand">BTA GLOBALX</p>
        </div>
        <div className="footer-right">
          <span>For help</span>
          <a href={`mailto:${eventDetails.email}`}>
            <SafeIcon aria-hidden="true" icon={Mail} />
            {eventDetails.email}
          </a>
          <span>For calls</span>
          {eventDetails.phones.map((phone) => (
            <a href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>
              <SafeIcon aria-hidden="true" icon={Phone} />
              {phone}
            </a>
          ))}
          <p>{eventDetails.venue}</p>
          <div className="footer-buttons">
            <a className="outline-pill" href="#register">
              Register
            </a>
            <a className="light-pill" href="#event-journey">
              Explore
              <SafeIcon aria-hidden="true" icon={Play} />
            </a>
          </div>
          <div className="social-row" aria-label="Social links">
            {["ig", "x", "yt", "tk", "in"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
