import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;

  img {
    max-height: 2.5rem;
  }

  a:first-child:focus {
    outline: 0;
    box-shadow: none;
  }

  @media screen and (max-width: 1365px) {    
    padding: 0 2rem;    
  }

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 6px;
      text-decoration: none;
    }

    a:first-child{
      background-color: ${props => props.theme["purple-light"]};
      color: ${props => props.theme["purple-dark"]};
      ${({ theme }) => theme.fonts.text.s};
      line-height: normal;
      gap: 0.25rem;

      svg {
        color: ${props => props.theme.purple}
      }
    }

    a:first-child:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${props => props.theme["purple-dark"]};
    }

    a:last-child {
      background-color: ${props => props.theme["yellow-light"]};
      position: relative;

      svg {
        color: ${props => props.theme["yellow-dark"]}
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -.55rem;
        right: -.55rem;
        border-radius: 50%;
        width: 1.25rem;
        height: 1.25rem;
        background-color: ${props => props.theme["yellow-dark"]};
        color: ${props => props.theme.white};
        ${({ theme }) => theme.fonts.text.xs};
        line-height: normal;
      }
      span:empty {
        display: none;
      }
    }

    a:last-child:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${props => props.theme["yellow-dark"]};
    }
  }
`