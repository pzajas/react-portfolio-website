import { Field, ErrorMessage } from "formik"
import styled from "styled-components"

const StyledPortfolioFormInputContainer = styled.div`
  position: relative;

  label,
  div {
    font-size: 0.7rem;
    position: absolute;
    padding: 0.2rem;
    background-color: transparent;
    top: -0.7rem;
    opacity: 0.9;
  }

  label {
    color: white;
  }

  div {
    color: red;
    left: 4rem;
  }
`

const StyledPortfolioField = styled(Field)`
  &:-webkit-autofill {
    transition: background-color 90000000s;
    -webkit-text-fill-color: white;
  }
`

const PortfolioFormInput = props => {
  const { label, name, ...rest } = props
  return (
    <StyledPortfolioFormInputContainer>
      <label htmlFor={name}>{label}</label>
      <StyledPortfolioField id={name} name={name} {...rest} />
      <ErrorMessage name={name}>{msg => <div>{msg}</div>}</ErrorMessage>
    </StyledPortfolioFormInputContainer>
  )
}

export default PortfolioFormInput
