import clsx from "clsx";
import type { CSSProperties } from "react";
import { scrollChapters } from "@/data";

type WorldStorySectionProps = {
  progress: number;
  reducedMotion: boolean;
};

type WorldScrollStyle = CSSProperties & {
  "--world-pair-count": number;
  "--world-progress": number;
};

type WorldPanelStyle = CSSProperties & {
  "--panel-opacity": number;
  "--panel-rotate-y": string;
  "--panel-rotate-z": string;
  "--panel-scale": number;
  "--panel-x": string;
  "--panel-y": string;
};

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const smoothstep = (value: number) => {
  const clamped = clamp01(value);
  return clamped * clamped * (3 - 2 * clamped);
};

export function WorldStorySection({ progress, reducedMotion }: WorldStorySectionProps) {
  const finalIndex = scrollChapters.length - 1;
  const sceneGroups = Array.from({ length: Math.ceil(scrollChapters.length / 2) }, (_, groupIndex) => groupIndex * 2);
  const groupCount = Math.max(1, sceneGroups.length);
  const boundedProgress = clamp01(progress);
  const pairProgress = Math.min(groupCount - 1, boundedProgress * groupCount);

  return (
    <section
      className={clsx("world-scroll", reducedMotion && "is-reduced")}
      data-world-scroll
      style={{ "--world-progress": progress, "--world-pair-count": groupCount } as WorldScrollStyle}
    >
      <div className="world-stage">
        <div className="world-stage-shell">
          <div className="world-panel-stack">
            {scrollChapters.map((chapter, index) => {
              const groupIndex = index === finalIndex ? Math.ceil(finalIndex / 2) : Math.floor(index / 2);
              const groupPhase = pairProgress - groupIndex;
              const phaseDistance = Math.abs(groupPhase);
              const visibility = 1 - smoothstep((phaseDistance - 0.1) / 0.52);
              const isLeftLane = index % 2 === 0;
              const isFinal = index === finalIndex;
              const isVisible = visibility > 0.02;
              const isIncoming = groupPhase < -0.1 && isVisible;
              const isOutgoing = groupPhase > 0.1 && isVisible && !isFinal;
              const isFinalFocus = isFinal && isVisible;
              const laneDirection = isLeftLane ? -1 : 1;
              const tiltDirection = isLeftLane ? 1 : -1;
              const slide = groupPhase * laneDirection * 7;
              const lift = Math.abs(groupPhase) * 0.55;
              const scale = isFinal ? 1.03 + visibility * 0.03 : 0.96 + visibility * 0.05;
              const panelStyle = {
                "--panel-opacity": visibility,
                "--panel-rotate-y": isFinal ? "0deg" : `${tiltDirection * 6}deg`,
                "--panel-rotate-z": isFinal ? "0deg" : `${tiltDirection * 5}deg`,
                "--panel-scale": scale,
                "--panel-x": isFinal ? "0vw" : `${slide}vw`,
                "--panel-y": `${lift}rem`
              } as WorldPanelStyle;

              return (
                <article
                  className={clsx(
                    "world-panel",
                    isLeftLane ? "is-left-lane" : "is-right-lane",
                    isVisible && "is-active",
                    isVisible && !isFinalFocus && "is-pair-visible",
                    isVisible && !isFinalFocus && (isLeftLane ? "is-pair-left" : "is-pair-right"),
                    isOutgoing && "is-outgoing",
                    isIncoming && "is-incoming",
                    isFinal && "is-final-scene",
                    isFinalFocus && "is-final-focus"
                  )}
                  key={chapter.id}
                  style={panelStyle}
                >
                  <span className="world-panel-number">{chapter.number}</span>
                  <p className="world-panel-meta">{chapter.meta}</p>
                  <h2>{chapter.title}</h2>
                  <p>{chapter.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
