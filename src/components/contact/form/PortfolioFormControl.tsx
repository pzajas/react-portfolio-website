import PortfolioFormInput from "./PortfolioFormInput"
import PortfolioFormTextarea from "./PortfolioFormTextarea"

interface Props {
  control: string
  name: string
  label: string
}

const PortfolioFormControl = ({ control, ...rest }: Props) => {
  switch (control) {
    case "name":
      return <PortfolioFormInput {...rest} />
    case "email":
      return <PortfolioFormInput {...rest} />
    case "phone":
      return <PortfolioFormInput {...rest} />
    case "textarea":
      return <PortfolioFormTextarea {...rest} />
    default:
      return null
  }
}

export default PortfolioFormControl
