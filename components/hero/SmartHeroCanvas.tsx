"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function EnergyCore() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.35;
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
  });
  return (
    <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.65}>
      <Sphere ref={ref} args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#67e8f9"
          emissiveIntensity={0.35}
          roughness={0.25}
          metalness={0.85}
          distort={0.45}
          speed={2.2}
        />
      </Sphere>
    </Float>
  );
}

export default function SmartHeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
        className="h-full w-full"
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[8, 6, 8]} intensity={1.4} color="#a78bfa" />
        <pointLight position={[-6, -4, 4]} intensity={0.8} color="#22d3ee" />
        <EnergyCore />
      </Canvas>
    </div>
  );
}
