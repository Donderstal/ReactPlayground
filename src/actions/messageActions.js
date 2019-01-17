import * as actionMSG from '../actions/actionTypes'

export const sendMessage = () => {
    return { 
        type: actionMSG.SEND_MESSAGE,
        payload: 'Hey dad' 
    };
}

export const receiveMessage = () => {
    return { 
        type: actionMSG.RECEIVE_MESSAGE,
        payload: 'Hey mom' 
    };
}
