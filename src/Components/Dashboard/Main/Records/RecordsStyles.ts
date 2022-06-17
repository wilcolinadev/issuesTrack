import styled from "styled-components";


export const Box = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    box-sizing: border-box;
    margin-right: .5rem;
    padding-top: 1rem;
  }

  li {
    font-family: "Quicksand", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: red;
    text-transform: uppercase;
  }

`;