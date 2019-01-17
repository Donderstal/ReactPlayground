import * as React from 'react'
import {StyleSheet, TouchableOpacity, Text, TextInput, View} from 'react-native';

class MessageInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: 'hey'
        }
    }

    logger(input) {
        const msg = input
        this.props.handleClick(msg)
    }

    render() {
        return (
            <View style={{flex: .25}}>
            
                <TextInput
                style={{backgroundColor: 'white', width: '90%', marginLeft: 'auto',
                marginRight: 'auto', padding: '3%'}} placeholder='Type here and click the button...'
                onChangeText={(input) => this.setState({input:input})}
                ></TextInput>

                <TouchableOpacity 
                onPress={() => this.logger(this.state.input)}
                style={{...this.props.style, 
                    border: StyleSheet.hairlineWidth,
                    borderRadius: 5, 
                    width: '35%', height: '45%', 
                    marginBottom: '2,5%',
                    marginTop: '2,5%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: '3%'}}>   
                    <Text style={{marginLeft: 'auto',
                    marginRight: 'auto'}}>Click me!</Text>
                </TouchableOpacity>      

            </View>
        )
    }

}

export default MessageInput
