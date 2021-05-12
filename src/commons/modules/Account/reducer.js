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
    addresses: []
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

        case ActionTypes.ADD_NEW_INVOICE:
            state.invoices.push(action.payload)
            return {...state}

        case ActionTypes.ADD_NEW_PRODUCT:
            if(action.payload.typeProduct === "readed"){
                const newProduct = action.payload.product
                let indexProduct = -1
                let lengthProduct = state.productReads.length
                for(let i = 0; i < lengthProduct; i++){
                    if(state.productReads[i]._id === newProduct._id){
                        indexProduct = i
                        break
                    }
                }

                if(indexProduct !== -1){
                    state.productReads[indexProduct].newAccount = true
                }else{
                    state.productReads.push(action.payload.product)
                }

                
            }
            return {...state}

        case ActionTypes.ADD_NEW_ADDRESS:
            const newAddress = {...action.payload}

            if(newAddress.isDefault){
                let lengthAddress = state.addresses.length
                for(let i = 0; i < lengthAddress; i++){
                    state.addresses[i].isDefault = false
                }
            }

            state.addresses.push(newAddress);

            return {...state}

        default:
            return {...state}
    }
}

export default accountReducer