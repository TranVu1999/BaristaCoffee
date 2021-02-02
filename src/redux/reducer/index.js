import {combineReducers} from 'redux';
import formLoginReducer from './../../features/FormLogin/modules/reducer';
import formAccountInfoReducer from './../../features/FormAccountInfo/modules/reducer';


const rootReducer = combineReducers({
    formLoginReducer,
    formAccountInfoReducer
});

export default rootReducer;