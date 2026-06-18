"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  AdditiveBlending,
  BackSide,
  Color,
  DoubleSide,
  MathUtils,
  setConsoleFunction,
  TextureLoader,
  Vector3
} from "three";
import { sponsorAssets } from "@/data/assets";
import { speakerScenes, worldScenes } from "@/data";
import type { SceneActor, Vector3Tuple } from "@/types/content";

type ExperienceWorldProps = {
  activeSpeaker: number;
  progress: number;
  reducedMotion: boolean;
};

const tmpPosition = new Vector3();
const tmpTarget = new Vector3();
const tmpColor = new Color();
const sceneColor = new Color();

setConsoleFunction((type: "error" | "log" | "warn", message: unknown, ...params: unknown[]) => {
  if (type === "warn" && String(message).includes("Clock: This module has been deprecated")) {
    return;
  }
  const method = type === "error" ? console.error : type === "warn" ? console.warn : console.log;
  method(message, ...params);
});

type WorldNodeRef = {
  children: Array<{ position: { x: number; y: number; z: number } }>;
  lookAt: (target: { x: number; y: number; z: number }) => void;
  position: { x: number; y: number; z: number };
  rotation: { y: number };
  scale: { setScalar: (scale: number) => void; x: number };
};

type WorldVectorRef = {
  set: (x: number, y: number, z: number) => void;
  x: number;
  y: number;
  z: number;
};

