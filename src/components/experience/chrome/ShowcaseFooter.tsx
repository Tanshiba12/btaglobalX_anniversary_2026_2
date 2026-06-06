import { Mail, Phone, Play } from "lucide-react";
import { eventDetails } from "@/data";
import { DockControls } from "./DockControls";
import { SafeIcon } from "../ui/SafeIcon";
export function ShowcaseFooter() {
  return (
    <footer className="showcase-footer" data-animate="card" id="contact">
      <div className="footer-dock-sentinel" aria-hidden="true" />
      <div className="footer-dock" aria-label="Footer page actions">
        <DockControls />
      </div>
      <div className="section-inner footer-grid">
        <div className="footer-left">
          <h2>Maximizing global recognition, media visibility, and legacy.</h2>
          <div className="footer-card">
            <strong>Become a partner</strong>
            <span>Interested in sponsoring or supporting BTA GlobalX?</span>
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
          <p>{eventDetails.date}</p>
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
