import * as actionMSG from '../actions/actionTypes'

export const sendMessage = (messageText) => {
    return ( dispatch, getState, {emit}) => { 
      emit( 'message' , {text: messageText});
      dispatch({
        type: actionMSG.SEND_MESSAGE,
        payload: messageText 
      });
    };
}

export const receiveMessage = () => {
    return { 
        type: actionMSG.RECEIVE_MESSAGE,
        payload: '' 
    };
}
