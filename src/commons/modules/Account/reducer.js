import * as ActionTypes from './constants'

let initialState = {
    username: "",
    fullname: "",
    phoneNumber: "",
    email: "",
    gender: "",
    birthday: "",
    productSaveForLates: [],
    productReads: [],
    productFavorites: [],
    productComments: [],
    notifies: [],
    invoices: [],
    keySearch: [],
    productPurchased: [],
}

const accountReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.INIT_ACCOUNT:
            for(let key in action.payload){
                state[key] = action.payload[key];
            };
            return {...state}

        case ActionTypes.ADD_NEW_NOTIFY:
            state.notifies.push(action.payload)
            return {...state}

        default:
            return {...state}
    }
}

export default accountReducer