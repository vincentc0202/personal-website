import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Phone from './Phone'

const MobileApps = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.01}>
        <Phone/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={8}/>
    </Canvas>
  )
}

export default MobileApps