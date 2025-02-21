"use client";
import React, { useTransition, useState} from 'react'
import styled from "styled-components"

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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

const Img = styled.img`
    width: 400px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
        position: static; 
        display: block;
        margin-left: auto; 
        margin-right: auto; 
        margin-top: 250px; 
    }
`

const Left = styled.div`
    flex: 1.2;
    position: relative;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 20px;
`

const Title = styled.div`
    font-size: 40px;
    font-weight: 600;
    color: #d28add;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const Desc = styled.div`
    font-size: 20px;
    font-family: sans-serif;
    color: white;

    .paragraph {
        margin-bottom: 1em;
        font-size: 24px;
    }

    @media only screen and (max-width: 768px) {
        padding: 20px;
        text-align: center;
    }
`

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
    <Section id="about">
        <Container>
            <Left>
                <Img src="./img/background/pfp.jpg"/>
            </Left>
            <Right>
                <Title>About Me</Title>
                <Desc>
                    <p className="paragraph">I am currently an aspiring third year computer engineer student at UC Santa Barbara, passionate about building innovative and interactive technologies. My academic and hands-on experiences have given me a strong foundation in areas like full-stack development and embdded systems. I have worked with a variety of technologies including Python, C++, Java, JavaScript, HTML, CSS, SQL, and Git, with a particular interest in utilizing frameworks like PyTorch and TensorFlow for machine learning applications.</p>
                    <p className="paragraph">Beyond my technical skills, I enjoy collaborating on complex projects, having worked both independently and as part of teams. My work at UCSB's ArchLab, where I focused on automating control logic for distributed systems, has further honed my problem-solving skills and ability to optimize hardware and software. I am always seeking new challenges to expand my skill set, and I'm enthusiastic about contributing to impactful, real-world projects.</p>
                </Desc>
            </Right>
        </Container>
    </Section>
  )
}

export default About