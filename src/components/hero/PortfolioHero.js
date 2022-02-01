import styled from "styled-components"

import PrimaryButton from "../../elements/buttons/PrimaryButton"
import hero from "../../assets/hero.png"

const StyledHeroContainer = styled.div`
  background-color: #181818;
  margin-top: 0;
  color: white;
  display: flex;
  padding: 0 2rem 0 2rem;
  gap: 0.1em;
  flex-direction: column;

  margin-bottom: 2rem;
`
const StyledHeroText = styled.div`
  & * {
    margin-top: 0;
    align-items: center;
    text-align: center;
  }
  & h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  & p {
    opacity: 0.7;
    margin-bottom: 2rem;
  }
`
const StyledHeroImage = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  & img {
    width: 70%;
  }
`

const StyledHeroButtonContainer = styled.div``

const PortfolioHero = () => {
  return (
    <StyledHeroContainer>
      <StyledHeroText>
        <h1>
          Hello there,<br></br> I design unique web experience!
        </h1>
        <p>A passionate react developer from Poland</p>
      </StyledHeroText>

      <StyledHeroImage>
        <img src={hero} />
      </StyledHeroImage>

      <StyledHeroButtonContainer>
        <PrimaryButton>See Projects</PrimaryButton>
      </StyledHeroButtonContainer>
    </StyledHeroContainer>
  )
}

export default PortfolioHero
