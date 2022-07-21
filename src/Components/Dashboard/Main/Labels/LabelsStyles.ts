import styled from "styled-components";

export const Box = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
  @media only screen and (min-width: 700px) {

    ul{
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media only screen and (min-width: 1000px) {
    ul{
      grid-template-columns: repeat(6, 1fr);
    }
  }
`;

export const LiName = styled.li`
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const LiId = styled.li`
  width: 10%;
  display: none;
  @media only screen and (min-width: 700px) {
    display: block;
  }
`;

export const LiDescription = styled.li`
  display: none;
  @media only screen and (min-width: 700px) {
    display: block;
  }
`;

export const LiPhone = styled.li`
  display: none;
  @media only screen and (min-width: 700px) {
    display: block;
  }
`;


export const LiEmail = styled.li`
  display: none;
  @media only screen and (min-width: 1000px) {
    display: block;
  }
`;
