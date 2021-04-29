import * as ActionTypes from './constants'

let initialState = {
    isSmallContent: true,
    isLargeContent: false
}

const chatBoxReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.TOGGLE_CHAT_BOX_MESSAGE:
            let tempAcion = !state.isLargeContent

            state.isLargeContent = tempAcion
            return {...state}

        case ActionTypes.OPEN_CHAT_BOX:
            state.isSmallContent = false
            return {...state}

        case ActionTypes.CLOSE_CHAT_BOX:
            state.isSmallContent = true
            state.isLargeContent = false
            return {...state}

        case ActionTypes.OPEN_CHAT_BOX_MESSAGE:
            state.isSmallContent = false
            state.isLargeContent = true
            return {...state}

        default: 
            return {...state}
    }
}

export default chatBoxReducer