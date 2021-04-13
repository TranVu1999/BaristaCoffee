import * as ActionTypes from './constants'
import api from './../../../api'

export const actInitAccount = (data) =>{
    return {
        type: ActionTypes.INIT_ACCOUNT,
        payload: data
    }
}
