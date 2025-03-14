import React from 'react'
import styled from "styled-components"

const experiences = [
    {
        year: "Oct 2024 - Mar 2025",
        title: "Undergraduate Researcher",
        company: "UCSB ArchLab, Computer Architecture Research",
        description: [
            "Conducted research on automated control logic synthesis for distributed systems, optimizing HDL code to improve processor performance and minimize control flow errors.",
            "Enhanced logic correctness using Microsoft's Z3 SMT solvers, resulting in greater system reliability and simpler designs.",
            "Designed control logic synthesis tools in Yosys to extend support for Verilog and PyRTL, improving synchronization accuracy and reducing latency in fault-prone hardware systems.",
            "Developed a bitvector theory tailored for hardware semantics, enabling efficient modeling of netlists and RTL designs, and streamlining analysis for distributed hardware systems."
        ],
    },
    // {
    //     year: "Sep 2024 - Present",
    //     title: "Learning Assistant",
    //     company: "University of California, Santa Barbara",
    //     description: [
    //         "Assisted students in understanding fundamental computer science concepts, including object oriented programming, and data structures and algorithms.",
    //         "Held office hours to provide one-on-one support and clarify complex topics in coursework.",
    //         "Collaborated with professors to develop and review course materials, ensuring alignment with learning objectives.",
    //     ],
    // },
];

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    height: 100%;
    
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        background: #d28add;
        z-index: 1;
    }

    @media only screen and (max-width: 768px) {
        &::before {
            left: 20px;
        }
    }
`

const ExperienceItem = styled.div`
    position: relative;
    margin: 40px 0;
    width: calc(50% - 40px);
    left: ${props => props.align === "left" ? "0" : "calc(50% + 40px)"};
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    z-index: 2;

    /* visual dot for each experience */
    /* &::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background: #d28add;
        border-radius: 50%;
        top: 50%; 
        transform: translateY(-50%);
        ${props => props.align === "left" ? "left: calc(100% - 10px);" : "right: calc(100% + 30px);"}
    } */

    @media only screen and (max-width: 768px) {
        width: calc(100% - 80px);
        left: 60px;
        
        &::before {
            left: -40px;
            right: auto;
        }
    }
`

const Year = styled.div`
    color: #d28add;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    text-align: left;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: white;
    margin-bottom: 5px;
    text-align: left;
`

const Company = styled.div`
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    margin-bottom: 10px;
    text-align: left;
`

const Description = styled.div`
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
    padding-left: 20px;
`

const BulletPoint = styled.li`
    margin-bottom: 8px;
    text-align: left;
`

const Experience = () => {
    return (
        <Section id="experience">
            <Container>
                {experiences.map((exp, index) => (
                    <ExperienceItem 
                        key={index}
                        align={index % 2 === 0 ? "left" : "right"}
                    >
                        <Year>{exp.year}</Year>
                        <Title>{exp.title}</Title>
                        <Company>{exp.company}</Company>
                        <Description>
                            <ul>
                                {exp.description.map((point, i) => (
                                    <BulletPoint key={i}>{point}</BulletPoint>
                                ))}
                            </ul>
                        </Description>
                    </ExperienceItem>
                ))}
            </Container>
        </Section>
    )
}

export default Experience