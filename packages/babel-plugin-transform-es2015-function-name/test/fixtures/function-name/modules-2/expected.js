"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _last = babelHelpers.interopRequireDefault(require("lodash/last"));

let Container = function () {
  function Container() {
    babelHelpers.classCallCheck(this, Container);
  }

  babelHelpers.createClass(Container, [{
    key: "last",
    value: function last(key) {
      if (!this.has(key)) {
        return;
      }

      return _last(this.tokens.get(key));
    }
  }]);
  return Container;
}();

exports.default = Container;
