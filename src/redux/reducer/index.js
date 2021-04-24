import {combineReducers} from 'redux';
import loginFormReducer from './../../commons/modules/LoginForm/reducer'
import accountReducer from './../../commons/modules/Account/reducer'
import notifyReducer from './../../commons/modules/Notify/reducer'
import keySearchReducer from './../../commons/modules/KeySearch/reducer'
import cartReducer from './../../commons/modules/Cart/reducer'


const rootReducer = combineReducers({
    loginFormReducer, 
    accountReducer,
    notifyReducer, 
    keySearchReducer,
    cartReducer
});

export default rootReducer;