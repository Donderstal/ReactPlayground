import * as actionMSG from '../actions/actionTypes'

export const sendMessage = (messageText) => {
    return ( dispatch, getState, {emit}) => { 
      dispatch({
        type: actionMSG.SEND_MESSAGE,
        payload: messageText 
      });
      emit( 'messages' , {text: messageText});
    };
}

export const receiveMessage = () => {
    return { 
        type: actionMSG.RECEIVE_MESSAGE,
        payload: 'Hey mom' 
    };
}
