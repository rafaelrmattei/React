import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme["base-title"]};
  }

  body {
    background: ${props => props.theme["background"]};
    color: ${props => props.theme["base-title"]};
    -webkit-font-smoothing: antialiased;
    margin-bottom: 6.5rem;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  .Toastify__toast {
    font-family: 'Roboto', sans-serif;
    padding: 1.3rem 1.3rem 1.5rem 1.3rem;

    strong {
      font-size: 1rem;
    }

    span {
      font-size: .875rem;
    }
  }
`