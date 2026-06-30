import { Mail, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { eventDetails } from "@/data/event";

export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  icon: LucideIcon;
  label: string;
};

const primaryPhone = eventDetails.phones[0] ?? "";
const cleanPhone = primaryPhone.replace(/\D/g, "");

export const navItems: NavItem[] = [
  { href: "#overview", label: "Overview" },
  { href: "#event-journey", label: "Program" },
  { href: "#timeline", label: "Timeline" },
  { href: "#register", label: "Register" },
  { href: "#contact", label: "Location" }
];

export const whatsappLink = cleanPhone ? `https://wa.me/${cleanPhone}` : `mailto:${eventDetails.email}`;

export const socialLinks: SocialLink[] = [
  { href: `mailto:${eventDetails.email}`, icon: Mail, label: "Email" },
  { href: `tel:${primaryPhone.replace(/\s/g, "")}`, icon: Phone, label: "Call" },
  { href: whatsappLink, icon: MessageCircle, label: "WhatsApp" }
];
