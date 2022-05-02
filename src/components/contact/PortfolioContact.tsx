import styled from "styled-components"
import * as style from "../../variables/Variables"
import PortfolioForm from "./form/PortfolioForm"
import PrimaryTitle from "../../elements/titles/PrimaryTitle"
import PortfolioFooter from "../footer/PortfolioFooter"
import PrimaryLayout from "../../elements/layouts/PrimaryLayout"

const PortfolioContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  scroll-snap-align: start;
  background-color: ${style.PrimaryColor};
  color: ${style.TeriaryColor};
`

const StyledPrimaryTitle = styled(PrimaryTitle)`
  margin-bottom: 1.5rem;
`

interface Props {
  className?: string
}

const PortfolioContact = ({ className }: Props) => {
  return (
    <PrimaryLayout>
      <PortfolioContactContainer className={className}>
        <StyledPrimaryTitle primarySectionText="Contact me!" />
        <PortfolioForm />
        <PortfolioFooter />
      </PortfolioContactContainer>
    </PrimaryLayout>
  )
}

export default PortfolioContact
