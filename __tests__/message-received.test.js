import React from 'react';
import { Provider } from 'react-redux';
import { Text, FlatList } from 'react-native';
import SocketMock from 'socket.io-mock';
import createStore from '../src/createStore';
import MessagesDisplayContainer from '../src/containers/MessagesDisplayContainer'
import MessagesDisplay from '../src/components/MessagesDisplay'
import TestRenderer from 'react-test-renderer'; 

describe('The message received action', () => {
  it('should update the DOM and the state with said message', () => {
    // store create with the spy
    const socket = new SocketMock();
    const store = createStore(socket);

    // render the MessageDisplayContainer
    const renderedComp = TestRenderer.create( 
        <Provider store={store}>
            <MessagesDisplayContainer />
        </Provider>
    )

    // Check that the store has no messages
    // And that there are no messages in the DOM   
    const compRoot =  renderedComp.root
    const state = renderedComp.getInstance().state
    const expectedState = []
    const testMessage = 'rodondendron'

    expect(state.storeState.messages).toEqual(expect.arrayContaining(expectedState))
    expect(state.storeState.messageText).toBe('')

    // Emit the message event on the socketClient
    socket.socketClient.emit('message', testMessage)

    // The state and dom should now be updated
    const messageProp = compRoot.findByType(FlatList).props.data
    expect(messageProp.toString().replace(/,/g, '')).toEqual(testMessage)
    expect((store.getState().messages).toString().replace(/,/g, '')).toEqual(testMessage)
  });
});