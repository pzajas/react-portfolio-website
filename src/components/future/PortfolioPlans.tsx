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
`

const StyledPrimaryTitle = styled(PrimaryTitle)`
  margin: 0;
  padding: 0;
  height: auto;
`

const PortfolioPlans = () => {
  const portfolioPlansArray = [{ icon: <Udemy /> }, { icon: <Udemy /> }, { icon: <Udemy /> }]

  return (
    <StyledPlansContainer>
      <StyledPrimaryTitle primarySectionText="My future plans" />
      {portfolioPlansArray.map(item => item.icon)}
    </StyledPlansContainer>
  )
}

export default PortfolioPlans
