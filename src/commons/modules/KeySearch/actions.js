import * as ActionTypes from './constants';
import api from '../../../api';

export const actSaveKeyApi = (data) =>{
    return dispatch =>{
        api.get(`/product/test-search/${data.keyword}&${data.accountId}`)
        .then(res =>{
            
        })
        .catch(err =>{
            
        })
    }
}

export const actAddKey = data =>{
    return{
        type: ActionTypes.ADD_KEY,
        payload: data
    }
}
