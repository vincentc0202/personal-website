import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from "styled-components"
import Console from './Console'

const GameDev = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.1}>
          <directionalLight position={[3,3,-1]} intensity={3}/>
          <Console/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5}/>
      </Canvas>
    </>
  )
}

export default GameDev