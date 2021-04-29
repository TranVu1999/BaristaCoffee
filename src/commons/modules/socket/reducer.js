import io from 'socket.io-client'
import * as ActionTypes from './constants'

let initialState = {
    socket: null
}

const socketReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.CONNECT:
            state.socket = io('http://localhost:5000')
            return {...state}
        
        case ActionTypes.CREATE_ROOM:
            state.socket.emit("create-room", action.payload)
            return {...state}

        case ActionTypes.INVITE_ROOM:
            state.socket.emit("invite-room", action.payload)
            return {...state}

        default:
            return {...state}
    }
}

export default socketReducer