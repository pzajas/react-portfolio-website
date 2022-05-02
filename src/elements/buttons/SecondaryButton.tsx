import { FunctionComponent, MouseEventHandler } from "react"
import styled from "styled-components"
import { ChevronUp } from "@styled-icons/boxicons-regular/ChevronUp"
import * as style from "../../variables/Variables"
import ScrollIntoView from "react-scroll-into-view"

const StyledButtonContainer = styled(ChevronUp)`
  background-color: ${style.SecondaryColor};
  padding: 0.2rem 0rem;
  width: 1.5rem;
  border-radius: 0.1rem;
  cursor: pointer;
  animation: buttonMove 2s infinite alternate;

  @keyframes buttonMove {
    0% {
      transform: translateY(0.1rem);
    }

    100% {
      transform: translateY(-0.1rem);
    }
  }
`

interface InterfaceSecondaryButton {
  className?: any
  secondaryButtonClick?: MouseEventHandler<SVGSVGElement>
}

const SecondaryButton: FunctionComponent<InterfaceSecondaryButton> = ({ className }) => {
  return (
    <div>
      <ScrollIntoView selector="#hero">
        <StyledButtonContainer className={className} />
      </ScrollIntoView>
    </div>
  )
}

export default SecondaryButton
