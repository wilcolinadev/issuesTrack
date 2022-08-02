import styled from "styled-components";

export const Text = styled.p`
  color: #fff;
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  line-height: 1.5rem;
  padding: 1rem;
  margin-left: 1rem;

  @media only screen and (min-width: 390px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }
  @media only screen and (min-width: 700px) {
    width: 80%;
    margin-left: 1rem;
    font-size: 1.5rem;
    line-height: 3.5rem;
    padding-top: 0;
  }

  @media only screen and (min-width: 1025px) {
    width: 90%;
  }
`;
