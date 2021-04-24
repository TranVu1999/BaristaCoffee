import * as ActionTypes from './constants';

let initialState = {
    isOpen: false,
    data: [],
    removed: []

};

const findIndexCart = (listCart, productId) =>{
    let index = -1
    for(let i in listCart){
        if(listCart[i].id === productId){
            index = i
            break
        }
    }

    return index
}

const cartReducer = (state = initialState, action) =>{
    let index = -1;
    let tempProduct = null;
    let lengthProduct = 0;
    let productId = "";

    switch (action.type){
        case ActionTypes.ADD_PRODUCT:
            state.isOpen = true

            // check exist
            index = findIndexCart(state.data, action.payload.id)

            if(index !== -1){
                state.data[index].amount += 1
            }else{
                const newCart = {
                    ...action.payload,
                    amount: 1
                }
                state.data.push(newCart)
            }

            return {...state}

        case ActionTypes.REMOVE_PRODUCT:
            productId = action.payload

            // check exist
            index = findIndexCart(state.data, productId)

            if(index !== -1){
                tempProduct = state.data[index]
                state.data.splice(index, 1)
                state.removed.push(tempProduct)
            }

            return {...state}

        case ActionTypes.CLOSE_CART:
            state.isOpen = false
            return {...state}

        case ActionTypes.UPDATE_CART:
            // check exist
            index = findIndexCart(state.data, action.payload.productId)

            if(index !== -1){
                state.data[index].amount += action.payload.number
            }

            return {...state}
            
        default: 
            return {...state};
    }
}

export default cartReducer;