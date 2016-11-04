import React, { Component } from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

export default class UserMessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
        this.state = { text: 'Send Drew a message!' };
    }
    sendMessage() {
        this.props.userSendsMessage(this.state.text);
        this.setState({ text: 'Send Drew a message!' });
    }
    render() {
        return <View>
            <TextInput value={this.state.text} onChangeText={(text) => {this.setState({text})}} />
            <TouchableHighlight onPress={() => this.sendMessage()}>
                <Text>Send</Text>
            </TouchableHighlight>
        </View>
    }
};