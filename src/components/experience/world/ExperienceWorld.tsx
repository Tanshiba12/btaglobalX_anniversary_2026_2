"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdditiveBlending,
  BackSide,
  Color,
  DoubleSide,
  MathUtils,
  setConsoleFunction,
  Vector3
} from "three";
import { worldScenes } from "@/data";
import type { Vector3Tuple } from "@/types/content";

type ExperienceWorldProps = {
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

export function ExperienceWorld({ progress, reducedMotion }: ExperienceWorldProps) {
  if (reducedMotion) {
    return <div className="experience-world-fallback" aria-hidden="true" />;
  }

  return (
    <div className="experience-world" aria-hidden="true">
      <Canvas camera={{ fov: 46, position: [0, 2.2, 9.8] }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ExperienceStage progress={progress} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function ExperienceStage({ progress }: { progress: number }) {
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
      <ambientLight intensity={0.72} />
      <directionalLight color={color} intensity={2.05} position={[4, 7, 4]} />
      <pointLight color={color} intensity={16} position={[0, 2.6, -2.5]} />
      <VenueEnvironment accent={color} progress={progress} />
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
            <meshBasicMaterial color={index % 2 ? accent : "#ffffff"} transparent opacity={index % 2 ? 0.38 : 0.13} />
          </mesh>
          <mesh position={[4.8, 1.75, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <torusGeometry args={[1.72 + index * 0.025, 0.012, 8, 72, Math.PI]} />
            <meshBasicMaterial color={index % 2 ? accent : "#ffffff"} transparent opacity={index % 2 ? 0.38 : 0.13} />
          </mesh>
          <mesh position={[0, 0.018, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.28 + index * 0.1, 0.31 + index * 0.1, 80]} />
            <meshBasicMaterial color={accent} transparent opacity={0.14} side={DoubleSide} />
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
            <meshBasicMaterial blending={AdditiveBlending} color={index % 4 === 0 ? accent : "#ffffff"} transparent opacity={0.28} />
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
