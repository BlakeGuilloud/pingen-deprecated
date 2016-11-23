'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.register = register;

var _pingen = require('../db/services/pingen.service');

var pingenService = _interopRequireWildcard(_pingen);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register(req, res) {
  _promise2.default.resolve().then(function () {
    return pingenService.register(req.body);
  }).then(function (id) {
    return res.status(200).json(id);
  }).catch(function (err) {
    return console.log(err);
  });
}