import styled from "styled-components";

export const ModalBox = styled.div`
  
  position: fixed;
  z-index: 5000;
  background-color: #fff;
  width:500px;
  box-shadow: 1px 1px 1px black;
  padding: 1.5em;
  top: 50%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  left: 50%;
  transform: translate(-50%, -50%);
`;

