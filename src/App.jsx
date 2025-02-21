import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Scene from "./components/Scene"
import styled from "styled-components"
import Experience from "./components/Experience"


const Container = styled.div`
  height: 100vh;
  // scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/background/bg3.jpg") center/cover no-repeat;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
