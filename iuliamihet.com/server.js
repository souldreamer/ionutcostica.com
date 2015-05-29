/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.end('<html><body>COMING SOON!</body></html>');
});

module.exports = app;
