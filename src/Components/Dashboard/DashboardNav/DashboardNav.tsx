import React from "react";
import { Nav, NavigationElement } from "./NavStyles";

interface DashboardProps {
    username:string
}
const DashboardNav:React.FC<DashboardProps> = (props) => {
  return (
    <Nav>
      <NavigationElement>IssuesTrack</NavigationElement>
      <NavigationElement>{props.username}</NavigationElement>
    </Nav>
  );
};

export default DashboardNav;
