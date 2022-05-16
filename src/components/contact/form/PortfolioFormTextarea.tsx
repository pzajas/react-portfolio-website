import styled from "styled-components"
import * as style from "../../../styles/General"
import { Field, ErrorMessage } from "formik"

const StyledPortfolioFormAreaContainer = styled.div`
  ${style.FormStyles}
`

interface Props {
  label: string
  name: string
}

const PortfolioFormTextarea = ({ label, name, ...rest }: Props) => {
  return (
    <StyledPortfolioFormAreaContainer>
      <label htmlFor="name">{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name}>{msg => <div>{msg}</div>}</ErrorMessage>
    </StyledPortfolioFormAreaContainer>
  )
}

export default PortfolioFormTextarea
