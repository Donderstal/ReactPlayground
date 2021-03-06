import * as React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';

const StatusDisplay = (props) => {
    if (props.msg) {
        return (
            <View style={{backgroundColor: 'lightblue', borderRightColor: '#f4f984', flex: .25, margin: '5%', padding: '5%',
            borderRightWidth: StyleSheet.hairlineWidth}}>
                <Text>{props.msg}</Text>
            </View>
        )        
    }
    else {
        return (
            <View style={{backgroundColor: 'lightblue', borderRightColor: '#f4f984', flex: .25, margin: '5%', padding: '5%',
            borderRightWidth: StyleSheet.hairlineWidth}}> 
                <Text>No process to display...</Text>
            </View>
        )        
    }

}

export default StatusDisplay