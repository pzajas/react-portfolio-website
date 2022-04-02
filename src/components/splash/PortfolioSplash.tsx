import styled from "styled-components"
import StyledPrimarySectionTitle from "../../elements/titles/PrimaryTitle"
import * as style from "../../variables/Variables"

const StyledSplashContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: white;
  scroll-snap-align: start;
  background-color: transparent;
  color: ${style.TeriaryColor};
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 1.5rem;
  /* font-family: "Montserrat", sans-serif; */
  background-color: ${style.PrimaryColor};
`

const PortfolioSplash = ({ className }) => {
  return <StyledSplashContainer className={className}>Check in iPhone SE5 Mode</StyledSplashContainer>
}

export default PortfolioSplash