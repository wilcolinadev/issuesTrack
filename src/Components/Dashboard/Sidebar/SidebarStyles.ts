import styled from "styled-components";

export const Box = styled.div`
  background-color: #19263c;
  width: 100%;
  padding-top: 50px;

  h3 {
    color: #e9ac30;
    margin-bottom: .5rem;
    padding: 1rem;
  }

  button {
    width: 100%;
    padding: 1rem;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    text-align: left;
  }

  button:hover {
    background-color: #cfcdcd;
    transition: .5ms ease-in-out;
    cursor: pointer;
    color: #000;
  }

  i {
    position: relative;
    top: 4px;
    margin-right: 5px;
  }
`;
