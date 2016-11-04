import {List, Map} from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';

import * as actions from './constants/actions';

import {AppContainer} from './containers/App';

import reducer from './reducers/chat';

const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

store.dispatch({
    type: actions.SET_STATE,
    state: {
        messageHistory: List.of(),
        mood: 'pondering',
        typingState: Map({waitTime: 1000, typeTime: 1000, typing: false, running: true})
    }
})

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);