export function ExperienceWorld({ activeSpeaker, progress, reducedMotion }: ExperienceWorldProps) {
  if (reducedMotion) {
    return <div className="experience-world-fallback" aria-hidden="true" />;
  }

  return (
    <div className="experience-world" aria-hidden="true">
      <Canvas camera={{ fov: 46, position: [0, 2.2, 9.8] }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ExperienceStage activeSpeaker={activeSpeaker} progress={progress} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function ExperienceStage({ activeSpeaker, progress }: { activeSpeaker: number; progress: number }) {
  const sceneIndexFloat = progress * (worldScenes.length - 1);
  const currentIndex = Math.min(worldScenes.length - 1, Math.floor(sceneIndexFloat));
  const nextIndex = Math.min(worldScenes.length - 1, currentIndex + 1);
  const currentScene = worldScenes[currentIndex];
  const nextScene = worldScenes[nextIndex];
  const localProgress = MathUtils.clamp(sceneIndexFloat - currentIndex, 0, 1);
  const color = currentScene.accent;

  useFrame(({ camera, clock, scene }) => {
    const eased = MathUtils.smoothstep(localProgress, 0, 1);
    lerpTuple(tmpPosition, currentScene.camera.position, nextScene.camera.position, eased);
    lerpTuple(tmpTarget, currentScene.camera.target, nextScene.camera.target, eased);

    const drift = Math.sin(clock.elapsedTime * 0.32) * 0.08;
    camera.position.set(tmpPosition.x, tmpPosition.y + drift, tmpPosition.z);
    camera.lookAt(tmpTarget);

    sceneColor.set(currentScene.accent);
    tmpColor.set(nextScene.accent);
    sceneColor.lerp(tmpColor, eased);
    scene.background = new Color("#050509").lerp(sceneColor, 0.08);
    scene.fog = null;
  });

  return (
    <>
      <ambientLight intensity={0.56} />
      <directionalLight color={color} intensity={1.6} position={[4, 7, 4]} />
      <pointLight color={color} intensity={12} position={[0, 2.6, -2.5]} />
      <VenueEnvironment accent={color} progress={progress} />
      <SponsorBillboards />
      <PortraitActors activeSpeaker={activeSpeaker} />
      <GuestSilhouettes progress={progress} />
      <SparkField accent={color} />
    </>
  );
}

function VenueEnvironment({ accent, progress }: { accent: string; progress: number }) {
  const root = useRef<WorldNodeRef | null>(null);

  useFrame(({ clock }) => {
    if (!root.current) return;
    root.current.rotation.y = MathUtils.degToRad(-18 + progress * 55 + Math.sin(clock.elapsedTime * 0.22) * 1.5);
  });

  return (
    <group ref={root}>
      <mesh position={[0, -0.05, -4.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 18, 12, 12]} />
        <meshStandardMaterial color="#08080f" metalness={0.18} roughness={0.44} />
      </mesh>
      <mesh position={[0, 2.2, -8.6]}>
        <planeGeometry args={[16, 6]} />
        <meshStandardMaterial color="#10101a" side={DoubleSide} />
      </mesh>
      <mesh position={[-7, 2.1, -4.2]} rotation={[0, Math.PI / 2.45, 0]}>
        <planeGeometry args={[12, 5.2]} />
        <meshStandardMaterial color="#0b0b14" side={DoubleSide} />
      </mesh>
      <mesh position={[7, 2.1, -4.2]} rotation={[0, -Math.PI / 2.45, 0]}>
        <planeGeometry args={[12, 5.2]} />
        <meshStandardMaterial color="#0b0b14" side={DoubleSide} />
      </mesh>
      {Array.from({ length: 9 }, (_, index) => (
        <group key={index} position={[0, 0, -index * 1.15]}>
          <mesh position={[-4.8, 1.75, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[1.72 + index * 0.025, 0.012, 8, 72, Math.PI]} />
            <meshBasicMaterial color={index % 2 ? accent : "#ffffff"} transparent opacity={index % 2 ? 0.28 : 0.09} />
          </mesh>
          <mesh position={[4.8, 1.75, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <torusGeometry args={[1.72 + index * 0.025, 0.012, 8, 72, Math.PI]} />
            <meshBasicMaterial color={index % 2 ? accent : "#ffffff"} transparent opacity={index % 2 ? 0.28 : 0.09} />
          </mesh>
          <mesh position={[0, 0.018, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.28 + index * 0.1, 0.31 + index * 0.1, 80]} />
            <meshBasicMaterial color={accent} transparent opacity={0.08} side={DoubleSide} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 3.8, 0]}>
        <sphereGeometry args={[16, 32, 16]} />
        <meshBasicMaterial color="#050509" side={BackSide} />
      </mesh>
    </group>
  );
}

function SponsorBillboards() {
  return (
    <group>
      {sponsorAssets.slice(0, 6).map((sponsor, index) => (
        <ImageBillboard
          activeOpacity={0.58}
          height={0.42}
          inactiveOpacity={0.18}
          key={sponsor.id}
          label={sponsor.name}
          position={[index % 2 === 0 ? -5.25 : 5.25, 1.74, -2.7 - index * 0.78]}
          src={sponsor.src}
          width={1.12}
        />
      ))}
    </group>
  );
}

function PortraitActors({ activeSpeaker }: { activeSpeaker: number }) {
  const actors = useMemo<SceneActor[]>(() => {
    return worldScenes.flatMap((scene) => scene.actors ?? []).filter((actor) => actor.role !== "sponsor");
  }, []);

  return (
    <group>
      {actors.map((actor) => {
        const speakerIndex = actor.role === "speaker" ? speakerScenes.findIndex((speaker) => speaker.name === actor.label) : -1;
        const isActiveSpeaker = speakerIndex === -1 || speakerIndex === activeSpeaker;
        const width = actor.role === "sponsor" ? 1.65 : 1.32;
        const height = actor.role === "sponsor" ? 0.72 : 1.92;

        if (!actor.image) {
          return <SilhouetteActor active={isActiveSpeaker} key={actor.id} position={actor.position} />;
        }

        return (
          <ImageBillboard
            active={isActiveSpeaker}
            height={height}
            key={actor.id}
            label={actor.label}
            position={actor.position}
            src={actor.image}
            width={width}
          />
        );
      })}
    </group>
  );
}

function ImageBillboard({
  active = true,
  activeOpacity = 0.88,
  height,
  inactiveOpacity = 0.08,
  label,
  position,
  src,
  width
}: {
  active?: boolean;
  activeOpacity?: number;
  height: number;
  inactiveOpacity?: number;
  label: string;
  position: Vector3Tuple;
  src: string;
  width: number;
}) {
  const texture = useLoader(TextureLoader, src);
  const ref = useRef<WorldNodeRef | null>(null);
  const glowRef = useRef<WorldNodeRef | null>(null);

  useFrame(({ camera, clock }) => {
    if (!ref.current) return;
    ref.current.lookAt(camera.position);
    ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.7 + position[0]) * 0.035;
    ref.current.scale.setScalar(MathUtils.lerp(ref.current.scale.x, active ? 1 : 0.46, 0.08));
    if (glowRef.current) {
      glowRef.current.lookAt(camera.position);
      glowRef.current.scale.setScalar(MathUtils.lerp(glowRef.current.scale.x, active ? 1 : 0.44, 0.08));
    }
  });

  return (
    <group position={position}>
      <mesh ref={glowRef} position={[0, 0, -0.035]}>
        <planeGeometry args={[width + 0.18, height + 0.18]} />
        <meshBasicMaterial color="#fdd142" transparent opacity={active ? 0.1 : 0.015} side={DoubleSide} />
      </mesh>
      <mesh name={label} ref={ref}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial map={texture} transparent opacity={active ? activeOpacity : inactiveOpacity} side={DoubleSide} toneMapped={false} />
      </mesh>
    </group>
  );
}

function SilhouetteActor({ active, position }: { active: boolean; position: Vector3Tuple }) {
  const ref = useRef<WorldNodeRef | null>(null);

  useFrame(({ camera, clock }) => {
    if (!ref.current) return;
    ref.current.lookAt(camera.position);
    ref.current.position.y = position[1] + Math.sin(clock.elapsedTime + position[0]) * 0.025;
    ref.current.scale.setScalar(MathUtils.lerp(ref.current.scale.x, active ? 1 : 0.5, 0.08));
  });

  return (
    <group position={position} ref={ref}>
      <mesh position={[0, 0.52, 0]}>
        <sphereGeometry args={[0.18, 24, 16]} />
        <meshStandardMaterial color={active ? "#fdd142" : "#ffffff"} transparent opacity={active ? 0.68 : 0.08} />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <capsuleGeometry args={[0.2, 0.76, 8, 18]} />
        <meshStandardMaterial color={active ? "#fdd142" : "#ffffff"} transparent opacity={active ? 0.58 : 0.06} />
      </mesh>
    </group>
  );
}

function GuestSilhouettes({ progress }: { progress: number }) {
  const ref = useRef<WorldNodeRef | null>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.children.forEach((child, index) => {
      child.position.x = -4.2 + ((clock.elapsedTime * 0.26 + progress * 6 + index * 1.2) % 8.4);
      child.position.z = -1.2 - index * 0.6;
      child.position.y = Math.sin(clock.elapsedTime * 2 + index) * 0.02;
    });
  });

  return (
    <group ref={ref}>
      {Array.from({ length: 5 }, (_, index) => (
        <group key={index}>
          <mesh position={[0, 0.58, 0]}>
            <sphereGeometry args={[0.09, 16, 12]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.16} />
          </mesh>
          <mesh position={[0, 0.24, 0]}>
            <capsuleGeometry args={[0.08, 0.38, 6, 12]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function SparkField({ accent }: { accent: string }) {
  const ref = useRef<WorldNodeRef | null>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.015;
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <group ref={ref}>
      {Array.from({ length: 80 }, (_, index) => {
        const angle = index * 1.618;
        const radius = 2.2 + (index % 13) * 0.42;
        return (
          <mesh key={index} position={[Math.cos(angle) * radius, 0.55 + (index % 9) * 0.34, -1.4 - (index % 17) * 0.45]}>
            <sphereGeometry args={[0.012 + (index % 3) * 0.006, 8, 8]} />
            <meshBasicMaterial blending={AdditiveBlending} color={index % 4 === 0 ? accent : "#ffffff"} transparent opacity={0.18} />
          </mesh>
        );
      })}
    </group>
  );
}

function lerpTuple(target: WorldVectorRef, from: Vector3Tuple, to: Vector3Tuple, progress: number) {
  target.set(
    MathUtils.lerp(from[0], to[0], progress),
    MathUtils.lerp(from[1], to[1], progress),
    MathUtils.lerp(from[2], to[2], progress)
  );
}
