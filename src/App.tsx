import { useEffect, useRef, useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import PortfolioPlans from "./components/future/PortfolioPlans"
import PortfolioAbout from "./components/about/PortfolioAbout"
import PortfolioContact from "./components/contact/PortfolioContact"
import PortfolioFooter from "./components/footer/PortfolioFooter"
import PortfolioHero from "./components/hero/PortfolioHero"
import PortfolioNavbar from "./components/navbar/PortfolioNavbar"
import PortfolioOffer from "./components/offer/PortfolioOffer"
import PortfolioProjects from "./components/projects/PortfolioProjects"
import PortfolioSplash from "./components/splash/PortfolioSplash"
import PortfolioSkills from "./components/skills/PortfolioSkills"

const StyledWebsiteContainer = styled.div`
  padding: 0;
  margin-right: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  & * {
    font-family: "Poppins", sans-serif;
  }
`
const StyledPortfolioSplash = styled(PortfolioSplash)`
  font-size: 3rem;
  transition: all 2s linear;

  &.fade-appear {
    opacity: 1;
  }

  &.fade-appear-active {
    opacity: 0;
  }
`
const StyledPortfolioNavbar = styled(PortfolioNavbar)`
  transition: all 2s linear;
  &.hero-appear {
    opacity: 0;
  }
  &.hero-appear-active {
    opacity: 0;
  }
  &.hero-appear-done {
    opacity: 1;
  }
`
const StyledPortfolioHero = styled(PortfolioHero)`
  transition: all 1s linear;
  &.hero-appear {
    opacity: 0;
  }
  &.hero-appear-active {
    opacity: 0;
  }
  &.hero-appear-done {
    opacity: 1;
  }
`

const App = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [splashActive, setSplashActive] = useState(true)

  const myRef = useRef<HTMLDivElement>(null)

  const toTheTop = useRef<null | HTMLParagraphElement>(null)

  useEffect(() => {
    setTimeout(() => {
      setSplashActive(false)
    }, 2000)
  }, [])

  const handleScrollToProjects = () => {
    // @ts-ignore: Object is possibly 'null'.
    myRef.current.scrollIntoView()
  }

  const handleScrollToTheTop = () => {
    // @ts-ignore: Object is possibly 'null'.
    toTheTop.current.scrollIntoView()
  }

  const componentsArray = [
    { name: <StyledPortfolioNavbar toTheTop={toTheTop} menuActive={menuActive} setMenuActive={setMenuActive} /> },
    {
      name: <StyledPortfolioHero menuActive={menuActive} handleScrollToProjects={handleScrollToProjects} />,
    },
    { name: <PortfolioOffer /> },
    { name: <PortfolioPlans /> },
    { name: <PortfolioAbout /> },
    // @ts-ignore: Object is possibly 'null'.
    { name: <PortfolioProjects myRef={myRef} /> },
    { name: <PortfolioContact /> },
    { name: <PortfolioFooter handleScrollToTheTop={handleScrollToTheTop} /> },
  ]

  return (
    <StyledWebsiteContainer>
      {splashActive ? (
        <CSSTransition
          in={splashActive}
          timeout={{ exit: 3000, appear: 2000 }}
          classNames={"fade"}
          appear={true}
          unmountOnExit={true}
        >
          <StyledPortfolioSplash />
        </CSSTransition>
      ) : !splashActive ? (
        <TransitionGroup>
          {componentsArray.map((component, index) => (
            <CSSTransition key={index} timeout={{ appear: 100, enter: 100 }} classNames={"hero"} appear={true}>
              {component.name}
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : null}
    </StyledWebsiteContainer>
  )
}

export default App
