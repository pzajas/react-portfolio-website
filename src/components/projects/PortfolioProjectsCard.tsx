import { FunctionComponent } from "react"
import img1 from "../../assets/img1.jpg"
import SecondaryTitle from "../../elements/titles/SecondaryTitle"
import PrimaryButton from "../../elements/buttons/PrimaryButton"
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo"
import * as style from "../../variables/Variables"

import styled from "styled-components"

const StyledPortfolioProjectsCardContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  overflow-wrap: break-word;
`

const StyledPortfolioCardMoreInfo = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 51vh;
  width: 100%;
  height: 9vh;
  background-color: rgba(35, 35, 35);
  text-align: left;
  padding: 1rem;
  transition: all 0.5s ease;

  p {
  }

  & * {
    padding: 0rem 0rem 1rem 0rem;
  }

  div {
    box-sizing: border-box;
    margin: 0;
  }

  &:hover {
    position: absolute;
    top: 0vh;
    height: 60vh;
    background-color: rgba(40, 40, 40);
    transition: all 0.5s ease;
  }
`

const StyledP = styled.p`
  box-sizing: border-box;
  font-size: 0.7rem;
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
`

const StyledSecondaryTitle = styled(SecondaryTitle)`
  box-sizing: border-box;
  margin: 0;
  font-size: 1rem;
`

const StyledPortfolioProjectsCardButton = styled(PrimaryButton)`
  padding: 0;
  font-size: 1rem;
  position: absolute;
  top: 51vh;
`

interface InterfacePortfolioProjectsCard {
  className?: any
  image: string
  name: string
  description: string
}

const PortfolioProjectsCard: FunctionComponent<InterfacePortfolioProjectsCard> = ({
  className,
  image,
  name,
  description,
}) => {
  return (
    <StyledPortfolioProjectsCardContainer className={className}>
      <img src={image} />
      <StyledPortfolioCardMoreInfo>
        <StyledSecondaryTitle secondarySectionText="Learn More" />
        <StyledSecondaryTitle secondarySectionText={name} />
        <StyledP>{description}</StyledP>
        <StyledPortfolioProjectsCardButton type="button" buttonText="Visit" />
      </StyledPortfolioCardMoreInfo>
    </StyledPortfolioProjectsCardContainer>
  )
}

export default PortfolioProjectsCard
