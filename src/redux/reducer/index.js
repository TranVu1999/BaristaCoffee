import {combineReducers} from 'redux';
import loginFormReducer from './../../commons/modules/LoginForm/reducer'
import accountReducer from './../../commons/modules/Account/reducer'
import notifyReducer from './../../commons/modules/Notify/reducer'


const rootReducer = combineReducers({
    loginFormReducer, 
    accountReducer,
    notifyReducer
});

export default rootReducer;