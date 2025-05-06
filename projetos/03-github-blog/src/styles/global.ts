import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-soothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Nunito", sans-serif;
    font-optical-sizing: auto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }

  a {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
    line-height: 100%;

    &:hover {
      transition: .2s;
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;
