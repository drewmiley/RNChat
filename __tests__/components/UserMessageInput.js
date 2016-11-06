import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import UserMessageInput from '../..//src/components/UserMessageInput';

describe('UserMessageInput', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
            const component = renderer.create(
                <UserMessageInput />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});