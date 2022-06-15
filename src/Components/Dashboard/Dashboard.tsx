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
import { Backdrop } from "../Backdrop/Backdrop";
import * as ActionCreators from "../../state/actions/actionCreators";

const Dashboard: React.FC = () => {
  const userState = useSelector((state: RootStateOrAny) => state.isUserAuth);
  const isModalFormOpen = useSelector(
    (state: RootStateOrAny) => state.isModalFormOpen
  );
  const isSidebarOpen = useSelector(
    (state: RootStateOrAny) => state.isSidebarOpen
  );
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { toggleModalForm } = bindActionCreators(ActionCreators, dispatch);
  const { logUserOut } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    if (isEmpty(userState)) {
      navigate("/login");
    }
  }, [userState, location]);

  const logOut = () => {
    localStorage.removeItem("user");
    logUserOut();
  };
  const handleBackdrop = () => {
    if (isModalFormOpen) {
      return <Backdrop onClick={() => toggleModalForm(isModalFormOpen)} />;
    } else if (isSidebarOpen) {
      return <Backdrop />;
    }
  };

  const showUserData = () => {
    if (isEmpty(userState)) {
      return null;
    } else {
      return (
        <DashboardWrapper>
          {handleBackdrop()}
          <DashboardNav username={userState.user.displayName} />
          <DashboardDivider>
            <Main username={userState.user.displayName} />
            <Sidebar
              logUserOut={logOut}
              username={userState.user.displayName}
            />
          </DashboardDivider>
        </DashboardWrapper>
      );
    }
  };

  return <>{showUserData()}</>;
};

export default Dashboard;
