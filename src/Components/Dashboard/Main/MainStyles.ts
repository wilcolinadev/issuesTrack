import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  background-color: #fff;
  grid-area: 1 / 2 / 2 / 6;
  padding-top: 40px;
  
`;

export const InnerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  padding: .8rem;
  @media only screen and (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
