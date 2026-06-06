"use client";

import { useEffect, useRef, useState } from "react";

export type DockMode = "visible" | "hidden" | "footer";

function isInReadingBand(element: Element | null, viewportHeight: number) {
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  return rect.top < viewportHeight * 0.72 && rect.bottom > viewportHeight * 0.28;
}

export function useDockMode() {
  const [mode, setMode] = useState<DockMode>("visible");
  const currentModeRef = useRef<DockMode>("visible");

  useEffect(() => {
    const hero = document.querySelector("#top");
    const world = document.querySelector("[data-world-scroll]");
    const footerSentinel = document.querySelector(".footer-dock-sentinel");

    const setNextMode = (nextMode: DockMode) => {
      if (currentModeRef.current === nextMode) {
        return;
      }

      currentModeRef.current = nextMode;
      setMode(nextMode);
    };

    const updateMode = () => {
      const viewportHeight = window.innerHeight || 1;
      const footerRect = footerSentinel?.getBoundingClientRect();

      if (footerRect && footerRect.top < viewportHeight * 0.86) {
        setNextMode("footer");
        return;
      }

      if (isInReadingBand(hero, viewportHeight) || isInReadingBand(world, viewportHeight)) {
        setNextMode("visible");
        return;
      }

      setNextMode("hidden");
    };

    updateMode();
    window.addEventListener("scroll", updateMode, { passive: true });
    window.addEventListener("resize", updateMode);

    return () => {
      window.removeEventListener("scroll", updateMode);
      window.removeEventListener("resize", updateMode);
    };
  }, []);

  return mode;
}
