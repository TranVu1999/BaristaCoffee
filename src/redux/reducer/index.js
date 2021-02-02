import {combineReducers} from 'redux';
import formLoginReducer from './../../features/FormLogin/modules/reducer';


const rootReducer = combineReducers({
    formLoginReducer
});

export default rootReducer;