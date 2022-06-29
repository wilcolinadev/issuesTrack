import styled from "styled-components";

export const FooterContent = styled.p`
  color: #fff;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1px;
  line-height: 1.5rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;

  @media only screen and (min-width: 700px) {
    font-size: 1.4rem;
    line-height: 2rem;
    margin-top: 3rem;
  }
  @media only screen and (min-height: 950px) and (min-width: 1025px) {
    line-height: 1rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2rem;
    box-sizing: border-box;
  }
`;

export const FooterBox = styled.div`
  padding-bottom: 2.5rem;
`;
