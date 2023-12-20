const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('').map(Number);
  let res = arr.slice(1).join('');
  for (let i = 1; i < arr.length; i++) {
    const cur = arr.slice(0, i).concat(arr.slice(i + 1)).join('');
    res = Math.max(res, cur);
  }
  return parseInt(res, 10);
}

module.exports = {
  deleteDigit
};
