import React from "react";
import { Box, FooterBox, MainBox } from "./SidebarStyles";
import {
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {RootStateOrAny} from "react-redux";

interface SidebarProps {
  logUserOut: any;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const isSidebarOpen = useSelector((state: RootStateOrAny) => state.isSidebarOpen );

  return (
    <MainBox isSidebarOpen={isSidebarOpen}>
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
