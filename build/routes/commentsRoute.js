"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _commentsController = require("../controllers/commentsController");

var _checkToken = _interopRequireDefault(require("../middleware/checkToken"));

var router = _express["default"].Router();

router.post('/comment', [_checkToken["default"]], _commentsController.create);
router.get('/comment', [_checkToken["default"]], _commentsController.readAll);
router.get('/comment/:id', [_checkToken["default"]], _commentsController.readById);
router.put('/comment/:id', [_checkToken["default"]], _commentsController.update);
router["delete"]('/comment/:id', [_checkToken["default"]], _commentsController.deleteComment);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=commentsRoute.js.map