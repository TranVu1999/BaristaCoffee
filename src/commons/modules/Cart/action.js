import * as ActionTypes from './constants';

/**
 * If the cart already exists, it will be saved
 */
export const actInitCart = () =>{
    return{
        type: ActionTypes.INIT_CART,
        payload: true
    }
}

export const actAddCart = data =>{
    
    return{
        type: ActionTypes.ADD_PRODUCT,
        payload: data
    }
}

/**
 * 
 * @param {*} data : data is product id
 */
export const actRemoveCart = data =>{
    
    return{
        type: ActionTypes.REMOVE_PRODUCT,
        payload: data
    }
}

export const actCloseCart = () =>{
    
    return{
        type: ActionTypes.CLOSE_CART,
        payload: false
    }
}

/**
 * 
 * @param {*} data: have two properties is productId and number update
 */
export const actUpdateCart = data =>{
    
    return{
        type: ActionTypes.UPDATE_CART,
        payload: data
    }
}
