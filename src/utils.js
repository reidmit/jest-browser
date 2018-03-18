const chalk = require('chalk');
const options = require('./options');

const log = s => {
  if (!options.verbose) return;
  console.log('\n' + chalk.green('jest-browser: ') + s);
};

module.exports = { log };
