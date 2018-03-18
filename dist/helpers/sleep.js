'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_) {
  var sleepMs = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(milliseconds) {
      var currentTimeout;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              currentTimeout = void 0;


              if (_.jasmine) {
                currentTimeout = _.jasmine.DEFAULT_TIMEOUT_INTERVAL;

                _.jasmine.DEFAULT_TIMEOUT_INTERVAL = milliseconds + (currentTimeout || 5000);
              }

              _context.next = 4;
              return _.page.waitFor(milliseconds);

            case 4:

              if (_.jasmine) {
                _.jasmine.DEFAULT_TIMEOUT_INTERVAL = currentTimeout;
              }

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function sleepMs(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (_options.helpers.sleepMs) {
    _[_options.helpers.sleepMs] = sleepMs;
  }

  if (_options.helpers.sleep) {
    _[_options.helpers.sleep] = function (seconds) {
      return sleepMs(seconds * 1000);
    };
  }
};

var _options = require('../options');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }