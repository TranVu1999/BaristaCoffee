import * as ActionTypes from './constants';

let initialState = {
    loading: false,
    data: {
        productId: '',
        productTitle: '',
        productAlias: '',
        productDetail: '',
        productPrice: 0,
        productPromo: 0,
        productRating: 0,
        productShortDesc: '',
        prodCateTitle: '',
        productSLU: '',
        productImage: {
            productAvatar: '',
            productMoreImage: []
        }
        
    },
    errors: null
};

const productDetailReducer = (state = initialState, action) =>{
    switch (action.type){
        case ActionTypes.PRODUCTDETAIL_REQUEST:
            state.loading = true;
            state.data = {
                productId: '',
                productTitle: '',
                productAlias: '',
                productDetail: '',
                productPrice: 0,
                productPromo: 0,
                productRating: 0,
                productShortDesc: '',
                prodCateTitle: '',
                productSLU: '',
                productImage: {
                    productAvatar: '',
                    productMoreImage: []
                }
            };
            state.errors = null;
            return { ...state };

        case ActionTypes.PRODUCTDETAIL_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.errors = null;
            return { ...state };

        case ActionTypes.PRODUCTDETAIL_FAILED:
            state.loading = false;
            state.data = null;
            state.errors = action.payload;
            return { ...state };

        case ActionTypes.PRODUCTDETAIL_CHANGE_PRODUCTAVATAR:
            state.data = {
                ...state.data,
                productImage: {
                    ...state.data.productImage,
                    productAvatar: action.payload
                }
            };
            return {...state};

        default: 
            return {...state};
    }
}

export default productDetailReducer;