import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort"

import * as palette from "../../variables/Variables"
import styled from "styled-components"

import PrimaryButton from "../../elements/buttons/PrimaryButton"

const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  background-color: ${palette.PrimaryColor};
  margin-top: 0;
  color: ${palette.TeriaryColor};
  padding: 0 2rem 0 2rem;
  gap: 0.1em;
  margin-bottom: 2rem;

  opacity: ${props => (props.menuActive ? "0.4" : "1")};
`
const StyledHeroText = styled.div`
  & * {
    margin-top: 0;
    align-items: center;
    /* text-align: center; */
  }
  & h1 {
    letter-spacing: 0.05rem;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const StyledHeroButtonContainer = styled.div`
  display: flex;
`

const StyledArrowShort = styled(ArrowRightShort)`
  padding: 0rem 0rem 0.5rem 0.3rem;
  width: 1.3rem;
`

const PortfolioHero = ({ menuActive }) => {
  return (
    <StyledHeroContainer menuActive={menuActive}>
      <StyledHeroText>
        <h1>
          Hello there!<br></br> I design unique web experience.
        </h1>
      </StyledHeroText>

      <StyledHeroButtonContainer>
        <PrimaryButton buttonText="See my work" /> <StyledArrowShort />
      </StyledHeroButtonContainer>
    </StyledHeroContainer>
  )
}

export default PortfolioHero
