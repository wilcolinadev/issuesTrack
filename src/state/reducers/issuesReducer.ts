import * as ActionTypes from "../actions/actionTypes";

const initialState = "";

interface Action {
  type: string;
  payload: string;
}

const issuesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SHOW_USER_ISSUES:
      return action.payload;
    case ActionTypes.SHOW_GLOBAL_ISSUES:
      return action.payload;
    default:
      return state;
  }
};

export default issuesReducer;
