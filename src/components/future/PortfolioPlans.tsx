import PrimaryTitle from "../../elements/titles/PrimaryTitle"
import * as style from "../../variables/Variables"
import styled from "styled-components"
import { Udemy } from "@styled-icons/simple-icons/Udemy"
import PrimaryLayout from "../../elements/layouts/PrimaryLayout"

const StyledPrimaryLayout = styled(PrimaryLayout)`
  li {
    list-style: none;
    width: 100%;
    height: calc((100vh - 9.5rem) / 5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px rgba(255, 255, 255, 0.02);

    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }

  p {
    padding: 0rem 0.5rem 0rem 0.5rem;
    color: white;
    font-size: 0.7rem;
    text-align: justify;
    text-justify: inter-word;
  }
`

const StyledPrimaryTitle = styled(PrimaryTitle)`
  padding: 0;
`

const StyledUdemyIcon = styled(Udemy)`
  padding: 0.5rem;
  height: 4rem;
  /* margin-right: 0.5rem; */
  width: 6rem;
  color: ${style.SecondaryColor};
  background-color: rgba(215, 215, 215, 0.02);
`

const PortfolioPlans = () => {
  const portfolioPlansArray = [
    { icon: <StyledUdemyIcon /> },
    { icon: <StyledUdemyIcon /> },
    { icon: <StyledUdemyIcon /> },
    { icon: <StyledUdemyIcon /> },
    { icon: <StyledUdemyIcon /> },
  ]

  return (
    <StyledPrimaryLayout>
      <StyledPrimaryTitle primarySectionText="My future plans" />
      <>
        {portfolioPlansArray.map((item, index) => (
          <li key={index}>
            <>{item.icon}</>
            <p>
              The most important thing to get is of course a job. Thanks to this sole one thing I will be able to hone
              my skills even more and learn best practices.
            </p>
          </li>
        ))}
      </>
    </StyledPrimaryLayout>
  )
}

export default PortfolioPlans
