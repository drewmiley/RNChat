import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

export default class Bio extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    };
    render() {
        return <View>
            <Text>{this.props.bio}</Text>
        </View>
    };
};