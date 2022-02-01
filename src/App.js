import PortfolioNavbar from "./components/navbar/PortfolioNavbar"

import PortfolioProjects from "./pages/PortfolioProjects"
import PortfolioAbout from "./pages/PortfolioAbout"

import { Routes, Route } from "react-router"
import styled from "styled-components"
import PortfolioHero from "./components/hero/PortfolioHero"

const StyledWebsiteContainer = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
`

function App() {
  return (
    <StyledWebsiteContainer>
      <PortfolioNavbar />
      <Routes>
        <Route path="projects" element={<PortfolioProjects />} />
        <Route path="about" element={<PortfolioAbout />} />
      </Routes>
      <PortfolioHero />
    </StyledWebsiteContainer>
  )
}

export default App
