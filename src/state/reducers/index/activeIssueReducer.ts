import * as ActionTypes from "../../actions/actionTypes"
const initialState = {};

interface Action {
    type:string
    payload:object
}

const activeIssueReducer = (state=initialState, action:Action)=>{
switch (action.type) {
    case ActionTypes.SET_ACTIVE_ISSUE:
        return action.payload
    default:
        return state
}
};

export default activeIssueReducer