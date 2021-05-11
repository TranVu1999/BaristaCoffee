import {combineReducers} from 'redux';
import loginFormReducer from './../../commons/modules/LoginForm/reducer'
import accountReducer from './../../commons/modules/Account/reducer'
import notifyReducer from './../../commons/modules/Notify/reducer'
import keySearchReducer from './../../commons/modules/KeySearch/reducer'
import cartReducer from './../../commons/modules/Cart/reducer'
import chatBoxReducer from './../../commons/modules/ChatBox/reducer'
import quickViewReducer from './../../commons/modules/QuickView/reducer'
import compareReducer from './../../commons/modules/Compare/reducer'
import urlReducer from './../../commons/modules/Url/reducer'


const rootReducer = combineReducers({
    loginFormReducer, 
    accountReducer,
    notifyReducer, 
    keySearchReducer,
    cartReducer,
    chatBoxReducer,
    quickViewReducer,
    compareReducer,
    urlReducer
});

export default rootReducer;