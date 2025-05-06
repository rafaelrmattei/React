import styled from "styled-components";

export const Container = styled.div`
  display: flex; 
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.5rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: calc(-20px - 1.5rem)
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: .7rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    text-transform: uppercase;
    color: ${props => props.theme["yellow-dark"]};
    background-color: ${props => props.theme["yellow-light"]};
    ${({theme}) => theme.fonts.tag}
  }
`

export const Title = styled.div`
  margin-top: .8rem;
  line-height: normal;
  color: ${props => props.theme["base-subtitle"]};
  ${({theme}) => theme.fonts.title.s}
`

export const Description = styled.div`
  margin-top: .5rem;
  line-height: normal;
  color: ${props => props.theme["base-label"]};
  ${({theme}) => theme.fonts.text.s}
`

export const Control = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 2rem;

  & > button {    
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["purple-dark"]};
    border: none;
    border-radius: 6px;
    width: 2.375rem;
    height: 2.375rem;
    cursor: pointer;
    transition: background-color .2s;

    &:focus {
      outline: 0;
      box-shadow: none;
    }

    &:hover {
      background-color: ${props => props.theme["purple"]};
    }
  }
`

export const Price = styled.div`
  display: flex;
  gap: .2rem;
  align-items: baseline;
  color: ${props => props.theme["base-text"]};

  span:first-child {
    ${({theme}) => theme.fonts.text.s}
  }

  span:last-child {
    ${({theme}) => theme.fonts.title.m}
  }
`