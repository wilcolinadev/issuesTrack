import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  background-color: #fff;
  grid-area: 1 / 2 / 2 / 6;
  padding-top: 50px;
  
`;

export const InnerBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media only screen and (min-width: 700px) {
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 1rem;
    align-items: flex-end;
  }
`
