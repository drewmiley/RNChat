import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

export default class MoodLabel extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    };
    render() {
        return <View>
            <Text>DREW is {this.props.mood}</Text>
        </View>
    };
};