import * as ActionTypes from "../actions/actionTypes";
const initialState ='';

interface Action {
    type: string;
    payload: string
}

const searchReducer=(state= initialState, action: Action) => {
    switch (action.type){
        case ActionTypes.HANDLE_INPUT_SEARCH:
            return action.payload
        default:
            return state
    }
};

export default searchReducer;