import PrimaryTitle from "../../elements/titles/PrimaryTitle"
import * as style from "../../variables/Variables"
import styled from "styled-components"
import { Udemy } from "@styled-icons/simple-icons/Udemy"
import PrimaryLayout from "../../elements/layouts/PrimaryLayout"

const StyledPrimaryLayout = styled(PrimaryLayout)`
  li {
    list-style: none;
    width: 100%;
    height: calc((100vh - 7rem) / 5);

    /* background-color: rgba(255, 255, 255, 0.01); */
    background-color: pink;
    /* margin-bottom: 0.5rem; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    margin: 0;
    padding: 0.2rem;
    color: white;
  }
`

const StyledPrimaryTitle = styled(PrimaryTitle)`
  padding: 0;
`

const StyledUdemyIcon = styled(Udemy)`
  padding: 0.2rem;
  /* margin-right: 0.5rem; */
  width: 4rem;
  color: ${style.SecondaryColor};
  background-color: rgba(215, 215, 215, 0.02);
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
    <StyledPrimaryLayout>
      <StyledPrimaryTitle primarySectionText="My future plans" />
      <>
        {portfolioPlansArray.map((item, index) => (
          <li key={index}>
            <>{item.icon}</>
            <p>job, gain knowledge, youtube channel, black belt codewars, udemy courses,</p>
          </li>
        ))}
      </>
    </StyledPrimaryLayout>
  )
}

export default PortfolioPlans
