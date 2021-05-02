import io from 'socket.io-client'
import * as ActionTypes from './constants'

let initialState = {
    socket: null,
    newMessage: ""
}

const socketReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.CONNECT:
            state.socket = io('http://localhost:5000')
            state.socket.emit('new user', localStorage.getItem('account'))
            state.socket.on('whisper', data =>{
                console.log({data})
            })
            return {...state}
        
        case ActionTypes.SEND_MESSAGE:
            state.socket.emit('send message', action.payload)
            return {...state}

        default:
            return {...state}
    }
}

export default socketReducer