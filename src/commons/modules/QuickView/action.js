import * as ActionTypes from './constants';

/**
 * @param data is product infomation
 */
export const actOpenQuickView = (data) =>{
    return {
        type: ActionTypes.OPEN_QUICKVIEW,
        payload: data
    }
}


export const actCloseQuickView = () =>{
    return {
        type: ActionTypes.CLOSE_QUICKVIEW
    }
}

/**
 * 
 * @param {*} data data is index of image active
 */
export const actChangeImage = (data) =>{
    return {
        type: ActionTypes.CHANGE_IMAGE,
        payload: data
    }
}
