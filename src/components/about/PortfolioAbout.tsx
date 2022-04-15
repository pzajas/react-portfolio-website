import styled from "styled-components"
import StyledSectionTitle from "../../elements/titles/PrimaryTitle"
import PrimaryLayout from "../../elements/layouts/PrimaryLayout"
import PortfolioSkills from "./PortfolioSkills"

const StyledPrimaryLayout = styled(PrimaryLayout)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }
`

const PortfolioAbout = () => {
  return (
    <StyledPrimaryLayout>
      <div>
        <StyledSectionTitle primarySectionText={"About myself!"}></StyledSectionTitle>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged. make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged. make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      <div>
        <StyledSectionTitle primarySectionText={"My skills!"}></StyledSectionTitle>
        <PortfolioSkills />
      </div>
    </StyledPrimaryLayout>
  )
}

export default PortfolioAbout
