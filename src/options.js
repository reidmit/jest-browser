const merge = require('deepmerge');
const givenOptions = require('../browser.config');

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

module.exports = merge(defaultOptions, givenOptions);
