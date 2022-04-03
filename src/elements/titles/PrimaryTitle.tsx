import { FunctionComponent } from "react"
import styled from "styled-components"

const StyledSectionTitle = styled.h1`
  letter-spacing: 0.05rem;
  font-size: 1.3rem;
  width: 100%;
  color: white;
  height: 4vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: left;
`

interface InterfacePrimaryTitle {
  primarySectionText: string
}

const PrimaryTitle: FunctionComponent<InterfacePrimaryTitle> = ({ primarySectionText }) => {
  return <StyledSectionTitle>{primarySectionText}</StyledSectionTitle>
}

export default PrimaryTitle
