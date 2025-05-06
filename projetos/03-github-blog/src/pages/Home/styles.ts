import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 0.5rem;

  div {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.125rem;
      font-weight: 700;
    }

    span {
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }

  input {
    color: ${(props) => props.theme["base-label"]};
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    line-height: normal;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
      opacity: 0.7;
    }
  }
`;

export const Posts = styled.section`
  margin-top: 3rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1365px) {
    grid-template-columns: 1fr;
  }
`;
