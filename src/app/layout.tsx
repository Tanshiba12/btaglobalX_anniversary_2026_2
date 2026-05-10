import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "BTA GlobalX Anniversary 3RD ANNIVERSARY & EXCELLENCE AWARDS 2026",
  description:
    "A block-color one-page event experience for BTA GlobalX Anniversary 3RD ANNIVERSARY & EXCELLENCE AWARDS 2026 at Hotel Sheraton Johor Bahru, Malaysia.",
  openGraph: {
    title: "BTA GlobalX Anniversary 3RD ANNIVERSARY & EXCELLENCE AWARDS 2026",
    description:
      "One invitation. One day. Many stages of excellence.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF4D7"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
