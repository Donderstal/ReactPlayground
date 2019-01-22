import { RECEIVE_MESSAGE } from '../actions/actionTypes.js';

export const init = ( store, socket ) => {
   socket.on('message', ( payload ) => {
      store.dispatch({ type: RECEIVE_MESSAGE, payload: payload }) 
   });
};

// Tasty Curry
export const emitCreate = (socket) => {
  return ( type, payload ) => {
    return socket.emit( type, payload )
  }
};
