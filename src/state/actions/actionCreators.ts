import {Dispatch} from "redux";
import * as ActionTypes from './actionTypes';

export const logUserIn = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionTypes.LOG_USER_IN,
            payload: true
        })
    }
}

export const logUserOut = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionTypes.LOG_USER_OUT,
            payload: false
        })
    }
}
