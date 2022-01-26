import styled from "styled-components";

 interface BackdropProps {
    active : boolean
 }

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left:${(props:BackdropProps)=>(props.active ? "50%" : "0")} ;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-out;
 
`;