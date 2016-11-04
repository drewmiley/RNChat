import React from 'react';

export default class MessageView extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    }
    render() {
        if (this.props.drewSaid) {        
            return <li className='chatbot-message-view list-group-item'>
                <span className='label label-primary'>DREW :</span> {this.props.text}
            </li>
        } else {
            return <li className='chatbot-message-view list-group-item'>
                <span className='label label-success'>YOU :</span> {this.props.text}
            </li>
        }
    }
};