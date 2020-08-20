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

var messages = [{
  email: 'fiacre@SpeechGrammarList.com',
  phone: '123456',
  fullname: 'Fiacre Giraneza',
  message: 'how u doin?'
}, {
  email: 'console@dm.com',
  phone: '123456',
  fullname: 'Console',
  message: 'how u doin?'
}, {
  email: 'celine@cr.com',
  phone: '123456',
  fullname: 'Mugeni Celine',
  message: 'how u doin?'
}, {
  email: 'cynthia@mk.com',
  phone: '123456',
  fullname: 'Cynthia',
  message: 'how u doin?'
}, {
  email: 'paul@mtr.com',
  phone: '123456',
  fullname: 'Nshuti paul',
  message: 'how u doin?'
}];
messages = messages.map(function (message) {
  return _objectSpread({
    id: (0, _uuid.v4)()
  }, message);
});
var _default = messages;
exports["default"] = _default;
//# sourceMappingURL=messages.js.map