'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.teardown = undefined;

var teardown = exports.teardown = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var browser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _utils.log)('Closing browser...\n');

            browser = (0, _utils.getBrowser)();
            _context.next = 4;
            return browser.close();

          case 4:

            _rimraf2.default.sync(TEMP_DIR);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function teardown() {
    return _ref.apply(this, arguments);
  };
}();

var _rimraf = require('rimraf');

var _rimraf2 = _interopRequireDefault(_rimraf);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }