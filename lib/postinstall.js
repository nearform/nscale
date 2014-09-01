
'use strict';

var path = require('path'),
		fs 	 = require('fs');

var mkdirSync = function (path) {
  try {
    fs.mkdirSync(path);
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}

var cfgSrc = path.resolve(__dirname, '../node_modules/nscale-kernel/boot2docker-config.json');
var cfgOutDir = '/usr/local/etc/nscale';
var cfgOutPath = cfgOutDir + '/config.json';

mkdirSync(cfgOutDir);

if (!fs.existsSync(cfgOutPath)) {
	console.log('copy');
	fs.createReadStream(cfgSrc).pipe(
		fs.createWriteStream(cfgOutPath)
			.on('close', function(){
				// console.log('Config copied to ' + cfgOutPath);
			})
	);
}