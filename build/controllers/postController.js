"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePost = exports.comment = exports.update = exports.create = exports.readById = exports.readAll = void 0;

var _posts = _interopRequireDefault(require("../models/posts"));

var _uuid = require("uuid");

var readAll = function readAll(req, res) {
  if (!_posts["default"]) {
    return res.status(404).json({
      status: 404,
      error: 'No post found'
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'posts successfully retrieved',
    data: {
      posts: _posts["default"]
    }
  });
};

exports.readAll = readAll;

var readById = function readById(req, res) {
  var id = req.params.id;

  var post = _posts["default"].filter(function (post) {
    return post.id === id;
  });

  if (post[0]) {
    return res.status(200).json({
      status: 200,
      message: 'post successfully retrieved',
      data: post
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'post not found'
  });
};

exports.readById = readById;

var create = function create(req, res) {
  var post = {
    id: (0, _uuid.v4)(),
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  _posts["default"].push(post);

  return res.status(201).json({
    status: 201,
    message: 'post successfully created',
    data: post
  });
};

exports.create = create;

var update = function update(req, res) {
  var id = req.params.id;

  var post = _posts["default"].filter(function (post) {
    return post.id === id;
  });

  if (post[0]) {
    post[0].title = req.body.title;
    post[0].content = req.body.content;
    post[0].author = req.body.author;
    return res.status(200).json({
      status: 200,
      message: 'post successfully updated',
      data: post
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'post not found'
  });
};

exports.update = update;

var comment = function comment(req, res) {
  var id = req.params.id;

  var post = _posts["default"].filter(function (post) {
    return post.id === id;
  });

  if (post[0]) {
    var c = {
      fullname: req.body.fullname,
      suggestion: req.body.suggestion
    };
    post[0].comments.push(c);
    return res.status(200).json({
      status: 200,
      message: 'post successfully commented',
      data: post
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'post not found'
  });
};

exports.comment = comment;

var deletePost = function deletePost(req, res) {
  var id = req.params.id;

  var post = _posts["default"].filter(function (post) {
    return post.id === id;
  });

  if (post[0]) {
    var a = _posts["default"].indexOf(post[0]);

    _posts["default"].splice(a, 1);

    return res.status(200).json({
      status: 200,
      message: 'post successfully deleted',
      data: post
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'post not found'
  });
};

exports.deletePost = deletePost;
//# sourceMappingURL=postController.js.map