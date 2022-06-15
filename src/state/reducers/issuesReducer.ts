import * as ActionTypes from "../actions/actionTypes"
const initialState = [];
interface Action {
    type:string
    payload:Array<Object>
}

const issuesReducer = (state:Array<Object> = initialState, action:Action) => {

    switch (action.type){
        case ActionTypes.ADD_ISSUE:
            return [ ...action.payload];
        default:
            return state;
    }

};

export default issuesReducer;