const PortfolioFormControl = props => {
  const { control } = props

  switch (control) {
    case "input":
    case "textarea":
    default:
      return null
  }
}

export default PortfolioFormControl
