import * as style from "../../variables/Variables"
import styled from "styled-components"

import PortfolioOfferCard from "./PortfolioOfferCard"
import StyledSectionTitle from "../../elements/titles/PrimaryTitle"

import { CodeSquare } from "@styled-icons/bootstrap/CodeSquare"
import { FilterSquare } from "@styled-icons/bootstrap/FilterSquare"
import { PlusSquare } from "@styled-icons/bootstrap/PlusSquare"
import { SlashSquare } from "@styled-icons/bootstrap/SlashSquare"

const StyledOfferContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0rem;
  height: 100vh;
  background-color: ${style.PrimaryColor};
  color: ${style.TeriaryColor};
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: ${style.PrimaryMarginBottom};
  padding: 0rem 2rem 0rem 2rem;
  scroll-snap-align: start;
`

const PortfolioOffer = () => {
  const portfolioOffersArray = [
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
      paragraph: "Adjusted and pixel perfect for every device.",
    },
  ]
  return (
    <StyledOfferContainer>
      <StyledSectionTitle primarySectionText="What can I offer ?"></StyledSectionTitle>
      {portfolioOffersArray.map(({ icon, title, paragraph }) => (
        <PortfolioOfferCard icon={icon} title={title} paragraph={paragraph} />
      ))}
    </StyledOfferContainer>
  )
}

export default PortfolioOffer
