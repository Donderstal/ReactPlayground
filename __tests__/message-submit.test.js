import React, {Component} from 'react';
import { Provider } from 'react-redux';
import SocketMock from 'socket.io-mock';
import createStore from '../src/createStore';
import MessageInputContainer from '../src/containers/MessageInputContainer'
import MessageInput from '../src/components/MessageInput'
import TestRenderer from 'react-test-renderer'; 

describe('The message sent action', () => {
  it('should correctly emit the sent message', () => {
    // store create with the spy
    const socket = new SocketMock();
    const store = createStore(socket);

    // expect that the method emit is called on the spy with the correct arguments
    socket.socketClient.on('message', (message) => {
      expect(message.text).toBe('hello');
    });

    // render the container
    const container = TestRenderer.create(
      <Provider store={store}>
        <MessageInputContainer />
      </Provider>
    );

    // call the action on the MessageInput
    container.root.findByType(MessageInput).props.sendMessage('hello');
  });
});
