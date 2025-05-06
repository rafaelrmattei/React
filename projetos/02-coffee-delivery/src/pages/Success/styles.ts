import styled from "styled-components";

export const Container = styled.section`
  max-width: 74rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: calc(100dvh - 6.5rem - 6.5rem);
  justify-content: center;
 
  @media screen and (max-width: 1365px) {    
    padding: 0 2rem;    
  }
`

export const Title = styled.div`
  margin-bottom: 4rem;

  h1 {
    color: ${props => props.theme["yellow-dark"]};
    ${({ theme }) => theme.fonts.title.l}
  }

  span {
    color: ${props => props.theme["base-subtitle"]};
    ${({ theme }) => theme.fonts.text.l}
  }
`

interface IconProps {
  backgroundColor: "purple" | "yellow" | "yellow-dark"
}

export const Icon = styled.span<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme, backgroundColor }) => theme[backgroundColor]};

  svg {
    color: ${props => props.theme.white}
  }
`

export const Content = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`

export const GradientBorder = styled.div`
  display: block;
  padding: 1px;
  background: linear-gradient(135deg, ${props => props.theme.yellow}, ${props => props.theme.purple});
  border-radius: 6px 36px 6px 36px;

  @media screen and (max-width: 1365px) {    
    width: 100%;
  }
`

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${props => props.theme.background};

  @media screen and (max-width: 1365px) {    
    width: 100%;
  }

  .item {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;

    div {

      span {
        display: block;
        color: ${props => props.theme["base-text"]};
        ${({ theme }) => theme.fonts.text.m}
      }
    }
  }
`

export const Banner = styled.div`   
  @media screen and (max-width: 1365px) {    
    display: none;    
  }
`