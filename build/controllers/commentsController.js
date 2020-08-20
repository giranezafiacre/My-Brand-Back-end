"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComment = exports.update = exports.create = exports.readById = exports.readAll = void 0;

var _comments = _interopRequireDefault(require("../models/comments"));

var _uuid = require("uuid");

var readAll = function readAll(req, res) {
  if (!_comments["default"]) {
    return res.status(404).json({
      status: 404,
      error: 'No comment found'
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'comments successfully retrieved',
    data: {
      comments: _comments["default"]
    }
  });
};

exports.readAll = readAll;

var readById = function readById(req, res) {
  var id = req.params.id;

  var comment = _comments["default"].filter(function (comment) {
    return comment.id === id;
  });

  if (comment[0]) {
    return res.status(200).json({
      status: 200,
      message: 'comment successfully retrieved',
      data: comment
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'comment not found'
  });
};

exports.readById = readById;

var create = function create(req, res) {
  var comment = {
    id: (0, _uuid.v4)(),
    fullname: req.body.fullname,
    suggestion: req.body.suggestion
  };

  _comments["default"].push(comment);

  return res.status(201).json({
    status: 201,
    message: 'comment successfully created',
    data: comment
  });
};

exports.create = create;

var update = function update(req, res) {
  var id = req.params.id;

  var comment = _comments["default"].filter(function (comment) {
    return comment.id === id;
  });

  if (comment[0]) {
    comment[0].fullname = req.body.fullname;
    comment[0].suggestion = req.body.suggestion;
    return res.status(200).json({
      status: 200,
      message: 'comment successfully updated',
      data: comment
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'comment not found'
  });
};

exports.update = update;

var deleteComment = function deleteComment(req, res) {
  var id = req.params.id;

  var comment = _comments["default"].filter(function (comment) {
    return comment.id === id;
  });

  if (comment[0]) {
    var a = _comments["default"].indexOf(comment[0]);

    _comments["default"].splice(a, 1);

    return res.status(200).json({
      status: 200,
      message: 'comment successfully deleted',
      data: comment
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'comment not found'
  });
};

exports.deleteComment = deleteComment;
//# sourceMappingURL=commentsController.js.map