import * as ActionTypes from './constants'

// Close the notify popup
export const actCloseNotify = () =>{
    return {
        type: ActionTypes.CLOSE_NOTIFY,
        payload: false
    }
}

// Open the notify popup
/**
 * 
 * @param {*} data have two properties are isSuccess and content 
 */
export const actOpenNotify = (data) =>{
    return {
        type: ActionTypes.OPEN_NOTIFY,
        payload: data
    }
}