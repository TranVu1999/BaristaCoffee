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
    productComments: []
}

const accountReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.INIT_ACCOUNT:
            for(let key in action.payload){
                state[key] = action.payload[key];
            };
            console.log({state})
            return {...state}

        default:
            return {...state}
    }
}

export default accountReducer