import * as ActionTypes from './constants';
import * as cartModel from './models';

let initialState = {
    data: [],
    removed: [],
    errors: null
};

const cartReducer = (state = initialState, action) =>{
    
    switch (action.type){
        case ActionTypes.ADD_PRODUCT_CART:{
            let data = [...state.data];
            data = cartModel.addCart(data, action.payload);
            return { ...state, data };
        }
            

        case ActionTypes.REMOVE_PRODUCT_CART:{
            let data = [...state.data];
            let removed = [...state.removed];

            removed.push(cartModel.getCartItem(data, action.payload));
            data = cartModel.removeItem(data, action.payload);
            

            return { ...state, data, removed };
        }

        case ActionTypes.UNDO_PRODUCT_CART:{
            let data = [...state.data];
            let removed = [...state.removed];

            data.push(cartModel.getCartItem(removed, action.payload));
            removed = cartModel.removeItem(removed, action.payload);
            

            return { ...state, data, removed };
        }
            

        case ActionTypes.UPDATE_PRODUCT_CART:{
            let data = [...state.data];
            data = cartModel.updateItem(data, action.payload);
            return { ...state, data };
        }
        
        default: 
            return {...state};
    }
}

export default cartReducer;