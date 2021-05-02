import * as ActionTypes from './constants'

export const actToggleChatBoxMessage = () =>{
    return {
        type: ActionTypes.TOGGLE_CHAT_BOX_MESSAGE,
        payload: true
    }
}

export const actOpenChatBox = () =>{
    return {
        type: ActionTypes.OPEN_CHAT_BOX,
        payload: true
    }
}

export const actCloseChatBox = () =>{
    return {
        type: ActionTypes.CLOSE_CHAT_BOX,
        payload: true
    }
}

export const actOpenChatBoxMessage = data =>{
    return {
        type: ActionTypes.OPEN_CHAT_BOX_MESSAGE,
        payload: data
    }
}