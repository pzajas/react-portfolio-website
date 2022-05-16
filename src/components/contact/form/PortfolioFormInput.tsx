import { Field, ErrorMessage } from "formik"
import * as style from "../../../styles/General"
import styled from "styled-components"

const StyledPortfolioFormInputContainer = styled.div`
  ${style.FormStyles}
`

const StyledPortfolioField = styled(Field)`
  font-size: 0.8rem;
  &:-webkit-autofill {
    transition: background-color 90000000s;
    -webkit-text-fill-color: white;
  }
`

interface Props {
  label: string
  name: string
}

const PortfolioFormInput = ({ label, name, ...rest }: Props) => {
  return (
    <StyledPortfolioFormInputContainer>
      <label htmlFor={name}>{label}</label>
      <StyledPortfolioField id={name} name={name} {...rest} />
      <ErrorMessage name={name}>{msg => <div>{msg}</div>}</ErrorMessage>
    </StyledPortfolioFormInputContainer>
  )
}

export default PortfolioFormInput
