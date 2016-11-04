import * as actions from '../constants/actions';

let messageSelector = null;

export function messageSelector(setMessageSelector) {
    if (!setMessageSelector) {
        return messageSelector;
    }
    messageSelector = setMessageSelector;
}

let waitTime = null;

export function waitTime(setWaitTime) {
    if (!setWaitTime) {
        return waitTime;
    }
    waitTime = setWaitTime;
}

let typeTime = null;

export function typeTime(setTypeTime) {
    if (!setTypeTime) {
        return typeTime;
    }
    typeTime = setTypeTime;
}

export function setMood(mood) {
    return {
        type: actions.SET_MOOD,
        mood
    }
}

export function drewSendsMessage(messageHistory) {
    const message = messageSelector ? messageSelector(messageHistory) : null;
    return {
        type: actions.DREW_SENDS_MESSAGE,
        message
    }
}

export function drewStartsTyping() {
    return {
        type: actions.DREW_STARTS_TYPING
    }
}

export function userSendsMessage(message) {
    const drewWaitTime = waitTime ? waitTime() : null;
    const drewTypeTime = typeTime ? typeTime() : null;
    return {
        type: actions.USER_SENDS_MESSAGE,
        message,
        drewWaitTime,
        drewTypeTime
    }
}