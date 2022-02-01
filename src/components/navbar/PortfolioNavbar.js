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
    color: orange;
  }
`

const StyledLinkContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: flex-end;
  gap: 0.8rem;
  width: 6rem;
  background-color: #181818;
  padding-right: 2rem;
  /* position: absolute;
  top: 4rem;
  right: 0; */
`

const StyledNavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
  cursor: pointer;
`

const StyledHamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  & * {
    width: 1.4rem;
    height: 2px;
    background-color: white;
  }
`

const PortfolioNavbar = () => {
  return (
    <StyledNavbarContainer>
      <StyledLogoContainer>
        <StyledNavbarLink to="/">
          LO<span>GO</span>
        </StyledNavbarLink>
      </StyledLogoContainer>
      <StyledLinkContainer>
        <StyledNavbarLink to="/">Home</StyledNavbarLink>
        <StyledNavbarLink to="projects">Projects</StyledNavbarLink>
        <StyledNavbarLink to="about">About</StyledNavbarLink>
      </StyledLinkContainer>
      <StyledHamburgerContainer>
        <div></div>
        <div></div>
        <div></div>
      </StyledHamburgerContainer>
    </StyledNavbarContainer>
  )
}

export default PortfolioNavbar
