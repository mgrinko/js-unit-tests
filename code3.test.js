
describe('takeLongWords', () => {
  const takeLongWords = require('./code3');

  it('is a function', () => {
    expect(typeof takeLongWords).toBe('function');
  });

  it('returns an empty array when given an empty array', () => {
    expect(takeLongWords([], 5)).toEqual([]);
  });

  it('returns an empty array when no words are long enough', () => {
    expect(takeLongWords(['hi', 'how', 'are', 'you'], 4)).toEqual([]);
  });

  it('returns only words that are at least minLength characters long', () => {
    expect(takeLongWords(['hello', 'world', 'this', 'is', 'a', 'test'], 4)).toEqual(['hello', 'world', 'this', 'test']);
  });

  it('returns all words when minLength is 1', () => {
    expect(takeLongWords(['hello', 'world', 'this', 'is', 'a', 'test'], 1)).toEqual(['hello', 'world', 'this', 'is', 'a', 'test']);
  });

  it('returns all words when minLength is equal to the length of the shortest word', () => {
    expect(takeLongWords(['hello', 'world', 'this', 'is', 'a', 'test'], 1)).toEqual(['hello', 'world', 'this', 'is', 'a', 'test']);
  });

  it('returns all words when minLength is equal to the length of the longest word', () => {
    expect(takeLongWords(['hello', 'world', 'this', 'is', 'a', 'test'], 5)).toEqual(['hello', 'world']);
  });
});