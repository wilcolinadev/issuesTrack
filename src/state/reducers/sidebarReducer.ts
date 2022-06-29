import * as ActionTypes from "../actions/actionTypes";

const initialState = false;

interface Action {
  type: string;
  payload: boolean;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR:
      return !action.payload;
    default:
      return state;
  }
};

export default reducer;
