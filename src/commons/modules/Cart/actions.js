import * as ActionTypes from './constants';

export const actAddCart = (data) =>{
    return {
        type: ActionTypes.ADD_PRODUCT_CART,
        payload: data
    }
}

export const actRemoveItem = (data) =>{
    
    return {
        type: ActionTypes.REMOVE_PRODUCT_CART,
        payload: data
    }
}

export const actUpdateItem = (data) =>{
    return {
        type: ActionTypes.UPDATE_PRODUCT_CART,
        payload: data
    }
}