'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _objection = require('objection');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _pingen = require('./routers/pingen.router');

var _pingen2 = _interopRequireDefault(_pingen);

var _knexfile = require('./db/knexfile.js');

var _knexfile2 = _interopRequireDefault(_knexfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------
// Import Routers
// ------------------------------


// ------------------------------
// Import Dependencies
// ------------------------------
var connection = (0, _knex2.default)(_knexfile2.default);

// ------------------------------
// Establish Knex Connection
// ------------------------------


_objection.Model.knex(connection);

// ------------------------------
// Configure Express
// ------------------------------
var app = (0, _express2.default)();

app.set('appPath', _path2.default.join('', 'client'));
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// ------------------------------
// Configure Routes
// ------------------------------
app.use('/users', _pingen2.default);

// ------------------------------
// Initialize Server
// ------------------------------
var port = process.env.PORT || 8100;

app.listen(port, function () {
  console.log('app listening on port: ', port);
});