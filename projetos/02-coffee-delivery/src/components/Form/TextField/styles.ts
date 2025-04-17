import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;

  input[type="text"] {
    padding: 0.75rem;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 0px 1px 1px ${(props) => props.theme["base-button"]};
    background-color: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    ${({ theme }) => theme.fonts.text.s};
    line-height: normal;
    width: 100%;
  }

  input[type="text"]::placeholder {
    color: ${(props) => props.theme["base-label"]};
    line-height: normal;
  }

  input.optional {
    padding-right: 4rem;
  }

  span {
    position: absolute;
    right: 0.75rem;
    top: 0.85rem;
    font-style: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const Error = styled.div`
  color: firebrick;
  font-size: 0.7rem;
  font-weight: 500;

  &:empty {
    display: none;
  }
`;
