import * as style from "../../variables/Variables"
import styled from "styled-components"

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem 0rem 0.5rem;
  width: 8rem;

  & * {
    margin: 0;
    padding-bottom: 1rem;
  }
`

const StyledIcon = styled.a`
  width: 2.7rem;
  color: ${style.SecondaryColor};
`

const StyledCardTitle = styled.h3`
  font-size: 1rem;
`

const StyledCardParagraph = styled.p`
  opacity: 0.7;
  font-size: 0.8rem;
`

const PortfolioOfferCard = ({ icon, title, paragraph }) => {
  return (
    <StyledCardContainer>
      <StyledIcon>{icon}</StyledIcon>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardParagraph>{paragraph}</StyledCardParagraph>
    </StyledCardContainer>
  )
}

export default PortfolioOfferCard
