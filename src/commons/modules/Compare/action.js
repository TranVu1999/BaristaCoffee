import * as ActionTypes from './constants';

/**
 * @param data is product infomation
 */
export const actInitCompare = (data) =>{
    return {
        type: ActionTypes.INIT_COMPARE,
        payload: data
    }
}

/**
 * @param data is product infomation
 */
export const actOpenCompare = (data) =>{
    return {
        type: ActionTypes.OPEN_COMPARE,
        payload: data
    }
}


 export const actCloseCompare = () =>{
    return {
        type: ActionTypes.CLOSE_COMPARE
    }
}
