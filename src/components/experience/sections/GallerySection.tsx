"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Film, Images, Play, X } from "lucide-react";
import { eventVideoAssets, heroAssets } from "@/data/assets";
import { galleryAlbums, type GalleryAlbum, type GalleryImage } from "@/data/gallery";
import { useGalleryFlowMotion } from "../hooks/useGalleryFlowMotion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { SafeIcon } from "../ui/SafeIcon";

type GalleryMode = "album" | "overview" | "video";

type GalleryVideo = {
  description: string;
  id: string;
  poster: GalleryImage;
  src: string;
  title: string;
};

type AlbumCardProps = {
  album: GalleryAlbum;
  compact?: boolean;
  index: number;
  isSelected: boolean;
  onOpen: (album: GalleryAlbum, triggerId: string) => void;
  transitionLocked: boolean;
};

type VideoCardProps = {
  compact: boolean;
  expanded: boolean;
  isSelected: boolean;
  onOpen: (video: GalleryVideo, triggerId: string) => void;
  transitionLocked: boolean;
  video: GalleryVideo;
};

function getAlbumCover(title: string) {
  return galleryAlbums.find((album) => album.title === title)?.images[0] ?? galleryAlbums[0]?.images[0];
}

function AlbumCard({ album, compact = false, index, isSelected, onOpen, transitionLocked }: AlbumCardProps) {
  const cover = album.images[0];
  const triggerId = `album:${album.id}`;
  if (!cover) return null;

  return (
    <article
      className={`gallery-category-card ${compact ? "is-compact" : ""} ${isSelected ? "is-selected" : ""}`}
      data-gallery-card
      data-flip-id={triggerId}
    >
      <button
        aria-label={`Open ${album.title}, ${album.images.length} photos`}
        data-gallery-trigger={triggerId}
        disabled={transitionLocked}
        onClick={() => onOpen(album, triggerId)}
        type="button"
      >
        <Image
          alt={cover.alt}
          height={cover.height ?? 900}
          loading={index < 3 ? "eager" : "lazy"}
          sizes="(max-width: 900px) 78vw, 20rem"
          src={cover.src}
          width={cover.width ?? 1200}
        />
        <span className="gallery-category-card-copy">
          <strong>{album.title}</strong>
          <span>{album.images.length} photos</span>
        </span>
      </button>
    </article>
  );
}

