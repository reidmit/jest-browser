'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_) {
  if (!_options.helpers.select) return;

  _[_options.helpers.select] = function (selector, opt) {
    if (!opt) {
      return _.page.$(selector);
    }

    if (typeof opt === 'function') {
      return _.page.$eval(selector, opt);
    }

    if (typeof opt === 'string') {
      return _.page.$eval(selector, new Function('el', 'prop', 'el => el[prop]'), opt);
    }
  };
};

var _options = require('../options');