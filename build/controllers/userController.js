"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.update = exports.login = exports.create = exports.readById = exports.readAll = void 0;

var _users = _interopRequireDefault(require("../models/users"));

var _generateToken = _interopRequireDefault(require("../helpers/generateToken"));

var _uuid = require("uuid");

var readAll = function readAll(req, res) {
  if (!_users["default"]) {
    return res.status(404).json({
      status: 404,
      error: 'No office found'
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'users successfully retrieved',
    data: {
      users: _users["default"]
    }
  });
};

exports.readAll = readAll;

var readById = function readById(req, res) {
  var id = req.params.id;

  var user = _users["default"].filter(function (user) {
    return user.id === id;
  });

  if (user[0]) {
    return res.status(200).json({
      status: 200,
      message: 'user successfully retrieved',
      data: user
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'user not found'
  });
};

exports.readById = readById;

var create = function create(req, res) {
  var user = {
    id: (0, _uuid.v4)(),
    email: req.body.email,
    password: req.body.password,
    role: 'user'
  };

  var userf = _users["default"].filter(function (user) {
    return user.email === userFind.email;
  });

  if (userf[0]) {
    return res.status(409).json({
      status: 409,
      error: "user with ".concat(user.email, " already exists")
    });
  } else {
    _users["default"].push(user);

    return res.status(201).json({
      status: 201,
      message: 'user successfully created',
      data: user,
      token: token
    });
  }
};

exports.create = create;

var login = function login(req, res) {
  var userFind = {
    email: req.body.email,
    password: req.body.password
  };

  var user = _users["default"].filter(function (user) {
    return user.email === userFind.email && user.password === userFind.password && user.role;
  });

  if (user[0]) {
    console.log(user[0].email, user[0].role);

    var _token = (0, _generateToken["default"])(user[0].email, user[0].role);

    return res.status(200).json({
      status: 200,
      message: 'successfully logged in',
      data: user,
      token: _token
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'signup first'
  });
};

exports.login = login;

var update = function update(req, res) {
  var id = req.params.id;

  var user = _users["default"].filter(function (user) {
    return user.id === id;
  });

  if (user[0]) {
    user[0].email = req.body.email;
    user[0].password = req.body.password;
    return res.status(200).json({
      status: 200,
      message: 'user successfully updated',
      data: user
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'user not found'
  });
};

exports.update = update;

var deleteUser = function deleteUser(req, res) {
  var id = req.params.id;

  var user = _users["default"].filter(function (user) {
    return user.id === id;
  });

  if (user[0]) {
    var a = _users["default"].indexOf(user[0]);

    _users["default"].splice(a, 1);

    return res.status(200).json({
      status: 200,
      message: 'user successfully deleted',
      data: user
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'user not found'
  });
};

exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map