import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Bio from '../..//src/components/Bio';

describe('Bio', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
            const component = renderer.create(
                <Bio />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});