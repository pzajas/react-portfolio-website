import SecondaryTitle from "../../elements/titles/SecondaryTitle"
import img2 from "../../assets/img2.jpg"
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo"

import styled from "styled-components"

const StyledPortfolioProjectsCardContainer = styled.div`
  /* p {
    display: flex;
    justify-content: center;
  }
  div {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: 60vh;
    transition: all 1s ease;
  } */
`

const StyledPortfolioCardMoreInfo = styled.div`
  /* height: 30vh; */
  width: 100%;
  background-color: rgba(30, 30, 30);
  display: grid;
  place-content: center;
  transition: all 0.5s ease;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: flex-start; */
  opacity: 1;

  &:hover {
    /* height: 40vh; */
    background-color: rgba(30, 30, 30);
    transition: all 0.5s ease;
  }

  p {
    margin: 0;
  }
`

const StyledSecondaryTitle = styled(SecondaryTitle)`
  margin: 0;
  padding: 0.5rem;
  font-size: 1rem;
`

const StyledPortfolioProjectsCardButton = styled.button`
  opacity: 0.5;
  border: none;
  height: 1rem;
`

const StyledReactLogo = styled(ReactLogo)`
  width: 1.2rem;
  color: white;
  padding: 1rem;
`

const PortfolioProjectsCard = ({ className }) => {
  return (
    <StyledPortfolioProjectsCardContainer className={className}>
      pppppppppppppp
      {/* <button>sda</button> */}
      <StyledPortfolioCardMoreInfo>
        <StyledSecondaryTitle secondarySectionText="Currency Converter" />
        <p>loremsdasdkasdlasdladja asldjajsdlasd jalsdj asdlja sdjal jdj jljljlj da djalsdjajsdlkjad</p>

        <StyledPortfolioProjectsCardButton>Visit</StyledPortfolioProjectsCardButton>
      </StyledPortfolioCardMoreInfo>
    </StyledPortfolioProjectsCardContainer>
  )
}

export default PortfolioProjectsCard
