
'use strict';

var path 		= require('path'),
		fs 	 		= require('fs'),
		pathSep = require('path').sep;

var mkdirSync = function (path) {
  var dirs = path.split(pathSep);
	var root = "";

	while (dirs.length > 0) {
		var dir = dirs.shift();
		if (dir === "") { // If directory starts with a /, the first path will be an empty string.
			root = pathSep;
		}
		if (!fs.existsSync(root + dir)) {
			fs.mkdirSync(root + dir);
		}
		root += dir + pathSep;
	}
}

var dataDir = '/usr/local/var/nscale/data';
mkdirSync(dataDir);

var cfgSrc = path.resolve(__dirname, '../node_modules/nscale-kernel/default-config.json');
var cfgOutDir = '/usr/local/etc/nscale';
var cfgOutPath = cfgOutDir + '/config.json';

mkdirSync(cfgOutDir);

if (!fs.existsSync(cfgOutPath)) {
	fs.createReadStream(cfgSrc).pipe(
		fs.createWriteStream(cfgOutPath)
			.on('close', function(){
				// console.log('Config copied to ' + cfgOutPath);
			})
	);
}