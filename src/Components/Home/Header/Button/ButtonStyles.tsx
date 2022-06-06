import styled from "styled-components";

export const HeaderButton = styled.button`
  font-family: "Quicksand", sans-serif;
  border: none;
  font-size: 1rem;
  background-color: #f3f3bd;
  color: #000;
  padding: 0.7rem;
  margin-left: 2rem;
  border-radius: 20px;
  font-weight: bolder;
  filter: drop-shadow(1px 1px 1px #ffffff);
  margin-top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #ffca20;
    transition: 0.4s ease-in-out;
  }

  @media only screen and (min-width: 390px) {
    font-size: 1.2rem;
    margin-top: 1.2rem;
    margin-bottom: 2.5rem;
  }

  @media only screen and (min-width: 700px) {
    font-size: 2rem;
    padding: 1rem;
    margin-left: 3rem;
  }
`;
