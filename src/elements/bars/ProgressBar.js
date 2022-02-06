import { useState } from "react"
import styled from "styled-components"
import * as style from "../../variables/Variables"

const StyledProgressBarContainer = styled.div``

const StyledListContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;

  li {
    width: 100%;
    display: flex;
    height: 1.5rem;
    list-style: none;
    color: black;

    background-color: rgba(255, 255, 255, 0.05);
  }
`

const StyledLabel = styled.div`
  background-color: ${style.TeriaryColor};
  color: ${style.PrimaryColor};
  font-size: 0.8rem;
  text-transform: capitalize;
  min-width: 5rem;
  height: 1.5rem;
  min-width: 25%;
  color: black;
  display: flex;
  align-items: center;
  background: white;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${style.SecondaryColor};
  height: 100%;
  width: ${props => (props.percent ? props.percent : `100%`)};
  animation: identifier 3s alternate;

  @keyframes identifier {
    0% {
      width: 0%;
    }
  }
`

const ProgressBar = () => {
  const portfolioSkillsArray = [
    { language: "html", percent: "50%" },
    { language: "css", percent: "70%" },
    { language: "javascript", percent: "40%" },
    { language: "react", percent: "60%" },
  ]

  return (
    <StyledProgressBarContainer>
      {portfolioSkillsArray.map(skill => (
        <StyledListContainer key={skill.percent}>
          <StyledLabel>{skill.language}</StyledLabel>
          <li>
            <StyledDiv percent={skill.percent}></StyledDiv>
          </li>
        </StyledListContainer>
      ))}
    </StyledProgressBarContainer>
  )
}

export default ProgressBar
