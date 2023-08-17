/**
 * @param {string[]} words
 *
 * @returns {number}
 */
function getTotalLength(words) {
  return words.join('').length;
}

module.exports = getTotalLength;