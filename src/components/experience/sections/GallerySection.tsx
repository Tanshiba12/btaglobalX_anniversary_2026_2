import Image from "next/image";
import { galleryTiles } from "../config/experienceContent";
export function GallerySection() {
  return (
    <section className="site-section gallery-section" id="gallery-finale">
      <div className="section-inner">
        <div className="section-heading is-left" data-animate="text">
          <p>Photos</p>
          <h2>Our Memory &amp; Momentum</h2>
        </div>
        <div className="gallery-wall" data-stagger>
          {galleryTiles.map((tile) => (
            <article className="gallery-tile" data-stagger-item key={tile.title}>
              <Image alt={tile.image.alt} fill sizes="(max-width: 900px) 50vw, 260px" src={tile.image.src} />
              <span>{tile.title}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
