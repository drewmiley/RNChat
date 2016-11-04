import React from 'react';

import MessageView from './MessageView';

export default class MessageHistory extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.messageHistory !== nextProps.messageHistory;
        };
    }
    render() {
        return <div className='chatbot-message-history'>
            <ul className='list-group'>
                {this.props.messageHistory.map(message =>
                    <MessageView key={message.get('id')}
                        drewSaid={message.get('drewSaid')}
                        text={message.get('text')} />
                )}
            </ul>
        </div>
    }
};