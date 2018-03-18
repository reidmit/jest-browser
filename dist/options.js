'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _browser = require('../browser.config');

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  executablePath: undefined,
  headless: true,
  verbose: true,
  delayMs: undefined,
  helpers: {
    goTo: 'goTo',
    select: '$',
    selectAll: '$$',
    sleep: 'sleep',
    sleepMs: 'sleepMs'
  }
};

exports.default = (0, _deepmerge2.default)(defaultOptions, _browser2.default);