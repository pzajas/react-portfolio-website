import { Route, Routes } from "react-router"
import { useRef, useState } from "react"

import PortfolioAbout from "./components/about/PortfolioAbout"
import PortfolioHero from "./components/hero/PortfolioHero"
import PortfolioNavbar from "./components/navbar/PortfolioNavbar"
import PortfolioOffer from "./components/offer/PortfolioOffer"
import PortfolioProjects from "./components/projects/PortfolioProjects"
import PortfolioSkills from "./components/PortfolioSkills/PortfolioSkills"
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

  const myRef = useRef(null)

  const handleScrollToProjects = () => myRef.current.scrollIntoView()

  return (
    <StyledWebsiteContainer>
      {/* <Routes>
        <Route path="projects" element={<PortfolioProjects />} />
        <Route path="about" element={<PortfolioAbout />} />
      </Routes> */}
      <PortfolioNavbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <PortfolioHero menuActive={menuActive} handleScrollToProjects={handleScrollToProjects} />
      <PortfolioOffer />
      <PortfolioSkills />
      <PortfolioAbout />
      <PortfolioProjects myRef={myRef} />
    </StyledWebsiteContainer>
  )
}

export default App
