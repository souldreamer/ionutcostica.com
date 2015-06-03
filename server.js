/*jshint node:true*/
'use strict';

var express = require('express');
var evh = require('express-vhost');

var appFactories = {};
var appFactory = function(website) {
	if (appFactories[website] === undefined) appFactories[website] = require('./' + website + '/server');
	return appFactories[website];
};

var server = express();
server.use(evh.vhost(server.enabled('trust proxy')));
var serve = server.listen(80, function () {
	console.log('Listening for clients at ' + serve.address().address + ':' + serve.address().port);
});

evh.register('localhost', appFactory('ionutcostica.com'));
evh.register('www.ionutcostica.com', appFactory('ionutcostica.com'));
evh.register('ionutcostica.com', appFactory('ionutcostica.com'));
evh.register('www.iuliamihet.com', appFactory('iuliamihet.com'));
evh.register('iuliamihet.com', appFactory('iuliamihet.com'));
