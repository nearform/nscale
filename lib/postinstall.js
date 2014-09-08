
'use strict';

var path 		= require('path'),
		fs 	 		= require('fs'),
		pathSep = require('path').sep;

var exec = require('child_process').exec;

var mkdirp = require('mkdirp');

var osenv = require('osenv');

console.log('Env:');
console.dir(osenv.home());
console.dir(osenv.path());
console.dir(osenv.user());

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

// TODO remove old code
/*
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
*/

var nscaleRoot = getUserHome() + "/.nscale";

console.log("Post install nscale, nscale root: " + nscaleRoot);

var prc = exec('whoami');
console.log('User:');
prc.stdout.pipe(process.stdout);

var dataDir = nscaleRoot + '/data';
mkdirp.sync(dataDir);

var logDir = nscaleRoot + '/log';
mkdirp.sync(logDir);

var cfgSrc = path.resolve(__dirname, '../config/default-config.json');
var cfgOutDir = nscaleRoot + '/config';
var cfgOutPath = cfgOutDir + '/config.json';

mkdirp.sync(cfgOutDir);

if (!fs.existsSync(cfgOutPath)) {

	fs.readFile(cfgSrc, 'utf8', function (err,data) {
	  if (err) {return console.log(err);}
	  var result = data.replace(/\$NSCALE_ROOT/g, nscaleRoot);

	  console.log("Installing config: " + cfgOutPath);

	  fs.writeFile(cfgOutPath, result, 'utf8', function (err) {
	     if (err) {return console.log(err);}
	  });
	});

}
