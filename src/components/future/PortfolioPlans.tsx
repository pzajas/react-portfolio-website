import PrimaryTitle from "../../elements/titles/PrimaryTitle"
import PrimaryLayout from "../../elements/layouts/PrimaryLayout"
import styled from "styled-components"

import * as style from "../../variables/Variables"

import { Udemy } from "@styled-icons/simple-icons/Udemy"
import PortfolioPlansCard from "./PortfolioPlansCard"

const StyledPrimaryLayout = styled(PrimaryLayout)`
  li {
    list-style: none;
    width: 100%;
    height: calc((100vh - 9.5rem) / 5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px rgba(255, 255, 255, 0.02);

    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
`

const StyledPrimaryTitle = styled(PrimaryTitle)`
  padding: 0;
`

const StyledUdemyIcon = styled(Udemy)`
  padding: 0.5rem;
  height: 4rem;
  width: 2rem;
  color: ${style.SecondaryColor};
  background-color: rgba(215, 215, 215, 0.02);
`

const PortfolioPlans = () => {
  const portfolioPlansArray = [
    {
      icon: <StyledUdemyIcon />,
      text: "jobjobjo bjobjobjo jobjobj. jobjobjo bjobjobjo jobjobj bjobjobj bjo jobj",
    },
    {
      icon: <StyledUdemyIcon />,
      text: "jobjobjo bjobjobjo jobjobj. jobjobjo bjobjobjo jobjobj bjobjobj bjo jobj",
    },
    {
      icon: <StyledUdemyIcon />,
      text: "jobjobjo bjobjobjo jobjobj. jobjobjo bjobjobjo jobjobj bjobjobj bjo jobj",
    },
    {
      icon: <StyledUdemyIcon />,
      text: "jobjobjo bjobjobjo jobjobj. jobjobjo bjobjobjo jobjobj bjobjobj bjo jobj",
    },
    {
      icon: <StyledUdemyIcon />,
      text: "jobjobjo bjobjobjo jobjobj. jobjobjo bjobjobjo jobjobj bjobjobj bjo jobj",
    },
  ]

  return (
    <StyledPrimaryLayout>
      <StyledPrimaryTitle primarySectionText="My future plans" />
      <>
        {portfolioPlansArray.map((item, index) => (
          <li key={index}>
            <PortfolioPlansCard icon={item.icon} text={item.text} />
          </li>
        ))}
      </>
    </StyledPrimaryLayout>
  )
}

export default PortfolioPlans
