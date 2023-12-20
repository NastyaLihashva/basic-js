const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = 0;
  const arr = str.split('');
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      res += 1;
    } else if (res !== 0) {
        arr.splice(i-res, res, res+1);
        res = 0;
        i = 0;
    }
  }
  if (res !== 0) {
    arr.splice(arr.length - 1 - res, res, res+1);
  }
  return arr.join('');
  
}

module.exports = {
  encodeLine
};
