import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import styled from "styled-components"
import * as palette from "./variables/Variables"
const AppWrapper = styled.div`
  background-color: ${palette.PrimaryColor};
`

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper>
        <App />
      </AppWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
