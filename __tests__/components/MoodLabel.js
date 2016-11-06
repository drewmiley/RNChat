import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MoodLabel from '../..//src/components/MoodLabel';

describe('MoodLabel', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
            const component = renderer.create(
                <MoodLabel />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});