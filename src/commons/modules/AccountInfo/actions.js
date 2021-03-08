import * as ActionTypes from './constants';
import api from './../../../api';
import * as ApiUrl from './../../constant/ApiUrl';

export const actAccountInfoApi = (data) =>{
    return dispatch =>{
        api.get(`/${ApiUrl.ACCOUNT}/${data}`, )
        .then(res =>{
            dispatch(actAccountInfoSuccess(res.data));
        })
        .catch(err =>{
            dispatch(actAccountInfoFailed(err));
        })
    }
}

export const actUpdateStatusProductApi = (data) =>{
    return dispatch =>{
        api.post(`/${ApiUrl.ACCOUNT}/update-product`, data)
        .then(res =>{
            
        })
        .catch(err =>{
            dispatch(actAccountInfoFailed(err));
        })
    }
}

export const actRemoveProductApi = (data) =>{
    return dispatch =>{
        api.post(`/${ApiUrl.ACCOUNT}/remove-product`, data)
        .then(res =>{
            
        })
        .catch(err =>{
            dispatch(actAccountInfoFailed(err));
        })
    }
}


const actAccountInfoSuccess = (data) => {
    return {
        type: ActionTypes.ACCOUNT_SUCCESS,
        payload: data,
    };
};

const actAccountInfoFailed = (err) => {
    return {
        type: ActionTypes.ACCOUNT_FAILED,
        payload: err,
    };
};