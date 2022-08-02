import * as ActionTypes from "../actions/actionTypes";

const initialState = false;

interface Action {
  type: string;
  payload: boolean;
}

const activeCardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_ACTIVE_CARD:
      return !state;
    default:
      return state;
  }
};

export default activeCardReducer;
