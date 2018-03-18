const chalk = require('chalk');
const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const rimraf = require('rimraf');
const options = require('./options');
const { log } = require('./utils');
const { TEMP_DIR } = require('./constants');

let browser;

module.exports.setup = async function() {
  if (options.executable) log(`Using ${options.executable}`);

  if (options.headless) log('Launching headless browser...');
  else log('Launching browser window...');

  browser = await puppeteer.launch({
    headless: options.headless,
    executablePath: options.executable || undefined
  });

  mkdirp.sync(TEMP_DIR);

  fs.writeFileSync(path.join(TEMP_DIR, 'wsEndpoint'), browser.wsEndpoint());
};

module.exports.teardown = async function() {
  log('Closing browser...');

  await browser.close();
  rimraf.sync(TEMP_DIR);
};
