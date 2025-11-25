import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SnowProps {
  centerX?: number;
  centerY?: number;
  centerZ?: number;
}

export function Snow({
  centerX = 0,
  centerY = 0,
  centerZ = 0,
}: SnowProps = {}) {
  const particlesRef = useRef<THREE.Points>(null);
  const centerRef = useRef({ x: centerX, y: centerY, z: centerZ });

  centerRef.current = { x: centerX, y: centerY, z: centerZ };

  const particleCount = 5000;
  const pos = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    pos[i3] = (Math.random() - 0.5) * 100 + centerX;
    pos[i3 + 1] = Math.random() * 30 + 5 + centerY;
    pos[i3 + 2] = (Math.random() - 0.5) * 100 + centerZ;
  }
  const positions = pos;

  const vel = new Float32Array(particleCount);
  for (let i = 0; i < particleCount; i++) {
    vel[i] = Math.random() * 0.5 + 0.1;
  }
  const velocities = vel;

  useFrame((state, delta) => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      positions[i3 + 1] -= velocities[i] * delta * 10;

      // Horizontal drift (wind effect)
      positions[i3] += Math.sin(state.clock.elapsedTime + i) * 0.01;
      positions[i3 + 2] += Math.cos(state.clock.elapsedTime + i) * 0.01;

      // Reset particle to top when it falls below ground
      if (positions[i3 + 1] < -10 + centerRef.current.y) {
        positions[i3] = (Math.random() - 0.5) * 100 + centerRef.current.x;
        positions[i3 + 1] = Math.random() * 30 + 5 + centerRef.current.y;
        positions[i3 + 2] = (Math.random() - 0.5) * 100 + centerRef.current.z;
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
