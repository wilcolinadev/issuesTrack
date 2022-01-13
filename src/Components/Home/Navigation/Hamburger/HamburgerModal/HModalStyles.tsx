import styled from "styled-components";
import {BurgerController} from "../HamburgerStyles";
import {Link} from "react-router-dom";

export const ModalWrapper = styled.section`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(1,0,0,0.8);
  transform: ${(props:BurgerController) => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.4s ease-in-out;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  
`;
export let ModalLink = styled.p`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;;
`;;



export const ModalDiv = styled.div`
text-align: center;
margin-top: 1.5rem;  
  &:first-child {
    margin-top: 2rem;
  }
  
`;

export const Image =  styled.img`
width: 300px;
`;