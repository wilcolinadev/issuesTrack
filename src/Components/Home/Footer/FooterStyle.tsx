import styled from "styled-components";

export const FooterContent = styled.p`
  color: #fff;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  line-height: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
 

  @media only screen and (min-width: 390px){
    font-size: 1.2rem;
    margin-top: 4rem;
  }

  @media only screen and (min-width: 700px){
    
    font-size: 2rem;
    line-height: 3.5rem;
    margin-top: 6rem;
  }
  @media only screen and (min-height: 950px ) and (min-width: 1025px){

    font-size: 2rem;
    line-height: 3.5rem;
    margin-top: 6rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
  }
`;
