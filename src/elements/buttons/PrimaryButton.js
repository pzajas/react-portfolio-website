import * as palette from "../../variables/Variables"
import styled from "styled-components"

const StyledPrimaryButton = styled.p`
  background: none;
  border: none;
  color: orangered;
  font-size: 1rem;
  border-bottom: 1px solid ${palette.PrimaryColor};
  height: auto;

  transition: all 0.5s ease-in-out;
  padding-bottom: 0.5rem;

  &:hover {
    border-bottom: 1px solid ${palette.TeriaryColor};
    letter-spacing: 0.05rem;
  }
`

const PrimaryButton = ({ buttonText }) => {
  return <StyledPrimaryButton>{buttonText}</StyledPrimaryButton>
}

export default PrimaryButton
