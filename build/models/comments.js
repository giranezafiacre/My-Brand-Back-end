"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var comments = [{
  fullname: 'Fiacre Giraneza',
  suggestion: 'design is awesome job'
}, {
  fullname: 'max',
  suggestion: 'how u doin?'
}, {
  fullname: 'Adam',
  suggestion: 'how to understand HTML?'
}, {
  fullname: 'jules',
  suggestion: 'how u doin?'
}];
comments = comments.map(function (comment) {
  return _objectSpread({
    id: (0, _uuid.v4)()
  }, comment);
});
var _default = comments;
exports["default"] = _default;
//# sourceMappingURL=comments.js.map