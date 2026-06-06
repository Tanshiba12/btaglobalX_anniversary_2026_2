import type { CSSProperties } from "react";
import Image from "next/image";
import { speakerScenes } from "@/data";
import { getInitials } from "../utils/text";

export function ForumDeepDiveSection() {
  return (
    <section className="site-section forum-deep-section" id="forum">
      <div className="section-inner forum-cinema-inner">
        <div className="section-heading is-left" data-animate="text">
          <p>Speakers + topics</p>
          <h2>The mind and life management board</h2>
          <span>Seven voices, seven prompts, seven cinematic shifts in the room.</span>
        </div>
        <div className="speaker-cinema-index" aria-label="Speaker scene index">
          {speakerScenes.map((scene) => (
            <a href={`#speaker-${scene.number}`} key={scene.name}>
              {scene.number}
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
                  sizes="(max-width: 900px) 100vw, 62vw"
                  src={scene.sceneImage}
                />
              </div>
              <div className="speaker-portrait-stage" data-scene-reveal>
                {scene.image ? (
                  <Image alt={scene.imageAlt ?? scene.name} fill sizes="(max-width: 900px) 80vw, 30vw" src={scene.image} />
                ) : (
                  <div className="speaker-portrait-pending" aria-label={`${scene.name} portrait slot`}>
                    <span>{getInitials(scene.name)}</span>
                    <em>Portrait slot</em>
                  </div>
                )}
              </div>
              <div className="speaker-scene-copy">
                <span data-scene-reveal>{scene.number}</span>
                <h3 data-scene-reveal>{scene.name}</h3>
                <strong data-scene-reveal>{scene.role}</strong>
                <p data-scene-reveal>{scene.focus}</p>
                <blockquote data-scene-reveal>{scene.topic}</blockquote>
                <small data-scene-reveal>
                  {scene.source === "official" ? "Official portrait loaded" : "Temporary portrait slot ready"}
                </small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
