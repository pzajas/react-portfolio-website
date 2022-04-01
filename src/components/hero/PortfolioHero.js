import styled from "styled-components"
import PrimaryButton from "../../elements/buttons/PrimaryButton"
import * as style from "../../variables/Variables"

const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  background-color: ${style.PrimaryColor};
  margin-top: 0;
  color: ${style.TeriaryColor};
  padding: 0 2rem 0 2rem;
  gap: 0.1em;
  margin-bottom: 2rem;

  opacity: ${props => (props.menuActive ? "0.4" : "1")};
`
const StyledHeroText = styled.div`
  & * {
    margin-top: 0;
    align-items: center;
  }
  & h1 {
    letter-spacing: 0.05rem;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  & span {
    color: ${style.SecondaryColor};
  }
`

const StyledHeroButtonContainer = styled.div`
  display: flex;
  opacity: 0;
  animation-delay: 3s;
  animation: slideInFromLeft 1s 1.5s forwards;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

const PortfolioHero = ({ menuActive, handleScrollToProjects, className }) => {
  return (
    <StyledHeroContainer menuActive={menuActive} className={className}>
      <StyledHeroText>
        <h1>
          Hello there!<br></br> I design <span>unique</span> web experience.
        </h1>
      </StyledHeroText>

      <StyledHeroButtonContainer>
        <PrimaryButton buttonText="See my work" primaryButtonClick={handleScrollToProjects} />
      </StyledHeroButtonContainer>
    </StyledHeroContainer>
  )
}

export default PortfolioHero
