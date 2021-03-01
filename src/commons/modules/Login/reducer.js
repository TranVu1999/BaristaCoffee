import * as ActionTypes from './constants';

let initialState = {
    isLoginForm: false,
    data: {
        accountInfo: {},
        flag: -2
    },
    errors: null
};

const loginReducer = (state = initialState, action) =>{
    
    switch (action.type){
        case ActionTypes.OPEN_LOGIN_POPUP:{
            let isLoginForm = action.payload;
            return { ...state, isLoginForm };
        }
        
        case ActionTypes.LOGIN_REQUEST:
            state.loading = true;
            state.data = {
                accountInfo: {},
                flag: -2
            };
            state.errors = null;
            return { ...state };

        case ActionTypes.LOGIN_SUCCESS:
            state.isLoginForm = false;
            state.data = action.payload;
            state.errors = null;
            return { ...state};

        case ActionTypes.INIT_ACCOUNT:
            state.isLoginForm = false;
            if(action.payload){
                state.data = {
                    accountInfo: action.payload,
                    flag: 1
                };
            }else{
                state.data = {
                    accountInfo: {},
                    flag: -2
                }; 
            }

            state.errors = null;
            return { ...state};

        case ActionTypes.LOGIN_FAILED:
            state.loading = false;
            state.data = null;
            state.errors = action.payload;
            return { ...state };

        default: 
            return {...state};
    }
}

export default loginReducer;