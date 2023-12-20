const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let index = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) {
          index.push(i);
      }
  }
  let sortedArr = arr.filter(value => value !== -1).sort((a, b) => a - b);
  for (let i = 0, j = 0; i < arr.length; i++) {
      if (index.includes(i)) {
          res.push(-1);
      } else {
          res.push(sortedArr[j]);
          j++;
      }
  }
  return res;
}

module.exports = {
  sortByHeight
};
