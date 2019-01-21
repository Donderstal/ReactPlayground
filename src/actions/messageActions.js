import * as types from '../actions/actionTypes'

export const sendMessage = (messageText) => {
    return ( dispatch, getState, {emit}) => { 
      dispatch({
        type: types.SEND_MESSAGE,
        payload: messageText 
      });
      console.log('kaassoufle')
      emit( 'message' , {text: messageText});
    };
}

export const receiveMessage = () => {
    return { 
        type: types.RECEIVE_MESSAGE,
        payload: 'Hey mom' 
    };
}
