import styled from "styled-components"

const StyledSectionTitle = styled.h1`
  letter-spacing: 0.05rem;
  font-size: 1.5rem;
  width: 100%;
  color: white;
  height: 10%;
  margin: 0;
`

const PrimaryTitle = ({ primarySectionText }) => {
  return <StyledSectionTitle>{primarySectionText}</StyledSectionTitle>
}

export default PrimaryTitle
