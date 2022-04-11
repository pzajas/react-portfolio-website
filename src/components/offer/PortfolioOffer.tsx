import { FunctionComponent } from "react"
import { CodeSquare } from "@styled-icons/bootstrap/CodeSquare"
import { FilterSquare } from "@styled-icons/bootstrap/FilterSquare"
import { PlusSquare } from "@styled-icons/bootstrap/PlusSquare"
import { SlashSquare } from "@styled-icons/bootstrap/SlashSquare"
import PrimaryTitle from "../../elements/titles/PrimaryTitle"
import * as style from "../../variables/Variables"
import styled from "styled-components"
import PortfolioOfferCard from "./PortfolioOfferCard"
import PrimaryLayout from "../../elements/layouts/PrimaryLayout"

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
      icon: <CodeSquare />,
      title: "Clean",
      paragraph: "I try to find the optimal way to write the code.",
    },
    {
      icon: <PlusSquare />,
      title: "Reusable",
      paragraph: "My components are the truest components.",
    },
    {
      icon: <FilterSquare />,
      title: "Nice Design",
      paragraph: "I have the basic experience in the area of UI/UX.",
    },
    {
      icon: <SlashSquare />,
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
