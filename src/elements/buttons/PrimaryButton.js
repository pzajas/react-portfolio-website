import styled from "styled-components"

const StyledPrimaryButton = styled.button`
  background: none;
  border: none;
  color: orange;
  font-size: 0.75rem;
  padding-bottom: 0.5rem;

  transition: all 1s ease-in-out;

  &:hover {
    border-bottom: 1px solid white;
  }
`

const PrimaryButton = () => {
  return <StyledPrimaryButton>See my work </StyledPrimaryButton>
}

export default PrimaryButton
