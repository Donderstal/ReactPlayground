import * as React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './Button'
import ResultDisplay from './ResultDisplay'
import ProcessDisplay from './ProcessDisplay'


class ButtonWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(msg) {
        this.props.socketSend(msg)
    }

    render(){
        return (
        <View style={{flex: 0.8, backgroundColor: '#343637', width: "90%"}}>
            <Text style={{color: 'white', margin: '5%', marginLeft: 'auto', marginRight: 'auto'}}>Zijt gij klaer voor wat magie?</Text>
            <Button  style={this.props.style} handleClick={this.handleClick}></Button>
            <View style={{
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                width: '100%',
                marginTop: '2,5%'}}/>
            <ProcessDisplay></ProcessDisplay>
            <View style={{
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                width: '100%',
                marginTop: '2,5%'}}/>
            <ResultDisplay></ResultDisplay>       
        </View>            
        )
    }
}

export default ButtonWrapper