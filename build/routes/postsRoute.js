"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _postController = require("../controllers/postController");

var _checkToken = _interopRequireDefault(require("../middleware/checkToken"));

var router = _express["default"].Router();

router.post('/post', [_checkToken["default"]], _postController.create);
router.get('/post', [_checkToken["default"]], _postController.readAll);
router.get('/post/:id', [_checkToken["default"]], _postController.readById);
router.put('/post/:id', [_checkToken["default"]], _postController.update);
router["delete"]('/post/:id', [_checkToken["default"]], _postController.deletePost);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=postsRoute.js.map