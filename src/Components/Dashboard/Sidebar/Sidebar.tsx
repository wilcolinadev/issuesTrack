import React from "react";
import { Box, FooterBox, MainBox } from "./SidebarStyles";
import {
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline
} from "react-icons/io5";
import { useSelector, useDispatch} from "react-redux";
import * as ActionCreators from '../../../state/actions/actionCreators'
import {RootStateOrAny} from "react-redux";
import {bindActionCreators} from "redux";
interface SidebarProps {
  logUserOut: any;
  username:string
}

const Sidebar: React.FC<SidebarProps> = (props:SidebarProps) => {
  const isSidebarOpen = useSelector((state: RootStateOrAny) => state.isSidebarOpen );
  const dispatch = useDispatch();
  const {showGlobalIssues, showUserIssues} = bindActionCreators(ActionCreators, dispatch);

  const sliceName=(name)=>{
    const slicedName = name.split(" ");
    return slicedName[0];
  }
  return (
    <MainBox isSidebarOpen={isSidebarOpen}>
      <Box>
        <span>

            Hi, {sliceName(props.username)}!
        </span>
        <div>
          <button onClick={showGlobalIssues}>
            <i>
              {" "}
              <IoPeopleOutline />{" "}
            </i>
            Global issues
          </button>
        </div>
        <div>
          <button onClick={showUserIssues}>
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
