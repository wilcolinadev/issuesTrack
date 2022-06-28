import styled from "styled-components";

export const Box = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    list-style: none;
    box-sizing: border-box;
    justify-content: space-between;
    border: 2px solid #d8d6d6;
    border-radius: 10px;
    padding: 0.7rem 0.4rem;
    margin-top: 0.5rem;
    color: #7e7d7d;
    cursor: pointer;
  }

  li {
    font-family: "Quicksand", sans-serif;
    font-size: 1rem;
  }

  ul:hover {
    background-color: #e6e2e2;
    transition: 0.5ms ease-in-out;
  }
`;

export const LiName = styled.li`
  font-weight: bold;
  color: #000;
  font-size: 1rem;
`;

interface PropsStatus {
  active: boolean | undefined;
}

export const LiStatus = styled.li`
  width: 30%;
  background-color: ${(props: PropsStatus) =>
    props.active ? "#caf1b2" : "#ccc"};
  color: ${(props: PropsStatus) => (props.active ? "#000000" : "#000000")};
  font-weight: bold;
  border-radius: 20px;
  padding: 0.3rem;
  text-align: center;
  
`;
