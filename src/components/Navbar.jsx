import React from 'react'
import styled from "styled-components"

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%
    }

` 

const Container = styled.div`
    width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`

const Links = styled.div`
   display: flex;
   align-items: center;
   gap: 50px; 
`

const Logo = styled.img`
    height: 50px;
    
`

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const ListItem = styled.li`
    cursor: pointer;
`


const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
};

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                {/* https://app.logo.com/ */}
                <Logo src="./img/background/logo1.png"/>    
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem onClick={() => scrollToSection('about')}>About</ListItem>
                    <ListItem onClick={() => scrollToSection('projects')}>Projects</ListItem>
                    <ListItem onClick={() => scrollToSection('works')}>Works</ListItem>
                    <ListItem onClick={() => scrollToSection('contact')}>Contact</ListItem>
                </List>
            </Links>
        </Container>
    </Section>
  )
}

export default Navbar