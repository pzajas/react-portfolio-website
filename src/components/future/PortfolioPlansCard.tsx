import { Udemy } from "@styled-icons/simple-icons/Udemy"
import styled from "styled-components"
import * as style from "../../variables/Variables"

const StyledPortfolioPlansCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 1.8rem;
    padding: 1rem;
  }

  p {
    padding-right: 0.9rem;
    color: white;
    font-size: 0.7rem;
    text-align: justify;
    text-justify: inter-word;
  }
`

interface Props {
  icon: JSX.Element
  text: string
  className?: string
}

const PortfolioPlansCard = ({ icon, text, className }: Props) => {
  return (
    <StyledPortfolioPlansCard className={className}>
      <div>{icon}</div>
      <p>{text}</p>
    </StyledPortfolioPlansCard>
  )
}

export default PortfolioPlansCard
