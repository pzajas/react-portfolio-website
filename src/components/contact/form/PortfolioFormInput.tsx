import { FunctionComponent } from "react"
import { Field, ErrorMessage } from "formik"
import styled from "styled-components"

const StyledPortfolioFormInputContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  label,
  div {
    font-size: 0.7rem;
    position: absolute;
    padding: 0.2rem;
    background-color: transparent;
    top: -0.7rem;
    opacity: 0.5;
  }

  label {
    color: white;
  }

  div {
    opacity: 1;
    color: red;
    left: 4rem;
  }
`

const StyledPortfolioField = styled(Field)`
  font-size: 0.8rem;
  &:-webkit-autofill {
    transition: background-color 90000000s;
    -webkit-text-fill-color: white;
  }
`

interface Props {
  props: {
    control: string
    label: string
    name: string
  }
}

const PortfolioFormInput = ({ props }: Props) => {
  const { control, label, name, ...rest } = props
  return (
    <StyledPortfolioFormInputContainer>
      <label htmlFor={name}>{label}</label>
      <StyledPortfolioField id={name} name={name} {...rest} />
      <ErrorMessage name={name}>{msg => <div>{msg}</div>}</ErrorMessage>
    </StyledPortfolioFormInputContainer>
  )
}

export default PortfolioFormInput
