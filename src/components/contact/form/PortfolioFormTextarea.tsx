import styled from "styled-components"
import * as style from "../../../variables/Variables"
import { Field, ErrorMessage } from "formik"

const StyledPortfolioFormAreaContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  label,
  div {
    opacity: 0.9;
    font-size: 0.7rem;
    position: absolute;
    padding: 0.2rem;
    background-color: transparent;
    top: -0.7rem;
    opacity: 0.4;
  }

  label {
    color: white;
  }

  div {
    color: red;
    left: 4rem;
    opacity: 1;
  }
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
