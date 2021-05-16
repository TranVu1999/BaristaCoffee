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

/**
 * 
 * @param {*} data is new invoice
 */
 export const actAddInvoice = (data) =>{
    return {
        type: ActionTypes.ADD_NEW_INVOICE,
        payload: data
    }
}

/**
 * @param {*} data have two properties are typeProduct and product
 */
 export const actAddProduct = (data) =>{
    return {
        type: ActionTypes.ADD_NEW_PRODUCT,
        payload: data
    }
}

/**
 * @param {*} data have two properties are typeProduct and productId
 */
 export const actRemoveProduct = (data) =>{
    return {
        type: ActionTypes.REMOVE_NEW_PRODUCT,
        payload: data
    }
}

/**
 * Verify the list of invoices
 */
 export const actDropByListInvoice = () =>{
    return {
        type: ActionTypes.DROP_bY_LIST_INVOICE,
        payload: true
    }
}