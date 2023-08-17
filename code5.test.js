describe('hasOnlyUniqueLetters', () => {
  const hasOnlyUniqueLetters = require('./code5');

  it('returns true for empty string', () => {
    expect(hasOnlyUniqueLetters('')).toBe(true);
  });

  it('is a function', () => {
    expect(typeof hasOnlyUniqueLetters).toBe('function');
  });

  it('returns true for string with unique letters', () => {
    expect(hasOnlyUniqueLetters('abcdefg')).toBe(true);
  });

  it('returns false for string with repeated letters', () => {
    expect(hasOnlyUniqueLetters('hello')).toBe(false);
  });

  it('ignores case sensitivity', () => {
    expect(hasOnlyUniqueLetters('AbCdeFG')).toBe(true);
  });

  it('returns false for string with whitespace', () => {
    expect(hasOnlyUniqueLetters('a b c d e f g')).toBe(false);
  });

  it('returns false for string with special characters', () => {
    expect(hasOnlyUniqueLetters('hello!')).toBe(false);
  });
});