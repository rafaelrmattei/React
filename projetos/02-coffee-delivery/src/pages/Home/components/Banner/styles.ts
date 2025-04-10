import styled from "styled-components";

export const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 34rem;

  img#bg-img {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100%;
    object-fit: cover;
  }
  
  @media screen and (max-width: 1365px) {
    height: auto;
    padding: 1rem 3rem;
  }
`

export const BannerContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.813rem;
  max-width: 74rem;
  margin: 0 auto;

  img {
    max-width: 100%;
    height: auto;

    @media screen and (max-width: 1365px) {
      display: none;
    }
  }

  @media screen and (max-width: 1365px) {
    display: grid;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.063rem;  

  h1 {
    ${({ theme }) => theme.fonts.title.xl}
    color: ${props => props.theme["base-title"]}
  }

  span {
    ${({ theme }) => theme.fonts.text.l}
  } 

  @media screen and (max-width: 1365px) {
    gap: 2rem;  
  }
`

export const Infos = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.25rem 2.5rem;  

  @media screen and (max-width: 1365px) {
    grid-template-columns: 1fr;
  }
`

interface InfoProps {
  iconColor: "yellow-dark" | "yellow" | "base-text" | "purple"
}

export const Info = styled.div<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.theme["base-text"]};
  ${({ theme }) => theme.fonts.text.m}

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    color: ${props => props.theme.white};
    background-color: ${({ theme, iconColor }) => theme[iconColor]};
  }
`