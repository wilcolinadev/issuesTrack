import React from "react";
import { Box, FooterBox, MainBox, Button } from "./SidebarStyles";
import {
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
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
  const isSidebarOpen = useSelector(
    (state: RootStateOrAny) => state.isSidebarOpen
  );
  const activeGroup = useSelector((state: RootStateOrAny) => state.issues);
  const dispatch = useDispatch();
  const { showGlobalIssues, showUserIssues } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const sliceName = (name) => {
    const slicedName = name.split(" ");
    return slicedName[0];
  };

  return (
    <MainBox isSidebarOpen={isSidebarOpen}>
      <Box>
        <span>Hi, {sliceName(props.username)}!</span>

        <div>
          <Button
            onClick={showUserIssues}
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
          {/*<div>*/}
          {/*  <Button onClick={showGlobalIssues} active={activeGroup === 'global' && true}>*/}
          {/*    <i>*/}
          {/*      {" "}*/}
          {/*      <IoPeopleOutline />{" "}*/}
          {/*    </i>*/}
          {/*    Global issues*/}
          {/*  </Button>*/}
          {/*</div>*/}
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
