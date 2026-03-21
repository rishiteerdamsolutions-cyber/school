"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function AdmissionsCore() {
  const orb = useRef<Mesh>(null);
  const ring = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (orb.current) {
      orb.current.rotation.y = t * 0.35;
      orb.current.rotation.x = Math.sin(t * 0.24) * 0.12;
    }
    if (ring.current) {
      ring.current.rotation.z = t * 0.28;
      ring.current.rotation.x = Math.cos(t * 0.2) * 0.25;
    }
  });

  return (
    <>
      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.55}>
        <Sphere ref={orb} args={[1, 64, 64]} scale={1.8}>
          <MeshDistortMaterial
            color="#22d3ee"
            emissive="#67e8f9"
            emissiveIntensity={0.42}
            roughness={0.22}
            metalness={0.9}
            distort={0.35}
            speed={1.8}
          />
        </Sphere>
      </Float>
      <Torus ref={ring} args={[2.6, 0.06, 24, 120]}>
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#c4b5fd"
          emissiveIntensity={0.35}
          metalness={0.85}
          roughness={0.22}
          transparent
          opacity={0.85}
        />
      </Torus>
    </>
  );
}

export default function SmartHeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6.1], fov: 42 }}
        dpr={[1, 1.7]}
        gl={{ alpha: true, antialias: true }}
        className="h-full w-full"
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.38} />
        <pointLight position={[8, 6, 8]} intensity={1.25} color="#a78bfa" />
        <pointLight position={[-6, -4, 4]} intensity={0.9} color="#22d3ee" />
        <AdmissionsCore />
      </Canvas>
    </div>
  );
}
