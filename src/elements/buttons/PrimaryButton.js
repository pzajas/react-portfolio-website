import * as style from "../../variables/Variables"
import styled from "styled-components"

const StyledPrimaryButtonContainer = styled.p`
  background: none;
  border: none;
  color: ${style.SecondaryColor};
  font-size: 1rem;
  border-bottom: 1px solid ${style.PrimaryColor};
  height: auto;

  transition: all 0.5s ease-in-out;
  padding-bottom: 0.5rem;

  &:hover {
    border-bottom: 1px solid ${style.TeriaryColor};
    letter-spacing: 0.05rem;
    cursor: pointer;
  }
`

const PrimaryButton = ({ buttonText, handleScrollToProjects }) => {
  return <StyledPrimaryButtonContainer onClick={handleScrollToProjects}>{buttonText}</StyledPrimaryButtonContainer>
}

export default PrimaryButton
