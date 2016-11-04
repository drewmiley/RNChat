import React from 'react';

export default class TypingInfo extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.typingState !== nextProps.typingState;
        };
    }
    componentDidMount() { this.update(); }
    componentDidUpdate() { this.update(); }
    update() {
        if (this.props.typingState.get('running')) {        
            if (this.props.typingState.get('typing')) {
                setTimeout(this.props.drewSendsMessage, this.props.typingState.get('typeTime'), this.props.messageHistory);
            } else {
                setTimeout(this.props.drewStartsTyping, this.props.typingState.get('waitTime'));
            }
        }
    }
    render() {
        return <div className='chatbot-typing-info'>{(() => { if (this.props.typingState.get('typing')) {
                return <h4><span className='label label-warning'>DREW is typing a message...</span></h4>
            }})()}</div>
    }
};