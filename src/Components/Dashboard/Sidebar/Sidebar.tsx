import React from "react";
import { Box, FooterBox, MainBox, Button, Label } from "./SidebarStyles";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {
  IoLogOutOutline,
  IoPersonOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import * as ActionCreators from "../../../state/actions/actionCreators";
import { RootStateOrAny } from "react-redux";
import { bindActionCreators } from "redux";

interface SidebarProps {
  logUserOut: any;
  username: string;
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {

  const dimensions = useWindowDimensions();
  console.log(dimensions);
  const isSidebarOpen = useSelector(
    (state: RootStateOrAny) => state.isSidebarOpen
  );
  const activeGroup = useSelector((state: RootStateOrAny) => state.issues);
  const dispatch = useDispatch();
  const { showUserIssues, showGlobalIssues, toggleSidebar } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const sliceName = (name) => {
    const slicedName = name.split(" ");
    return slicedName[0];
  };

  const updateUI = (state)=>{
    if (state === 'global'){
      showGlobalIssues();
    }else {
      showUserIssues();
    }
    if(dimensions.width <= 1000){
      toggleSidebar(isSidebarOpen);
    }

  };

  return (
    <MainBox isSidebarOpen={isSidebarOpen}>
      <Box>
        <span>Hi, {sliceName(props.username)}!</span>
        <div>
          <Button
            onClick={updateUI}
            active={activeGroup === "user" && true}
          >
            <i>
              {" "}
              <IoPersonOutline />{" "}
            </i>{" "}
            My issues
          </Button>
        </div>

        <div>
          <Button
            onClick={()=>updateUI('global')}
            active={activeGroup === "global" && true}
          >
            <i>
              {" "}
              <IoPeopleOutline />{" "}
            </i>
            Global issues
            <Label>
              Read only
            </Label>
          </Button>
        </div>

        <div>
          <Button onClick={props.logUserOut}>
            <i>
              {" "}
              <IoLogOutOutline />{" "}
            </i>
            Log out
          </Button>
        </div>
      </Box>
      <FooterBox>
        <p> IssuesTrack 2021. All rights reserved.</p>
      </FooterBox>
    </MainBox>
  );
};

export default Sidebar;
