
describe('getTotalLength', () => {
    const getTotalLength = require('./code1');

    it('is a function', () => {
        expect(typeof getTotalLength).toBe('function');
    });

    it('returns the correct length for an array of words', () => {
        const words = ['hello', 'world'];
        const result = getTotalLength(words);
        expect(result).toBe(10);
    });

    it('returns 0 for an empty array', () => {
        const words = [];
        const result = getTotalLength(words);
        expect(result).toBe(0);
    });

    it('returns the correct length for an array with one word', () => {
        const words = ['testing'];
        const result = getTotalLength(words);
        expect(result).toBe(7);
    });
});