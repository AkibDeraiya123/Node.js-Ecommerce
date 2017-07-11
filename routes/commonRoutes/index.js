var express = require('express');
var app = express();

var index = require('../index');
var users = require('../users');

app.use('/', index);
app.use('/users', users);

module.exports = app;
