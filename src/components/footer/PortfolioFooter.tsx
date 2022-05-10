import styled from "styled-components"
import { PhoneCallOutline } from "@styled-icons/evaicons-outline/PhoneCallOutline"
import { AlternateEmail } from "@styled-icons/material-rounded/AlternateEmail"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"
import SecondaryButton from "../../elements/buttons/SecondaryButton"
import * as style from "../../variables/Variables"

const StyledPortfolioFooter = styled.div`
  color: white;
  padding: 2.4rem 0rem 2rem 0rem;
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
    cursor: pointer;
    justify-content: center;
    align-items: center;
    text-align: center;

    & * {
      width: 1rem;
      padding: 0.7rem;
      background-color: rgba(255, 255, 255, 0.05);
      color: ${style.TeriaryColor};
    }
  }
`

interface InterfaceIconsArray {
  icon: JSX.Element
  link: string
}

const PortfolioFooter = () => {
  const PHONE = "+48 696 066 620"
  const EMAIL = "zajas.piotr@gmail.com"
  const LINKEDIN = "https://www.linkedin.com/in/piotr-zajas-65ba971bb/"
  const GITHUB = "https://github.com/pzajas"

  const openInTheBrowser = (link: string) => {
    window.open(link)
  }

  const copyTextToTheClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const iconsArray: Array<InterfaceIconsArray> = [
    { icon: <PhoneCallOutline />, link: PHONE },
    { icon: <AlternateEmail />, link: EMAIL },
    { icon: <Linkedin />, link: LINKEDIN },
    { icon: <Github />, link: GITHUB },
  ]

  return (
    <StyledPortfolioFooter>
      <StyledSecondaryButtonContainer>
        <SecondaryButton />
      </StyledSecondaryButtonContainer>
      <StyledIconsContainer>
        {iconsArray.map((item, index) => (
          <li
            onClick={index < 2 ? () => copyTextToTheClipboard(item.link) : () => openInTheBrowser(item.link)}
            key={index}
          >
            {item.icon}
          </li>
        ))}
      </StyledIconsContainer>
    </StyledPortfolioFooter>
  )
}

export default PortfolioFooter
