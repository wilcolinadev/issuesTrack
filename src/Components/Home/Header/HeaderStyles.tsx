import styled from "styled-components";


export const HeaderTitle = styled.h1`
  font-size: 2.6rem;
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  padding: 1rem;
  margin-left: 1rem;
  word-spacing: 2px;
  line-height: 3rem;
  margin-top: .5rem;

  @media only screen and (min-width: 390px)  {
    font-size: 2.8rem;
    line-height: 3.5rem;
    margin-top: .8rem;
  }
`;

export const HeaderImage = styled.img`
  width: 280px;
  height: auto;
  margin-top: .5rem;
  
  @media only screen and (min-width: 390px){
    width: 320px;
    margin-top: 2rem;
  }
`;

