import React from 'react';

export default class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    }
    render() {
        return <div className='chatbot-bio'>
            <span>{this.props.bio}</span>
        </div>
    }
};