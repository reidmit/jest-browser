const chalk = require('chalk');
const puppeteer = require('puppeteer');
const rimraf = require('rimraf');
const os = require('os');
const path = require('path');
const options = require('./options');

module.exports = async function() {
  console.log('\n' + chalk.green('Closing browser...'));

  await global.__BROWSER__.close();
  rimraf.sync(options.tempDir);
};
