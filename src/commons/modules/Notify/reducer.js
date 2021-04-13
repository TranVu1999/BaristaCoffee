import * as ActionTypes from './constants'

let initialState = {
    isOpen: false,
    isSuccess: true,
    content: ''
}

const notifyReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.CLOSE_NOTIFY: 
            state.isOpen = false
            return {...state}

        case ActionTypes.OPEN_NOTIFY: 
            state.isOpen = true
            state.isSuccess = action.payload.isSuccess
            state.content = action.payload.content
            return {...state}

        default: 
            return {...state}
    }
}

export default notifyReducer