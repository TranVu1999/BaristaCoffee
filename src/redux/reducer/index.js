import {combineReducers} from 'redux';
import formLoginReducer from './../../features/FormLogin/modules/reducer';
import formAccountInfoReducer from './../../features/FormAccountInfo/modules/reducer';
import accountListProductReducer from './../../features/AccountListProduct/modules/reducer';
import productDetailReducer from './../../pages/ProductDetail/modules/reducer';

const rootReducer = combineReducers({
    formLoginReducer,
    formAccountInfoReducer,
    accountListProductReducer,
    productDetailReducer
});

export default rootReducer;