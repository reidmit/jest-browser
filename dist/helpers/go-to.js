'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_) {
  if (!_options.helpers.goTo) return;

  _[_options.helpers.goTo] = function (url, options) {
    return _.page.goto(url, options);
  };
};

var _options = require('../options');