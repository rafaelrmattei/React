import styled from "styled-components";

export const Container = styled.div`

  input {
    display: none;
  }

  input + label {
    border: 1px solid transparent;
  }

  input:checked + label {
    border: 1px solid ${props => props.theme.purple};
    background-color: ${props => props.theme["purple-light"]};
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background-color: ${props => props.theme["base-button"]};
    border-radius: 6px;
    cursor: pointer;
    
    svg {
      color: ${props => props.theme["purple"]};
    }

    span {
      color: ${props => props.theme["base-text"]};
      ${({ theme }) => theme.fonts.button.m};
      text-transform: uppercase;
      line-height: normal;
    }
  }
`