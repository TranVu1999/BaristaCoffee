import {combineReducers} from 'redux';
import loginFormReducer from './../../commons/modules/LoginForm/reducer'
import accountReducer from './../../commons/modules/Account/reducer'
import notifyReducer from './../../commons/modules/Notify/reducer'
import keySearchReducer from './../../commons/modules/KeySearch/reducer'
import cartReducer from './../../commons/modules/Cart/reducer'
import socketReducer from './../../commons/modules/socket/reducer'
import chatBoxReducer from './../../commons/modules/ChatBox/reducer'


const rootReducer = combineReducers({
    loginFormReducer, 
    accountReducer,
    notifyReducer, 
    keySearchReducer,
    cartReducer,
    socketReducer,
    chatBoxReducer
});

export default rootReducer;