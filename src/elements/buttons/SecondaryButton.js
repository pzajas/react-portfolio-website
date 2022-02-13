import styled from "styled-components"
import { ChevronsUp } from "@styled-icons/boxicons-regular/ChevronsUp"
import * as style from "../../variables/Variables"

const StyledButtonContainer = styled(ChevronsUp)`
  background-color: ${style.SecondaryColor};
  padding: 0.2rem 0rem;
  width: 2.5rem;
  border-radius: 0.1rem;
  cursor: pointer;
`

const SecondaryButton = ({ className, secondaryButtonClick }) => {
  return <StyledButtonContainer onClick={secondaryButtonClick} className={className} />
}

export default SecondaryButton
