import * as ActionTypes from './constants';

let initialState = {
    accountInfo: {
        userEmail: "admin@gmail.com",
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
    
    switch (action.type){
        case ActionTypes.ACCOUNT_SUCCESS:
            let temp = {
                accountInfo: {}
            };
            for(let key in action.payload){
                temp.accountInfo[key] = action.payload[key];
            };
            state = {...temp};
            return { ...state};
        
        case ActionTypes.ACCOUNT_FAILED:
            return { ...state };

        default: 
            return {...state};
    }
}

export default accountInfoReducer;