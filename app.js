/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('COMING SOON!');
});

var server = app.listen(80, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});