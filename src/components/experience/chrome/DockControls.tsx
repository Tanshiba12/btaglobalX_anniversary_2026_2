import { navItems, socialLinks, whatsappLink } from "../config/navigation";
import { SafeIcon } from "../ui/SafeIcon";
export function DockControls() {
  return (
    <div className="dock-controls">
      <div className="dock-nav" aria-label="Page sections">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            <strong>{item.label}</strong>
          </a>
        ))}
      </div>

      <div className="dock-contact-cluster" aria-label="Contact links">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a href={item.href} key={item.label} aria-label={item.label}>
              <SafeIcon aria-hidden="true" icon={Icon} />
            </a>
          );
        })}
        <a className="dock-register" href={whatsappLink}>
          <span>Reserve</span>
          <strong>Seat</strong>
        </a>
      </div>
    </div>
  );
}
