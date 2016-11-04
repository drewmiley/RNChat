import messages from '../constants/messages';

export default function RandomMessageSelector() {
    const seed = (s) => {
        s = Math.sin(s) * 10000;
        return s - Math.floor(s);
    };

    return messages.get(Math.floor(messages.size * seed(Math.random())));
}