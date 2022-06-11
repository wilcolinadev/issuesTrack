import React from "react";
import { Box, FooterBox, MainBox } from "./SidebarStyles";
import {
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import issuesTrackLogo from "../../../assets/ITlogo.png";

interface SidebarProps {
  logUserOut: any;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <MainBox>
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
      <FooterBox>
        <p> IssuesTrack 2021. All rights reserved.</p>
      </FooterBox>
    </MainBox>
  );
};

export default Sidebar;
