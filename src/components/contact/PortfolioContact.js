import styled from "styled-components"
import * as style from "../../variables/Variables"

const PortfolioContactContainer = styled.div`
  height: 75vh;
  padding: 0rem 2rem 0rem 2rem;
  scroll-snap-align: start;
  background-color: ${style.PrimaryColor};
  color: ${style.TeriaryColor};
`

const PortfolioContact = ({ className }) => {
  return <PortfolioContactContainer className={className}></PortfolioContactContainer>
}

export default PortfolioContact
