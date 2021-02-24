import * as ActionTypes from './constants';
import api from '../../../api';
import axios from 'axios';

export const actProductDetailApi = (prodAlias) =>{
    return dispatch =>{
        dispatch(actProductDetailRequest());
        
        const reqProductDetail = api.get(`/product/${prodAlias}`);

        axios.all([reqProductDetail])
        .then(
            axios.spread((...responses) =>{
                const resProductDetail = responses[0];
                dispatch(actProductDetailSuccess(resProductDetail.data))
            })
        )
        .catch(err =>{
            dispatch(actProductDetailFailed(err))
        })
    }
}

const actProductDetailRequest = () => {
    return {
        type: ActionTypes.PRODUCTDETAIL_REQUEST,
    };
};

const actProductDetailSuccess = (data) => {
    return {
        type: ActionTypes.PRODUCTDETAIL_SUCCESS,
        payload: data,
    };
};

const actProductDetailFailed = (err) => {
    return {
        type: ActionTypes.PRODUCTDETAIL_FAILED,
        payload: err,
    };
};

export const actChangeProductAvatar = (data) =>{
    return {
        type: ActionTypes.PRODUCTDETAIL_CHANGE_PRODUCTAVATAR,
        payload: data
    }
}