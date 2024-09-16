describe('hasOnlyUniqueCharacters', () => {
  const hasOnlyUniqueCharacters = require('./code5');

  it('is a function', () => {
    expect(typeof hasOnlyUniqueCharacters)
      .toBe('function');
  });

  it('returns true for empty string', () => {
    expect(hasOnlyUniqueCharacters('')).toBe(true);
  });

  it('returns true for string with unique letters', () => {
    expect(hasOnlyUniqueCharacters('abcdefg')).toBe(true);
  });

  it('returns true for unique letters of different cases', () => {
    expect(hasOnlyUniqueCharacters('AbCdeFG')).toBe(true);
  });

  it('returns true for unique non letter character', () => {
    expect(hasOnlyUniqueCharacters('0123456789 !@#$%^&*()_+-={}[];:",.<>/?'))
      .toBe(true);
  });

  it('returns false for string with 1 doubled letter', () => {
    expect(hasOnlyUniqueCharacters('hello')).toBe(false);
  });

  it('returns false for string with 2 doubled letter', () => {
    expect(hasOnlyUniqueCharacters('aabb')).toBe(false);
  });

  it('returns false if repeated letters are not consequent', () => {
    expect(hasOnlyUniqueCharacters('brother')).toBe(false);
  });

  it('returns false for string with more than 1 whitespace', () => {
    expect(hasOnlyUniqueCharacters('I am here')).toBe(false);
  });

  it('returns false for string with repeated digits', () => {
    expect(hasOnlyUniqueCharacters('123453')).toBe(false);
  });

  it('returns false for string with repeated special characters', () => {
    expect(hasOnlyUniqueCharacters('!abcdef!')).toBe(false);
  });

  it('returns false if letter is repeated in upper case', () => {
    expect(hasOnlyUniqueCharacters('qwErtyE')).toBe(false);
  });

  it('returns false if letter is repeated in different cases', () => {
    expect(hasOnlyUniqueCharacters('qWerWty')).toBe(false);
  });
});
