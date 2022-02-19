import SecondaryTitle from "../../elements/titles/SecondaryTitle"
import img2 from "../../assets/img2.jpg"
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo"

import styled from "styled-components"

const StyledPortfolioProjectsCardContainer = styled.div`
  img {
    width: 50%;
    height: 30vh;
    transition: all 1s ease;
  }
`

const StyledPortfolioCardMoreInfo = styled.div`
  position: absolute;
  top: 55vh;
  height: 5vh;
  width: 100%;
  background-color: white;
  /* display: grid;
    place-content: center; */
  transition: all 0.5s ease;
  overflow: hidden;

  &:hover {
    height: 50%;
    top: 0;
    background-color: rgba(255, 72, 0, 0.6);
    transition: all 0.5s ease;
  }
`

const StyledPortfolioProjectsCardButton = styled.button`
  position: absolute;
  top: 17vh;
  left: 0px;
  opacity: 0.5;
  border: none;
  height: 1rem;
`

const StyledReactLogo = styled(ReactLogo)`
  position: absolute;
  top: 15vh;
  right: 0px;
  margin-right: 1rem;
  width: 1.2rem;
  margin-top: 0;
`

const PortfolioProjectsCard = () => {
  return (
    <StyledPortfolioProjectsCardContainer>
      <img src={img2} />
      <div>Secondary Text</div>
      {/* <StyledPortfolioCardMoreInfo>
      
        <StyledPortfolioProjectsCardButton>Visit</StyledPortfolioProjectsCardButton>
        <StyledReactLogo />
      </StyledPortfolioCardMoreInfo> */}
    </StyledPortfolioProjectsCardContainer>
  )
}

export default PortfolioProjectsCard
