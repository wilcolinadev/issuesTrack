import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  background-color: #fff;
  grid-area: 1 / 2 / 2 / 6;
  padding-top: 20px;

  box-sizing: border-box;
  @media only screen and (min-width: 850px) {
    padding-left: 20px;
  }
`;

export const InnerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  padding: 0.8rem;
  @media only screen and (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InnerBoxText = styled.div`
  padding-top: 20px;
`;

export const AddButton = styled.button`
  font-size: 1.2rem;
  background-color: #f3f3bd;
  border: none;
  color: #000;
  padding: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 400;
  box-shadow: 0 2px 10px #b9b6b6, 0 0 0 2px #ffffffeb;

  &:hover {
    color: #fff;
    background-color: #19263c;
    transition: 0.4s ease-in-out;
  }

  @media only screen and (min-width: 700px) {
    margin-bottom: 2rem;
    font-size: 1.4rem;
    padding: 0.6rem;
  }
`;
