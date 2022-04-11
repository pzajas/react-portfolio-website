import * as style from "../../variables/Variables"
import styled from "styled-components"

const StyledPrimaryLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  background-color: ${style.PrimaryColor};
  color: ${style.TeriaryColor};
  /* color: ${style.TeriaryColor};
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: ${style.PrimaryMarginBottom}; */
  padding: 2rem;
  scroll-snap-align: start;
`

interface Props {
  children: any
  className?: string

  ref?: any
}

const PrimaryLayout = ({ children, className }: Props) => {
  return <StyledPrimaryLayout className={className}>{children}</StyledPrimaryLayout>
}

export default PrimaryLayout
