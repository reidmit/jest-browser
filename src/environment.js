const chalk = require('chalk');
const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { TEMP_DIR } = require('./constants');
const { log } = require('./utils');

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    log('Setting up test environment...\n');

    await super.setup();

    const wsEndpoint = fs.readFileSync(
      path.join(TEMP_DIR, 'wsEndpoint'),
      'utf8'
    );

    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found');
    }

    this.global.browser = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint
    });

    this.global.page = await this.global.browser.newPage();
  }

  async teardown() {
    log('Tearing down test environment...\n');

    await this.global.page.close();

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
