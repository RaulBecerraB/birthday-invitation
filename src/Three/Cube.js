"use client"; // Para Next.js App Router

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Componente del cubo giratorio
const RotatingCube = () => {
  const cubeRef = useRef();

  // Animación: hace que el cubo gire en cada frame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} /> {/* Define un cubo */}
      <meshStandardMaterial color="royalblue" /> {/* Color del cubo */}
    </mesh>
  );
};

// Componente de la escena
const Scene = () => {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      {/* Luz ambiental y direccional */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Cubo giratorio */}
      <RotatingCube />

      {/* Controles de cámara */}
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
