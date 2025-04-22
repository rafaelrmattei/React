import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  min-height: 253px;
  cursor: pointer;

  @media screen and (max-width: 1365px) {
    min-height: auto;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 160%;
  }

  time {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme["base-text"]};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
