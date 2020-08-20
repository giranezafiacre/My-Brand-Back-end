"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.checkToken = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var checkToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var authorization, verified;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authorization = req.headers.authorization;

            if (authorization) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              status: 401,
              error: 'Token not provided'
            }));

          case 5:
            _context.prev = 5;
            verified = _jsonwebtoken["default"].verify(authorization, process.env.MY_SECRET);
            req.tokenData = verified;

            if (!req.tokenData) {
              _context.next = 12;
              break;
            }

            next();
            _context.next = 13;
            break;

          case 12:
            return _context.abrupt("return", res.status(403).json({
              status: 403,
              error: 'You are not authorized to perform this task sign up first'
            }));

          case 13:
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", res.status(401).json({
              status: 401,
              error: 'You are not authorized to perform this task'
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 15]]);
  }));

  return function checkToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkToken = checkToken;
var _default = checkToken;
exports["default"] = _default;
//# sourceMappingURL=checkToken.js.map