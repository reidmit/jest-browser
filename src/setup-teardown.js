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

async function setup() {
  if (options.executablePath) log(`Using ${options.executablePath}`);
  else log(`Using ${puppeteer.executablePath()}`);

  if (options.headless) log('Launching headless browser...\n');
  else log('Launching browser window...\n');

  browser = await puppeteer.launch({
    headless: options.headless,
    executablePath: options.executablePath,
    slowMo: options.delayMs
  });

  mkdirp.sync(TEMP_DIR);

  fs.writeFileSync(path.join(TEMP_DIR, 'wsEndpoint'), browser.wsEndpoint());
}

async function teardown() {
  log('Closing browser...\n');
  await browser.close();
  rimraf.sync(TEMP_DIR);
}

module.exports = { setup, teardown };
