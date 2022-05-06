import { FunctionComponent } from "react"
import styled from "styled-components"
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
  background-color: ${style.PrimaryColor};
`

interface InterfacePortfolioSplash {
  className?: any
}

const PortfolioSplash: FunctionComponent<InterfacePortfolioSplash> = ({ className }) => {
  return <StyledSplashContainer className={className}>Check in iPhone SE5 Mode</StyledSplashContainer>
}

export default PortfolioSplash
