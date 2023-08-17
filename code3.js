/**
 * @param {string[]} words
 * @param {number} minLength
 *
 * @returns {string[]}
 */
function takeLongWords(words, minLength) {
    const result = [];
  
    for (const word of words) {
      if (word.length >= minLength) {
        result.push(word);
      }
    }
  
    return result;
  };

module.exports = takeLongWords;