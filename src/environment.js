const chalk = require('chalk');
const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { TEMP_DIR } = require('./constants');
const { log } = require('./utils');
const { assignGlobals } = require('./globals');

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    log('Setting up test environment...\n');

    await super.setup();

    const browserWSEndpoint = fs.readFileSync(
      path.join(TEMP_DIR, 'wsEndpoint'),
      'utf8'
    );

    if (!browserWSEndpoint) {
      throw new Error('browserWSEndpoint not found');
    }

    this.global.browser = await puppeteer.connect({
      browserWSEndpoint
    });

    this.global.page = await this.global.browser.newPage();

    await assignGlobals(this.global);
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
