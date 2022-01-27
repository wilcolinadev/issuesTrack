import styled from "styled-components";

export interface ModalProps{
    active:boolean
    message?:string
}

export const ModalBox = styled.div`
  
  position: fixed;
  z-index: 5000;
  background-color: #fff;
  width:500px;
  box-shadow: 1px 1px 1px black;
  padding: 1.5em;
  margin-left: -250px;
  box-sizing: border-box;
  transition: all .5s ease-in-out;
  left:50%;
  margin-top: ${(props:ModalProps)=>(!props.active ?  '0' : '50vh')} ;
  transform:${(props:ModalProps)=>(!props.active ?  'translateY(-100%)' : 'translate(0)')} ;
`;

export const ModalText = styled.h3`
  text-align: center;
`;

export const ModalLink = styled.h3`
text-align: center;
  color: #000;
  padding-top: 1rem;
  text-decoration: underline;
  font-family: 'Quicksand', sans-serif;
  border: none;
  font-size: 1rem;
  background-color: #ccc;
  font-weight: bolder;
  filter: drop-shadow(1px 1px 1px #ffffff);
  margin-top: 1rem;
  
  &:hover{
    background-color: #ffca20 ;
    transition: 0.4s ease-in-out;

  }
`;