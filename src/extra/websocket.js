import io from 'socket.io-client';
import SocketIOClient from 'socket.io-client';
import { URI } from '../constants/websocket.js';
import { RECEIVE_MESSAGE } from '../actions/actionTypes.js';
const socket = io( URI );
export const init = ( store ) => {
   socket.on('message', ( payload ) => {
      store.dispatch({ type: RECEIVE_MESSAGE, payload: payload }) 
   });
};
export const emit = ( type, payload ) => {
  return socket.emit( type, payload )
};
