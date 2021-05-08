import * as ActionTypes from "./constants";

let initialState = {
    isOpenQuickView: false,
    indexActiveImage: 0,
    showSmallImage: false,
    title: "",
    rating: 0,
    alias: "",
    price: 0,
    promo: 0,
    avatar: "",
    moreImage: []
};

const quickViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_QUICKVIEW: {
        state.isOpenQuickView = true;
        state.showSmallImage = false;
        state.indexActiveImage = -1;

        for(let key in action.payload){
            state[key] = action.payload[key];
        };

        return { ...state };
    }
    case ActionTypes.CLOSE_QUICKVIEW: {
      state.isOpenQuickView = false;
      return { ...state };
    }
    case ActionTypes.CHANGE_IMAGE: {
      state.indexActiveImage = action.payload;
      state.showSmallImage = true;
      return { ...state };
    }
    
    default:
      return { ...state };
  }
};

export default quickViewReducer;
