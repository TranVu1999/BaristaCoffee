import {combineReducers} from 'redux';
import formLoginReducer from './../../features/FormLogin/modules/reducer';
import formAccountInfoReducer from './../../features/FormAccountInfo/modules/reducer';
import accountListProductReducer from './../../features/AccountListProduct/modules/reducer';
import productDetailReducer from './../../pages/ProductDetail/modules/reducer';
import cartReducer from './../../commons/modules/Cart/reducer';
import loginReducer from './../../commons/modules/Login/reducer';
import keywordReducer from './../../commons/modules/Keyword/reducer';
import shopReducer from './../../commons/modules/Shop/reducer';

const rootReducer = combineReducers({
    formLoginReducer,
    formAccountInfoReducer,
    accountListProductReducer,
    productDetailReducer,
    cartReducer,
    loginReducer, 
    keywordReducer,
    shopReducer
});

export default rootReducer;