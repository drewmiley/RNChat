import React, { Component } from 'react';
import { View } from 'react-native';

import MessageView from './MessageView';

export default class MessageHistory extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.messageHistory !== nextProps.messageHistory;
        };
    };
    render() {
        return <View>
            {this.props.messageHistory.map(message =>
                <MessageView key={message.get('id')}
                    drewSaid={message.get('drewSaid')}
                    text={message.get('text')} />
            )}
        </View>
    };
};