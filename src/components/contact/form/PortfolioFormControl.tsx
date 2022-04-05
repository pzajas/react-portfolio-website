import { FunctionComponent } from "react"
import PortfolioFormInput from "./PortfolioFormInput"
import PortfolioFormTextarea from "./PortfolioFormTextarea"

interface Props {
  props: {
    control: any
    label: any
    name: any
  }
}

const PortfolioFormControl = ({ props }: Props) => {
  const { control, label, name, ...rest } = props

  console.log(control)

  switch (control) {
    case "name":
      return (
        <PortfolioFormInput
          props={{
            control: "",
            label: "",
            name: "",
          }}
          {...rest}
        />
      )
    case "email":
      return (
        <PortfolioFormInput
          props={{
            control: "",
            label: "",
            name: "",
          }}
          {...rest}
        />
      )
    case "phone":
      return (
        <PortfolioFormInput
          props={{
            control: "",
            label: "",
            name: "",
          }}
          {...rest}
        />
      )
    case "textarea":
      return (
        <PortfolioFormTextarea
          props={{
            control: "",
            label: "",
            name: "",
          }}
          {...rest}
        />
      )
    default:
      return null
  }
}

export default PortfolioFormControl
