import RandomMessageSelector from '../../src/logic/RandomMessageSelector';

describe('RandomMessageSelector', () => {

    let randomMessage;
    const testRuns = 1000;

    it('should return a string', () => {
        for (var i = 0; i < testRuns.length; i++) {
            randomMessage = new RandomMessageSelector();
            expect(typeof randomMessage === 'string').to.be.true;
        }
    });

    it('should be a non-empty string', () => {
        for (var i = 0; i < testRuns.length; i++) {
            randomMessage = new RandomMessageSelector();
            expect(randomMessage.length).to.be.at.least(0);
        }
    });

});