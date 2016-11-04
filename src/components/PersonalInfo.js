import React from 'react';

import Bio from './Bio';
import MoodLabel from './MoodLabel';

export default class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.mood !== nextProps.mood || this.props.bio !== nextProps.bio;
        };
    }
    render() {
        return <div className='chatbot-personal-info panel panel-default'>
            <div className='panel-heading'>
                <MoodLabel mood={this.props.mood} />
            </div>
            <div className='chatbot-picture panel-body'>
                <img src={this.props.pictureLocation}/>
            </div>
            <div className='panel-footer'>
                <Bio bio={this.props.bio} />
            </div>
        </div>
    }
};