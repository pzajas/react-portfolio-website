import { FunctionComponent } from "react"
import PrimaryTitle from "../../elements/titles/PrimaryTitle"
import styled from "styled-components"
import PortfolioOfferCard from "./PortfolioOfferCard"
import PrimaryLayout from "../../elements/layouts/PrimaryLayout"

import { DesignIdeas } from "@styled-icons/fluentui-system-regular/DesignIdeas"
import { Droplet } from "@styled-icons/bootstrap/Droplet"
import { ApprovalsApp } from "@styled-icons/fluentui-system-filled/ApprovalsApp"
import { Tablet } from "@styled-icons/bootstrap/Tablet"

const StyledPrimaryLayout = styled(PrimaryLayout)`
  div {
    display: flex;
    flex-wrap: wrap;
    height: 80vh;
    width: 100%;
    justify-content: space-between;
  }

  li {
    display: flex;
    flex-direction: column;
    width: 7rem;
    height: calc(40vh - 1rem);
    list-style: none;
    margin-bottom: 2rem;
  }
`

const StyledPortfolioSectionTitle = styled(PrimaryTitle)``

interface PortfolioOffersArray {
  icon: JSX.Element
  title: string
  paragraph: string
}

const PortfolioOffer: FunctionComponent = () => {
  const portfolioOffersArray: Array<PortfolioOffersArray> = [
    {
      icon: <Droplet />,
      title: "Clean",
      paragraph: "I try to find the optimal way to write the code.",
    },
    {
      icon: <ApprovalsApp />,
      title: "Reusable",
      paragraph: "My components are the truest components.",
    },
    {
      icon: <DesignIdeas />,
      title: "Nice Design",
      paragraph: "I have the basic experience in the area of UI/UX.",
    },
    {
      icon: <Tablet />,
      title: "Responsive",
      paragraph: "Pixel perfect and adjusted for every device.",
    },
  ]
  return (
    <StyledPrimaryLayout>
      <StyledPortfolioSectionTitle primarySectionText="What can I offer ?" />
      <div>
        {portfolioOffersArray.map(({ icon, title, paragraph }) => (
          <li key={title}>
            <PortfolioOfferCard icon={icon} title={title} paragraph={paragraph} />
          </li>
        ))}
      </div>
    </StyledPrimaryLayout>
  )
}

export default PortfolioOffer
