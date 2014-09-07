
'use strict';

var path 		= require('path'),
		fs 	 		= require('fs'),
		pathSep = require('path').sep;

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

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

var nscaleRoot = getUserHome() + "/nscale";

var dataDir = nscaleRoot + '/data';
mkdirSync(dataDir);

var logDir = nscaleRoot + '/log';
mkdirSync(logDir);

var cfgSrc = path.resolve(__dirname, '../config/default-config.json');
var cfgOutDir = nscaleRoot + '/config';
var cfgOutPath = cfgOutDir + '/config.json';

mkdirSync(cfgOutDir);

if (!fs.existsSync(cfgOutPath)) {

	fs.readFile(cfgSrc, 'utf8', function (err,data) {
	  if (err) {return console.log(err);}
	  var result = data.replace(/\$NSCALE_ROOT/g, nscaleRoot);

	  fs.writeFile(cfgOutPath, result, 'utf8', function (err) {
	     if (err) {return console.log(err);}
	  });
	});

}
