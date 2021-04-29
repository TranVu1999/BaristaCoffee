import * as ActionTypes from './constants'


export const actConnect = () =>{
    return {
        type: ActionTypes.CONNECT,
        payload: true
    }
}

export const actCreateRoom = (data) =>{
    return {
        type: ActionTypes.CREATE_ROOM,
        payload: data
    }
}

export const actInviteRoom = (data) =>{
    return {
        type: ActionTypes.INVITE_ROOM,
        payload: data
    }
}