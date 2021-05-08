import * as ActionTypes from "./constants";

let initialState = {
    isOpenCompare: false,
    productRight: {
        title: "",
        alias: "",
        price: 0,
        promo: 0,
        rating: 0,
        avatar: "",
        weight: 0,
        width: 0,
        length: 0,
        height: 0
    },
    productLeft: {
        title: "",
        alias: "",
        price: 0,
        promo: 0,
        rating: 0,
        avatar: "",
        weight: 0,
        width: 0,
        length: 0,
        height: 0
    }
    
};

const compareReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INIT_COMPARE: {
        for(let key in action.payload){
            state.productLeft[key] = action.payload[key];
        }

        return { ...state };
    }
    case ActionTypes.OPEN_COMPARE: {
        state.isOpenCompare = true

        for(let key in action.payload){
            state.productRight[key] = action.payload[key];
        }

        return { ...state };
    }
    case ActionTypes.CLOSE_COMPARE: {
      state.isOpenCompare = false;
      return { ...state };
    }
    
    default:
      return { ...state };
  }
};

export default compareReducer;
