import { FunctionComponent } from "react"

import styled from "styled-components"

const StyledSectionTitle = styled.h1`
  letter-spacing: 0.05rem;
  font-size: 1rem;
  width: 100%;
  color: white;
`

interface InterfaceSecondaryTitle {
  secondarySectionText: string
  className?: any
}

const SecondaryTitle: FunctionComponent<InterfaceSecondaryTitle> = ({ secondarySectionText, className }) => {
  return <StyledSectionTitle className={className}>{secondarySectionText}</StyledSectionTitle>
}

export default SecondaryTitle
