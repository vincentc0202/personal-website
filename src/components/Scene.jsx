import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from "./3D-images/Brain"

const Loader = () => (
  <mesh>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial color="gray" />
  </mesh>
);

const Scene = () => (
  <Canvas>
    <Suspense fallback={<Loader />}>
      <ambientLight />
      <Model position={[0, 0, 0]} />
      <OrbitControls />
    </Suspense>
  </Canvas>
);

export default Scene;