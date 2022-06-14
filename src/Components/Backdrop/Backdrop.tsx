import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;

  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-out;
`;
