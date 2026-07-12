"use client";

import { useEffect, useRef } from "react";

type PingPongBackgroundVideoProps = {
  className?: string;
  src: string;
};

export function PingPongBackgroundVideo({ className, src }: PingPongBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    let direction: "forward" | "reverse" = "forward";
    let reverseSupported = true;
    let reverseFrameId = 0;
    let reverseLastTime = 0;
    const edge = 0.08;
    const stopManualReverse = () => {
      window.cancelAnimationFrame(reverseFrameId);
      reverseFrameId = 0;
      reverseLastTime = 0;
    };

    const fallbackToLoop = () => {
      reverseSupported = false;
      direction = "forward";
      video.loop = true;
      video.playbackRate = 1;
      video.currentTime = 0;
      video.play().catch(() => undefined);
    };
    const play = () => video.play().catch(fallbackToLoop);
    const playForward = () => {
      stopManualReverse();
      direction = "forward";
      video.playbackRate = 1;
      video.currentTime = 0;
      play();
    };
    const playManualReverse = () => {
      stopManualReverse();
      direction = "reverse";
      video.loop = false;
      video.pause();
      video.currentTime = Math.max(0, video.duration - edge);

      const tick = (time: number) => {
        if (direction !== "reverse") return;
        if (!reverseLastTime) reverseLastTime = time;
        const elapsed = (time - reverseLastTime) / 1000;
        if (elapsed >= 1 / 30) {
          video.currentTime = Math.max(0, video.currentTime - elapsed);
          reverseLastTime = time;
        }
        if (video.currentTime <= edge) {
          playForward();
          return;
        }
        reverseFrameId = window.requestAnimationFrame(tick);
      };

      reverseFrameId = window.requestAnimationFrame(tick);
    };
    const playReverse = () => {
      try {
        direction = "reverse";
        video.loop = false;
        video.playbackRate = -1;
        if (video.playbackRate !== -1) {
          playManualReverse();
          return;
        }
        video.currentTime = Math.max(0, video.duration - edge);
        video.play().catch(playManualReverse);
      } catch {
        playManualReverse();
      }
    };
    const onLoadedMetadata = () => playForward();
    const onEnded = () => {
      if (direction === "forward" && reverseSupported) {
        playReverse();
        return;
      }
      reverseSupported ? playForward() : fallbackToLoop();
    };
    const onTimeUpdate = () => {
      if (direction === "reverse" && video.currentTime <= edge) {
        playForward();
      }
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("ended", onEnded);
    video.addEventListener("timeupdate", onTimeUpdate);

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      onLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      stopManualReverse();
    };
  }, []);

  return (
    <video autoPlay className={className} muted playsInline preload="metadata" ref={videoRef}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
