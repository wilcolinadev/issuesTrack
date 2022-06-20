import styled from "styled-components";

export const Box = styled.div`
  ul{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    list-style: none;
    box-sizing: border-box;
    padding: 1rem 0;
  }

  li {
    font-family: "Quicksand", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    text-transform: uppercase;
  }
  

`;

export const LiName = styled.li`
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const LiId = styled.li`
  width:10%;
`;
