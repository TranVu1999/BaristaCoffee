import * as ActionTypes from "./constants";

let initialState = {
  isOpenQuickView: false,
  indexActiveImage: 0
};

const quickViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_QUICKVIEW: {
      state.isOpenQuickView = true;
      return { ...state };
    }
    case ActionTypes.CLOSE_QUICKVIEW: {
      state.isOpenQuickView = false;
      return { ...state };
    }
    
    default:
      return { ...state };
  }
};

export default quickViewReducer;
