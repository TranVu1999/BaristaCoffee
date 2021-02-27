import * as ActionTypes from './constants';
import * as cartModel from './models';

let initialState = {
    data: [],
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
            data = cartModel.removeItem(data, action.payload);
            return { ...state, data };
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