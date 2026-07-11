"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryAlbums } from "@/data/gallery";
import { SafeIcon } from "../ui/SafeIcon";

type GalleryItem = {
  albumId: string;
  albumTitle: string;
  alt: string;
  height?: number;
  id: string;
  src: string;
  title: string;
  width?: number;
};

const allFilter = "all";
const initialImageCount = 24;
const loadMoreCount = 24;

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState(allFilter);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(initialImageCount);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const allImages = useMemo<GalleryItem[]>(
    () =>
      galleryAlbums.flatMap((album) =>
        album.images.map((image) => ({
          ...image,
          albumId: album.id,
          albumTitle: album.title
        }))
      ),
    []
  );

  const visibleImages = useMemo(
    () =>
      activeFilter === allFilter
        ? allImages
        : allImages.filter((image) => image.albumId === activeFilter),
    [activeFilter, allImages]
  );

  const displayedImages = visibleImages.slice(0, visibleCount);
  const activeImage = activeIndex === null ? null : visibleImages[activeIndex];
  const canLoadMore = visibleCount < visibleImages.length;

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index === null ? index : (index - 1 + visibleImages.length) % visibleImages.length));
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % visibleImages.length));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage, visibleImages.length]);

  const openLightbox = (imageId: string) => {
    const index = visibleImages.findIndex((image) => image.id === imageId);
    setActiveIndex(index >= 0 ? index : null);
  };

  const showPrevious = () => {
    setActiveIndex((index) => (index === null ? index : (index - 1 + visibleImages.length) % visibleImages.length));
  };

  const showNext = () => {
    setActiveIndex((index) => (index === null ? index : (index + 1) % visibleImages.length));
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(initialImageCount);
    setActiveIndex(null);
  };

  const handleLoadMore = () => {
    setVisibleCount((count) => Math.min(count + loadMoreCount, visibleImages.length));
  };

  const handleTouchEnd = (x: number) => {
    if (touchStartX === null) {
      return;
    }

    const distance = touchStartX - x;
    if (Math.abs(distance) > 48) {
      if (distance > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section className="site-section gallery-section gallery" id="gallery-finale">
      <div className="section-inner gallery-container">
        <div className="section-heading is-left gallery-header" data-animate="text">
          <p>Gallery</p>
          <h2 className="gallery-title">Our Memory &amp; Momentum</h2>
          <span className="gallery-subtitle">
            Relive the memorable moments from previous BTA GLOBALx celebrations, award ceremonies,
            networking sessions, and international recognitions.
          </span>
        </div>

        <div className="gallery-filter-bar gallery-filters" aria-label="Gallery category filters">
          <button
            className={activeFilter === allFilter ? "gallery-filter gallery-filter--active is-active" : "gallery-filter"}
            onClick={() => handleFilterChange(allFilter)}
            type="button"
          >
            All
            <span>{allImages.length}</span>
          </button>
          {galleryAlbums.map((album) => (
            <button
              className={activeFilter === album.id ? "gallery-filter gallery-filter--active is-active" : "gallery-filter"}
              key={album.id}
              onClick={() => handleFilterChange(album.id)}
              type="button"
            >
              {album.title}
              <span>{album.images.length}</span>
            </button>
          ))}
        </div>

        <div className="premium-gallery-grid gallery-grid" data-stagger>
          {displayedImages.map((image, index) => (
            <article
              className="premium-gallery-card gallery-item"
              data-stagger-item
              key={image.id}
            >
              <button
                aria-label={`Open ${image.title} from ${image.albumTitle}`}
                className="premium-gallery-trigger"
                onClick={() => openLightbox(image.id)}
                type="button"
              >
                <Image
                  className="gallery-image"
                  alt={image.alt}
                  height={image.height ?? 900}
                  loading={index < 8 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 32vw, (max-width: 1440px) 24vw, 18vw"
                  src={image.src}
                  width={image.width ?? 1200}
                />
                <span className="premium-gallery-overlay gallery-overlay">
                  <span>
                    <em className="gallery-category">{image.albumTitle}</em>
                    <strong className="gallery-caption">{image.title}</strong>
                  </span>
                  <span className="premium-gallery-cta">View Gallery</span>
                </span>
              </button>
            </article>
          ))}
        </div>

        {canLoadMore ? (
          <button className="gallery-load-more" onClick={handleLoadMore} type="button">
            Load More
            <span>
              {Math.min(visibleCount, visibleImages.length)} / {visibleImages.length}
            </span>
          </button>
        ) : null}
      </div>

      {activeImage ? (
        <div
          aria-label="Gallery image viewer"
          aria-modal="true"
          className="gallery-lightbox"
          onPointerDown={(event) => setTouchStartX(event.clientX)}
          onPointerUp={(event) => handleTouchEnd(event.clientX)}
          role="dialog"
        >
          <button
            aria-label="Close gallery"
            className="gallery-lightbox-close"
            onClick={() => setActiveIndex(null)}
            type="button"
          >
            <SafeIcon aria-hidden="true" icon={X} />
          </button>

          <button
            aria-label="Previous image"
            className="gallery-lightbox-nav is-prev"
            onClick={showPrevious}
            type="button"
          >
            <SafeIcon aria-hidden="true" icon={ChevronLeft} />
          </button>

          <figure className="gallery-lightbox-figure gallery-lightbox-content">
            <Image
              className="gallery-lightbox-image"
              alt={activeImage.alt}
              fill
              priority
              sizes="100vw"
              src={activeImage.src}
            />
            <figcaption>
              <span>{activeImage.albumTitle}</span>
              <strong>{activeImage.title}</strong>
              <em className="gallery-counter">
                {(activeIndex ?? 0) + 1} / {visibleImages.length}
              </em>
            </figcaption>
          </figure>

          <button
            aria-label="Next image"
            className="gallery-lightbox-nav is-next"
            onClick={showNext}
            type="button"
          >
            <SafeIcon aria-hidden="true" icon={ChevronRight} />
          </button>
        </div>
      ) : null}
    </section>
  );
}
