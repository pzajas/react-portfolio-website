import * as style from "../../variables/Variables"
import StyledSectionTitle from "../../elements/titles/PrimaryTitle"
import styled from "styled-components"

const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 0rem;
  height: 100vh;
  background-color: ${style.PrimaryColor};
  color: ${style.TeriaryColor};

  margin-bottom: ${style.PrimaryMarginBottom};
  padding: 1rem 2rem 1rem 2rem;
  scroll-snap-align: start;
`

const PortfolioAbout = () => {
  return (
    <StyledAboutContainer>
      <StyledSectionTitle primarySectionText={"About myself!"}></StyledSectionTitle>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </StyledAboutContainer>
  )
}

export default PortfolioAbout
