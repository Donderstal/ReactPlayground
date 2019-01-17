import * as React from 'react'
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';

const MessagesDisplay = (props) => {
    if (props.messages.length > 0) {
        return (
            <View style={{backgroundColor: 'lightblue', borderRightColor: '#f4f984', flex: .25, margin: '5%', padding: '5%',
            borderRightWidth: StyleSheet.hairlineWidth}}>
                 <FlatList
                    data={props.messages}
                    renderItem={({item}) => <Text>{item.text}</Text>}
                /> 
            </View>
        )        
    }
    else {
        return (
            <View style={{backgroundColor: 'lightblue', borderRightColor: '#f4f984', flex: .25, margin: '5%', padding: '5%',
            borderRightWidth: StyleSheet.hairlineWidth}}> 
                <Text>No data received yet...</Text>
            </View>
        )        
    }

}

export default MessagesDisplay