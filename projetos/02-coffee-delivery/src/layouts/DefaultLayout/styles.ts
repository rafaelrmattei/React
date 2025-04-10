import styled from "styled-components"

export const LayoutContainer = styled.div`
  max-width: 74rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;

  img {
    max-height: 2.5rem;
  }

  a:first-child:focus {
    outline: 0;
    box-shadow: none;
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
      ${({ theme }) => theme['text-s']};
      gap: 0.25rem;
      line-height: normal;

      svg {
        color: ${props => props.theme["purple"]}
      }
    }

    a:first-child:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${props => props.theme["purple-dark"]};
    }

    a:last-child {
      background-color: ${props => props.theme["yellow-light"]};

      svg {
        color: ${props => props.theme["yellow-dark"]}
      }
    }

    a:last-child:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${props => props.theme["yellow-dark"]};
    }
  }
`