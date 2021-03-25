import * as ActionTypes from "./constants";
import * as Notify from './../../constant/Notify';

let initialState = {
  typeNotify: 0,
  notify: ""
};

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_NOTIFY: {
      state.typeNotify = action.payload;

      if(action.payload === 1){
        state.notify = Notify.SUCCESS_NOTIFY;
      }else if(action.payload === -1){
        state.notify = Notify.FAIL_NOTIFY;
      }else{
        state.notify = "";
      }

      return { ...state };
    }
    
    default:
      return { ...state };
  }
};

export default notifyReducer;