function VideoCard({ compact, expanded, isSelected, onOpen, transitionLocked, video }: VideoCardProps) {
  const triggerId = `video:${video.id}`;

  return (
    <article
      className={`gallery-video-card ${compact ? "is-compact" : ""} ${isSelected ? "is-selected" : ""}`}
      data-flip-id={triggerId}
    >
      {expanded ? (
        <>
          <video controls playsInline poster={video.poster.src} preload="metadata">
            <source src={video.src} type="video/mp4" />
          </video>
          <div className="gallery-video-copy">
            <strong>{video.title}</strong>
            <span>{video.description}</span>
          </div>
        </>
      ) : (
        <button
          aria-label={`Expand ${video.title}`}
          data-gallery-trigger={triggerId}
          disabled={transitionLocked}
          onClick={() => onOpen(video, triggerId)}
          type="button"
        >
          <Image
            alt=""
            aria-hidden="true"
            height={video.poster.height ?? 900}
            loading="lazy"
            sizes="(max-width: 900px) 82vw, 38rem"
            src={video.poster.src}
            width={video.poster.width ?? 1200}
          />
          <span className="gallery-video-play" aria-hidden="true"><SafeIcon icon={Play} /></span>
          <span className="gallery-category-card-copy">
            <strong>{video.title}</strong>
            <span>{video.description}</span>
          </span>
        </button>
      )}
    </article>
  );
}

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [flowRevision, setFlowRevision] = useState(0);
  const [initialProgress, setInitialProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mode, setMode] = useState<GalleryMode>("overview");
  const [selectedAlbumId, setSelectedAlbumId] = useState(galleryAlbums[0]?.id ?? "");
  const [selectedVideoId, setSelectedVideoId] = useState("previous-memory");
  const flowRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const photoChapterRef = useRef<HTMLElement>(null);
  const videoChapterRef = useRef<HTMLElement>(null);
  const overviewPhotoTrackRef = useRef<HTMLDivElement>(null);
  const detailPhotoTrackRef = useRef<HTMLDivElement>(null);
  const videoTrackRef = useRef<HTMLDivElement>(null);
  const returnTargetRef = useRef<string | null>(null);
  const overviewProgressRef = useRef(0);
  const touchStartX = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  const selectedAlbum = useMemo(
    () => galleryAlbums.find((album) => album.id === selectedAlbumId) ?? galleryAlbums[0] ?? null,
    [selectedAlbumId]
  );
  const storyImages = selectedAlbum?.images ?? [];
  const activeImage = activeIndex === null ? null : storyImages[activeIndex] ?? null;
  const videoItems = useMemo<GalleryVideo[]>(() => {
    const previousMemoryPoster = getAlbumCover("Our Second Year Anniversary Celebration");
    const officialPoster = getAlbumCover("Awardees");
    const teaserPoster = getAlbumCover("Red Carpet Interviews");

    const videos: Array<GalleryVideo | null> = [
      previousMemoryPoster
        ? { description: "A previous BTA GlobalX celebration memory.", id: "previous-memory", poster: previousMemoryPoster, src: heroAssets.backgroundVideo.src, title: "Previous Memory" }
        : null,
      officialPoster
        ? { description: "Official event video placeholder.", id: "official-video", poster: officialPoster, src: eventVideoAssets.official.src, title: "BTA Official Video" }
        : null,
      teaserPoster
        ? { description: "Event teaser video placeholder.", id: "event-teaser", poster: teaserPoster, src: eventVideoAssets.teaser.src, title: "Event Teaser" }
        : null
    ];

    return videos.filter((item): item is GalleryVideo => item !== null);
  }, []);

  const flow = useGalleryFlowMotion({
    detailPhotoTrackRef,
    flowRevision,
    initialProgress,
    mode,
    overviewPhotoTrackRef,
    photoChapterRef,
    reducedMotion,
    rootRef: flowRef,
    stageRef,
    videoChapterRef,
    videoTrackRef,
    viewportRef
  });

  const runSceneTransition = useCallback(async (update: () => void, onComplete?: () => void) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (reducedMotion) {
      flushSync(update);
      setIsTransitioning(false);
      onComplete?.();
      return;
    }

    try {
      const [{ gsap }, { Flip }] = await Promise.all([import("gsap"), import("gsap/Flip")]);
      gsap.registerPlugin(Flip);
      const targets = flowRef.current?.querySelectorAll<HTMLElement>("[data-flip-id]");
      const state = targets ? Flip.getState(targets) : null;

      flushSync(update);
      await new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));

      if (!state) {
        setIsTransitioning(false);
        onComplete?.();
        return;
      }

      Flip.from(state, {
        absolute: true,
        duration: 0.52,
        ease: "power3.inOut",
        fade: true,
        onComplete: () => {
          setIsTransitioning(false);
          onComplete?.();
        },
        scale: true,
        simple: true
      });
    } catch {
      flushSync(update);
      setIsTransitioning(false);
      onComplete?.();
    }
  }, [isTransitioning, reducedMotion]);

  const openAlbum = useCallback((album: GalleryAlbum, triggerId: string) => {
    if (mode === "overview") overviewProgressRef.current = flow.getProgress();
    returnTargetRef.current = triggerId;
    runSceneTransition(() => {
      setSelectedAlbumId(album.id);
      setMode("album");
      setInitialProgress(0);
      setFlowRevision((value) => value + 1);
    });
  }, [flow, mode, runSceneTransition]);

  const openVideo = useCallback((video: GalleryVideo, triggerId: string) => {
    if (mode !== "video") overviewProgressRef.current = flow.getProgress();
    returnTargetRef.current = triggerId;
    const progress = flow.getProgress();
    runSceneTransition(() => {
      setSelectedVideoId(video.id);
      setMode("video");
      setInitialProgress(progress);
      setFlowRevision((value) => value + 1);
    });
  }, [flow, mode, runSceneTransition]);

  const returnToOverview = useCallback((destination: "photos" | "restore") => {
    const targetId = returnTargetRef.current;
    const progress = destination === "photos" ? 0 : overviewProgressRef.current;
    runSceneTransition(() => {
      setMode("overview");
      setInitialProgress(progress);
      setFlowRevision((value) => value + 1);
    }, () => {
      if (targetId) {
        document.querySelector<HTMLButtonElement>(`[data-gallery-trigger="${targetId}"]`)?.focus({ preventScroll: true });
      }
    });
  }, [runSceneTransition]);

  useEffect(() => {
    if (!activeImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") setActiveIndex((index) => (index === null ? null : (index - 1 + storyImages.length) % storyImages.length));
      if (event.key === "ArrowRight") setActiveIndex((index) => (index === null ? null : (index + 1) % storyImages.length));
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage, storyImages.length]);

  const albumCardProps = (album: GalleryAlbum, index: number, compact = false) => ({
    album,
    compact,
    index,
    isSelected: album.id === selectedAlbum?.id,
    onOpen: openAlbum,
    transitionLocked: isTransitioning
  });

  return (
    <section className="site-section gallery-section gallery" id="gallery-finale">
      <div className={`gallery-scroll-flow gallery-mode-${mode}`} data-transitioning={isTransitioning || undefined} ref={flowRef}>
        <div className="gallery-scroll-stage" ref={stageRef}>
          <div className="section-inner gallery-stage-inner">
            <div className="section-heading is-left gallery-header">
              <p>Gallery</p>
              <h2 className="gallery-title">Our Memory &amp; Momentum</h2>
              <span className="gallery-subtitle">Photos complete first, then videos, before the journey continues.</span>
            </div>

            <div className="gallery-stage-toolbar" aria-label="Gallery chapters">
              <button
                aria-pressed={mode === "album"}
                onClick={() => mode === "album" || mode === "video" ? returnToOverview("photos") : flow.scrollToPhotos()}
                type="button"
              >
                <SafeIcon aria-hidden="true" icon={Images} /> Photos
              </button>
              <button
                aria-pressed={mode === "video"}
                onClick={() => mode === "video" ? returnToOverview("restore") : flow.scrollToVideos()}
                type="button"
              >
                <SafeIcon aria-hidden="true" icon={Film} /> Videos
              </button>
              <span>{mode === "album" ? selectedAlbum?.title : mode === "video" ? videoItems.find((video) => video.id === selectedVideoId)?.title : "Scroll to explore"}</span>
            </div>

            <div className="gallery-stage-viewport" ref={viewportRef}>
              <section aria-labelledby="gallery-photos-title" className="gallery-scroll-chapter gallery-photo-chapter" ref={photoChapterRef}>
                <div className="gallery-chapter-heading">
                  <div>
                    <p className="eyebrow">Photos</p>
                    <h3 id="gallery-photos-title">{mode === "album" ? selectedAlbum?.title : "Follow every chapter"}</h3>
                  </div>
                  <span>{mode === "album" ? `${storyImages.length} photos` : `All ${galleryAlbums.length} albums`}</span>
                </div>

                <div aria-hidden={mode === "album"} className="gallery-track gallery-photo-overview-track" ref={overviewPhotoTrackRef}>
                  {galleryAlbums.map((album, index) => <AlbumCard key={album.id} {...albumCardProps(album, index)} />)}
                </div>

                <div aria-hidden={mode !== "album"} className="gallery-album-story">
                  <div className="gallery-compact-trail" aria-label="Switch photo album">
                    {galleryAlbums.map((album, index) => <AlbumCard key={`trail-${album.id}`} {...albumCardProps(album, index, true)} />)}
                  </div>
                  <div className="gallery-track gallery-photo-detail-track" ref={detailPhotoTrackRef}>
                    {storyImages.map((image, index) => (
                      <article className="gallery-story-photo-card" data-flip-id={index === 0 ? `album:${selectedAlbum?.id}` : undefined} key={image.id}>
                        <button aria-label={`Open ${image.title} from ${selectedAlbum?.title}`} onClick={() => setActiveIndex(index)} type="button">
                          <Image alt={image.alt} fill loading={index < 2 ? "eager" : "lazy"} sizes="(max-width: 900px) 46vw, 61.8vw" src={image.src} />
                          <span>{image.title}</span>
                        </button>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <section aria-labelledby="gallery-videos-title" className="gallery-scroll-chapter gallery-video-chapter" ref={videoChapterRef}>
                <div className="gallery-chapter-heading">
                  <div><p className="eyebrow">Videos</p><h3 id="gallery-videos-title">Watch the story unfold</h3></div>
                  <span>Complete all {videoItems.length} films before Partners</span>
                </div>
                <div className="gallery-track gallery-video-track" ref={videoTrackRef}>
                  {videoItems.map((video) => (
                    <VideoCard
                      compact={mode === "video" && video.id !== selectedVideoId}
                      expanded={mode === "video" && video.id === selectedVideoId}
                      isSelected={video.id === selectedVideoId}
                      key={video.id}
                      onOpen={openVideo}
                      transitionLocked={isTransitioning}
                      video={video}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {activeImage ? (
        <div
          aria-label="Gallery image viewer"
          aria-modal="true"
          className="gallery-lightbox"
          onPointerDown={(event) => { touchStartX.current = event.clientX; }}
          onPointerUp={(event) => {
            if (touchStartX.current !== null && Math.abs(touchStartX.current - event.clientX) > 48) {
              setActiveIndex((index) => index === null ? null : touchStartX.current! > event.clientX ? (index + 1) % storyImages.length : (index - 1 + storyImages.length) % storyImages.length);
            }
            touchStartX.current = null;
          }}
          role="dialog"
        >
          <button aria-label="Close gallery" className="gallery-lightbox-close" onClick={() => setActiveIndex(null)} type="button"><SafeIcon aria-hidden="true" icon={X} /></button>
          <button aria-label="Previous image" className="gallery-lightbox-nav is-prev" onClick={() => setActiveIndex((index) => index === null ? null : (index - 1 + storyImages.length) % storyImages.length)} type="button"><SafeIcon aria-hidden="true" icon={ChevronLeft} /></button>
          <figure className="gallery-lightbox-figure gallery-lightbox-content"><Image alt={activeImage.alt} className="gallery-lightbox-image" fill priority sizes="100vw" src={activeImage.src} /><figcaption><span>{selectedAlbum?.title}</span><strong>{activeImage.title}</strong><em className="gallery-counter">{(activeIndex ?? 0) + 1} / {storyImages.length}</em></figcaption></figure>
          <button aria-label="Next image" className="gallery-lightbox-nav is-next" onClick={() => setActiveIndex((index) => index === null ? null : (index + 1) % storyImages.length)} type="button"><SafeIcon aria-hidden="true" icon={ChevronRight} /></button>
        </div>
      ) : null}
    </section>
  );
}
