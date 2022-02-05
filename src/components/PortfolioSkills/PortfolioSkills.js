import PrimaryTitle from "../../elements/titles/PrimaryTitle"
import styled from "styled-components"

const StyledSkillsContainer = styled.div`
  height: 100vh;
  padding: 1rem 2rem 1rem 2rem;
  scroll-snap-align: start;
`
const StyledSectionTitle = styled(PrimaryTitle)``
const StyledListContainer = styled.div`
display: flex;
align-items:center;
li { 
    list-style: none;
    color: black;
    padding-bottom: .5rem;
  }

   span {     
      min-width: 5rem;
      color: #181818;
      display: flex;
      background: white;
      padding-left: 0.4rem;
      padding-right: 0.4rem;
    }

    div {
      flex-direction: row;

      width: 100%;
      height: 20px;
      background: orangered;
    }
  }
   
`

const PortfolioSkills = () => {
  const portfolioSkillsArray = ["html", "css", "javascript", "react"]

  return (
    <StyledSkillsContainer>
      <StyledSectionTitle primarySectionText="I spent time with..." />

      {portfolioSkillsArray.map(skill => (
        <StyledListContainer>
          <li>
            <span>{skill}</span>
            <div></div>
          </li>
        </StyledListContainer>
      ))}
    </StyledSkillsContainer>
  )
}

export default PortfolioSkills
