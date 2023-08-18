describe('takeEveryThirdCharacter', () => {
  const takeEveryThirdCharacter = require('./code2');

  it('is a function', () => {
    expect(typeof takeEveryThirdCharacter).toBe('function');
  });

  it('returns every 3rd letter', () => {
    expect(takeEveryThirdCharacter('qwertyuiop')).toBe('eyo');
  });

  it('returns every 3rd digit', () => {
    expect(takeEveryThirdCharacter('1234567890')).toBe('369');
  });

  it('returns empty string for empty input', () => {
    expect(takeEveryThirdCharacter('')).toBe('');
  });

  it('returns empty string for input with less than 3 characters', () => {
    expect(takeEveryThirdCharacter('ab')).toBe('');
  });

  it('returns the last character for 3 letters word', () => {
    expect(takeEveryThirdCharacter('and')).toBe('d');
  });

  it('returns every third character for input with length multiple of 3', () => {
    expect(takeEveryThirdCharacter('abcdef')).toBe('cf');
  });

  it('returns every third character for input with length not multiple of 3', () => {
    expect(takeEveryThirdCharacter('abcdefgh')).toBe('cf');
  });
});
