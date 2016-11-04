import React, { Component } from 'react';
import {
    Image,
    View
} from 'react-native';

import Bio from './Bio';
import MoodLabel from './MoodLabel';

export default class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.mood !== nextProps.mood || this.props.bio !== nextProps.bio;
        };
    };
    render() {
        return <View>
            <MoodLabel mood={this.props.mood} />
            <Image source={require('../../images/drew.jpg')} />
            <Bio bio={this.props.bio} />
        </View>
    };
};