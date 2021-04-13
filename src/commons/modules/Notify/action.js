import * as ActionTypes from './constants'

// Close the notify popup
export const actCloseNotify = () =>{
    return {
        type: ActionTypes.CLOSE_NOTIFY,
        payload: false
    }
}

// Open the notify popup
export const actOpenNotify = (data) =>{
    return {
        type: ActionTypes.OPEN_NOTIFY,
        payload: data
    }
}