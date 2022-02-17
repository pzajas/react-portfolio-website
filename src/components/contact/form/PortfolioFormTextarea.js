import styled from "styled-components"
import * as style from "../../../variables/Variables"
import { Field, ErrorMessage } from "formik"

const StyledPortfolioFormAreaContainer = styled.div`
  height: 10rem;
  position: relative;

  label,
  div {
    opacity: 0.9;
    font-size: 0.7rem;
    position: absolute;
    padding: 0.2rem;
    background-color: transparent;
    top: -0.7rem;
  }

  label {
    color: white;
  }

  div {
    color: red;
    left: 4rem;
  }
`

const PortfolioFormTextarea = props => {
  const { label, name, ...rest } = props
  return (
    <StyledPortfolioFormAreaContainer>
      <label htmlFor="name">{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name}>{msg => <div>{msg}</div>}</ErrorMessage>
    </StyledPortfolioFormAreaContainer>
  )
}

export default PortfolioFormTextarea
