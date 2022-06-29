import styled from "styled-components";

export const Box = styled.div`
  font-family: "Quicksand", sans-serif;

  h1 {
    color: #000000;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -2px;
  }

  p {
    color: #8c8b8b;
    font-size: 1rem;
    font-weight: lighter;
    margin-bottom: 0.5rem;
  }
  @media only screen and (min-width: 850px) {
   h1{
     font-size: 3rem;
   }
    p{
      font-size: 1.3rem;
    }
  }
`;
