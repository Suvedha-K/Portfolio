"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Nodes({ count = 140 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    for (let i = 0; i < count; i++) {
      const x1 = positions[i * 3];
      const y1 = positions[i * 3 + 1];
      const z1 = positions[i * 3 + 2];
      for (let j = i + 1; j < count; j++) {
        const x2 = positions[j * 3];
        const y2 = positions[j * 3 + 1];
        const z2 = positions[j * 3 + 2];
        const d = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
        if (d < 1.6) {
          linePositions.push(x1, y1, z1, x2, y2, z2);
        }
      }
    }
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    return geo;
  }, [positions, count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02;
      pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.05;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.02;
      linesRef.current.rotation.x = Math.sin(t * 0.05) * 0.05;
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#5EEAD4"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#5EEAD4" transparent opacity={0.08} />
      </lineSegments>
    </>
  );
}

export default function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Nodes />
      </Canvas>
    </div>
  );
}
