const installGoTo = require('./helpers/go-to');
const installSelect = require('./helpers/select');
const installSleep = require('./helpers/sleep');

module.exports = function(global) {
  installGoTo(global);
  installSelect(global);
  installSleep(global);
};
