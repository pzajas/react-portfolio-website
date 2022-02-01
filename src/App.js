import PortfolioNavbar from "./components/navbar/PortfolioNavbar"

import PortfolioProjects from "./pages/PortfolioProjects"
import PortfolioAbout from "./pages/PortfolioAbout"

import { Routes, Route } from "react-router"
import styled from "styled-components"

const StyledWebsiteContainer = styled.div`
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
    </StyledWebsiteContainer>
  )
}

export default App
