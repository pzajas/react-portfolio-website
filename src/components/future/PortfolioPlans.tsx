import PrimaryTitle from "../../elements/titles/PrimaryTitle"
import * as style from "../../variables/Variables"
import styled from "styled-components"
import { Udemy } from "@styled-icons/simple-icons/Udemy"

const StyledPlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${style.PrimaryColor};
  /* color: ${style.TeriaryColor};
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: ${style.PrimaryMarginBottom}; */
  padding: 2rem;
  scroll-snap-align: start;

  div {
    height: 77%;
  }

  li {
    list-style: none;
    width: 100%;
    height: 20%;
    background-color: rgba(255, 255, 255, 0.01);
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    padding: 0.2rem;
    color: white;
  }
`

const StyledPrimaryTitle = styled(PrimaryTitle)`
  margin-bottom: 1rem;
  padding: 0;
  /* height: calc(100vh - 1rem); */
`

const StyledUdemyIcon = styled(Udemy)`
  padding: 0.2rem;
  margin-right: 0.5rem;
  width: 2rem;
  color: ${style.SecondaryColor};
  background-color: rgba(215, 215, 215, 0.02);
`

const StyledUdemyIconContainer = styled.div`
  height: 100%;
  display: flex;
`

const PortfolioPlans = () => {
  const portfolioPlansArray = [
    { icon: <StyledUdemyIcon /> },
    { icon: <StyledUdemyIcon /> },
    { icon: <StyledUdemyIcon /> },
    { icon: <StyledUdemyIcon /> },
    { icon: <StyledUdemyIcon /> },
  ]

  return (
    <StyledPlansContainer>
      <StyledPrimaryTitle primarySectionText="My future plans" />
      <div>
        {portfolioPlansArray.map((item, index) => (
          <li key={index}>
            <StyledUdemyIconContainer>{item.icon}</StyledUdemyIconContainer>
            <p>job, gain knowledge, youtube channel, black belt codewars, udemy courses,</p>
          </li>
        ))}
      </div>
    </StyledPlansContainer>
  )
}

export default PortfolioPlans
