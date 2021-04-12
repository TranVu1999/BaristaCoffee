import * as ActionTypes from './constants'

let initialState = {
    isOpen: false
}

const loginFormReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.CLOSE_FORM: 
            state.isOpen = false
            return {...state}

        case ActionTypes.OPEN_FORM: 
            state.isOpen = true
            return {...state}

        default: 
            return {...state}
    }
}

export default loginFormReducer