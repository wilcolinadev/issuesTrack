import styled from "styled-components";

interface SpinnerProps {
    state: boolean
}

export const SpinnerBox = styled.div`
  display: ${(props:SpinnerProps)=> props.state ? "block" : "none"};
  position: fixed;
  z-index: 500;
  background-color: #fff;
  width: 200px;
  box-shadow:1px 1px 1px 1px #ccc;
  left: 50%;
  margin-left: -100px; /* Half of the width */
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  height: 200px;
  top: 50%;

`;

export const InnerBox = styled.div`
  padding: 60px 30px;
`;

export const SpinnerDescription = styled.div`
  text-align: center;
  padding-top: 90px;
  font-weight: bold;
  font-size: 20px;
`;