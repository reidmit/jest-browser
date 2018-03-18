'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEMP_DIR = undefined;
exports.log = log;
exports.setBrowser = setBrowser;
exports.getBrowser = getBrowser;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var browser = void 0;

var TEMP_DIR = exports.TEMP_DIR = _path2.default.join(_os2.default.tmpdir(), 'jest_browser_temp');

function log(s) {
  if (!_options2.default.verbose) return;
  console.log('\n' + _chalk2.default.green('jest-browser: ') + s);
}

function setBrowser(newBrowser) {
  browser = newBrowser;
}

function getBrowser() {
  return browser;
}