import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  user: {
    active: 0,
    closed: 0,
  },
  global: {
    active: 0,
    closed: 0,
  },
};

interface Action {
  type: string;
  payload: object;
}

const graphReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_GRAPH_VALUES:
      return action.payload;

    default:
      return state;
  }
};

export default graphReducer;
