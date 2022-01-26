import styled from "styled-components";

export interface ModalProps{
    active:boolean
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

