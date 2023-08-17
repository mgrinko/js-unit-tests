
describe('explainAllTerms', () => {
  const explainAllTerms = require('./code4');

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
    const terms = ['JavaScript', 'HTML', 'CSS'];
    const definitions = ['A programming language', 'A markup language'];
    const result = explainAllTerms(terms, definitions);
    expect(result).toEqual([
      'JavaScript - A programming language',
      'HTML - A markup language',
      'CSS - Unknown',
    ]);
  });

  it('returns an empty array when given empty arrays', () => {
    const terms = [];
    const definitions = [];
    const result = explainAllTerms(terms, definitions);
    expect(result).toEqual([]);
  });
});