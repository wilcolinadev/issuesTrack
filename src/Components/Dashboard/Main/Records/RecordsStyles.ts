import styled from "styled-components";

export const Box = styled.div`
 
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    list-style: none;
    box-sizing: border-box;
    justify-content: space-between;
    border: 2px solid #d8d6d6;
    border-radius: 10px;
    padding: 0.7rem 0.4rem;
    margin-top: 0.5rem;
    color: #a3a1a1;
  }

  li {
    font-family: "Quicksand", sans-serif;
    font-size: 1rem;
  }
`;

export const LiName = styled.li`
  font-weight: bold;
  color: #000;
  font-size:1rem ;
`;

export const LiId = styled.li`
    
`;

