import styled from "styled-components"
import * as style from "../../../variables/Variables"
import { Field, ErrorMessage } from "formik"
import PortfolioFormError from "./PortfolioFormError"

const StyledPortfolioFormAreaContainer = styled.div`
  height: 10rem;
  position: relative;

  label {
    position: absolute;
    top: -0.7rem;
    font-size: 0.7rem;
    background-color: transparent;
    padding: 0.2rem;
    opacity: 0.7;
  }
`

const PortfolioFormTextarea = props => {
  const { label, name, ...rest } = props
  return (
    <StyledPortfolioFormAreaContainer>
      <label htmlFor="name">{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      {/* <ErrorMessage name={name} component={PortfolioFormError}></ErrorMessage> */}
    </StyledPortfolioFormAreaContainer>
  )
}

export default PortfolioFormTextarea
