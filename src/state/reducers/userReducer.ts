import * as ActionTypes from "../actions/actionTypes";

const initialState = {};

interface Action {
  type: string;
  payload: object
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOG_USER_IN:
      return action.payload;
    case ActionTypes.LOG_USER_OUT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
