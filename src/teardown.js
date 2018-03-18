const rimraf = require('rimraf');
const { log, getBrowser, TEMP_DIR } = require('./utils');

async function teardown() {
  log('Closing browser...\n');

  const browser = getBrowser();
  await browser.close();

  rimraf.sync(TEMP_DIR);
}

module.exports = teardown;
