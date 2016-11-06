import RandomBioGenerator from '../../src/logic/RandomBioGenerator';

describe('RandomBioGenerator', () => {

    let randomBio;
    const testRuns = 1000;

    it('should return a string', () => {
        for (var i = 0; i < testRuns.length; i++) {
            randomBio = new RandomBioGenerator();
            expect(typeof randomBio === 'string').to.be.true;
        }
    });

    it('should be a non-empty string', () => {
        for (var i = 0; i < testRuns.length; i++) {
            randomBio = new RandomBioGenerator();
            expect(randomBio.length).to.be.at.least(0);
        }
    });

});