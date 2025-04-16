import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  max-width: 74rem;
  margin: 0 auto;
  padding-top: 2.5rem;

  @media screen and (max-width: 1365px) {
    padding: 2.5rem 2rem 0;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme["base-subtitle"]};
  ${({ theme }) => theme.fonts.title.xs};
`;

export const Subtitle = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  color: ${(props) => props.theme["base-subtitle"]};

  h3 {
    ${({ theme }) => theme.fonts.text.m};
  }

  span {
    ${({ theme }) => theme.fonts.text.s};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Adress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const Form = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const Methods = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;

  @media screen and (max-width: 1365px) {
    span span {
      display: none;
    }
  }
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;

  input[type="submit"] {
    border: none;
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    text-transform: uppercase;
    background-color: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme.white};
    ${({ theme }) => theme.fonts.button.g}
    transition: background-color .2s;
    width: 100%;
    line-height: normal;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const Product = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0 0.25rem 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 4rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    .infos {
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
    }

    .actions {
      display: inline-flex;
      gap: 0.5rem;
    }
  }
`;

export const ButtonRemoveItem = styled.button`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;
  border: 0;
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-button"]};
  ${({ theme }) => theme.fonts.text.s};
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  transition: background-color 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const Totals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: inline-flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme["base-text"]};
      line-height: normal;
    }

    span:first-child {
      ${({ theme }) => theme.fonts.text.s};
    }

    span:last-child {
      ${({ theme }) => theme.fonts.text.m};
    }

    strong {
      color: ${(props) => props.theme["base-subtitle"]};
      ${({ theme }) => theme.fonts.text.l};
      font-weight: bold;
      line-height: normal;
    }
  }
`;
