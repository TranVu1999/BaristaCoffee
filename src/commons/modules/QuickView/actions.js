import * as ActionTypes from './constants';

export const actOpenQuickView = (data) =>{
    return {
        type: ActionTypes.OPEN_QUICKVIEW,
        payload: data
    }
}
export const actCloseQuickView = (data) =>{
    return {
        type: ActionTypes.CLOSE_QUICKVIEW,
        payload: data
    }
}
