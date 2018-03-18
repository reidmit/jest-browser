const path = require('path');
const os = require('os');

module.exports = {
  TEMP_DIR: path.join(os.tmpdir(), 'jest_browser_temp')
};
