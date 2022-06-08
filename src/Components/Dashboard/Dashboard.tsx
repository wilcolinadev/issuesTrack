import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateOrAny } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../state/actions/actionCreators";
import { isEmpty } from "../objectValidation";
import { DashboardWrapper, DashboardDivider } from "./DashboardStyles";
import DashboardNav from "./DashboardNav/DashboardNav";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

const Dashboard: React.FC = () => {
  const userState = useSelector((state: RootStateOrAny) => state.isUserAuth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isEmpty(userState)) {
      navigate("/login");
      console.log(userState);
    }
  }, [userState, location]);
  const dispatch = useDispatch();
  const { logUserOut } = bindActionCreators(actionCreators, dispatch);

  const showUserData = () => {
    if (isEmpty(userState)) {
      return null;
    } else {
      return (
        <DashboardWrapper>
          <DashboardNav username={userState.user.displayName} />
          <DashboardDivider>
            <Main username={userState.user.displayName} />
            <Sidebar logUserOut={logUserOut} />
          </DashboardDivider>
        </DashboardWrapper>
      );
    }
  };

  return <>{showUserData()}</>;
};

export default Dashboard;
