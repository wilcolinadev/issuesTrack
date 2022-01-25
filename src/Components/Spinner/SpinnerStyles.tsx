import styled from "styled-components";

interface SpinnerProps {
    state: boolean
}

export const SpinnerBox = styled.div`
  display: ${(props:SpinnerProps)=> props.state ? "block" : "none"};
  position: fixed;
  z-index: 500;
  background-color: rgba(0,0,0,0.2);
  width: 200px;
  box-shadow: 1px 1px 1px black;
  left: 50%;
  margin-left: -100px; /* Half of the width */
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  height: 200px;
  top: 50%;

`;

export const InnerBox = styled.div`
  text-align: center;
  line-height: 200px;
`;