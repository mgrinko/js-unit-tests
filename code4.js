/**
 * @param {string[]} terms
 * @param {string[]} definitions
 *
 * @returns {string[]}
 */
function explainAllTerms(terms, definitions) {
    const result = [];
  
    for (let i = 0; i < terms.length; i++) {
      const definition = definitions[i] || 'Unknown';
  
      result.push(`${terms[i]} - ${definition}`);
    }
  
    return result;
  };

module.exports = explainAllTerms;