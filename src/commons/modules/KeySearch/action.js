import * as ActionTypes from './constants';

export const actAddKey = data =>{
    
    return{
        type: ActionTypes.ADD_KEY,
        payload: data
    }
}
