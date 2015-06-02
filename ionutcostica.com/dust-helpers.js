/*jshint node:true*/
'use strict';

module.exports.addDustHelpers = function(kleiDust, DataModel) {
	var dusthelpers = kleiDust.getHelpers();
	dusthelpers.objectByInnerKey = function(chunk, context, bodies, params) {
		var array = params.array;
		var key = params.key;
		var keyname = params.keyname || 'key';
		var object = {};
		if (array.length === undefined) object = {key: 'error - array parameter is not an array'};
		for (var i = 0; i < array.length; i++) {
			if (array[i] && array[i][keyname] == key) object = array[i];
		}
		var newContext = kleiDust.getDust().makeBase({object: object});
		bodies.block(chunk, newContext);
		return chunk;
	};
	dusthelpers.getSectionIcon = function(chunk, context, bodies, params) {
		var array = params.array || DataModel.resume.sections;
		var key = params.key;
		var keyname = params.keyname || 'key';
		var object = {};
		if (array.length === undefined) object = {key: 'error - array parameter is not an array'};
		for (var i = 0; i < array.length; i++) {
			if (array[i] && array[i][keyname] == key) object = array[i];
		}
		return chunk.write(object.icon);
	};
	dusthelpers.getSectionName = function(chunk, context, bodies, params) {
		var array = params.array || DataModel.resume.sections;
		var key = params.key;
		var keyname = params.keyname || 'key';
		var object = {};
		if (array.length === undefined) object = {key: 'error - array parameter is not an array'};
		for (var i = 0; i < array.length; i++) {
			if (array[i] && array[i][keyname] == key) object = array[i];
		}
		return chunk.write(object.name);
	};
	dusthelpers.getSectionValue = function(chunk, context, bodies, params) {
		var array = params.array || DataModel.resume.sections;
		var key = params.key;
		var keyname = params.keyname || 'key';
		var value = params.value || keyname;
		var object = {};
		if (array.length === undefined) object = {key: 'error - array parameter is not an array'};
		for (var i = 0; i < array.length; i++) {
			if (array[i] && array[i][keyname] == key) object = array[i];
		}
		return chunk.write(object[value]);
	};
	kleiDust.setHelpers(dusthelpers);
}