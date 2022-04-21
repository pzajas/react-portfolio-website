import PrimaryTitle from "../../elements/titles/PrimaryTitle"
import PrimaryLayout from "../../elements/layouts/PrimaryLayout"
import styled from "styled-components"

import * as style from "../../variables/Variables"

import { Udemy } from "@styled-icons/simple-icons/Udemy"
import { Youtube2 } from "@styled-icons/icomoon/Youtube2"
import { WorkOutline } from "@styled-icons/material/WorkOutline"
import { BrainCircuit } from "@styled-icons/fluentui-system-regular/BrainCircuit"
import { MonitorWeight } from "@styled-icons/material-outlined/MonitorWeight"

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
      margin-bottom: 0.6rem;
    }
  }
`

const StyledPrimaryTitle = styled(PrimaryTitle)`
  padding: 0;
`

const StyledWorkOutlineIcon = styled(WorkOutline)`
  transform: rotate(90deg);
  height: 4rem;
  width: 2rem;
  color: ${style.SecondaryColor};
  /* background-color: rgba(215, 215, 215, 0.02); */
`

const StyledBrainCircuitIcon = styled(BrainCircuit)`
  /* transform: rotate(90deg); */
  height: 4rem;
  width: 2rem;
  color: ${style.SecondaryColor};
  /* background-color: rgba(215, 215, 215, 0.02); */
`

const StyledYoutubeIcon = styled(Youtube2)`
  transform: rotate(-90deg);
  height: 4rem;
  width: 2rem;
  color: ${style.SecondaryColor};
  /* background-color: rgba(215, 215, 215, 0.02); */
`

const StyledUdemyIcon = styled(Udemy)`
  height: 4rem;
  width: 1.8rem;
  color: ${style.SecondaryColor};
  /* background-color: rgba(215, 215, 215, 0.02); */
`

const StyledMonitorWeightIcon = styled(MonitorWeight)`
  height: 4rem;
  width: 2rem;
  color: ${style.SecondaryColor};
  /* background-color: rgba(215, 215, 215, 0.02); */
`

const PortfolioPlans = () => {
  const portfolioPlansArray = [
    {
      icon: <StyledWorkOutlineIcon />,
      text: "To be honest, right now my primary objective is to find a good job - a place where I'd be able to hone my skills even more and learn the best coding practices.",
    },
    {
      icon: <StyledBrainCircuitIcon />,
      text: "The second most importatnt thing is my development. I always try to find and implement some new ways to address the issues I meet during coding.",
    },
    {
      icon: <StyledYoutubeIcon />,
      text: "When I'm skilled enough I think I'd be able to enter the world of youtube and create my own channel in order to spread my knowledge and help others.",
    },
    {
      icon: <StyledUdemyIcon />,
      text: "I know that youtube is not the only platform I can share my ideas on so I think about doing some udemy courses. This, however, is not a piece of cake. We will see.",
    },
    {
      icon: <StyledMonitorWeightIcon />,
      text: "Life does not comprise of coding only. I want to shape both my body and mind. Therefeore, I've recently started some hard workout to gain some more physical strength.",
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
