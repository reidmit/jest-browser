'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = undefined;

var setup = exports.setup = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var browser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (_options2.default.executablePath) log('Using ' + _options2.default.executablePath);else log('Using ' + _puppeteer2.default.executablePath());

            if (_options2.default.headless) log('Launching headless browser...\n');else log('Launching browser window...\n');

            _context.next = 4;
            return _puppeteer2.default.launch({
              headless: _options2.default.headless,
              executablePath: _options2.default.executablePath,
              slowMo: _options2.default.delayMs
            });

          case 4:
            browser = _context.sent;


            (0, _utils.setBrowser)(browser);
            mkdirp.sync(_utils.TEMP_DIR);
            _fs2.default.writeFileSync(_path2.default.join(_utils.TEMP_DIR, 'wsEndpoint'), browser.wsEndpoint());

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function setup() {
    return _ref.apply(this, arguments);
  };
}();

var _puppeteer = require('puppeteer');

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }