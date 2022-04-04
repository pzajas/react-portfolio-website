import { FunctionComponent } from "react"
import { Form, Formik } from "formik"
import styled from "styled-components"
import * as Yup from "yup"
import * as style from "../../../variables/Variables"
import PortfolioFormControl from "./PortfolioFormControl"
import PrimaryButton from "../../../elements/buttons/PrimaryButton"

const StyledFormContainer = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;

  & * {
    display: flex;
    flex-direction: column;
    border: none;
    /* background-color: steelblue; */
    background-color: rgba(255, 255, 255, 0.01);
    font-size: 0.9rem;
    color: white;
  }

  & *:focus {
    outline: none;
  }
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 0rem 0rem 1rem 0rem;
  opacity: 0.1;
`

const StyledPortfolioFormControlInput = styled(PortfolioFormControl)`
  padding: 0.6rem 0rem 0.6rem 0.2rem;
  background-color: transparent;
`

const StyledPortfolioFormControlArea = styled(PortfolioFormControl)`
  height: 8rem;
  padding: 0.6rem 0rem 0.6rem 0.2rem;
  resize: none;
`

const StyledPrimaryButton = styled(PrimaryButton)`
  width: 22%;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  color: ${style.SecondaryColor};
`

const PortfolioForm = () => {
  const regexPhoneNumberValidation =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const initialValues = { name: "", email: "", phone: "", textarea: "" }
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string().matches(regexPhoneNumberValidation, "Invalid number format").required("Required"),
    textarea: Yup.string().required("Required"),
  })
  const onSubmit = (values: any) => console.log("Form data", values)

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {formik => (
        <StyledFormContainer>
          <StyledPortfolioFormControlInput control="name" label="Name" name="name" />
          <StyledPortfolioFormControlInput control="email" label="Email" name="email" />
          <StyledPortfolioFormControlInput control="phone" label="Phone" name="phone" />
          <StyledPortfolioFormControlArea control="textarea" label="Message" name="textarea" />
          <StyledPrimaryButton type="submit" buttonText="Submit">
            Submit
          </StyledPrimaryButton>
        </StyledFormContainer>
      )}
    </Formik>
  )
}

export default PortfolioForm
