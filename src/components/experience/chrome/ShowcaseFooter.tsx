import { Facebook, Instagram, Mail, MapPin, Phone, Play, Youtube } from "lucide-react";
import { eventDetails } from "@/data";
import { footerAssets } from "@/data/assets";
import { SafeIcon } from "../ui/SafeIcon";
import { DeferredBackgroundVideo } from "../ui/DeferredBackgroundVideo";

const footerSocialLinks = [
  {
    href: "https://www.instagram.com/btaglobalx?igsh=em4zeDc1YzhvdDdx",
    icon: Instagram,
    label: "Instagram"
  },
  {
    href: "https://www.facebook.com/share/19Dux96DM6/",
    icon: Facebook,
    label: "Facebook"
  },
  {
    href: "https://youtube.com/@btaglobalx?si=cdlh7IW8e3o6eXnl",
    icon: Youtube,
    label: "YouTube"
  }
] as const;

export function ShowcaseFooter() {
  return (
    <footer className="showcase-footer" data-animate="card" id="contact">
      <div className="footer-dock-sentinel" aria-hidden="true" />
      <div className="section-inner footer-grid">
        <div className="footer-left">
          <DeferredBackgroundVideo
            className="footer-left-video-bg"
            src={footerAssets.backgroundVideo.src}
            videoClassName="footer-particle-video"
          />
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
          <p className="footer-brand">BTA GlobalX</p>
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
            {footerSocialLinks.map((item) => (
              <a href={item.href} key={item.label} rel="noreferrer" target="_blank" aria-label={item.label}>
                <SafeIcon aria-hidden="true" icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="section-inner footer-legal-row">
        <span>Copyright Reserved</span>
        <span>Prepared by Tanshiba Naorin</span>
      </div>
    </footer>
  );
}
