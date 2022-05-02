import { FunctionComponent } from "react"
import styled from "styled-components"
import { Facebook } from "@styled-icons/boxicons-logos/Facebook"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"
import SecondaryButton from "../../elements/buttons/SecondaryButton"
import * as style from "../../variables/Variables"
import ScrollIntoView from "react-scroll-into-view"

const StyledPortfolioFooter = styled.div`
  color: white;
  padding: 2rem 0rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
`

const StyledSecondaryButtonContainer = styled(SecondaryButton)`
  position: absolute;
  display: flex;
  justify-content: center;
  top: -1rem;
  cursor: pointer;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const StyledIconsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;

  li {
    list-style: none;
    display: flex;

    justify-content: center;
    align-items: center;
    text-align: center;

    & * {
      width: 1rem;
      padding: 0.7rem;
      margin: 0rem 0.7rem;
      background-color: rgba(255, 255, 255, 0.05);
      color: ${style.TeriaryColor};
    }
  }
`

interface InterfacePortfolioFooter {
  handleScrollToTheTop?: () => void
}

interface InterfaceIconsArray {
  icon: JSX.Element
  onClick?: any
}

const PortfolioFooter: FunctionComponent<InterfacePortfolioFooter> = ({ handleScrollToTheTop }) => {
  const iconsArray: Array<InterfaceIconsArray> = [
    { icon: <Facebook /> },
    { icon: <Linkedin /> },
    { icon: <Github /> },
    { icon: <Linkedin /> },
  ]

  return (
    <StyledPortfolioFooter>
      <StyledSecondaryButtonContainer secondaryButtonClick={handleScrollToTheTop}>
        <SecondaryButton />
      </StyledSecondaryButtonContainer>
      <StyledIconsContainer>
        {iconsArray.map((icon, index) => (
          <li key={index}>{icon.icon}</li>
        ))}
      </StyledIconsContainer>
    </StyledPortfolioFooter>
  )
}

export default PortfolioFooter
