import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px 0 RGBA(0, 0, 0, 0.2);
  margin-top: -5rem;
  display: flex;
  gap: 2rem;

  img:first-child {
    max-width: 9.25rem;
    max-height: 9.25rem;
    height: auto;
    border-radius: 8px;
  }

  @media screen and (max-width: 1365px) {
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2.5rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  @media screen and (max-width: 1365px) {
    gap: 1.2rem;
  }
`;

export const Name = styled.div`
  display: inline-flex;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 11px;
      height: 11px;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 1365px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Description = styled.div`
  color: ${(props) => props.theme["base-text"]};
`;

export const Extras = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;

  div {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    svg {
      color: ${(props) => props.theme["base-label"]};
      max-width: 1.125rem;
      max-height: 1.125rem;
    }
  }

  @media screen and (max-width: 1365px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-top: 0;
  }
`;
