import { css } from "styled-components"

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
