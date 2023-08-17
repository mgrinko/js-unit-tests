
describe('takeEveryThirdLetter', () => {
  const takeEveryThirdLetter = require('./code2');

  it('is a function', () => {
    expect(typeof takeEveryThirdLetter).toBe('function');
  });

  it('returns empty string for empty input', () => {
    expect(takeEveryThirdLetter('')).toBe('');
  });

  it('returns empty string for input with less than 3 characters', () => {
    expect(takeEveryThirdLetter('ab')).toBe('');
  });

  it('returns every third letter for input with length multiple of 3', () => {
    expect(takeEveryThirdLetter('abcdef')).toBe('cf');
  });

  it('returns every third letter for input with length not multiple of 3', () => {
    expect(takeEveryThirdLetter('abcdefgh')).toBe('cf');
  });

});