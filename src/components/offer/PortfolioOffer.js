import * as style from "../../variables/Variables"
import styled from "styled-components"
import PortfolioOfferCard from "./PortfolioOfferCard"

import { CodeSquare } from "@styled-icons/bootstrap/CodeSquare"
import { FilterSquare } from "@styled-icons/bootstrap/FilterSquare"
import { InfoSquare } from "@styled-icons/bootstrap/InfoSquare"

const StyledOfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${style.PrimaryColor};
  color: ${style.TeriaryColor};
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: ${style.PrimaryMarginBottom};
`

const PortfolioOffer = () => {
  return (
    <StyledOfferContainer>
      <PortfolioOfferCard
        icon={<CodeSquare />}
        title="Clean Code"
        paragraph="I try to find the most optimal way to write code."
      />
      <PortfolioOfferCard
        icon={<FilterSquare />}
        title="Nice Design"
        paragraph="I have some basic experience in the area of UI/UX."
      />
      <PortfolioOfferCard
        icon={<InfoSquare />}
        title="Clever Ideas"
        paragraph="This is just a placeholder text for the litol card here."
      />
      <PortfolioOfferCard
        icon={<InfoSquare />}
        title="Clever Ideas"
        paragraph="This is just a placeholder text for the litol card here."
      />
    </StyledOfferContainer>
  )
}

export default PortfolioOffer
