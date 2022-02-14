import { Form, Formik } from "formik"
import styled from "styled-components"
import * as Yup from "yup"
import * as style from "../../../variables/Variables"

const StyledFormContainer = styled(Form)`
  button {
    width: 100px;
    height: 40px;
    background-color: red;
  }
`

const PortfolioForm = () => {
  const initialValues = [{}]
  const validationSchema = Yup.object({})
  const onSubmit = values => console.log("Form data", values)

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {formik => (
        <StyledFormContainer>
          <button type="submit">Submit</button>
        </StyledFormContainer>
      )}
    </Formik>
  )
}

export default PortfolioForm
