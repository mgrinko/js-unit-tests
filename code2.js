/**
 * @param {string} str
 *
 * @returns {string}
 */
function takeEveryThirdLetter(str) {
    let result = '';
  
    for (let i = 2; i < str.length; i += 3) {
      result += str[i];
    }
  
    return result;
  }

  module.exports = takeEveryThirdLetter;