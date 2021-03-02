import * as ActionTypes from './constants';
import api from '../../../api';

export const actGetListKeywordApi = (data) =>{
    return dispatch =>{
        dispatch(actGetListKeywordRequest());
        console.log("api", `/product/search/${data.keyword}&${data.accountId}`);
        
        api.get(`/product/search/${data.keyword}&${data.accountId}`)
        .then(res =>{
            dispatch(actGetListKeywordSuccess(res.data));
        })
        .catch(err =>{
            dispatch(actGetListKeywordFailed(err));
        })
    }
}

const actGetListKeywordRequest = () => {
    return {
        type: ActionTypes.GET_LIST_KEYWORD_REQUEST,
    };
};

const actGetListKeywordSuccess = (data) => {
    return {
        type: ActionTypes.GET_LIST_KEYWORD_SUCCESS,
        payload: data,
    };
};

const actGetListKeywordFailed = (err) => {
    return {
        type: ActionTypes.GET_LIST_KEYWORD_FAILED,
        payload: err,
    };
};