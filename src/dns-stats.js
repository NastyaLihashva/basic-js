const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsMap = {};
  for (let i = 0; i < domains.length; i++) {
    let domainParts = domains[i].split('.').reverse();
    let cur = '';
    for (let j = 0; j < domainParts.length; j++) {
      cur += `.${domainParts[j]}`;
      if (!dnsMap.hasOwnProperty(cur)) {
        dnsMap[cur] = 1;
      } else {
        dnsMap[cur]++;
      }
    }
  }
    return dnsMap;
}


module.exports = {
  getDNSStats
};
