import pictures from '../constants/pictures';

export default function RandomPictureLocation() {
    const seed = (s) => {
        s = Math.sin(s) * 10000;
        return s - Math.floor(s);
    };

    return pictures.get(Math.floor(pictures.size * seed(Math.random())));
}