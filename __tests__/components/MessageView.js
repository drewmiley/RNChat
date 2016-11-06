import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MessageView from '../..//src/components/MessageView';

describe('MessageView', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
            const component = renderer.create(
                <MessageView />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});