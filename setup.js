const chalk = require('chalk');
const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const options = require('./options');

module.exports = async function() {
  console.log('\n' + chalk.green('Launching browser...'));

  const browser = await puppeteer.launch({
    headless: options.headless,
    executablePath: options.executable || undefined
  });

  global.__BROWSER__ = browser;

  mkdirp.sync(options.tempDir);

  fs.writeFileSync(
    path.join(options.tempDir, 'wsEndpoint'),
    browser.wsEndpoint()
  );
};
