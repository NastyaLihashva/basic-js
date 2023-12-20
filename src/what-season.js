const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = 'Unable to determine the time of year!') {
  if (date === 'Unable to determine the time of year!') {
    return date;
  }

  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  for (let prop in date) {
    throw new Error('Invalid date!');
  }

  try {
    const month = date.getMonth();
    if (isNaN(month)) {
      throw new Error('Invalid date!');
    }

    if (date.getDate() > 28 && month === 1) {
      return 'spring';
    } else if (month >= 0 && month < 2) {
      return 'winter';
    } else if (month >= 2 && month < 5) {
      return 'spring';
    } else if (month >= 5 && month < 8) {
      return 'summer';
    } else if (month >= 8 && month < 11) {
      return 'autumn';
    } else {
      return 'winter';
    }
  } catch (e) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
