import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const StyledPortfolioSkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 80vw;
  height: 6vh;

  li {
    list-style: none;
    width: 2.1rem;
  }

  img {
    width: 2.1rem;
    height: 100%;
    color: white;
    background-color: white;
  }
`

const PortfolioSkills = () => {
  const PortfolioSkillsIcons = [
    <FontAwesomeIcon icon={faSearch as IconProp} />,
    <img src="https://img.icons8.com/ios/50/000000/javascript--v1.png" />,
    <img src="https://img.icons8.com/ios/50/000000/typescript.png" />,
    <img src="https://img.icons8.com/ios/50/000000/css.png" />,
    <img src="https://img.icons8.com/ios/50/000000/html.png" />,
    <img src="https://img.icons8.com/ios-filled/50/000000/sass.png" />,
    <img src="https://img.icons8.com/ios/50/000000/react-native--v1.png" />,
    <img src="https://img.icons8.com/ios/50/000000/redux.png" />,
  ]
  return (
    <StyledPortfolioSkillsContainer>
      {PortfolioSkillsIcons.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </StyledPortfolioSkillsContainer>
  )
}

export default PortfolioSkills
