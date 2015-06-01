/*jshint node:true*/
'use strict';

var express = require('express');
var evh = require('express-vhost');

var appFactory = function(website) {
    return require('./' + website + '/server');
};

var server = express();
server.use(evh.vhost(server.enabled('trust proxy')));
var serve = server.listen(80, function () {
	console.log('Listening for clients at ' + serve.address().address + ':' + serve.address().port);
});

evh.register('localhost', appFactory('ionutcostica.com'));
evh.register('iuliamihet.com', appFactory('iuliamihet.com'));
