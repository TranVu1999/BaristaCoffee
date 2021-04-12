import * as ActionTypes from './constants'

export const actInitAccount = (data) =>{
    return {
        type: ActionTypes.INIT_ACCOUNT,
        payload: data
    }
}