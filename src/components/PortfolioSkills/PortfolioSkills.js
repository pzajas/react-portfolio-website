import PrimaryTitle from "../../elements/titles/PrimaryTitle"
import styled from "styled-components"

import * as style from "../../variables/Variables"
import ProgressBar from "../../elements/bars/ProgressBar"

const StyledSkillsContainer = styled.div`
  height: 100vh;
  padding: 1rem 2rem 1rem 2rem;
  scroll-snap-align: start;
`
const StyledSectionTitle = styled(PrimaryTitle)``
// const StyledListContainer = styled.div`
//   display: flex;
//   align-items: center;
//   li {
//     display: flex;
//     width: 100%;
//     height: 1.5rem;
//     list-style: none;
//     color: black;
//     padding-bottom: 0.5rem;
//   }

//   span {
//     min-width: 5rem;
//     color: ${style.PrimaryColor};
//     display: flex;
//     align-items: center;
//     background: white;
//     padding-left: 0.4rem;
//     padding-right: 0.4rem;
//   }

//   div {
//     width: 100%;
//     background-color: rgba(255, 255, 255, 0.1);
//     height: 100%;
//   }

const PortfolioSkills = () => {
  return (
    <StyledSkillsContainer>
      <StyledSectionTitle primarySectionText="I spent time with..." />
      <ProgressBar />
    </StyledSkillsContainer>
  )
}

export default PortfolioSkills
