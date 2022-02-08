import StyledSectionTitle from "../../elements/titles/PrimaryTitle"
import StyledSecondaryTitle from "../../elements/titles/SecondaryTitle"
import styled from "styled-components"

import PortfolioSkillsChart from "./PortfolioSkillsChart"

const StyledSkillsContainer = styled.div`
  height: 100vh;
  padding: 1rem 2rem 1rem 2rem;
  scroll-snap-align: start;
`

const PortfolioSkills = () => {
  const portfolioSkillsArray = [
    { label: "html", type: "language", percent: "50%" },
    { label: "css", type: "language", percent: "70%" },
    { label: "javascript", type: "language", percent: "40%" },
    { label: "react", type: "language", percent: "60%" },
    { label: "styled-com", type: "library", percent: "80%" },
    { label: "redux", type: "library", percent: "30%" },
    { label: "react-select", type: "library", percent: "70%" },
    { label: "axios", type: "library", percent: "100%" },
    { label: "react-router", type: "library", percent: "80%" },
    { label: "git", type: "utility", percent: "75%" },
    { label: "github", type: "utility", percent: "40%" },
  ]

  const portfolioArrayLanguageFiltered = portfolioSkillsArray.filter(item => item.type === "language")
  const portfolioArrayTechFiltered = portfolioSkillsArray.filter(item => item.type === "library")
  const portfolioArrayUtilityFiltered = portfolioSkillsArray.filter(item => item.type === "utility")

  return (
    <StyledSkillsContainer>
      <StyledSectionTitle primarySectionText="I know some stuff ! " />

      <StyledSecondaryTitle secondarySectionText="Worked with those techs." />
      <PortfolioSkillsChart techFilteredArray={portfolioArrayLanguageFiltered} />

      <StyledSecondaryTitle secondarySectionText="Was introduced to libraries." />
      <PortfolioSkillsChart techFilteredArray={portfolioArrayTechFiltered} />

      <StyledSecondaryTitle secondarySectionText="And and also other things!" />
      <PortfolioSkillsChart techFilteredArray={portfolioArrayUtilityFiltered} />
    </StyledSkillsContainer>
  )
}

export default PortfolioSkills
