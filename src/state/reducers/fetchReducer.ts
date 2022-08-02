import * as ActionTypes from "../actions/actionTypes";

const initialState = false;

interface Action {
  type: string;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ISSUES:
      return !state;
    default:
      return state;
  }
};

export default reducer;
