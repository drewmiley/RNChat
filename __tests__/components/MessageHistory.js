import 'react-native';
import { List, Map } from 'immutable';
import React from 'react';
import renderer from 'react-test-renderer';

import MessageHistory from '../..//src/components/MessageHistory';

describe('MessageHistory', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
            const messageHistory = List.of(
            	Map({
	            	id: 1,
	            	drewSaid: true,
	            	text: 'Hello'
            	}),
            	Map({
	            	id: 2,
	            	drewSaid: false,
	            	text: 'Hello'
            	})
            );
            const component = renderer.create(
                <MessageHistory  messageHistory={messageHistory} />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});