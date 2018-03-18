'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jestEnvironmentNode = require('jest-environment-node');

var _jestEnvironmentNode2 = _interopRequireDefault(_jestEnvironmentNode);

var _puppeteer = require('puppeteer');

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _installHelpers = require('./install-helpers');

var _installHelpers2 = _interopRequireDefault(_installHelpers);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PuppeteerEnvironment = function (_NodeEnvironment) {
  _inherits(PuppeteerEnvironment, _NodeEnvironment);

  function PuppeteerEnvironment(config) {
    _classCallCheck(this, PuppeteerEnvironment);

    return _possibleConstructorReturn(this, (PuppeteerEnvironment.__proto__ || Object.getPrototypeOf(PuppeteerEnvironment)).call(this, config));
  }

  _createClass(PuppeteerEnvironment, [{
    key: 'setup',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var browserWSEndpoint, browser, activePage, page;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _get(PuppeteerEnvironment.prototype.__proto__ || Object.getPrototypeOf(PuppeteerEnvironment.prototype), 'setup', this).call(this);

              case 2:
                browserWSEndpoint = _fs2.default.readFileSync(_path2.default.join(_utils.TEMP_DIR, 'wsEndpoint'), 'utf8');

                if (browserWSEndpoint) {
                  _context.next = 5;
                  break;
                }

                throw new Error('browserWSEndpoint not found');

              case 5:
                _context.next = 7;
                return _puppeteer2.default.connect({
                  browserWSEndpoint: browserWSEndpoint
                });

              case 7:
                browser = _context.sent;
                _context.next = 10;
                return browser.pages();

              case 10:
                activePage = _context.sent[0];
                _context.t0 = activePage;

                if (_context.t0) {
                  _context.next = 16;
                  break;
                }

                _context.next = 15;
                return browser.newPage();

              case 15:
                _context.t0 = _context.sent;

              case 16:
                page = _context.t0;


                this.global.browser = browser;
                this.global.page = page;

                (0, _installHelpers2.default)(this.global);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setup() {
        return _ref.apply(this, arguments);
      }

      return setup;
    }()
  }]);

  return PuppeteerEnvironment;
}(_jestEnvironmentNode2.default);

exports.default = PuppeteerEnvironment;