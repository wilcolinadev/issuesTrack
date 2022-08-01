import styled from "styled-components";
import { ModalProps } from "../../../Modal/ModalStyles";

export const ModalBox = styled.div`
  position: fixed;
  z-index: 5000;
  background-color: #fff;
  margin-left: -130px;
  box-shadow: 0 2px 10px #b9b6b6, 0 0 0 2px #ffffffeb;
  padding: 1.5em;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
  left: 50%;
  right: 0;

  margin-right: auto;
  width: 300px;
  margin-top: 15vh;
  transform: ${(props: ModalProps) =>
    !props.active ? "translateY(-150%)" : "translate(0)"};

  @media only screen and (min-width: 700px) {
    width: 600px;
    margin-left: -300px;
    left: 50%;
  }
`;

export const IssueForm = styled.form`
  display: flex;
  flex-flow: column nowrap;

  input,
  textarea {
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: #f3f3bd;
    font-family: "Quicksand", sans-serif;
    padding: 0.5rem 0.5rem 0.5rem 1.3rem;
    font-size: 1rem;
    border: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: #000;
    font-size: 1.2rem;
  }

  textarea {
    height: 70px;
  }
`;
