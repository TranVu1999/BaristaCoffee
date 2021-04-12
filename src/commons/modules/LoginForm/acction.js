import * as ActionTypes from './constants';

export const actCloseFormLogin = () =>{
    return {
        type: ActionTypes.CLOSE_FORM,
        payload: false
    }
}
export const actOpenFormLogin = () =>{
    return {
        type: ActionTypes.OPEN_FORM,
        payload: true
    }
}