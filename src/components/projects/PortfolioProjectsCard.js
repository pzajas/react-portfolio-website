import SecondaryTitle from "../../elements/titles/SecondaryTitle"
import img2 from "../../assets/img2.jpg"
import PrimaryButton from "../../elements/buttons/PrimaryButton"
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo"

import styled from "styled-components"

const StyledPortfolioProjectsCardContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  overflow-wrap: break-word;

  /* p {
    display: flex;
    justify-content: center;
  } */

  /* img {
    width: 100%;
    height: 100%;
    transition: all 1s ease;
  } */

  p {
    width: 100%;
  }
  button {
    width: 40%;
  }
`

const StyledPortfolioCardMoreInfo = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 20vh;
  width: 100%;
  height: 40vh;
  background-color: red;

  /* &:hover {
    position: absolute;
    top: 20vh;
    height: 40vh;
    background-color: rgba(40, 40, 40);
    transition: all 0.5s ease;
  }

  div,
  p {
    position: absolute;
    top: 10vh;
    padding: 0.5rem;
  } */
`

const StyledSecondaryTitle = styled(SecondaryTitle)`
  box-sizing: border-box;
  margin: 0;
  padding: 0.5rem;
  font-size: 1rem;
`

const StyledPortfolioProjectsCardButton = styled.button`
  position: absolute;
  top: 80%;
  opacity: 0.5;
  border: none;
  height: 1rem;
`

const StyledReactLogo = styled(ReactLogo)`
  width: 1.2rem;
  color: white;
  padding: 1rem;
`

const PortfolioProjectsCard = ({ className, img, text }) => {
  return (
    <StyledPortfolioProjectsCardContainer className={className}>
      <img src={img} />
      <StyledPortfolioCardMoreInfo>
        <StyledSecondaryTitle secondarySectionText="Learn More" />
        <div>{text}</div>
        <p>sdlkfjsdfsdfsdfsdfsfsdfsfsdfsdfsdsfsfsfsdfsdfsfsfdslfk</p>
        <StyledPortfolioProjectsCardButton>Visit</StyledPortfolioProjectsCardButton>
      </StyledPortfolioCardMoreInfo>
    </StyledPortfolioProjectsCardContainer>
  )
}

export default PortfolioProjectsCard
