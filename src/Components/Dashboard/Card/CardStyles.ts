import styled from "styled-components";
import {ModalProps} from "../../Modal/ModalStyles";

export const ModalBox = styled.div`
  position: fixed;
  z-index: 5000;
  background-color: #fff;
  box-shadow: 0 2px 10px #b9b6b6, 0 0 0 2px #ffffffeb;
  padding: 1.5em;
  margin-left: -130px;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
  left: 50%;
  margin-top: 30vh;
  border-radius: 20px;
  transform: ${(props: ModalProps) =>
    !props.active ? "translateY(-1000%)" : "translate(0)"};

  @media only screen and (min-width: 700px) {
    width: 600px;
    margin-left: -300px;
  }
`;