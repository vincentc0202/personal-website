import React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Brain from './Brain';

const DeepLearning = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.03}>
        <Brain/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default DeepLearning;


