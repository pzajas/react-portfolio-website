import styled from "styled-components"
import { Facebook } from "@styled-icons/boxicons-logos/Facebook"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"
import * as style from "../../variables/Variables"

const StyledPortfolioFooter = styled.div`
  height: 20vh;
  color: white;

  padding: 0 2rem 0 2rem;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    place-content: center;
  }

  li {
    list-style: none;
    & * {
      width: 1.2rem;
      padding: 0.7rem;
      margin-right: 0.8rem;
      background-color: rgba(255, 255, 255, 0.05);
      color: ${style.TeriaryColor};
    }
  }
`

const PortfolioFooter = () => {
  const iconsArray = [{ icon: <Facebook /> }, { icon: <Linkedin /> }, { icon: <Github /> }, { icon: <Linkedin /> }]

  return (
    <StyledPortfolioFooter>
      <div>
        {iconsArray.map(icon => (
          <li>{icon.icon}</li>
        ))}
      </div>
    </StyledPortfolioFooter>
  )
}

export default PortfolioFooter
