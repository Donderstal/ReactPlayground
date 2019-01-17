/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import ButtonWrapper from './src/components/ButtonWrapper'
import Styles from './src/extra/styles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const webSock = new WebSocket('ws://html5rocks.websocket.org/echo')

export default class App extends Component{
  constructor(props) {
    super(props)
    console.log(this)
    /* console.log(this.socketClose) */
      state = {
        webSockState: '',
        webSockmsg: '',
        loadingMsg: false,
      }
  }

  componentDidMount() {
    console.log(this)
    webSock.onopen = () =>  {
      /* console.log('Hey beautiful!')
      webSock.send('hey there!') */
    }
    webSock.onmessage = (res) => {
      /* console.log('Server says: ' + res.data);
      console.log(webSock.readyState) */
      
    };
    webSock.onerror = (error) => {
      /* console.log('error bruh: ' + error) */
    }
    webSock.onclose = () => {
      /* console.log("Closing this connection...") */
    }
  }

  socketClose() {
    webSock.close()
  }

  socketSend(msg) {
    console.log(this)
    /* console.log(this.socketSend) */
    /* if (msg === 'Close the socket!') {
      console.log(this.socketClose())
    } */
    console.log('Socket is sending ' + msg)
    webSock.send(msg)
  }

  render() {
    return (
      <View style={{...Styles.container, flex: 1, backgroundColor: '#5e5e5e' }}>
        <Text style={Styles.welcome}>Welcome to the Websocket playground</Text>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: '100%',
          marginBottom: '2,5%'}}/>
        <ButtonWrapper style={Styles.instructions} socketSend={this.socketSend}></ButtonWrapper>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: '100%',
          marginTop: '2,5%'}}/>
      </View>
    );
  }
}