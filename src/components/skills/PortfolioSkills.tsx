import styled from "styled-components"
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo"
import { Javascript } from "@styled-icons/boxicons-logos/Javascript"
import { Typescript } from "@styled-icons/simple-icons/Typescript"
import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare"
// import * as style from "../../../variables/Variables"

const StyledPortfolioSkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80vw;
  height: 6vh;

  div {
    width: 100%;
    margin: 0;
  }

  i {
    font-size: 30px;
    margin-right: 5px;
  }

  img {
    width: 30px;
    height: 30px;
    color: white;
    background-color: white;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`

const PortfolioSkills = () => {
  return (
    <StyledPortfolioSkillsContainer>
      {/* <img src="https://img.icons8.com/ios/100/000000/typescript.png" />
      <img src="https://img.icons8.com/ios/50/000000/javascript--v1.png" />
      <img src="https://img.icons8.com/ios/50/000000/html.png" />
      <img src="https://img.icons8.com/ios/50/000000/css.png" />
      <img src="https://img.icons8.com/ios/50/000000/redux.png" />
      <img src="https://img.icons8.com/ios/50/000000/react-native--v1.png" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> */}
      <i className="devicon-javascript-plain"></i>
      <i className="devicon-typescript-plain"></i>
      <img src="https://img.icons8.com/ios/50/000000/react-native--v1.png" />
      <img src="https://img.icons8.com/ios/50/000000/redux.png" />
    </StyledPortfolioSkillsContainer>
  )
}

export default PortfolioSkills
