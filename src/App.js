import { useState } from "react"
import { Routes, Route } from "react-router"

import PortfolioNavbar from "./components/navbar/PortfolioNavbar"
import PortfolioHero from "./components/hero/PortfolioHero"
import PortfolioOffer from "./components/offer/PortfolioOffer"

import PortfolioProjects from "./pages/PortfolioProjects"
import PortfolioAbout from "./pages/PortfolioAbout"

import styled from "styled-components"

const StyledWebsiteContainer = styled.div`
  padding: 0;
  margin-right: 0;
  box-sizing: border-box;

  & * {
    font-family: "Montserrat", sans-serif;
  }
`

function App() {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <StyledWebsiteContainer>
      <PortfolioNavbar menuActive={menuActive} setMenuActive={setMenuActive} />
      {/* <Routes>
        <Route path="projects" element={<PortfolioProjects />} />
        <Route path="about" element={<PortfolioAbout />} />
      </Routes> */}
      <PortfolioHero menuActive={menuActive} />
      <PortfolioOffer />
    </StyledWebsiteContainer>
  )
}

export default App
