import styled from "styled-components"
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo"
// import * as style from "../../../variables/Variables"

const StyledPortfolioSkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.2rem;
  width: 80vw;
  height: 6vh;
  background-color: #252525;
`

const StyledIcon = styled(ReactLogo)`
  height: 2rem;
`

const PortfolioSkills = () => {
  return (
    <StyledPortfolioSkillsContainer>
      <StyledIcon />
    </StyledPortfolioSkillsContainer>
  )
}

export default PortfolioSkills
