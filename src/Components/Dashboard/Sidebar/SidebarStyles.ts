import styled from "styled-components";

export const Box = styled.div`
  h3 {
    color: #e9ac30;
    margin-bottom: 0.5rem;
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
    transition: 0.5ms ease-in-out;
    cursor: pointer;
    color: #000;
  }

  i {
    position: relative;
    top: 4px;
    margin-right: 5px;
  }
`;

export const FooterBox = styled.div`
  width: 100%;
  text-align: center;
  
  p {
    color: #fff;
    padding-bottom: 1rem;
    font-size: 1rem;
  }
`;

export const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  background: linear-gradient(0deg,  #19191b, 10%, #19263c);
  width: 100%;
  padding-top: 50px;
  
`;
