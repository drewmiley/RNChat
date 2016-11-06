import {List, Map, fromJS} from 'immutable';

import * as actions from '../../src/constants/actions';

import reducer from '../../src/reducers/chat';

describe('reducer', () => {

    const presetInitialState = Map({
        messageHistory: List.of(
            Map({id: 1, drewSaid: true, text: 'hey'}),
            Map({id: 3, drewSaid: false, text: 'test'})
        ),
        mood: 'pondering',
        typingState: Map({waitTime: 1000, typeTime: 1000, typing: false, running: true})
    });

    const highestMessageID = presetInitialState.get('messageHistory').map(message => message.get('id')).max();

    describe('SET_STATE', () => {

        it('handles SET_STATE', () => {
            const action = {
                type: actions.SET_STATE,
                state: presetInitialState
            };

            const nextState = reducer(Map(), action);

            expect(nextState).toEqual(presetInitialState);
        });

        it('handles SET_STATE without initial state', () => {
            const action = {
                type: actions.SET_STATE,
                state: presetInitialState
            };

            const nextState = reducer(undefined, action);

            expect(nextState).toEqual(presetInitialState);
        });

        it('handles SET_STATE with plain js payload', () => {
            const action = {
                type: actions.SET_STATE,
                state: presetInitialState.toJS()
            };

            const nextState = reducer(Map(), action);

            expect(nextState).toEqual(presetInitialState);
        });

        it('handles SET_STATE with plain js payload and without initial state', () => {
            const action = {
                type: actions.SET_STATE,
                state: presetInitialState.toJS()
            };

            const nextState = reducer(undefined, action);

            expect(nextState).toEqual(presetInitialState);
        });

    });

    describe('SET_MOOD', () => {

        let mood;
        let nextState;

        beforeAll(() => {
            mood = 'testing';

            const action = {
                type: actions.SET_MOOD,
                mood
            };

            nextState = reducer(presetInitialState, action);
        });

        it('should set the mood to the new value', () => {
            expect(nextState.get('mood')).toBe(mood);
        });

    });

    describe('DREW_SENDS_MESSAGE', () => {

        let message;
        let nextState;

        beforeAll(() => {
            message = 'This is a test';

            const action = {
                type: actions.DREW_SENDS_MESSAGE,
                message
            }

            nextState = reducer(presetInitialState, action);
        });

        it('should add the message to the message history', () => {
            expect(nextState.get('messageHistory').size).toBe(presetInitialState.get('messageHistory').size + 1);
            expect(nextState.get('messageHistory').get(nextState.get('messageHistory').size - 1).get('text')).toBe(message);
        });

        it('should set the message as being written by Drew', () => {
            expect(nextState.get('messageHistory').get(nextState.get('messageHistory').size - 1).get('drewSaid')).toBe(true);
        });

        it('should generate an id one higher than the highest current id for the added message', () => {
            expect(nextState.get('messageHistory').get(nextState.get('messageHistory').size - 1).get('id')).toBe(highestMessageID + 1);
        });

        it('should set typing to false in the typing state', () => {
            expect(nextState.get('typingState').get('typing')).toBe(false);
        });

        it('should set running to false in the typing state', () => {
            expect(nextState.get('typingState').get('running')).toBe(false);
        });

    });

    describe('DREW_STARTS_TYPING', () => {

        it('should set typing to true in the typing state', () => {
            const action = {
                type: actions.DREW_STARTS_TYPING
            };

            const nextState = reducer(presetInitialState, action);

            expect(nextState.get('typingState').get('typing')).toBe(true);
        });

    });

    describe('USER_SENDS_MESSAGE', () => {

        let message;
        let drewWaitTime;
        let drewTypeTime;
        let nextState;

        beforeEach(() => {
            message = 'This is a test';
            drewWaitTime = 2000;
            drewTypeTime = 2000;

            const action = {
                type: actions.USER_SENDS_MESSAGE,
                message,
                drewWaitTime,
                drewTypeTime
            }

            nextState = reducer(presetInitialState, action);
        });

        it('should add the message to the message history', () => {
            expect(nextState.get('messageHistory').size).toBe(presetInitialState.get('messageHistory').size + 1);
            expect(nextState.get('messageHistory').get(nextState.get('messageHistory').size - 1).get('text')).toBe(message);
        });

        it('should set the message as not being written by Drew', () => {
            expect(nextState.get('messageHistory').get(nextState.get('messageHistory').size - 1).get('drewSaid')).toBe(false);
        });

        it('should generate an id one higher than the highest current id for the added message', () => {
            expect(nextState.get('messageHistory').get(nextState.get('messageHistory').size - 1).get('id')).toBe(highestMessageID + 1);
        });

        it('should set running to true in the typing config', () => {
            expect(nextState.get('typingState').get('running')).toBe(true);
        });

        it('should set the values of waitTime in the typing config', () => {
            expect(nextState.get('typingState').get('waitTime')).toBe(drewWaitTime);
        });

        it('should set the values of typeTime in the typing config', () => {
            expect(nextState.get('typingState').get('typeTime')).toBe(drewTypeTime);
        });

    });

});