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