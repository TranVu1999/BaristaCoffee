import * as ActionTypes from './constants';

let initialState = {
    isLoading: true,
    data: {
        prodCateAlias: 'empty',
        listTopRated: [],
        listProductCate: [],
        sortBy: 2,
        pageActive: 0,
        amount: 0,
        listProduct: {
            amount: 0,
            lstProduct: []
        }
    },
    errors: null
};

const shopReducer = (state = initialState, action) =>{
    
    switch (action.type){
        case ActionTypes.SHOP_REQUEST:
            state.isLoading = true;
            state.data = {...state.data};
            state.errors = null;
            return { ...state };

        case ActionTypes.SHOP_SUCCESS:
            state.isLoading = false;
            
            for(let key in action.payload){
                state.data[key] = action.payload[key];
            };
            state.errors = null;
            return { ...state};

        case ActionTypes.SHOP_FAILED:
            state.isLoading = false;
            state.data = null;
            state.errors = action.payload;
            return { ...state };
        
        case ActionTypes.SHOP_CHOOSE_PAGE:
            state.data = {
                ...state.data,
                pageActive: action.payload
            };

            return { ...state};

        case ActionTypes.SHOP_CHOOSE_SORTBY:
            state.data.sortBy = action.payload;
            return { ...state};

        default: 
            return {...state};
    }
}

export default shopReducer;