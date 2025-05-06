import styled from "styled-components";

export const Container = styled.section`
  max-width: 74rem;
  margin: 0 auto;
  
  @media screen and (max-width: 1365px){
    padding: 2rem 3rem;    
  }

  h2 {
    padding: 2.625rem 0;
    ${({theme}) => theme.fonts.title.l}
    color: ${props => props.theme["base-subtitle"]}
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  gap: 2.5rem 2rem;
      
  @media screen and (max-width: 1365px){
    grid-template-columns: 1fr 1fr; 
  }

  @media screen and (max-width: 765px){
    grid-template-columns: 1fr; 
  }
`