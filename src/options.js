const merge = require('deepmerge');

const defaultOptions = {
  executablePath: undefined,
  headless: true,
  verbose: true
};

const givenOptions = require('../browser.config');

module.exports = merge(defaultOptions, givenOptions);
