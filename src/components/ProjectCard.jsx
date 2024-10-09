import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

const StyledProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    margin: 10px;
    border-radius: 12px;
    transition: transform 0.2s ease, box-shadow 0.2s ease; /* Add transitions for transform and box-shadow */

    &:hover {
        transform: translateY(-5px) translateX(-5px); /* Move the card up slightly on hover */
        box-shadow: 0px 0px 10px 3px rgba(255, 255, 0, 0.658); /* Add yellow glow effect on hover */
    }

    @media only screen and (max-width: 768px) {
        height: 150px;
        padding: 0 50px;
        margin-bottom: 25px;
    }
`;

const ImageContainer = styled.div`
    height: 15rem; 
    border-top-left-radius: 12px; 
    border-top-right-radius: 12px;

    background: url(${props => props.imgUrl});
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat; 
`;

const TextContainer = styled.div`
    color: white;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 10px;
    background-color: #101010;
`;

const Title = styled.h5`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 5px;

    @media only screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

const Description = styled.p`
    color: #c2c2c2;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const ProjectCard = ({ title, description, imgUrl, gitUrl }) => {
    const handleProjectClick = () => {
        window.open(gitUrl, '_blank'); 
    };

    return (
        <StyledProjectCard onClick={handleProjectClick}>
            <ImageContainer imgUrl={imgUrl} />
            <TextContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextContainer>
        </StyledProjectCard>
    );
}


export default ProjectCard