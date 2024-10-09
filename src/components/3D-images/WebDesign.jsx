import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ReactLogo from './ReactLogo'

const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.1}>
        <directionalLight position={[3,3,-1]} intensity={10}/>
        <ReactLogo/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={8}/>
    </Canvas>
  )
}

export default WebDesign