import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 18.5rem;
  background-image: url("/images/cover.svg");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-top: -4rem;
    max-width: 100%;
    height: auto;
  }
`;
