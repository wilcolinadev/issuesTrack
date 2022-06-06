import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateOrAny } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../state/actions/actionCreators";
import { isEmpty } from "../objectValidation";

const Dashboard = () => {
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
        <>
          <h1> Dashboard: Welcome in {userState.user.displayName}</h1>
          <button onClick={logUserOut}>Log out</button>
        </>
      );
    }
  };

  return <>{showUserData()}</>;
};

export default Dashboard;
