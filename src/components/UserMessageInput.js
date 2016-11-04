import React from 'react';

export default class UserMessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
        this.state = { input: '' };
    }
    handleInput(e) {
        this.setState({ input: e.target.value });
    }
    sendMessage() {
        this.props.userSendsMessage(this.state.input);
        this.setState({ input: '' });
    }
    render() {
        return <div className='chatbot-user-message-input input-group'>
            <input className='chatbot-user-message-input-box form-control' type='text' value={this.state.input} onKeyUp={(e) => {if (e.keyCode === 13) { this.sendMessage(); }}} onChange={(e) => {this.handleInput(e)}} placeholder='Send Drew a message!'/>
            <span className='input-group-btn'>
                <button className='chatbot-user-message-input-button btn btn-primary' type='button' onClick={(e) => this.sendMessage()}>Send</button>
            </span>
        </div>
    }
};