"use client";

import { useEffect, useRef, useState } from "react";

type DeferredBackgroundVideoProps = {
  className?: string;
  src: string;
  videoClassName?: string;
};

export function DeferredBackgroundVideo({
  className = "section-contained-video-bg",
  src,
  videoClassName = "video-backdrop-blur"
}: DeferredBackgroundVideoProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const IntersectionObserverConstructor = window.IntersectionObserver;

    if (!IntersectionObserverConstructor) {
      const frameId = globalThis.requestAnimationFrame(() => setShouldLoad(true));
      return () => globalThis.cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserverConstructor(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "640px 0px" }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={className} aria-hidden="true" ref={rootRef}>
      {shouldLoad ? (
        <video autoPlay className={videoClassName} loop muted playsInline preload="metadata">
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
