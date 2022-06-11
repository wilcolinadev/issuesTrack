import styled from "styled-components";

export const DashboardWrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const DashboardDivider = styled.div`
  
  
  @media only screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  
  height: 100vh;
`;

