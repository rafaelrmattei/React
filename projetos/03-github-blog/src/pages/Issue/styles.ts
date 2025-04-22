import styled from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px 0 RGBA(0, 0, 0, 0.2);
  margin-top: -5rem;
  display: flex;
  flex-direction: column;
`;

export const Links = styled.div`
  display: inline-flex;
  justify-content: space-between;
  padding-bottom: 1.25rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 12px;
      height: 12px;
      font-weight: 700;
    }
  }
`;

export const Title = styled.div`
  padding-bottom: 0.5rem;
  color: ${(props) => props.theme["base-title"]};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Extras = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;

  div {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme["base-span"]};
      line-height: 130%;
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
    gap: 0.8rem;
    margin-top: 1rem;
  }
`;

export const Content = styled.article`
  padding: 2.5rem 2rem 0;

  @media screen and (max-width: 1365px) {
    padding: 2.5rem 2rem;
  }
`;
