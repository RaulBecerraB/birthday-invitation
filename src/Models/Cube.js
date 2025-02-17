// components/Cubo3D.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

function Cubo3DModel() {
  const gltf = useLoader(GLTFLoader, '/path/to/your/model.glb');
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return <primitive object={gltf.scene} ref={meshRef} />;
}

export default function Cubo3D() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Cubo3DModel />
    </Canvas>
  );
}