/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import MessageInputContainer from './src/containers/MessageInputContainer'
import MessagesDisplayContainer from './src/containers/MessagesDisplayContainer'
import { Provider } from 'react-redux';
import Styles from './src/extra/styles'
import createStore from './src/createStore';
import Line from './src/components/Line'
import io from 'socket.io-client';
import { URI } from '../constants/websocket.js';

const socket = io(URI);
const store = createStore(socket);

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <View style={{...Styles.container, flex: 1, backgroundColor: '#5e5e5e' }}>
          <View style={{flex: 0.8, backgroundColor: '#343637', width: "90%"}}>
            <Text style={{color: 'white', margin: '5%', marginLeft: 'auto', marginRight: 'auto'}}>
            Zijt gij klaer voor wat magie?</Text>
            <MessageInputContainer />
            <Line/>
            <MessagesDisplayContainer />
            <Line/>
          </View>
        </View>
      </Provider>
    );
  }
}
