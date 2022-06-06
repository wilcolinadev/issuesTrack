import styled from "styled-components";

export const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const NavigationElement = styled.p`
  color: #fff;
  font-size: 1.3rem;
  margin-left: 1rem;
  box-sizing: border-box;
  line-height: 50px;

 
`;

export const InnerNavBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
