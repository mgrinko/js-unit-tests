describe('takeLongWords', () => {
  const takeLongWords = require('./code3');

  it('is a function', () => {
    expect(typeof takeLongWords)
      .toBe('function');
  });

  it('returns only words that are at least minLength characters long', () => {
    expect(takeLongWords(['hello', 'world', 'this', 'is', 'a', 'test'], 4))
      .toEqual(['hello', 'world', 'this', 'test']);
  });

  it('returns [] for []', () => {
    expect(takeLongWords([], 5))
      .toEqual([]);
  });

  it('returns [] if all words are shorter than minLength', () => {
    expect(takeLongWords(['hi', 'how', 'are', 'you'], 4))
      .toEqual([]);
  });

  it('returns all words when minLength is 1', () => {
    expect(takeLongWords(['hello', 'world', 'this', 'is', 'a', 'test'], 1))
      .toEqual(['hello', 'world', 'this', 'is', 'a', 'test']);
  });

  it('returns all the words if they all are at least minLength characters length', () => {
    expect(takeLongWords(['hello', 'world', 'this', 'test'], 3))
      .toEqual(['hello', 'world', 'this', 'test']);
  });
});
