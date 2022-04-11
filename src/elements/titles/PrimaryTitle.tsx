import { FunctionComponent } from "react"
import styled from "styled-components"

const StyledSectionTitle = styled.h1`
  margin: 0rem 0rem 1rem 0rem;
  letter-spacing: 0.05rem;
  font-size: 1.3rem;
  width: 100%;
  color: white;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: left;
`

interface InterfacePrimaryTitle {
  primarySectionText: string
  className?: string
}

const PrimaryTitle: FunctionComponent<InterfacePrimaryTitle> = ({ primarySectionText, className }) => {
  return <StyledSectionTitle className={className}>{primarySectionText}</StyledSectionTitle>
}

export default PrimaryTitle
