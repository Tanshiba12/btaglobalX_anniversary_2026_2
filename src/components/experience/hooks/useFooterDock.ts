"use client";

import { useEffect, useState } from "react";

export function useFooterDock() {
  const [dockAttached, setDockAttached] = useState(false);

  useEffect(() => {
    const dockSentinel = document.querySelector<HTMLElement>(".footer-dock-sentinel");
    if (!dockSentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setDockAttached(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.01
      }
    );

    observer.observe(dockSentinel);
    return () => observer.disconnect();
  }, []);

  return dockAttached;
}
