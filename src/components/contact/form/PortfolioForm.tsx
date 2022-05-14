import { Form, Formik, FormikHelpers } from "formik"
import styled from "styled-components"
import * as Yup from "yup"
import * as style from "../../../variables/Variables"
import PortfolioFormControl from "./PortfolioFormControl"
import PrimaryButton from "../../../elements/buttons/PrimaryButton"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
import "../../../styles/Toastify.css"

const StyledFormContainer = styled(Form)`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  position: relative;

  & * {
    display: flex;
    flex-direction: column;
    border: none;
    background-color: rgba(255, 255, 255, 0.01);
    font-size: 0.9rem;
    color: white;
  }

  & *:focus {
    outline: none;
  }
`

const StyledPortfolioFormControlInput = styled(PortfolioFormControl)`
  padding: 0.6rem 0rem 0.6rem 0.2rem;
  background-color: transparent;
`

const StyledPortfolioFormControlArea = styled(PortfolioFormControl)`
  height: 6rem;
  padding: 0.6rem 0rem 0rem 0.2rem;
  resize: none;
`

const StyledPrimaryButton = styled(PrimaryButton)`
  background: ${style.PrimaryButtonBackgroundColor};
  border: none;
  padding: 0.3rem 0.6rem;
  width: 4.2rem;
  font-size: 13px;
  color: ${style.SecondaryColor};
  transition: all 0.5s ease-in-out;

  &:hover {
    letter-spacing: 0.05rem;
    cursor: pointer;
  }
`

interface Values {
  name: string
  email: string
  phone: string
  textarea: string
}

const PortfolioForm = () => {
  const regexPhoneNumberValidation =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string().matches(regexPhoneNumberValidation, "Invalid number format").required("Required"),
    textarea: Yup.string().required("Required"),
  })

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          email: "",
          phone: "",
          textarea: "",
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2))
            // setSubmitting(false)
            emailjs
              .send(
                "service_k56bww6",
                "template_2t3cdhd",
                { name: values.name, email: values.email, phone: values.phone, textarea: values.textarea },
                "UNREX6clopUiYwH5o"
              )
              .then(
                result => {
                  toast("Email has beed delivered successfully!", {
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    theme: "dark",
                  })
                },
                error => {
                  toast("An error occured!", {
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    theme: "dark",
                  })
                }
              )
          }, 10)
        }}
      >
        <StyledFormContainer>
          <StyledPortfolioFormControlInput control="name" label="Name" name="name" />
          <StyledPortfolioFormControlInput control="email" label="Email" name="email" />
          <StyledPortfolioFormControlInput control="phone" label="Phone" name="phone" />
          <StyledPortfolioFormControlArea control="textarea" label="Message" name="textarea" />
          <StyledPrimaryButton type="submit" buttonText="Submit" />
        </StyledFormContainer>
      </Formik>
      <ToastContainer />
    </div>
  )
}

export default PortfolioForm
