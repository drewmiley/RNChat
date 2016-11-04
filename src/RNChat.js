import {List, Map} from 'immutable';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as actions from './constants/actions';

import AppContainer from './containers/AppContainer';

import reducer from './reducers/chat';

const store = createStore(reducer);

store.dispatch({
    type: actions.SET_STATE,
    state: {
        messageHistory: List.of(),
        mood: 'pondering',
        typingState: Map({waitTime: 1000, typeTime: 1000, typing: false, running: true})
    }
});

export default class RNChat extends Component {
    render() {
        return <Provider store={store}>
            <AppContainer />
        </Provider>
    };
};