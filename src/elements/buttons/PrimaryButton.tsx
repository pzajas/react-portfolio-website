import { MouseEventHandler } from "react"
import styled from "styled-components"
import * as style from "../../variables/Variables"

const StyledPrimaryButton = styled.button`
  background: ${style.PrimaryButtonBackgroundColor};
  border: none;
  padding: 0.3rem 0.6rem;
  color: ${style.SecondaryColor};
  transition: all 0.5s ease-in-out;

  &:hover {
    letter-spacing: 0.05rem;
    cursor: pointer;
  }
`

interface Props {
  buttonText: string
  type?: "submit" | "reset" | "button"
  className?: string
  onClick?: any
  primaryButtonClick?: MouseEventHandler<HTMLParagraphElement>
}

const PrimaryButton = ({ buttonText, className }: Props) => {
  return (
    <StyledPrimaryButton type="submit" className={className}>
      {buttonText}
    </StyledPrimaryButton>
  )
}

export default PrimaryButton
