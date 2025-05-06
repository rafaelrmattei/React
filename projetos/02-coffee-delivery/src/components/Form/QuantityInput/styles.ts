import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["base-button"]};
  border-radius: 6px;
  width: 4.5rem;
  height: 2.375rem;

  button, input[type="number"] {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 1.25rem;
    border: none;
    line-height: normal;
  }

  button:focus, input[type="number"]:focus {
    outline: 0;
    box-shadow: none;
  }

  button {
    background-color: transparent;
    color: ${props => props.theme["purple-dark"]};
    cursor: pointer;
  }

  input {
    background-color: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-title"]};
    ${({theme}) => theme.fonts.text.m}
    text-align: center;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
`

