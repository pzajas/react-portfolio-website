import styled from "styled-components"

const StyledSectionTitle = styled.h1`
  letter-spacing: 0.05rem;
  font-size: 1rem;
  width: 100%;
  color: white;
  padding: 1rem 0rem;
  margin: 0;
`

const SecondaryTitle = ({ secondarySectionText }) => {
  return <StyledSectionTitle>{secondarySectionText}</StyledSectionTitle>
}

export default SecondaryTitle
