import * as palette from "../../variables/Variables"
import styled from "styled-components"

const StyledPrimaryButton = styled.button`
  background: none;
  border: none;
  color: orangered;
  font-size: 0.75rem;
  border-bottom: 1px solid ${palette.PrimaryColor};
  height: auto;

  transition: all 0.5s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${palette.TeriaryColor};
  }
`

const PrimaryButton = ({ buttonText }) => {
  return <StyledPrimaryButton>{buttonText}</StyledPrimaryButton>
}

export default PrimaryButton
