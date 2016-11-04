import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class TypingInfo extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.typingState !== nextProps.typingState;
        };
    };
    componentDidMount() { this.update(); };
    componentDidUpdate() { this.update(); };
    update() {
        if (this.props.typingState.get('running')) {        
            if (this.props.typingState.get('typing')) {
                setTimeout(this.props.drewSendsMessage, this.props.typingState.get('typeTime'), this.props.messageHistory);
            } else {
                setTimeout(this.props.drewStartsTyping, this.props.typingState.get('waitTime'));
            }
        }
    };
    render() {
        return <View>
            {(() => { if (this.props.typingState.get('typing')) {
                    return <Text>DREW is typing a message...</Text>
                }})()}
        </View>
    };
};