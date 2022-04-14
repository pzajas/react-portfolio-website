import { Udemy } from "@styled-icons/simple-icons/Udemy"
import styled from "styled-components"
import * as style from "../../variables/Variables"

const StyledPortfolioPlansCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding: 0rem 0.5rem 0rem 0.5rem;
    color: white;
    font-size: 0.8rem;
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
      {icon}
      <p>{text}</p>
    </StyledPortfolioPlansCard>
  )
}

export default PortfolioPlansCard
