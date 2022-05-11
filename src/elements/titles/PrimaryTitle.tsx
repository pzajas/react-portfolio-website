import styled from "styled-components"
import { LineHorizontal1 } from "@styled-icons/fluentui-system-filled/LineHorizontal1"

const StyledSectionTitle = styled.h1`
  font-weight: 600;
  margin: 0rem 0rem 1rem 0rem;
  letter-spacing: 0.05rem;
  font-size: 1rem;
  width: 100%;
  color: #00c65c;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: left;
`

const StyledHorizontalLine = styled(LineHorizontal1)`
  background-color: #00c65c;
  color: #00c65c;
  width: 2rem;
  height: 0.12rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface Props {
  primarySectionText: string
  className?: string
}

const PrimaryTitle = ({ primarySectionText, className }: Props) => {
  return (
    <StyledSectionTitle className={className}>
      <StyledHorizontalLine />
      {primarySectionText}
    </StyledSectionTitle>
  )
}

export default PrimaryTitle
