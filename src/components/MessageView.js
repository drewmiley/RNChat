import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class MessageView extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    };
    render() {
        if (this.props.drewSaid) {        
            return <Text>DREW : {this.props.text}</Text>
        } else {
            return <Text>YOU : {this.props.text}</Text>
        };
    };
};