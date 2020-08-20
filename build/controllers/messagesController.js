"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMessage = exports.update = exports.create = exports.readById = exports.readAll = void 0;

var _messages = _interopRequireDefault(require("../models/messages"));

var _uuid = require("uuid");

var readAll = function readAll(req, res) {
  if (!_messages["default"]) {
    return res.status(404).json({
      status: 404,
      error: 'No message found'
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'messages successfully retrieved',
    data: {
      messages: _messages["default"]
    }
  });
};

exports.readAll = readAll;

var readById = function readById(req, res) {
  var id = req.params.id;

  var message = _messages["default"].filter(function (message) {
    return message.id === id;
  });

  if (message[0]) {
    return res.status(200).json({
      status: 200,
      message: 'message successfully retrieved',
      data: message
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'message not found'
  });
};

exports.readById = readById;

var create = function create(req, res) {
  var message = {
    id: (0, _uuid.v4)(),
    fullname: req.body.fullname,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message
  };

  _messages["default"].push(message);

  return res.status(201).json({
    status: 201,
    message: 'message successfully created',
    data: message
  });
};

exports.create = create;

var update = function update(req, res) {
  var id = req.params.id;

  var message = _messages["default"].filter(function (message) {
    return message.id === id;
  });

  if (message[0]) {
    message[0].email = req.body.email;
    message[0].phone = req.body.phone;
    message[0].message = req.body.message;
    message[0].fullname = req.body.fullname;
    return res.status(200).json({
      status: 200,
      message: 'message successfully updated',
      data: message
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'message not found'
  });
};

exports.update = update;

var deleteMessage = function deleteMessage(req, res) {
  var id = req.params.id;

  var message = _messages["default"].filter(function (message) {
    return message.id === id;
  });

  if (message[0]) {
    var a = _messages["default"].indexOf(message[0]);

    _messages["default"].splice(a, 1);

    return res.status(200).json({
      status: 200,
      message: 'message successfully deleted',
      data: message
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'message not found'
  });
};

exports.deleteMessage = deleteMessage;
//# sourceMappingURL=messagesController.js.map