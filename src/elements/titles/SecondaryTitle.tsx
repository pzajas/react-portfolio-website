import styled from "styled-components"

const StyledSectionTitle = styled.h1`
  letter-spacing: 0.05rem;
  font-size: 1rem;
  width: 100%;
  color: white;
`

const SecondaryTitle = ({ secondarySectionText, className }) => {
  return <StyledSectionTitle className={className}>{secondarySectionText}</StyledSectionTitle>
}

export default SecondaryTitle
