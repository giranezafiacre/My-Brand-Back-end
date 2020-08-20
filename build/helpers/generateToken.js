"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var generateToken = function generateToken(email, role) {
  return _jsonwebtoken["default"].sign({
    email: email,
    role: role
  }, process.env.MY_SECRET, {
    expiresIn: '2d'
  });
};

var _default = generateToken;
exports["default"] = _default;
//# sourceMappingURL=generateToken.js.map