import { Field, ErrorMessage } from "formik"
import PortfolioFormError from "./PortfolioFormError"
import styled from "styled-components"
import * as style from "../../../variables/Variables"

const StyledPortfolioFormInputContainer = styled.div`
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

const StyledPortfolioField = styled(Field)`
  &:-webkit-autofill {
    transition: background-color 5000s;
    -webkit-text-fill-color: white;
  }

  color: white;
`

const PortfolioFormInput = props => {
  const { label, name, ...rest } = props
  return (
    <StyledPortfolioFormInputContainer>
      <label htmlFor={name}>{label}</label>
      <StyledPortfolioField id={name} name={name} {...rest} />
      {/* <StyledPortfolioFormError name={name} component={PortfolioFormError}></StyledPortfolioFormError> */}
    </StyledPortfolioFormInputContainer>
  )
}

export default PortfolioFormInput
