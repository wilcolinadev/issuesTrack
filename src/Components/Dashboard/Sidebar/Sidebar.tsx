import React from "react";
import { Box } from "./SidebarStyles";
import {Dispatch} from "redux";

interface SidebarProps{
    logUserOut:any
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <Box>
        <h1>Sidebar</h1>
        <div>
            <button onClick={props.logUserOut}>Log out</button>
        </div>


    </Box>
  );
};

export default Sidebar;
