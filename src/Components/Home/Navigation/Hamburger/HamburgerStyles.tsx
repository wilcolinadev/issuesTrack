import styled from "styled-components";

export interface BurgerController {
  open: boolean;
  media?: string;
}

export const Burger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 24px;
  line-height: 50px;
  padding: 0;
  background: transparent;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  margin-right: 1.5rem;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  align-items: center;
  color: #f3f3bd;

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
    margin-top: 0.4rem;
    opacity: ${(props: BurgerController) => (props.open ? "0" : "1")};
    transform: ${(props: BurgerController) =>
      props.open ? "translateX(20px)" : "translateX(0)"};
  }

  div:nth-child(3) {
    margin-top: 0.4rem;
    transform: ${(props: BurgerController) =>
      props.open ? "rotate(-45deg)" : "rotate(0)"};
  }

  @media only screen and (min-width: ${(props: BurgerController) =>
      props.media}) {
    display: none;
  }
`;
