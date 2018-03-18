const { helpers } = require('../options');

module.exports = _ => {
  if (helpers.sleep) {
    _[helpers.sleep] = seconds => _.page.waitFor(seconds * 1000);
  }

  if (helpers.sleepMs) {
    _[helpers.sleepMs] = milliseconds => _.page.waitFor(milliseconds);
  }
};
