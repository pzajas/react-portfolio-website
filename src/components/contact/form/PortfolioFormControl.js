import PortfolioFormInput from "./PortfolioFormInput"
import PortfolioFormTextarea from "./PortfolioFormTextarea"

const PortfolioFormControl = props => {
  const { control, ...rest } = props

  switch (control) {
    case "name":
      return <PortfolioFormInput {...rest} />
    case "email":
      return <PortfolioFormInput {...rest} />
    case "textarea":
      return <PortfolioFormTextarea {...rest} />
    default:
      return null
  }
}

export default PortfolioFormControl
