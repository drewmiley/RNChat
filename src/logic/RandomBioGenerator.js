import bio from '../constants/bio';
import conjunctions from '../constants/conjunctions';

export default function RandomBioGenerator() {
    const seed = (s) => {
        s = Math.sin(s) * 10000;
        return s - Math.floor(s);
    };

    let randomIndex;

    let generatedBioIndices = [];
    while (generatedBioIndices.length < 3) {
        randomIndex = Math.floor(bio.size * seed(Math.random()));
        if (generatedBioIndices.indexOf(randomIndex) === -1) {
            generatedBioIndices.push(randomIndex);
        }
    }

    let generatedConjunctionIndices = [];
    while (generatedConjunctionIndices.length < 2) {
        randomIndex = Math.floor(conjunctions.size * seed(Math.random()));
        if (generatedConjunctionIndices.indexOf(randomIndex) === -1) {
            generatedConjunctionIndices.push(randomIndex);
        }
    }

    let generatedBio = '';
    generatedBio += bio.get(generatedBioIndices[0]);
    generatedBio += conjunctions.get(generatedConjunctionIndices[0]);
    generatedBio += bio.get(generatedBioIndices[1]);
    generatedBio += conjunctions.get(generatedConjunctionIndices[1]);
    generatedBio += bio.get(generatedBioIndices[2]);

    return generatedBio.charAt(0).toUpperCase() + generatedBio.slice(1) + '.';
}