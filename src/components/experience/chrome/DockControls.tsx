import { navItems, socialLinks, whatsappLink } from "../config/navigation";
import { SafeIcon } from "../ui/SafeIcon";
export function DockControls() {
  return (
    <div className="dock-controls">
      <div className="dock-capsule dock-capsule-social">
        <span>Contact</span>
        <div className="dock-reveal" aria-label="Social links">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a href={item.href} key={item.label} aria-label={item.label}>
                <SafeIcon aria-hidden="true" icon={Icon} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="dock-nav" aria-label="Page sections">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>

      <div className="dock-capsule dock-capsule-contact">
        <div className="dock-reveal" aria-label="Contact links">
          <a href={whatsappLink} aria-label="WhatsApp">
            <span aria-hidden="true">WA</span>
          </a>
        </div>
        <span>Get In touch</span>
      </div>
    </div>
  );
}
