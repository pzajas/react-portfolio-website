import styled from "styled-components"

const StyledPrimaryButton = styled.button`
  background: none;
  border: none;
  color: orangered;
  font-size: 0.75rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #181818;

  transition: all 0.5s ease-in-out;

  &:hover {
    border-bottom: 1px solid white;
  }
`

const PrimaryButton = ({ buttonText }) => {
  return <StyledPrimaryButton>{buttonText}</StyledPrimaryButton>
}

export default PrimaryButton
