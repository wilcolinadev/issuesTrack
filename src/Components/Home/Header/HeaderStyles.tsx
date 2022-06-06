import styled from "styled-components";

export const HeaderTitle = styled.h1`
  font-size: 2.6rem;
  color: #fff;
  font-family: "Roboto Condensed", sans-serif;
  padding: 1rem;
  margin-left: 1rem;
  word-spacing: 2px;
  line-height: 3rem;
  margin-top: 0.5rem;

  @media only screen and (min-width: 390px) {
    font-size: 2.8rem;
    line-height: 3.5rem;
    margin-top: 0.8rem;
  }

  @media only screen and (min-width: 700px) {
    width: 80%;
    margin-left: 1rem;
    padding: 2rem;
    font-size: 4rem;
    line-height: 5rem;
    margin-top: 1rem;
  }

  @media only screen and (min-width: 1025px) {
    width: 100%;
    margin-left: 1rem;
    padding: 2rem;
    font-size: 5rem;
    line-height: 6rem;
    margin-top: 0;
  }
`;

export const HeaderImage = styled.img`
  width: 280px;
  height: auto;
  margin-top: 0.5rem;

  @media only screen and (min-width: 390px) {
    width: 320px;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 700px) {
    width: 500px;
    margin-top: 7rem;
  }
`;

export const GridWrapper = styled.div`
  @media only screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin-top: 7rem;
  }

  @media only screen and (min-height: 1000px) and (min-width: 1025px) {
    margin-top: 10rem;
  }
`;
