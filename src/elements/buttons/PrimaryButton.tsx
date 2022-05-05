import { MouseEventHandler } from "react"
import styled from "styled-components"
import * as style from "../../variables/Variables"

const StyledPrimaryButtonContainer = styled.button`
  background: none;
  border: none;
  color: ${style.SecondaryColor};
  font-size: 1rem;
  /* border-bottom: 1px solid ${style.PrimaryColor}; */
  /* height: auto; */

  transition: all 0.5s ease-in-out;
  /* padding-bottom: 0.5rem; */

  &:hover {
    /* border-bottom: 1px solid ${style.TeriaryColor}; */
    letter-spacing: 0.05rem;
    cursor: pointer;
  }
`

interface InterfacePrimaryButton {
  buttonText: string
  type?: "submit" | "reset" | "button"
  className?: string
  onClick?: any
  primaryButtonClick?: MouseEventHandler<HTMLParagraphElement>
}

const PrimaryButton = ({ buttonText, className, primaryButtonClick }: InterfacePrimaryButton) => {
  return (
    <StyledPrimaryButtonContainer type="submit" className={className}>
      {buttonText}
    </StyledPrimaryButtonContainer>
  )
}

export default PrimaryButton
