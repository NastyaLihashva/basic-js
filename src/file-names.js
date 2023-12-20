const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = [];
  const countMap = {};
  for(let i = 0; i < names.length; i++) {
      if (!countMap.hasOwnProperty(names[i])) {
            countMap[names[i]] = 1;
            res.push(names[i]);
      } else {
          let name = `${names[i]}(${countMap[names[i]]})`;
          res.push(name);
          countMap[name] = 1;
          countMap[names[i]]++;
      }
  }
  return res;
}

module.exports = {
  renameFiles
};
