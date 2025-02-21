import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: space-between;

    @media only screen and (max-width: 768px) {
        height: 200vh;
    }
`

const Container = styled.div`
    height: 100%;
    width: 1300px;
    scroll-snap-align: center;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
    }
`

const Title = styled.h1`
    font-size: 75px;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const WhatIDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Line = styled.img`
    height: 5px;
`

const Subtitle = styled.h2`
    color: #d28add;
`

const Desc = styled.p`
    font-size: 24px;
    font-family: sans-serif;
    color: white;

    @media only screen and (max-width: 768px) {
        padding: 20px;
        text-align: center;
    }
`

const Button = styled.button`
    background-color: #d28add;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 3;
    position: relative;

    @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
    }
`

const Img = styled.img`
    width: 480px;
    height: 480px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    top: 60px;
    right: 20px;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to{
            transform: translateY(25px);
        }
    }

    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }
`
const Img2 = styled.img`
    width: 250px;
    height: 220px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 300px; 
    left: 200px; 
    animation: animate 2s infinite ease alternate;

    @media only screen and (max-width: 768px) {
        width: 200px;
        height: 200px;
        bottom: 200px; 
        left: 150px; 
    }
`

const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
            <Left>
                <Title>Hi, I'm Vincent</Title>
                <WhatIDo>
                    <Line src="./img/background/line.png"/>
                    <Subtitle>Student, Engineer, and Learner</Subtitle>
                </WhatIDo>
                <Desc>A UCSB student captivated by the intricacies of web design, computer architecture, embedded systems, and machine learning.</Desc>
                <Button onClick={() => window.open("/Vincent_Cheong_Resume.pdf", "_blank")} rel="noopener noreferrer">
                    My Resume
                </Button>
            </Left>
            <Right>
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[-3, 5, 1]} />
                    <Sphere args={[1, 100, 200]} scale={2.5}>
                        <MeshDistortMaterial
                            color="#6b27cb"
                            attach="material"
                            distort={0.45}
                            speed={1.5}
                        />
                    </Sphere>
                </Canvas>
                <Img src="./img/background/space1.png"/>
                <Img2 src="./img/background/laptop.webp"/>
            </Right>
        </Container>
    </Section>
  )
}

export default Hero