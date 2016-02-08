/*jshint node:true*/
'use strict';

var env = 'DEBUG';

var express = require('express');
var kleiDust = require('klei-dust');
var DataModel = require('./resume');
var dustHelpers = require('./dust-helpers');

var app = express();

kleiDust.setOptions({ extension: 'dust.html', keepWhiteSpace: true, useHelpers: true });
dustHelpers.addDustHelpers(kleiDust, DataModel);

app.set('views', __dirname + '/views');
app.engine('dust.html', kleiDust.dust);
app.set('view engine', 'dust.html');
app.set('view options', {layout: false});

app.get('/', function(req, res) {
    res.end('<html><body>COMING SOON!</body></html>');
});

app.use('/resume/css', express.static('ionutcostica.com/resume/temp/css'));
app.use('/resume/docs', express.static('ionutcostica.com/resume/temp/docs'));
app.use('/resume/fonts', express.static('ionutcostica.com/resume/temp/fonts'));
app.use('/resume/img', express.static('ionutcostica.com/resume/temp/img'));
app.use('/resume/js', express.static('ionutcostica.com/resume/temp/js'));

app.get('/resume', function(req, res) {
	if (env === 'DEBUG') {
		delete require.cache[require.resolve('./resume')];
		DataModel = require('./resume');
	}
    console.log('requested resume for ionutcostica.com');
	res.render('resume', DataModel);
});

module.exports = app;
