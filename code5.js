/**
 * @param {string} str
 *
 * @returns {boolean}
 */
function hasOnlyUniqueCharacters(str) {
  const lowerStr = str.toLowerCase();

  for (const ch of lowerStr) {
    if (lowerStr.indexOf(ch) !== lowerStr.lastIndexOf(ch)) {
      return false;
    }
  }

  return true;
};

module.exports = hasOnlyUniqueCharacters;
