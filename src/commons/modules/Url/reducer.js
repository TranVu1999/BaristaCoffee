import * as ActionTypes from './constants';

let initialState = {
    path: '',
    accountTab: '',
    url: '',
    params: {}
};

const urlReducer = (state = initialState, action) =>{
    
    switch (action.type){
        case ActionTypes.UPDATE_URL:{
            for(let key in action.payload){
                state[key] = action.payload[key];
            };
            return { ...state};
        }
        
        default: 
            return {...state};
    }
}

export default urlReducer;