import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {connect} from 'react-redux';

import * as config from '../config';

import * as actionCreators from '../actions/chat';

import MessageHistory from '../components/MessageHistory';
import PersonalInfo from '../components/PersonalInfo';
import TypingInfo from '../components/TypingInfo';
import UserMessageInput from '../components/UserMessageInput';

class App extends Component {
    componentDidMount() {
        if (config.moodFeed) {
            config.moodFeed(this.props.setMood);
        }
    };
    render() {
        return <View style={styles.container}>
            <PersonalInfo
                bio={this.props.bio}
                mood={this.props.mood} />
            <UserMessageInput {...this.props} />
            <MessageHistory messageHistory={this.props.messageHistory} />
            <TypingInfo
                messageHistory={this.props.messageHistory}
                typingState={this.props.typingState}
                {...this.props} />
        </View>
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

actionCreators.messageSelector(config.messageSelector);
actionCreators.waitTime(config.waitTime);
actionCreators.typeTime(config.typeTime);
const bio = config.bio();

const mapStateToProps = state => {
    return {
        bio,
        messageHistory: state.get('messageHistory'),
        mood: state.get('mood'),
        typingState: state.get('typingState')
    };
}

export default AppContainer = connect(mapStateToProps, actionCreators)(App);