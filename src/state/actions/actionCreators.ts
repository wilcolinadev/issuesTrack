import { Dispatch } from "redux";
import * as ActionTypes from "./actionTypes";

export const logUserIn = (user:object) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.LOG_USER_IN,
      payload: user,
    });
  };
};

export const logUserOut = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.LOG_USER_OUT,
      payload: {},
    });
  };
};

export const toggleSidebar =(state)=>{
  return (dispatch:Dispatch)=>{
    dispatch({
      type:ActionTypes.TOGGLE_SIDEBAR,
      payload:state
    })
  }
}

export const showGlobalIssues = ()=>{
  return (dispatch:Dispatch) =>{
    dispatch({
      type:ActionTypes.SHOW_GLOBAL_ISSUES,
      payload:'global'
    })
  }
}

export const showUserIssues = ()=>{
  return (dispatch:Dispatch) =>{
    dispatch({
      type:ActionTypes.SHOW_USER_ISSUES,
      payload:'user'
    })
  }
}