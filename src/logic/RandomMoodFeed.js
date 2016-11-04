import moods from '../constants/moods';

export default function RandomMoodFeed(action) {
    const seed = (s) => {
        s = Math.sin(s) * 10000;
        return s - Math.floor(s);
    };

    const moodChanger = (action) => {
        const mood = moods.get(Math.floor(moods.size * seed(Math.random())));
        action(mood);
    }

    (function moodLoop() {
        var moodTimeInterval = 3000 + Math.floor(5000 * seed(Math.random()));
        setTimeout(function() {
            moodChanger(action);
            moodLoop();
        }, moodTimeInterval);
    }());
}
