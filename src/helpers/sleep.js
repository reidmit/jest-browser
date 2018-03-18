const { helpers } = require('../options');

module.exports = _ => {
  const sleepMs = async milliseconds => {
    let currentTimeout;

    if (_.jasmine) {
      currentTimeout = _.jasmine.DEFAULT_TIMEOUT_INTERVAL;

      _.jasmine.DEFAULT_TIMEOUT_INTERVAL =
        milliseconds + (currentTimeout || 5000);
    }

    await _.page.waitFor(milliseconds);

    if (_.jasmine) {
      _.jasmine.DEFAULT_TIMEOUT_INTERVAL = currentTimeout;
    }
  };

  if (helpers.sleepMs) {
    _[helpers.sleepMs] = sleepMs;
  }

  if (helpers.sleep) {
    _[helpers.sleep] = seconds => sleepMs(seconds * 1000);
  }
};
