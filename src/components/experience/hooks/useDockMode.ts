"use client";

import { useEffect, useRef, useState } from "react";

export type DockMode = "visible" | "hidden" | "footer";

export function useDockMode() {
  const [mode, setMode] = useState<DockMode>("visible");
  const currentModeRef = useRef<DockMode>("visible");

  useEffect(() => {
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

      setNextMode("visible");
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
