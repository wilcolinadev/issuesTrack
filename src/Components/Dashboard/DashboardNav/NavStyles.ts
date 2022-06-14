import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background: linear-gradient(0.25turn, #19263c, 95%, #19191b);
  box-sizing: border-box;
  position: absolute;
  height: 50px;
  z-index:100;
  p {
    color: #fff;
    box-sizing: border-box;
    line-height: 50px;
    margin-left: 1rem;
    margin-right: 0.5rem;
  }

  @media only screen and (min-width: 700px) {
  }
`;

export const NavigationElement = styled.p`
  font-size: 1.6rem;
`;
export const UserName = styled.p`
  display: none;

  @media only screen and (min-width: 700px) {
    display: block;
    color: #fff;
    font-size: 1.1rem;
  }
`;
