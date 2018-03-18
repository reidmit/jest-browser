const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const options = require('./options');
const { log, setBrowser, TEMP_DIR } = require('./utils');

async function setup() {
  if (options.executablePath) log(`Using ${options.executablePath}`);
  else log(`Using ${puppeteer.executablePath()}`);

  if (options.headless) log('Launching headless browser...\n');
  else log('Launching browser window...\n');

  const browser = await puppeteer.launch({
    headless: options.headless,
    executablePath: options.executablePath,
    slowMo: options.delayMs
  });

  setBrowser(browser);
  mkdirp.sync(TEMP_DIR);
  fs.writeFileSync(path.join(TEMP_DIR, 'wsEndpoint'), browser.wsEndpoint());
}

module.exports = setup;
