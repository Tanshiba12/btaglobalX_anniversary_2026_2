"use client";

import { useEffect, useState } from "react";

export function useLoaderSequence(reducedMotion: boolean) {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderStep, setLoaderStep] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      const quickTimer = window.setTimeout(() => setLoaderVisible(false), 650);
      return () => window.clearTimeout(quickTimer);
    }

    const stepTimers = [
      window.setTimeout(() => setLoaderStep(1), 720),
      window.setTimeout(() => setLoaderStep(2), 1450),
      window.setTimeout(() => setLoaderStep(3), 2180),
      window.setTimeout(() => setLoaderVisible(false), 2850)
    ];

    return () => stepTimers.forEach((timer) => window.clearTimeout(timer));
  }, [reducedMotion]);

  return { loaderStep, loaderVisible, setLoaderVisible };
}
