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
    transition: background-color 90000000s;
    -webkit-text-fill-color: white;
    /* -webkit-box-shadow: 0 0 0px 1000px #181818 inset; */
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
