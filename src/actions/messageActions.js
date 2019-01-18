import * as actionMSG from '../actions/actionTypes'

export const sendMessage = (messageText) => {
    console.log('in messageActions send!')
    return ( dispatch, getState, {emit}) => { 
      dispatch({
        type: actionMSG.SEND_MESSAGE,
        payload: messageText 
      });
      emit( 'message' , {text: messageText});
    };
}

export const receiveMessage = () => {
    console.log('in messageActions receive!')
    return { 
        type: actionMSG.RECEIVE_MESSAGE,
        payload: 'Hey mom' 
    };
}

