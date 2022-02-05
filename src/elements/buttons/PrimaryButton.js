import * as style from "../../variables/Variables"
import styled from "styled-components"

const StyledPrimaryButton = styled.p`
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
  }
`

const PrimaryButton = ({ buttonText }) => {
  return <StyledPrimaryButton>{buttonText}</StyledPrimaryButton>
}

export default PrimaryButton
