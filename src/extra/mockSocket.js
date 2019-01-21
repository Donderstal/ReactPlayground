import { SocketIO as socketIO, Server } from 'mock-socket';
import {URI} from '../constants/websocket.js';
import * as messageTypes from '../actions/actionTypes.js';
// SERVER
export const mockServer = new Server( URI );
let messages = [];

console.log(mockServer)

/*
This step is very important! It tells our chat app to use the mocked
websocket object instead of the native one. The great thing 
about this is that our actual code did not need to change and
thus is agnostic to how we test it.
*/

console.log(socketIO)

global.io = socketIO;
const socket = socketIO( URI );
export const init = ( store ) => {
  // add listeners to supported socket messages so we can re-dispatch them as actions
  Object.keys( messageTypes )
  .forEach( type => socket.on( type, ( payload ) => store.dispatch({ type, payload }) ) );
};
export const emit = ( type, payload ) => {
  messages.push( type, payload );
    console.log(socket)
    socket.emit( type, payload );      

};
export const getMessages = () => {
  return messages;
};