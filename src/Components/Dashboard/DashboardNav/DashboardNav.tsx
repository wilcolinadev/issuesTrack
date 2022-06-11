import React, {useState} from "react";
import { Nav, NavigationElement, UserName } from "./NavStyles";
import {Burger} from "../../Home/Navigation/Hamburger/HamburgerStyles";

interface DashboardProps {
    username:string
}
const DashboardNav:React.FC<DashboardProps> = (props) => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  return (
    <Nav>
      <NavigationElement>IssuesTrack</NavigationElement>
        <Burger open={isHamburgerActive}
                onClick={() => setIsHamburgerActive(!isHamburgerActive)}>
            <div />
            <div />
            <div />
        </Burger>
      <UserName>{props.username}</UserName>
    </Nav>
  );
};

export default DashboardNav;
