const path = require('path');
const os = require('os');

module.exports = {
  headless: false,

  executable:
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',

  tempDir: path.join(os.tmpdir(), 'jest_browser_temp')
};
