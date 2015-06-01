/*jshint node:true*/
'use strict';

var express = require('express');
var kleiDust = require('klei-dust');
var DataModel = require('./resume');

var app = express();

kleiDust.setOptions({extension: 'dust.html', keepWhiteSpace: true, useHelpers: true});
app.set('views', __dirname + '/views');
app.engine('dust.html', kleiDust.dust);
app.set('view engine', 'dust.html');
app.set('view options', {layout: false});

app.get('/', function(req, res) {
    res.end('<html><body>COMING SOON!</body></html>');
});
app.use('/resume', express.static('ionutcostica.com/resume/temp'));
app.get('/resumex', function(req, res) {
    console.log('requested resume for ionutcostica.com');
    loadPage(__dirname + '/templates/resume.dot.html').then(function(templateFunction) {
        res.send(templateFunction(DataModel));
    });
});

module.exports = app;
