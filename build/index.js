"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _usersRoute = _interopRequireDefault(require("./routes/usersRoute"));

var _messagesRoute = _interopRequireDefault(require("./routes/messagesRoute"));

var _postsRoute = _interopRequireDefault(require("./routes/postsRoute"));

var _commentsRoute = _interopRequireDefault(require("./routes/commentsRoute"));

require("dotenv/config");

var server = (0, _express["default"])();
var port = process.env.PORT || 5000;
server.use(_express["default"].json());
server.use(_express["default"].urlencoded({
  extended: false
}));
server.get('/', function (req, res) {
  return res.status(200).json({
    message: 'Welcome to my brand'
  });
});
server.use('/', _usersRoute["default"]);
server.use('/', _messagesRoute["default"]);
server.use('/', _commentsRoute["default"]);
server.use('/', _postsRoute["default"]);
server.listen(process.env.PORT || 5000, console.log("server listening on ".concat(port)));
var _default = server;
exports["default"] = _default;
//# sourceMappingURL=index.js.map