import type { CSSProperties } from "react";
import Image from "next/image";
import { Quote, Sparkles } from "lucide-react";
import { speakerScenes } from "@/data";
import { getInitials } from "../utils/text";
import { SafeIcon } from "../ui/SafeIcon";

export function ForumDeepDiveSection() {
  return (
    <section className="site-section forum-deep-section" id="forum">
      <div className="section-inner forum-cinema-inner">
        <div className="section-heading is-left" data-animate="text">
          <p>Life Management Forum</p>
          <h2>Seven perspectives for a healthier, more purposeful life</h2>
          <span>
            Each scene pairs one speaker with one practical theme, giving the forum a clear rhythm
            instead of a static speaker list.
          </span>
        </div>
        <div className="speaker-cinema-index" aria-label="Speaker scene index">
          {speakerScenes.map((scene) => (
            <a href={`#speaker-${scene.number}`} key={scene.name}>
              <span>{scene.number}</span>
              <strong>{scene.vibe}</strong>
            </a>
          ))}
        </div>
        <div className="speaker-cinema-stack">
          {speakerScenes.map((scene) => (
            <article
              className="speaker-cinema-scene"
              data-cinema-scene
              id={`speaker-${scene.number}`}
              key={scene.name}
              style={{ "--speaker-accent": scene.accent } as CSSProperties}
            >
              <div className="speaker-scene-backdrop" aria-hidden="true">
                <Image
                  alt=""
                  fill
                  loading={scene.number === "01" ? "eager" : "lazy"}
                  sizes="(max-width: 900px) 100vw, 68vw"
                  src={scene.sceneImage}
                />
              </div>
              <div className="speaker-portrait-stage" data-scene-reveal>
                {scene.image ? (
                  <Image alt={scene.imageAlt ?? scene.name} fill sizes="(max-width: 900px) 80vw, 28vw" src={scene.image} />
                ) : (
                  <div className="speaker-portrait-pending" aria-label={`${scene.name} portrait slot`}>
                    <span>{getInitials(scene.name)}</span>
                    <strong>{scene.name}</strong>
                    <em>{scene.portraitNote}</em>
                  </div>
                )}
              </div>
              <div className="speaker-scene-copy">
                <span data-scene-reveal>{scene.number} / Speaker Scene</span>
                <h3 data-scene-reveal>{scene.name}</h3>
                <strong data-scene-reveal>{scene.role}</strong>
                <p data-scene-reveal>{scene.focus}</p>
                <blockquote data-scene-reveal>
                  <SafeIcon aria-hidden="true" icon={Quote} />
                  {scene.topic}
                </blockquote>
                <small data-scene-reveal>
                  <SafeIcon aria-hidden="true" icon={Sparkles} />
                  {scene.portraitNote}
                </small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
