import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../state/actions/actionCreators";
import * as ActionCreators from "../../state/actions/actionCreators";
import { isEmpty } from "../objectValidation";
import { DashboardDivider, DashboardWrapper } from "./DashboardStyles";
import DashboardNav from "./DashboardNav/DashboardNav";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import { Backdrop } from "../Backdrop/Backdrop";
import Card from "./Card/Card";

const Dashboard: React.FC = () => {
  const userState = useSelector((state: RootStateOrAny) => state.isUserAuth);
  const isModalFormOpen = useSelector(
    (state: RootStateOrAny) => state.isModalFormOpen
  );
  const isSidebarOpen = useSelector(
    (state: RootStateOrAny) => state.isSidebarOpen
  );
  const isCardActive = useSelector(
    (state: RootStateOrAny) => state.isCardActive
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
    } else if (isCardActive) {
      return <Backdrop />;
    }
  };

  const showUserData = () => {
    if (isEmpty(userState)) {
      return null;
    } else {
      return (
        <DashboardWrapper>
          <Card />
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
