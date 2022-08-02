import styled from "styled-components";
import { ModalProps } from "../../Modal/ModalStyles";

export const ModalBox = styled.div`
  position: fixed;
  z-index: 5000;
  background-color: #fff;
  box-shadow: 0 1px 10px #fffbfb, 0 0 0 2px #ffffffeb;
  padding: 1.5em;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
  margin-top: 15vh;
 
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  transform: ${(props: ModalProps) =>
    !props.active ? "translateY(-1000%)" : "translate(0)"};

  @media only screen and (min-width: 700px) {
    width: 600px;
  }

  p {
    margin: 0.3rem 0;
    font-size: 1rem;
  }

  select {
    width: 100%;
    border: none;
    height: 2rem;
    background-color: #ebeaea;
    margin: 0.6rem 0;
    color: #000000;
    font-size: 1.3rem;
  }
  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  i {
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

export const Label = styled.p`
  font-weight: bold;
  padding-top: 0.3rem;
  font-size: 1.1rem;
`;
