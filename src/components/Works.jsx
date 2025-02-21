// https://github.com/CesiumGS/gltf-pipeline --> the conversion of 3d-images to gltf files
// https://github.com/pmndrs/gltfjsx --> gltf files to jsx files to incorporate into code

import React, {useState} from 'react'
import styled from "styled-components"

import GameDev from "./3D-images/GameDev"
import WebDesign from "./3D-images/WebDesign"
import MobileApps from "./3D-images/MobileApps"
import DeepLearning from "./3D-images/DeepLearning"


const data = [
    "Deep Learning",
    "Game Dev",
    "Web Design",
    "Mobile Apps", 
]

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    position: relative;

    color: black;
    font-size: 12px;
    font-weight: 300;
`

const Container = styled.div`
    width: 1300px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
        padding: 30px;
        justify-content: center;
    }
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ListItem = styled.li`
    font-family: sans-serif;
    font-size: 85px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    position: relative;
    -webkit-text-stroke: 1px white;

    @media only screen and (max-width: 768px) {
        font-size: 24px;
        color: lightgray;
        -webkit-text-stroke: 0px;
    }

    &::after {
        content: "${(props) => props.text}";
        position: absolute;
        top: 0;
        left: 0;
        color: lightgray;
        width: 0px; 
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover::after {
        animation: moveText 0.4s linear both;
        @keyframes moveText {
        to {
            width: 100%;
        }
        }
    }
`

const Square = styled.div`
    width: 80px;
    height: 80px;
    background-color: #d0d098;
    position: absolute;
    top: 100px;
    right: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding: 8px;

    @media only screen and (max-width: 768px) {
        /* width: 40px;
        height: 40px;
        font-size: 10px; */
        display: none;
    }
`

const Right = styled.div`
    flex: 1;
`

const Works = () => {
    const [work, setWork] = useState("Deep Learning");  

    return (
        <Section id="works">
            <Container>  
                <Left>
                    <List>
                        {data.map((item) => (
                        <ListItem key={item} text={item} onClick={()=>setWork(item)}>
                            {item}
                        </ListItem>
                        ))}
                    </List>
                </Left>
                <Right>
                    <Square>
                        Try moving it around!
                    </Square>
                    {work === "Game Dev" ? (
                        <GameDev/>
                    ) : work === "Web Design" ? (
                        <WebDesign/>
                    ) : work === "Mobile Apps" ? (
                        <MobileApps/>
                    ) : (
                        <DeepLearning/>
                    )}
                </Right>
            </Container>
        </Section>
    )
}

export default Works