import React from "react";
import { Box } from "./SidebarStyles";
import {
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
    IoHomeOutline
} from "react-icons/io5";

interface SidebarProps {
  logUserOut: any;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <Box>
      <div>
        <button>
          <i>
            {" "}
            <IoPeopleOutline />{" "}
          </i>
          Global issues
        </button>
      </div>
      <div>
        <button>
          <i>
            {" "}
            <IoPersonOutline />{" "}
          </i>{" "}
          My issues
        </button>
      </div>
      <div>
        <button onClick={props.logUserOut}>
          <i>
            {" "}
            <IoLogOutOutline />{" "}
          </i>
          Log out
        </button>
      </div>
    </Box>
  );
};

export default Sidebar;
