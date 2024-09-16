
describe('explainAllTerms', () => {
  const explainAllTerms = require('./code4');

  it('is a function', () => {
    expect(typeof explainAllTerms).toBe('function');
  });

  it('returns an array of term-definition pairs', () => {
    const terms = ['JavaScript', 'HTML', 'CSS'];
    const definitions = ['A programming language', 'A markup language', 'A styling language'];
    const result = explainAllTerms(terms, definitions);

    expect(result).toEqual([
      'JavaScript - A programming language',
      'HTML - A markup language',
      'CSS - A styling language',
    ]);
  });

  it('returns an array with "Unknown" for missing definitions', () => {
    const terms = ['JavaScript', 'HTML', 'CSS', 'React'];
    const definitions = ['A programming language', 'A markup language'];
    const result = explainAllTerms(terms, definitions);

    expect(result).toEqual([
      'JavaScript - A programming language',
      'HTML - A markup language',
      'CSS - Unknown',
      'React - Unknown',
    ]);
  });

  it('returns an empty array when given empty arrays', () => {
    const terms = [];
    const definitions = [];
    const result = explainAllTerms(terms, definitions);

    expect(result).toEqual([]);
  });

  it('returns an array explaining only existing terms', () => {
    const terms = ['a', 'b'];
    const definitions = ['1st letter', '2nd letter', '3rd letter', '4th letter'];
    const result = explainAllTerms(terms, definitions);

    expect(result).toEqual([
      'a - 1st letter',
      'b - 2nd letter',
    ]);
  });

  it('works for a long list', () => {
    const terms = 'abcdefghij'.split('');
    const definitions = '0123456789'.split('');
    const result = explainAllTerms(terms, definitions);

    expect(result).toEqual([
      'a - 0',
      'b - 1',
      'c - 2',
      'd - 3',
      'e - 4',
      'f - 5',
      'g - 6',
      'h - 7',
      'i - 8',
      'j - 9',
    ]);
  });
});
