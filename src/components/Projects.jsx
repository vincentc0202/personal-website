import React from 'react'
import styled from "styled-components"

import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "NextJS Ecommerce Website",
        description: "A real time, responsive website to shop for items and pay through Stripe.",
        image: "/img/projects/ecommerce1.png",
        gitUrl: "https://github.com/vincentc0202/DecorGoods_ecommerce",
    },
    {
        id: 2, 
        title: "C++ Custom Language",
        description: "A custom Python-like language that utilizes abstract syntax trees to process, format, and output code.",
        image: "/img/projects/scrypt.png",
        gitUrl: "https://github.com/vincentc0202/scrypt",
    },
    {
        id: 3,
        title: "Rate My Resume",
        description: "A webapp that incorporates Amazon's Comprehend NLP service for users to upload and critique resumes anonymously.",
        image: "/img/projects/RateMyResume1.png",
        gitUrl: "https://github.com/https://github.com/jiwa310/RateMyResume"
    },

]

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 10px;

    font-size: 40px;
    font-weight: 600;
    color: #d28add;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Projects = () => {
    return (
        <Section id="projects">
        <Title>My Projects</Title>
        <Content>
            {projectsData.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    gitUrl={project.gitUrl}
                />
            ))}
        </Content>
        </Section>
    )
}

export default Projects