import * as style from "../../variables/Variables"
import styled from "styled-components"

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6.8rem;
  border: solid 1px rgba(255, 255, 255, 0.02);
  text-align: center;
`

const StyledIcon = styled.a`
  width: 2.7rem;
  color: ${style.SecondaryColor};
  padding-top: 1rem;
`

const StyledCardTitle = styled.h3`
  font-size: 1rem;
`

const StyledCardParagraph = styled.p`
  opacity: 0.7;
  margin: 0;
  font-size: 0.8rem;
  padding-bottom: 1rem;
`

interface Props {
  icon: JSX.Element
  title: string
  paragraph: string
}

const PortfolioOfferCard = ({ icon, title, paragraph }: Props) => {
  return (
    <StyledCardContainer>
      <StyledIcon>{icon}</StyledIcon>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardParagraph>{paragraph}</StyledCardParagraph>
    </StyledCardContainer>
  )
}

export default PortfolioOfferCard
