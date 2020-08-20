"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _messagesController = require("../controllers/messagesController");

var _checkToken = _interopRequireDefault(require("../middleware/checkToken"));

var router = _express["default"].Router();

router.post('/message', _messagesController.create);
router.get('/message', [_checkToken["default"]], _messagesController.readAll);
router.get('/message/:id', [_checkToken["default"]], _messagesController.readById);
router.put('/message/:id', [_checkToken["default"]], _messagesController.update);
router["delete"]('/message/:id', [_checkToken["default"]], _messagesController.deleteMessage);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=messagesRoute.js.map