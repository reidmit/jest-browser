const chalk = require('chalk');
const path = require('path');
const os = require('os');
const options = require('./options');
const TEMP_DIR = path.join(os.tmpdir(), 'jest_browser_temp');

let browser;

function log(s) {
  if (!options.verbose) return;
  console.log('\n' + chalk.green('jest-browser: ') + s);
}

function setBrowser(newBrowser) {
  browser = newBrowser;
}

function getBrowser() {
  return browser;
}

module.exports = { TEMP_DIR, log, setBrowser, getBrowser };
