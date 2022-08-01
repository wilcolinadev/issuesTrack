import styled from "styled-components";

export interface ModalProps {
  active?: boolean;
  message?: string;
  fontColor?: string;
  colorB?: string;
  hover?: string;
}

export const ModalBox = styled.div`
  position: fixed;
  z-index: 5000;
  background-color: #fff;
  width: 260px;
  box-shadow: 1px 1px 1px black;
  padding: 1.5em;
  margin-left: -130px;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
  left: 50%;
  margin-bottom: 0.3rem;
  margin-top: ${(props: ModalProps) => (!props.active ? "0" : "40vh")};
  transform: ${(props: ModalProps) =>
    !props.active ? "translateY(-100%)" : "translate(0)"};

  @media only screen and (min-width: 700px) {
    margin-left: -250px;
    width: 500px;
    left: 50%;
  }
`;

export const ModalText = styled.h4`
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  @media only screen and (min-width: 850px) {
    font-size: 2rem;
  }
`;

export const ModalLink = styled.button`
  text-align: center;
  color: ${(props: ModalProps) => (props.fontColor ? props.fontColor : "#000")};
  padding: 0.5rem;
  font-family: "Quicksand", sans-serif;
  border: none;
  font-size: 0.8rem;
  background-color: ${(props: ModalProps) =>
    props.colorB ? props.colorB : "#ccc"};
  font-weight: bolder;
  filter: drop-shadow(1px 1px 1px #ffffff);
  width: 100%;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #ffca20;
    transition: 0.4s ease-in-out;
    color: ${(props: ModalProps) => (props.hover ? props.hover : "#000")};
  }

  @media only screen and (min-width: 700px) {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
`;
