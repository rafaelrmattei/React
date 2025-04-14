import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 2rem;
  max-width: 74rem;
  margin: 0 auto;
  padding-top: 2.5rem;
 
  @media screen and (max-width: 1365px) {    
    padding: 2.5rem 2rem;    
    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.h2`
  color: ${props => props.theme["base-subtitle"]};
  ${({theme}) => theme.fonts.title.xs};
`

export const Subtitle = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  color: ${props => props.theme["base-subtitle"]};

  h3 {
    ${({theme}) => theme.fonts.text.m};
  }

  span {
    ${({theme}) => theme.fonts.text.s};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Adress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
`

export const Form = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem .75rem;
`

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
`

export const Methods = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`

export const Resume = styled.div`
  background-color: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
`