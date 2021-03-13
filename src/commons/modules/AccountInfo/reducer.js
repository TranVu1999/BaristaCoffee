import * as ActionTypes from './constants';

let initialState = {
    accountInfo: {
        birthday: {
            date: 1,
            month: 1,
            year: 1990
        },
        userEmail: "admin@gmail.com",
        listInvoice: [],
        accountProduct: {
            readed: [],
            favorite: [],
            commented: [],
            saveForLate: []
        }
    },
    errors: null
};

const accountInfoReducer = (state = initialState, action) =>{
    let temp = {};
    switch (action.type){
        case ActionTypes.ACCOUNT_SUCCESS:
            temp = {
                accountInfo: {...state.accountInfo}
            };
            for(let key in action.payload){
                temp.accountInfo[key] = action.payload[key];
            };
            state = {...temp};
            return { ...state};
            
        case ActionTypes.ACCOUNT_GET_LIST_INVOICE:
            state.accountInfo.listInvoice = action.payload.listInvoice;
            return { ...state};
        
        case ActionTypes.ACCOUNT_FAILED:
            return { ...state };

        default: 
            return {...state};
    }
}

export default accountInfoReducer;