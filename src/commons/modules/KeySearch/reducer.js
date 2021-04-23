import * as ActionTypes from './constants';

let initialState = {
    key: [],
    accessToken: ''
};

const keySearchReducer = (state = initialState, action) =>{
    switch (action.type){
        case ActionTypes.ADD_KEY:
            let flag = true
            for(let keyItem of state.key){
                if(keyItem === action.payload.keySearch){
                    flag = false
                    break
                }
            }

            if(flag){
                state.key.push(action.payload.keySearch)
                state.accessToken = action.payload.accessToken;
            }

            
            
            
            return {...state};
        default: 
            return {...state};
    }
}

export default keySearchReducer;