"use client";

import { type RefObject, useCallback, useEffect, useRef } from "react";

type GalleryMode = "album" | "overview" | "video";

type GalleryFlowMotionOptions = {
  detailPhotoTrackRef: RefObject<HTMLElement | null>;
  flowRevision: number;
  initialProgress: number;
  mode: GalleryMode;
  overviewPhotoTrackRef: RefObject<HTMLElement | null>;
  photoChapterRef: RefObject<HTMLElement | null>;
  reducedMotion: boolean;
  rootRef: RefObject<HTMLElement | null>;
  stageRef: RefObject<HTMLElement | null>;
  videoChapterRef: RefObject<HTMLElement | null>;
  videoTrackRef: RefObject<HTMLElement | null>;
  viewportRef: RefObject<HTMLElement | null>;
};

type GalleryTrigger = {
  end: number;
  progress: number;
  scroll: (position?: number) => number;
  start: number;
};

export function useGalleryFlowMotion({
  detailPhotoTrackRef,
  flowRevision,
  initialProgress,
  mode,
  overviewPhotoTrackRef,
  photoChapterRef,
  reducedMotion,
  rootRef,
  stageRef,
  videoChapterRef,
  videoTrackRef,
  viewportRef
}: GalleryFlowMotionOptions) {
  const triggerRef = useRef<GalleryTrigger | null>(null);
  const refreshRef = useRef<(() => void) | null>(null);

  const getProgress = useCallback(() => triggerRef.current?.progress ?? 0, []);

  const scrollToProgress = useCallback((progress: number) => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const boundedProgress = Math.min(1, Math.max(0, progress));
    trigger.scroll(trigger.start + (trigger.end - trigger.start) * boundedProgress);
  }, []);

  const scrollToPhotos = useCallback(() => scrollToProgress(0), [scrollToProgress]);
  const scrollToVideos = useCallback(() => {
    const root = rootRef.current;
    const progress = Number(root?.dataset.galleryVideoProgress ?? "0.62");
    scrollToProgress(progress);
  }, [rootRef, scrollToProgress]);

  const refresh = useCallback(() => refreshRef.current?.(), []);

  useEffect(() => {
    const supportsCinematicGallery = window.matchMedia("(min-width: 901px) and (hover: hover) and (pointer: fine)").matches;
    const root = rootRef.current;
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const photoChapter = photoChapterRef.current;
    const videoChapter = videoChapterRef.current;
    const videoTrack = videoTrackRef.current;
    const photoTrack = mode === "album" ? detailPhotoTrackRef.current : overviewPhotoTrackRef.current;

    if (
      reducedMotion ||
      !supportsCinematicGallery ||
      !root ||
      !stage ||
      !viewport ||
      !photoChapter ||
      !videoChapter ||
      !photoTrack ||
      !videoTrack
    ) {
      triggerRef.current = null;
      refreshRef.current = null;
      return;
    }

    const flowRoot = root;
    const flowStage = stage;
    const flowViewport = viewport;
    const flowPhotoChapter = photoChapter;
    const flowVideoChapter = videoChapter;
    const flowPhotoTrack = photoTrack;
    const flowVideoTrack = videoTrack;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    async function createFlow() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const build = () => {
        const viewportWidth = flowViewport.clientWidth;
        const photoTravel = Math.max(0, flowPhotoTrack.scrollWidth - viewportWidth);
        const videoTravel = Math.max(0, flowVideoTrack.scrollWidth - viewportWidth);
        const transitionDistance = Math.max(280, window.innerWidth * 0.35);
        const finalHoldDistance = Math.max(360, window.innerWidth * 0.5);
        const photoDuration = Math.max(photoTravel, viewportWidth * 0.72);
        const videoDuration = Math.max(videoTravel, viewportWidth * 0.55);
        const totalDistance = photoDuration + transitionDistance + videoDuration + finalHoldDistance;
        const videoProgress = (photoDuration + transitionDistance) / totalDistance;

        flowRoot.dataset.galleryPhotoTravel = photoTravel.toFixed(2);
        flowRoot.dataset.galleryVideoTravel = videoTravel.toFixed(2);
        flowRoot.dataset.galleryViewportWidth = viewportWidth.toFixed(2);
        flowRoot.dataset.galleryVideoProgress = videoProgress.toFixed(4);
        gsap.set(flowPhotoChapter, { autoAlpha: 1, pointerEvents: "auto", xPercent: 0 });
        gsap.set(flowVideoChapter, { autoAlpha: 0, pointerEvents: "none", xPercent: 12 });
        gsap.set(flowPhotoTrack, { x: 0 });
        gsap.set(flowVideoTrack, { x: 0 });

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            anticipatePin: 1,
            end: () => `+=${totalDistance}`,
            id: "gallery-master",
            invalidateOnRefresh: true,
            pin: flowStage,
            pinSpacing: true,
            scrub: 0.8,
            start: "top top",
            trigger: flowRoot
          }
        });

        timeline.to(flowPhotoTrack, { duration: photoDuration, x: -photoTravel });
        timeline
          .to(flowPhotoChapter, { autoAlpha: 0, duration: transitionDistance, xPercent: -10 })
          .to(flowVideoChapter, { autoAlpha: 1, duration: transitionDistance, xPercent: 0 }, "<")
          .set(flowPhotoChapter, { pointerEvents: "none" })
          .set(flowVideoChapter, { pointerEvents: "auto" }, "<");
        timeline.to(flowVideoTrack, { duration: videoDuration, x: -videoTravel });
        timeline.to({}, { duration: finalHoldDistance });

        const trigger = timeline.scrollTrigger as unknown as GalleryTrigger;
        triggerRef.current = trigger;
        flowRoot.dataset.galleryMotion = "cinematic";

        window.requestAnimationFrame(() => {
          if (cancelled) return;
          ScrollTrigger.refresh();
          if (flowRevision > 0) scrollToProgress(initialProgress);
        });

        return timeline;
      };

      let timeline = build();
      let refreshFrame = 0;
      const refreshGallery = () => {
        window.cancelAnimationFrame(refreshFrame);
        refreshFrame = window.requestAnimationFrame(() => {
          if (cancelled) return;
          const previousTrigger = triggerRef.current;
          const progress = previousTrigger?.progress ?? 0;
          const currentScroll = window.scrollY;
          const wasInsideGallery = previousTrigger
            ? currentScroll >= previousTrigger.start - 2 && currentScroll <= previousTrigger.end + 2
            : false;
          timeline.scrollTrigger?.kill(true);
          timeline.kill();
          gsap.set([flowPhotoTrack, flowVideoTrack, flowPhotoChapter, flowVideoChapter], { clearProps: "transform,opacity,visibility,pointerEvents" });
          timeline = build();
          if (wasInsideGallery || flowRevision > 0) {
            window.requestAnimationFrame(() => scrollToProgress(progress));
          }
        });
      };

      refreshRef.current = refreshGallery;
      window.addEventListener("resize", refreshGallery, { passive: true });
      window.addEventListener("orientationchange", refreshGallery);

      const images = Array.from(flowRoot.querySelectorAll("img"));
      Promise.allSettled(images.filter((image) => !image.complete).map((image) => image.decode())).then(refreshGallery);
      document.fonts?.ready.then(refreshGallery);

      cleanup = () => {
        window.cancelAnimationFrame(refreshFrame);
        window.removeEventListener("resize", refreshGallery);
        window.removeEventListener("orientationchange", refreshGallery);
        timeline.scrollTrigger?.kill(true);
        timeline.kill();
        triggerRef.current = null;
        refreshRef.current = null;
        gsap.set([flowPhotoTrack, flowVideoTrack, flowPhotoChapter, flowVideoChapter], { clearProps: "transform,opacity,visibility,pointerEvents" });
      };
    }

    createFlow().catch(() => {
      root.dataset.galleryMotion = "native";
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [
    detailPhotoTrackRef,
    flowRevision,
    initialProgress,
    mode,
    overviewPhotoTrackRef,
    photoChapterRef,
    reducedMotion,
    rootRef,
    scrollToProgress,
    stageRef,
    videoChapterRef,
    videoTrackRef,
    viewportRef
  ]);

  return { getProgress, refresh, scrollToPhotos, scrollToProgress, scrollToVideos };
}
