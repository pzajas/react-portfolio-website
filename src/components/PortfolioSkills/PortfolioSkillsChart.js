import styled from "styled-components"
import * as style from "../../variables/Variables"

const StyledChartContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;

  li {
    width: 100%;
    display: flex;
    height: 1.5rem;
    list-style: none;

    background-color: rgba(255, 255, 255, 0.05);
  }
`

const StyledLabel = styled.div`
  background-color: ${style.TeriaryColor};
  color: ${style.PrimaryColor};
  font-size: 0.8rem;
  text-transform: capitalize;
  height: 1.5rem;
  min-width: 5.4rem;
  color: black;
  display: flex;
  align-items: center;
  padding-left: 0.4rem;
  padding-right: 0.2rem;
`

const StyledDiv = styled.div<{ percent: number }>`
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

const PortfolioSkillsChart = ({ techFilteredArray }) => {
  return (
    <div>
      {techFilteredArray.map(skill => (
        <StyledChartContainer key={skill.label}>
          <StyledLabel>{skill.label}</StyledLabel>
          <li>
            <StyledDiv percent={skill.percent}></StyledDiv>
          </li>
        </StyledChartContainer>
      ))}
    </div>
  )
}

export default PortfolioSkillsChart
