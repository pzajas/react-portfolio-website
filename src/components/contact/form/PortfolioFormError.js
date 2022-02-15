import styled from "styled-components"
import * as style from "../../../variables/Variables"

const StyledPortfolioErrorContainer = styled.div`
  color: white;
  margin-top: 5px;
  font-size: 0.5rem;
`

const PortfolioFormError = props => {
  return <StyledPortfolioErrorContainer>{props.children}</StyledPortfolioErrorContainer>
}

export default PortfolioFormError
