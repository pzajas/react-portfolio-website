import { Link } from "react-router-dom"

import styled from "styled-components"

const StyledNavbarContainer = styled.div`
  height: 4rem;
  background-color: #181818;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  margin-bottom: 2rem;
`

const StyledLogoContainer = styled.div`
  font-size: 1.3rem;
  font-weight: 600;

  & span {
    color: orangered;
  }
`

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 2rem 0 2rem;

  gap: 0.2rem;
  background-color: #181818;
  position: absolute;
  right: 0;
  top: 4rem;

  width: 100%;
  border-bottom: 1px solid white;
  z-index: 1000;
  transition: height 0.5s ease, opacity 0.5s ease;
  opacity: ${props => (props.menuActive ? "1" : "0")};
  height: ${props => (props.menuActive ? "18%" : "0%")};

  &::before {
    width: 2rem;
    height: 2rem;
    background-color: red;
    position: absolute;
    z-index: 2222;
  }
`

const StyledNavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
  border-bottom: 1px solid #181818;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid orangered;
  }
`

const StyledHamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  transition: all 0.3s ease-in-out;
  transform: ${props => (props.menuActive ? "rotate(360deg)" : "rotate(0deg)")};

  cursor: pointer;
  & * {
    width: 1.4rem;
    height: 2px;
    background-color: white;
  }
`

const PortfolioNavbar = ({ menuActive, setMenuActive }) => {
  const handleToggleMenu = () => {
    setMenuActive(!menuActive)
  }
  return (
    <StyledNavbarContainer>
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
      <StyledHamburgerContainer onClick={handleToggleMenu} menuActive={menuActive}>
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
      </StyledHamburgerContainer>
    </StyledNavbarContainer>
  )
}

export default PortfolioNavbar
