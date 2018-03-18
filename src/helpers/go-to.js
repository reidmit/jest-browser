const { helpers } = require('../options');

module.exports = _ => {
  if (!helpers.goTo) return;

  _[helpers.goTo] = (url, options) => _.page.goto(url, options);
};
