import * as ActionTypes from './constants'
import api from './../../../api'

export const actInitAccount = (data) =>{
    return {
        type: ActionTypes.INIT_ACCOUNT,
        payload: data
    }
}

/**
 * 
 * @param {*} data is new notify
 */
export const actAddNewNotify = (data) =>{
    return {
        type: ActionTypes.ADD_NEW_NOTIFY,
        payload: data
    }
}

/**
 * 
 * @param {*} data is new address
 */
 export const actAddAddress = (data) =>{
    return {
        type: ActionTypes.ADD_NEW_ADDRESS,
        payload: data
    }
}