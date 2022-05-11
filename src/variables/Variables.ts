import { css } from "styled-components"

// COLORS

export const PrimaryColor = "#181818"
export const SecondaryColor = "#00c65c"
export const TeriaryColor = "white"

export const PrimaryButtonBackgroundColor = "rgba(255, 255, 255, 0.045)"

// POSITIONING

export const PrimaryMarginBottom = "2rem"

//STYLES

export const FormStyles = css`
  position: relative;
  margin-bottom: 1.5rem;

  label,
  div {
    font-size: 0.7rem;
    position: absolute;
    padding: 0.2rem;
    background-color: transparent;
    top: -0.7rem;
    opacity: 0.5;
  }

  label {
    color: white;
  }

  div {
    opacity: 1;
    color: red;
    left: 4rem;
  }
`
