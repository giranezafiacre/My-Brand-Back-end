"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController");

var router = _express["default"].Router();

router.post('/user', _userController.create);
router.get('/user/login', _userController.login);
router.get('/user', _userController.readAll);
router.get('/user/:id', _userController.readById);
router.put('/user/:id', _userController.update);
router["delete"]('/user/:id', _userController.deleteUser);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=usersRoute.js.map