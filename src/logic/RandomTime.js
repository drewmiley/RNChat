export default function RandomTime() {
    const seed = (s) => {
        s = Math.sin(s) * 10000;
        return s - Math.floor(s);
    };
    return 1000 + Math.floor(4000 * seed(Math.random()));
}