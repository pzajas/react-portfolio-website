import { FunctionComponent } from "react"
import * as style from "../../variables/Variables"
import styled from "styled-components"

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 7rem;

  & * {
    margin: 0;
  }

  &:nth-child(odd) {
    padding: 0rem 0rem 0rem 1rem;
  }

  &:nth-child(even) {
    padding: 0rem 1rem 0rem 0rem;
  }
`

const StyledIcon = styled.a`
  padding-bottom: 2rem;
  width: 2.7rem;
  color: ${style.SecondaryColor};
`

const StyledCardTitle = styled.h3`
  font-size: 1rem;
  padding-bottom: 2rem;
`

const StyledCardParagraph = styled.p`
  opacity: 0.7;
  font-size: 0.8rem;
  margin-bottom: 2rem;
`

interface InterfacePortfolioOfferCard {
  icon: JSX.Element
  title: string
  paragraph: string
}

const PortfolioOfferCard: FunctionComponent<InterfacePortfolioOfferCard> = ({ icon, title, paragraph }) => {
  return (
    <StyledCardContainer>
      <StyledIcon>{icon}</StyledIcon>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardParagraph>{paragraph}</StyledCardParagraph>
    </StyledCardContainer>
  )
}

export default PortfolioOfferCard
