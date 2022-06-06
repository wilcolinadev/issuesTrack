import styled from "styled-components";

export interface BurgerController {
  open: boolean;
}

export const Burger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 24px;
  height: 2em;
  padding: 0;
  background: transparent;
  justify-content: space-around;
  border: none;
  margin-right: 1em;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background: ${(props: BurgerController) =>
      props.open ? "#ffffff" : "#EFFFFA"};

    transition: all 0.3s linear;
    position: relative;
    transform-origin: 3px;
  }

  div:first-child {
    transform: ${(props: BurgerController) =>
      props.open ? "rotate(45deg)" : "rotate(0)"};
  }
  div:nth-child(2) {
    opacity: ${(props: BurgerController) => (props.open ? "0" : "1")};
    transform: ${(props: BurgerController) =>
      props.open ? "translateX(20px)" : "translateX(0)"};
  }
  div:nth-child(3) {
    transform: ${(props: BurgerController) =>
      props.open ? "rotate(-45deg)" : "rotate(0)"};
  }

  @media only screen and (min-width: 700px) and (max-width: 1024px) {
    display: none;
  }
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;
