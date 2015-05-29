/*jshint node:true*/
'use strict';

var express = require('express');
var doT = require('dot');
var Promise = require('promise');
var fs = require('fs');
var DataModel = require('./resume');

var app = express();

var cachedPages = {};
function loadPage(filename) {
	return new Promise(function loadPageInner(resolve, reject) {
		console.log('loading page', filename);
		if (cachedPages[filename]) resolve(cachedPages[filename]);
		fs.readFile(filename, function(err, data) {
			if (err) { reject(Error(err)); }
			cachedPages[filename] = doT.template(data);
			resolve(cachedPages[filename]);
		});
	});
}

app.get('/', function(req, res) {
    res.end('<html><body>COMING SOON!</body></html>');
});
app.get('/resume', function(req, res) {
    loadPage(__dirname + '/templates/resume.dot.html').then(function(templateFunction) {
        res.send(templateFunction(DataModel));
    });
});
app.use('/resume', express.static('resume/temp'));

module.exports = app;
