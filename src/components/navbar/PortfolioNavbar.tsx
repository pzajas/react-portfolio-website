import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import * as style from "../../variables/Variables"
import { LineHorizontal3 } from "@styled-icons/fluentui-system-filled/LineHorizontal3"

const StyledNavbarContainer = styled.div`
  background-color: ${style.PrimaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.7rem 2rem 0 2rem;
  scroll-snap-align: start;
`

const StyledLogoContainer = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: top;

  & span {
    color: ${style.SecondaryColor};
  }
`

const StyledLinkContainer = styled.div<{ menuActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 2rem 0 2rem;

  gap: 0.3rem;
  background-color: ${style.PrimaryColor};
  position: absolute;
  right: 0;
  top: 4rem;

  width: 100%;
  border-bottom: 1px solid ${style.TeriaryColor};
  z-index: 1000;
  transition: height 0.5s ease, opacity 0.9s ease;

  opacity: ${props => (props.menuActive ? "1" : "0")};
  height: ${props => (props.menuActive ? "8rem" : "0%")};

  & * {
    transition: opacity 0.1s ease;
    opacity: ${props => (props.menuActive ? "1" : "0")};
  }
`

const StyledNavbarLink = styled(Link)`
  text-align: right;
  text-decoration: none;
  color: ${style.TeriaryColor};
  background-color: ${style.PrimaryColor};
  /* padding-bottom: 0.8rem; */

  cursor: pointer;

  &:hover {
    width: 20%;
    transition: all 0.5s ease-in-out;
    border-bottom: 1px solid ${style.SecondaryColor};
  }
`

const StyledHamburgerContainer = styled(LineHorizontal3)<{ menuActive: boolean }>`
  display: flex;
  width: 1.7rem;
  color: white;
  flex-direction: column;
  gap: 0.3rem;
  transition: all 0.3s ease-in-out;
  transform: ${props => (props.menuActive ? "rotate(360deg)" : "rotate(0deg)")};

  cursor: pointer;
  & * {
    width: 1.4rem;
    height: 2px;
    background-color: ${style.TeriaryColor};
    pointer-events: ${props => (props.menuActive ? "none" : "auto")};
  }
`

interface InterfacePortfolioNavbar {
  menuActive: boolean
  className?: any
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}

const PortfolioNavbar: FunctionComponent<InterfacePortfolioNavbar> = ({ menuActive, className, setMenuActive }) => {
  const handleToggleMenu = () => {
    setMenuActive(!menuActive)
  }
  return (
    <StyledNavbarContainer className={className}>
      <StyledLogoContainer>
        <StyledNavbarLink to="/">
          LO<span>GO</span>
        </StyledNavbarLink>
      </StyledLogoContainer>
      <StyledLinkContainer onClick={handleToggleMenu} menuActive={menuActive}>
        <StyledNavbarLink to="/">Home</StyledNavbarLink>
        <StyledNavbarLink to="projects">Projects</StyledNavbarLink>
        <StyledNavbarLink to="about">About</StyledNavbarLink>
      </StyledLinkContainer>
      <StyledHamburgerContainer onClick={handleToggleMenu} menuActive={menuActive} />
    </StyledNavbarContainer>
  )
}

export default PortfolioNavbar
