const { helpers } = require('../options');

module.exports = function(_) {
  if (!helpers.select) return;

  _[helpers.select] = (selector, opt) => {
    if (!opt) {
      return _.page.$(selector);
    }

    if (typeof opt === 'string') {
      return _.page.$eval(
        selector,
        new Function('el', 'prop', 'return el[prop];'),
        opt
      );
    }

    if (typeof opt === 'function') {
      return _.page.$eval(selector, opt);
    }
  };
};
