import React from 'react';
import {connect} from 'react-redux';

import * as config from '../config';

import * as actionCreators from '../actions/chat';

import MessageHistory from '../components/MessageHistory';
import PersonalInfo from '../components/PersonalInfo';
import TypingInfo from '../components/TypingInfo';
import UserMessageInput from '../components/UserMessageInput';

export default class App extends React.Component {
    componentDidMount() {
        if (config.moodFeed) {
            config.moodFeed(this.props.setMood);
        }
    }
    render() {
        return <div className='container'>
            <section className='chatbot-app-container'>
                <div className='col-xs-6 col-sm-8 col-md-9'>
                    <UserMessageInput {...this.props} />
                    <MessageHistory messageHistory={this.props.messageHistory} />
                    <TypingInfo
                        messageHistory={this.props.messageHistory}
                        typingState={this.props.typingState}
                        {...this.props} />
                </div>
                <div className='col-xs-6 col-sm-4 col-md-3'>
                    <PersonalInfo
                        bio={this.props.bio}
                        mood={this.props.mood}
                        pictureLocation={this.props.pictureLocation} />
                </div>
            </section>
        </div>
    }
};

actionCreators.messageSelector(config.messageSelector);
actionCreators.waitTime(config.waitTime);
actionCreators.typeTime(config.typeTime);
const bio = config.bio();
const pictureLocation = config.pictureLocation();

function mapStateToProps(state) {
    return {
        bio,
        messageHistory: state.get('messageHistory'),
        mood: state.get('mood'),
        pictureLocation,
        typingState: state.get('typingState')
    };
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);