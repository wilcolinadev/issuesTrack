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

export const toggleSidebar =(state:boolean)=>{
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

export const toggleModalForm = (state:boolean) =>{
  return (dispatch:Dispatch) =>{
    dispatch({
      type:ActionTypes.TOGGLE_MODAL_FORM,
      payload:!state
    })
  }
}
//Getting the state, and updating the state with a new value
export const addIssue = (prevState:Array<object>, newIssue:object) =>{
  const newState = [...prevState, newIssue];
  return(dispatch:Dispatch)=>{
    dispatch({
      type:ActionTypes.ADD_ISSUE,
      payload:newState
    })
  }
}