import 'react-native';
import { Map } from 'immutable';
import React from 'react';
import renderer from 'react-test-renderer';

import TypingInfo from '../..//src/components/TypingInfo';

describe('TypingInfo', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
        	const typingState = Map({waitTime: 1000, typeTime: 1000, typing: false, running: true});
            const component = renderer.create(
                <TypingInfo typingState={typingState} />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});