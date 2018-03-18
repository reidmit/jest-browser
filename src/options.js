const merge = require('deepmerge');

const defaultOptions = {
  executablePath: undefined,
  headless: true,
  verbose: true,
  delayMs: undefined,
  helpers: {
    goTo: 'goTo',
    select: '$',
    selectAll: '$$',
    sleep: 'sleep',
    sleepMs: 'sleepMs'
  }
};

const givenOptions = require('../browser.config');

module.exports = merge(defaultOptions, givenOptions);
