import {combineReducers} from 'redux';
import loginFormReducer from './../../commons/modules/LoginForm/reducer'
import accountReducer from './../../commons/modules/Account/reducer'


const rootReducer = combineReducers({
    loginFormReducer, 
    accountReducer
});

export default rootReducer;