/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import MessageInput from './src/containers/MessageInput'
import MessagesDisplay from './src/containers/MessagesDisplay'
import Styles from './src/extra/styles'
import createStore from './src/createStore';

const store = createStore();

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <View style={{...Styles.container, flex: 1, backgroundColor: '#5e5e5e' }}>
          <MessageInputContainer />
          <MessagesDisplayContainer />
        </View>
      </Provider>
    );
  }
}
